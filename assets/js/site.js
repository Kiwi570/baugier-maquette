/* Effets propres à la Galerie Baugier. Le socle gère l'ouverture, les transitions, l'en-tête, le menu,
   les mesures et la bibliothèque d'effets posés par attributs. Effets du plan (data-effet) :
   toile-grille (intro de l'accueil), fond-teinte (quatre décennies), accrochage (mur à l'échelle),
   ruban-oeuvres (ouverture du catalogue), annee-qui-defile (ouverture du parcours). */
import { demarrer, boucle, etat, versObjet, suivre, lacher, rafraichir, quand } from './socle/index.js?v=2';
import { initCatalogue } from './catalogue.js?v=2';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const html = document.documentElement;

/* Sur téléphone, la plus grande toile part d'une vignette plus large (lue par l'effet plein-écran du socle). */
if (window.matchMedia('(max-width: 760px)').matches) {
  const g = document.querySelector('.grande');
  if (g) g.setAttribute('data-fx-depart', 'inset(9% 12% 9% 12% round 2px)');
}

/* Premier écran de chaque page : lignes du titre, puis surtitre, texte, actions, cartel. */
function premierEcran(tl, t0) {
  const titre = $('.tete-titre');
  const lignes = $$('.tete-ligne');
  const autres = $$('[data-tete]');
  if (titre) tl.set(titre, { opacity: 1 }, t0);
  if (lignes.length) tl.fromTo(lignes, { yPercent: 108 }, { yPercent: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out' }, t0)
    .call(() => html.classList.add('titres-poses'), null, t0 + 0.75 + 0.1 * lignes.length);
  if (autres.length) tl.fromTo(autres, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.07, ease: 'power2.out' }, t0 + 0.3);
  return tl;
}
function premierEcranFinal() {
  html.classList.add('toile-faite', 'titres-poses');
  if (!gsap) return;
  gsap.set('.tete-titre, [data-tete]', { opacity: 1, y: 0 });
  gsap.set('.tete-ligne', { yPercent: 0 });
}

/* Intro de l'accueil : la grille de la toile n° 1368 se trace, puis les cases s'effacent sur la vraie toile. */
function toileGrille(tl) {
  const g = $('.toile-grille');
  if (!g) return;
  tl.fromTo(g.querySelector('path'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.5, ease: 'power2.inOut' }, 1.2)
    .fromTo(g.querySelectorAll('i'), { scale: 1 }, { scale: 0, duration: 0.3, ease: 'power2.in', stagger: { each: 0.016, from: 'random' } }, 1.55)
    .to(g.querySelector('svg'), { opacity: 0, duration: 0.25 }, 2.1)
    .call(() => html.classList.add('toile-faite'), null, 2.36);
}

/* La plus grande toile : sur ordinateur, les cotes se tracent puis la toile remplit son cadre (scène collante) ;
   sur téléphone, les cotes se tracent à l'entrée de la toile. */
function cotes() {
  const el = $('.grande');
  if (!el || !gsap || !ST) return;
  const h = $('.cote--h i', el), v = $('.cote--v i', el), media = $('.grande-media', el);
  gsap.matchMedia().add('(min-width: 761px)', () => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true } });
    tl.fromTo(h, { scaleX: 0.18 }, { scaleX: 1, duration: 0.3, ease: 'none' }, 0)
      .fromTo(v, { scaleY: 0.18 }, { scaleY: 1, duration: 0.3, ease: 'none' }, 0.06)
      .fromTo(media, { clipPath: 'inset(15% 21% 15% 21% round 2px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 0.6, ease: 'power2.inOut' }, 0.2);
    return () => gsap.set([media, h, v], { clearProps: 'clipPath,transform' });
  });
  gsap.matchMedia().add('(max-width: 760px)', () => {
    gsap.fromTo(h, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 75%', end: 'center 55%', scrub: 0.5 } });
    gsap.fromTo(v, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 70%', end: 'center 50%', scrub: 0.5 } });
    gsap.fromTo(media, { clipPath: 'inset(8% 10% 8% 10% round 2px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'center 50%', scrub: 0.5 } });
  });
}

/* Les toiles des salles s'accrochent au défilement : légère chute et balancement qui se pose. */
function balancement() {
  if (!gsap || !ST) return;
  $$('.salle-oeuvre').forEach((f, i) => {
    gsap.fromTo(f, { y: -26, rotation: i % 2 ? 2 : -2 }, { y: 0, rotation: 0, ease: 'none', transformOrigin: '50% 0%', scrollTrigger: { trigger: f, start: 'top 98%', end: 'top 58%', scrub: 0.6 } });
  });
}

/* Appel final : le mur d'accrochage en salon se remplit, une toile après l'autre. */
function salon() {
  const el = $('.accrochage-salon');
  if (!el || !gsap || !ST) return;
  const toiles = $$('.salon-toile', el);
  const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 88%', end: 'center 55%', scrub: 0.6 } });
  toiles.forEach((t, i) => tl.fromTo(t, { y: -48, rotation: i % 2 ? 3 : -3, opacity: 0.001 }, { y: 0, rotation: 0, opacity: 1, duration: 1, ease: 'power2.out' }, i * 0.18));
}

/* Cartel de musée à côté de la toile accrochée : à droite s'il y a la place, sinon à gauche, sinon caché. */
function placerCartel(mur) {
  const scene = $('.mur-scene', mur), toile = $('[data-toile]', mur), cartel = $('[data-mur-cartel]', mur);
  if (!scene || !toile || !cartel) return;
  const W = scene.clientWidth, H = scene.clientHeight;
  const x = toile.offsetLeft, w = toile.offsetWidth, h = toile.offsetHeight, bas = H - toile.offsetTop - h;
  const cw = cartel.offsetWidth, ch = cartel.offsetHeight, marge = Math.max(10, W * 0.02);
  let gauche = null;
  if (W - (x + w) >= cw + marge * 2) gauche = x + w + marge;
  else if (x >= cw + marge * 2) gauche = x - marge - cw;
  cartel.classList.toggle('place', gauche !== null && W > 280);
  if (gauche === null) return;
  cartel.style.left = Math.round(gauche) + 'px';
  cartel.style.top = Math.round(Math.max(8, H - bas - h * 0.42 - ch / 2)) + 'px';
}
export function majCartel(mur, o) {
  const cartel = mur && $('[data-mur-cartel]', mur);
  if (!cartel) return;
  cartel.innerHTML = '';
  [o.titre, o.dims || '', 'Marcel Baugier'].forEach((t, i) => { const e = document.createElement(i ? 'span' : 'strong'); e.textContent = t; cartel.appendChild(e); });
  placerCartel(mur);
}

/* L'atelier : les barres des supports se remplissent au défilement. */
function supports() {
  const el = $('.supports');
  if (!el || !gsap || !ST) return;
  gsap.fromTo($$('.supports-barre i', el), { scaleX: 0 }, { scaleX: 1, ease: 'none', stagger: 0.12, scrollTrigger: { trigger: el, start: 'top 90%', end: 'center 55%', scrub: 0.5 } });
}

/* Parcours : un point suit la frise, l'année de l'étape au centre de l'écran s'allume. */
function frise() {
  const liste = $('.frise-liste');
  if (!liste || !gsap || !ST) return;
  const point = $('.frise-point', liste);
  if (point) gsap.fromTo(point, { y: 0 }, { y: () => liste.offsetHeight - 14, ease: 'none', scrollTrigger: { trigger: liste, start: 'top 55%', end: 'bottom 55%', scrub: 0.4, invalidateOnRefresh: true } });
  $$('.frise-etape', liste).forEach((e) => ST.create({ trigger: e, start: 'top 55%', end: 'bottom 55%', toggleClass: 'actif' }));
}

/* Expositions : sur téléphone, une région ouverte à la fois suffit (accordéon). */
function accordeon() {
  if (!window.matchMedia('(max-width: 760px)').matches) return;
  $$('.expo-groupe').forEach((d, i) => { if (i > 0) d.removeAttribute('open'); });
}

/* Curseur « Voir » au survol des toiles (le curseur du socle n'existe qu'avec une souris). */
function curseurVoir() {
  const sel = '.oeuvre-lien, .cat-lien, .salon-toile, .hero-cadre';
  document.addEventListener('pointerover', (e) => {
    const c = $('.curseur');
    if (c) c.classList.toggle('curseur-voir', !!(e.target.closest && e.target.closest(sel)));
  }, { passive: true });
}

/* Lumière de la verrière : traverse le mur de l'accueil après l'intro, puis suit la souris et se pose. */
function lumiere() {
  const l = $('.hero-lumiere span');
  if (!l || !gsap) return;
  let pos = 0.62;
  const balayer = () => gsap.fromTo(l, { xPercent: -40, opacity: 0 }, { xPercent: 120 * pos + 20, opacity: 1, duration: 3.6, ease: 'power2.inOut' });
  quand('pret', balayer);
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const hero = $('.hero');
    const suivre = gsap.quickTo(l, 'xPercent', { duration: 1.6, ease: 'power3.out' });
    hero.addEventListener('pointermove', (e) => { pos = e.clientX / innerWidth; suivre(120 * pos + 20); });
  }
}

/* Quatre décennies : en descendant, le fond prend la teinte de la toile du milieu de la salle au centre de l'écran ;
   à la souris, celle de la toile survolée. */
function decennies() {
  const el = $('.decennies');
  if (!el || !gsap || !ST) return;
  let courante = '';
  const teinte = (c) => {
    if (!c || c === courante) return;
    courante = c;
    gsap.to(el, { '--teinte': c, duration: 0.9, ease: 'power2.out', overwrite: true });
  };
  const salles = $$('.salle', el);
  const milieu = (s) => { const o = $$('.salle-oeuvre', s); return (o[1] || o[0])?.dataset.teinte; };
  teinte(milieu(salles[0]));
  salles.forEach((s) => ST.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onToggle: (st) => { if (st.isActive) teinte(milieu(s)); } }));
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    $$('.salle-oeuvre', el).forEach((o) => o.addEventListener('pointerenter', () => teinte(o.dataset.teinte)));
  }
}

