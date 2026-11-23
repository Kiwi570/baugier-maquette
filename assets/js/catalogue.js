/* Catalogue des œuvres : filtres gardés dans l'adresse (?decennie=2000&support=toile), passage en fondu,
   visionneuse ouverte par ?oeuvre=<id> (loupe à la souris, glissement au doigt, flèches, Échap, voir au mur). */
import { suivre, lacher, rafraichir, quand } from './socle/index.js?v=2';
import { majCartel } from './site.js?v=2';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

export function initCatalogue() {
  const cat = $('[data-catalogue]');
  const vis = $('[data-visionneuse]');
  if (!cat || !vis) return;
  const gsap = window.gsap;
  const items = $$('.cat-item', cat);
  const compte = $('[data-compte]', cat), vide = $('[data-vide]', cat);
  const donnees = JSON.parse($('[data-vis-donnees]', vis).textContent);
  const filtres = { decennie: '', support: '', format: '' };
  const params = new URLSearchParams(location.search);
  Object.keys(filtres).forEach((k) => { if (params.get(k)) filtres[k] = params.get(k); });

  const visibles = () => items.filter((li) => !li.hidden);
  const ecrireAdresse = (extra = {}) => {
    const p = new URLSearchParams();
    Object.entries(filtres).forEach(([k, v]) => { if (v) p.set(k, v); });
    Object.entries(extra).forEach(([k, v]) => { if (v) p.set(k, v); });
    const q = p.toString();
    history.replaceState(history.state, '', location.pathname + (q ? '?' + q : '') + location.hash);
  };
  const appliquer = (anime) => {
    $$('[data-filtre]', cat).forEach((b) => b.setAttribute('aria-pressed', String(filtres[b.dataset.filtre] === b.dataset.valeur)));
    const garde = (li) => Object.entries(filtres).every(([k, v]) => !v || li.dataset[k] === v);
    const montrer = () => {
      items.forEach((li) => { li.hidden = !garde(li); });
      const n = visibles().length;
      compte.textContent = compte.dataset.modele.replace('{n}', n);
      vide.hidden = n > 0;
      rafraichir && rafraichir();
      if (anime && gsap) gsap.fromTo(visibles().slice(0, 24), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.02, ease: 'power2.out', clearProps: 'transform,opacity' });
    };
    if (anime && gsap) {
      gsap.to(visibles().slice(0, 24), { opacity: 0, duration: 0.18, onComplete: () => {
        montrer();
        const haut = cat.getBoundingClientRect().top;
        if (haut < 0) window.scrollTo({ top: window.scrollY + haut - 90, behavior: 'instant' });
      } });
    } else montrer();
  };
  $$('[data-filtre]', cat).forEach((b) => b.addEventListener('click', () => {
    filtres[b.dataset.filtre] = b.dataset.valeur;
    ecrireAdresse();
    appliquer(true);
  }));
  $('[data-effacer]', cat).addEventListener('click', () => { Object.keys(filtres).forEach((k) => { filtres[k] = ''; }); ecrireAdresse(); appliquer(true); });
  if (Object.values(filtres).some(Boolean)) appliquer(false);

  /* Visionneuse. */
  const img = $('[data-vis-img]', vis), loupe = $('[data-vis-loupe]', vis), oeuvreEl = $('[data-vis-oeuvre]', vis);
  const murEl = $('[data-mur]', vis), murToile = murEl && $('[data-toile]', murEl), murImg = murToile && $('img', murToile);
  const boutonMur = $('[data-vis-mur]', vis);
  let index = -1, dernierFocus = null, auMur = false;
  const liste = () => visibles().map((li) => li.dataset.id);
  const montrerOeuvre = (id, sens = 0) => {
    const o = donnees.find((x) => x.id === id);
    if (!o) return;
    const l = liste();
    index = l.indexOf(id);
    const source = `/assets/images/${o.image}-${o.ratio && o.image ? (document.documentElement.clientWidth > 900 ? 1600 : 960) : 960}.webp`;
    const changer = () => {
      img.src = source;
      img.onerror = () => { img.onerror = null; img.src = `/assets/images/${o.image}-960.webp`; };
      img.alt = o.alt; img.width = 1600; img.height = Math.round(1600 / o.ratio);
      oeuvreEl.style.setProperty('--r', o.ratio);
      $('[data-vis-titre]', vis).textContent = o.titre;
      $('[data-vis-details]', vis).textContent = [o.technique, o.dims, o.annee || o.periode, o.note].filter(Boolean).join(' · ');
      $('[data-vis-compte]', vis).textContent = `${index + 1} / ${l.length}`;
      const dem = $('[data-vis-demander]', vis);
      dem.href = dem.href.replace(/\?.*?(#|$)/, `?sujet=oeuvre&oeuvre=${encodeURIComponent(o.titre.startsWith('N°') ? o.id : `${o.titre}, ${o.periode.toLowerCase()}`)}$1`);
      if (murToile) {
        murToile.style.setProperty('--l', o.l || 60);
        murImg.src = `/assets/images/${o.image}-960.webp`; murImg.alt = o.alt; murImg.height = Math.round(960 / o.ratio);
        boutonMur.hidden = !o.l;
        majCartel(murEl, o);
        if (!o.l && auMur) basculerMur(false);
      }
      loupe.style.backgroundImage = `url(${source})`;
      ecrireAdresse({ oeuvre: o.id });
    };
    if (gsap && sens) {
      gsap.to(oeuvreEl, { x: -40 * sens, opacity: 0, duration: 0.18, ease: 'power2.in', onComplete: () => {
        changer();
        gsap.fromTo(oeuvreEl, { x: 40 * sens, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, ease: 'power2.out' });
      } });
    } else changer();
  };
  const basculerMur = (v) => {
    auMur = v;
    vis.classList.toggle('vis--mur', v);
    boutonMur.setAttribute('aria-pressed', String(v));
    boutonMur.textContent = v ? boutonMur.dataset.libelleSeule : boutonMur.dataset.libelleMur;
    if (v) requestAnimationFrame(() => majCartel(murEl, donnees.find((x) => x.id === liste()[index]) || donnees[0]));
    if (v && gsap && murToile) gsap.fromTo(murImg, { yPercent: -12, rotation: 3, opacity: 0 }, { yPercent: 0, rotation: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, .5)', transformOrigin: '50% 0%' });
  };
  const ouvrir = (id, declencheur) => {
    dernierFocus = declencheur || document.activeElement;
    vis.hidden = false;
    document.documentElement.classList.add('vis-ouverte', 'defilement-bloque');
    suivre && suivre(vis);
    montrerOeuvre(id);
    if (gsap) gsap.fromTo(vis, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    $('[data-vis-fermer]', vis).focus({ preventScroll: true });
  };
  const fermer = () => {
    const fin = () => {
      vis.hidden = true; basculerMur(false);
      document.documentElement.classList.remove('vis-ouverte', 'defilement-bloque');
      lacher && lacher(vis);
      ecrireAdresse();
      if (dernierFocus && dernierFocus.focus) dernierFocus.focus({ preventScroll: true });
    };
    if (gsap) gsap.to(vis, { opacity: 0, duration: 0.2, onComplete: fin }); else fin();
  };
  const voisin = (d) => {
    const l = liste();
    if (!l.length) return;
    montrerOeuvre(l[(index + d + l.length) % l.length], d);
  };
  cat.addEventListener('click', (e) => {
    const a = e.target.closest('[data-oeuvre]');
    if (!a) return;
    e.preventDefault();
    ouvrir(a.dataset.oeuvre, a);
  });
  $('[data-vis-fermer]', vis).addEventListener('click', fermer);
  const hasard = $('[data-hasard]', cat);
  if (hasard) hasard.addEventListener('click', () => {
    const l = liste();
    if (l.length) ouvrir(l[Math.floor(Math.random() * l.length)], hasard);
  });
  $('[data-vis-prec]', vis).addEventListener('click', () => voisin(-1));
  $('[data-vis-suiv]', vis).addEventListener('click', () => voisin(1));
  boutonMur.addEventListener('click', () => basculerMur(!auMur));
  vis.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); fermer(); }
    else if (e.key === 'ArrowLeft') voisin(-1);
    else if (e.key === 'ArrowRight') voisin(1);
    else if (e.key === 'Tab') {
      const f = $$('button:not([disabled]), a[href]', vis).filter((x) => x.offsetParent !== null);
      if (!f.length) return;
      const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });
  /* Glissement au doigt. */
  let x0 = null;
  vis.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  vis.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) voisin(dx < 0 ? 1 : -1);
  });
  /* Loupe : souris seulement, suit l'image affichée. */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    oeuvreEl.addEventListener('pointermove', (e) => {
      if (auMur) return;
      const r = img.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      if (x < 0 || x > 1 || y < 0 || y > 1) { loupe.classList.remove('active'); return; }
      loupe.classList.add('active');
      loupe.style.transform = `translate(${e.clientX - r.left - 90}px, ${e.clientY - r.top - 90}px)`;
      loupe.style.backgroundSize = `${r.width * 2.6}px ${r.height * 2.6}px`;
      loupe.style.backgroundPosition = `${-(x * r.width * 2.6 - 90)}px ${-(y * r.height * 2.6 - 90)}px`;
    });
    oeuvreEl.addEventListener('pointerleave', () => loupe.classList.remove('active'));
  }
  /* Lien direct vers une œuvre. */
  const demandee = params.get('oeuvre');
  if (demandee && donnees.some((o) => o.id === demandee)) {
    const go = () => ouvrir(demandee, items.find((li) => li.dataset.id === demandee)?.querySelector('a'));
    quand('pret', () => { if (vis.hidden) go(); });
  }
  window.addEventListener('pageshow', (e) => { if (e.persisted && !vis.hidden) fermer(); });
}