/* Mur à l'échelle : la toile s'accroche au défilement ; un choix la remplace, avec un léger balancement. */
function accrochage() {
  $$('[data-mur]').forEach((mur) => {
    const toile = $('[data-toile]', mur), img = $('img', toile);
    const liste = JSON.parse(mur.dataset.oeuvres || '[]');
    const section = mur.closest('section') || document;
    if (gsap && ST) {
      gsap.fromTo(toile, { y: -46, rotation: -2.5 }, { y: 0, rotation: 0, ease: 'none', scrollTrigger: { trigger: mur, start: 'top 90%', end: 'center 55%', scrub: 0.6 } });
    }
    const choisir = (id) => {
      const o = liste.find((x) => x.id === id);
      if (!o) return;
      $$('[data-choix]', section).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.choix === id)));
      const cartel = $('[data-accroche-cartel]', section);
      if (cartel) cartel.textContent = `${o.titre} · ${o.dims}`;
      const lien = $('[data-accroche-lien]', section);
      if (lien) lien.href = lien.href.replace(/oeuvre=[^&#]*/, `oeuvre=${o.id}`);
      const poser = () => {
        toile.style.setProperty('--l', o.l);
        toile.style.setProperty('--h', o.h);
        img.alt = o.alt || '';
        img.height = Math.round(960 / o.ratio);
        majCartel(mur, o);
      };
      const nouvelle = new Image();
      nouvelle.src = `/assets/images/${o.image}-960.webp`;
      const pret = nouvelle.decode ? nouvelle.decode().catch(() => {}) : Promise.resolve();
      if (!gsap) { pret.then(() => { img.src = nouvelle.src; poser(); }); return; }
      gsap.to(img, { yPercent: -10, opacity: 0, duration: 0.22, ease: 'power2.in', overwrite: true, onComplete: () => {
        pret.then(() => {
          img.src = nouvelle.src; poser();
          gsap.fromTo(img, { yPercent: -16, rotation: 4, opacity: 0 }, { yPercent: 0, rotation: 0, opacity: 1, duration: 1.1, ease: 'elastic.out(1, .5)', transformOrigin: '50% 0%' });
        });
      } });
    };
    $$('[data-choix]', section).forEach((b) => b.addEventListener('click', () => choisir(b.dataset.choix)));
    if (window.ResizeObserver) new ResizeObserver(() => placerCartel(mur)).observe(toile);
    if (img.complete) placerCartel(mur); else img.addEventListener('load', () => placerCartel(mur), { once: true });
  });
}

/* Ouverture du parcours : l'année défile de 1946 à 2024 au fil de la page. */
function anneeQuiDefile() {
  const el = $('[data-effet="annee-qui-defile"]');
  if (!el || !gsap || !ST) return;
  const de = +el.dataset.de, a = +el.dataset.a;
  const objet = { v: de };
  gsap.to(objet, {
    v: a, ease: 'none',
    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.4 },
    onUpdate: () => { el.textContent = String(Math.round(objet.v)); },
  });
  const img = $('.parcours-tete .page-tete-media');
  if (img) gsap.fromTo(el, { yPercent: 0 }, { yPercent: -18, ease: 'none', scrollTrigger: { trigger: '.parcours-tete', start: 'top top', end: 'bottom top', scrub: 0.4 } });
}

/* Ouverture du catalogue : ruban de toiles qui glisse tout seul et accélère avec le défilement. */
function rubanOeuvres() {
  const r = $('[data-effet="ruban-oeuvres"]');
  if (!r) return;
  const piste = $('.ruban-piste', r);
  let x = 0, largeur = 0, vitesse = 0;
  const mesurer = () => { largeur = piste.scrollWidth / 2; };
  mesurer();
  window.addEventListener('resize', mesurer);
  if (ST) ST.create({ trigger: r, start: 'top bottom', end: 'bottom top', onUpdate: (st) => { vitesse = Math.min(5, Math.abs(st.getVelocity()) / 500); } });
  boucle(r, (dt) => {
    if (r.classList.contains('en-pause') || !largeur) return;
    vitesse *= Math.pow(0.05, dt);
    x -= (34 + vitesse * 80) * dt;
    if (-x >= largeur) x += largeur;
    piste.style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
  });
}

demarrer({
  preparer() {
    lumiere();
    decennies();
    balancement();
    cotes();
    salon();
    frise();
    supports();
    accordeon();
    curseurVoir();
    accrochage();
    anneeQuiDefile();
    rubanOeuvres();
    initCatalogue();
  },
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.55 }, 0.05)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-trait', { opacity: 0, duration: 0.22 }, 0.72);
    versObjet(tl, { a: 0.85 });
    toileGrille(tl);
    premierEcran(tl, $('.toile-grille') ? 1.5 : 1.35);
    return tl;
  },
  etatFinal() { premierEcranFinal(); },
  arrivee() {
    if (!gsap) return;
    html.classList.add('toile-faite');
    premierEcran(gsap.timeline({ delay: 0.12 }), 0);
  },
});
