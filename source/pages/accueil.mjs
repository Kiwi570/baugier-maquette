/* Accueil de la Galerie Baugier : la toile n° 1368 qui se construit, le manifeste de Jean Vautrin,
   quatre décennies en salles (fond teinté par la toile regardée), la plus grande toile en plein écran,
   l'atelier des tanneries, l'accrochage à l'échelle, la reconnaissance, l'achat, la visite. */
import { html, brut } from '../../outils/gabarit.mjs';
import { oeuvreFigure, mur } from '../gabarits/oeuvres.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'o-n-1368-toile-80x80' };

export default (c) => {
  const O = Object.fromEntries(c.donnees.oeuvres.map((o) => [o.id, o]));
  const A = c.donnees.accueil;
  const parDecennie = (d) => c.donnees.oeuvres.filter((o) => o.decennie === d).length;
  const hero = O['1368'], grande = O['667'];
  return html`
<section class="hero" id="debut">
  <div class="hero-lumiere" aria-hidden="true" data-effet="lumiere-atelier" data-souris data-audit-ignorer><span></span></div>
  <div class="hero-texte">
    <p class="surtitre" data-anime="gsap" data-tete>${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre tete-titre" data-anime="gsap"><span class="ligne-masque"><span class="hero-ligne tete-ligne">${c.t('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne tete-ligne"><em>${c.t('accueil.hero.titre2')}</em></span></span></h1>
    <p class="hero-intro" data-anime="gsap" data-tete>${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions" data-anime="gsap" data-tete>
      ${c.lien('oeuvres', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="hero-info" data-info-cle>${c.t('accueil.hero.info')}</span>
    </p>
  </div>
  <div class="hero-oeuvre">
    <div class="hero-cadre" data-iris-centre style="aspect-ratio:${hero.ratio}">
      <a class="hero-lien" href="${c.url('oeuvres', '', 'oeuvre=1368')}" data-libelle="${c.libelle('oeuvres')}" aria-label="${c.s('oeuvres.ouvrir', { titre: hero.titre + ', ' + hero.annee })}">${c.media({ nom: hero.image, alt: c.s('accueil.hero.alt'), priorite: true, classe: 'oeuvre-media hero-media', sizes: '(max-width: 760px) 86vw, 44vw' })}</a>
      <div class="toile-grille" aria-hidden="true" data-audit-ignorer>
        ${brut(Array.from({ length: 25 }, (_, i) => `<i style="--i:${i}"></i>`).join(''))}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none"><path pathLength="1" d="M20 0V100M40 0V100M60 0V100M80 0V100M0 20H100M0 40H100M0 60H100M0 80H100" fill="none" stroke="#8d8a84" stroke-width=".9" vector-effect="non-scaling-stroke"/></svg>
      </div>
    </div>
    <p class="cartel hero-cartel" data-anime="gsap" data-tete><span>${c.t('accueil.hero.cartel')}</span><span>${c.t('accueil.hero.annee')}</span></p>
  </div>
</section>

<section class="manifeste conteneur" id="manifeste">
  ${c.media({ nom: 'atelier-peintre', alt: c.s('accueil.manifeste.alt'), classe: 'manifeste-media', ratio: '3 / 4', sizes: '(max-width: 760px) 90vw, 32vw', cadrage: '62% 40%', attrs: 'data-anime="rideau"' })}
  <div class="manifeste-texte">
    <p class="surtitre" data-anime>${c.t('accueil.manifeste.surtitre')}</p>
    <blockquote class="citation"><p data-anime="mots">« ${c.t('accueil.manifeste.citation')} »</p><footer data-anime>${c.t('accueil.manifeste.auteur')}</footer></blockquote>
    <p data-anime>${c.t('accueil.manifeste.texte')}</p>
    <p data-anime>${c.lien('parcours', { classe: 'lien-fleche', texte: c.t('accueil.manifeste.lien') })}</p>
  </div>
</section>

<section class="decennies" id="decennies" data-effet="fond-teinte">
  <div class="decennies-tete conteneur">
    <h2 data-anime="lignes">${c.t('accueil.decennies.titre')}</h2>
    <p data-anime>${c.t('accueil.decennies.texte')}</p>
  </div>
  ${A.salles.map((s) => html`<article class="salle" id="salle-${s.decennie}">
    <div class="salle-tete conteneur" data-anime>
      <p class="salle-annee">${s.decennie === 2010 ? '2010 → 2024' : `${s.decennie} → ${s.decennie + 10}`}</p>
      <div><h3>${s.nom}</h3><p class="salle-texte">${s.texte}</p></div>
      ${c.lien('oeuvres', { params: `decennie=${s.decennie}`, ancre: 'catalogue', classe: 'lien-fleche', texte: c.t('accueil.decennies.voir', { n: parDecennie(s.decennie) }) })}
    </div>
    <div class="salle-mur" tabindex="0" role="region" aria-label="${s.nom}" data-galerie>
      ${s.oeuvres.map((id) => oeuvreFigure(c, O[id], { classe: 'salle-oeuvre', sizes: '(max-width: 760px) 70vw, 30vw', lien: true, attrs: 'data-effet="balancement"' }))}
    </div>
  </article>`)}
</section>

<section class="grande" id="grande" data-scene>
  <div class="grande-collant" data-collant>
    <div class="grande-tete conteneur">
      <p class="surtitre">${c.t('accueil.grande.surtitre')}</p>
      <h2>${c.t('accueil.grande.titre')}</h2>
    </div>
    <div class="grande-cadre" data-effet="cotes">
      <div class="grande-toile">${c.media({ nom: grande.image, alt: c.s('accueil.grande.alt'), classe: 'grande-media oeuvre-media', sizes: '(max-width: 760px) 92vw, 80vw' })}</div>
      <span class="cote cote--h" aria-hidden="true"><i></i></span>
      <p class="cote-label cote-label--h" aria-hidden="true">${c.t('accueil.grande.gauche')}</p>
      <span class="cote cote--v" aria-hidden="true"><i></i></span>
      <p class="cote-label cote-label--v" aria-hidden="true">${c.t('accueil.grande.droite')}</p>
    </div>
    <p class="cartel grande-cartel conteneur"><span>${c.t('accueil.grande.legende')}</span><span>${c.t('accueil.grande.repere')}</span></p>
  </div>
</section>

<section class="atelier-bloc conteneur" id="atelier">
  <div class="atelier-bloc-texte">
    <p class="surtitre" data-anime>${c.t('accueil.atelier.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('accueil.atelier.titre')}</h2>
    <p data-anime>${c.t('accueil.atelier.texte')}</p>
    <ul class="chiffres" data-anime="cascade">
      <li><strong>1985</strong><span>${c.t('accueil.atelier.c1')}</span></li>
      <li><strong data-compteur="300">300</strong><span>${c.t('accueil.atelier.c2')}</span></li>
      <li><strong>207</strong><span>${c.t('accueil.atelier.c3')}</span></li>
    </ul>
    <p data-anime>${c.lien('atelier', { classe: 'bouton bouton--contour', texte: c.t('accueil.atelier.action'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
  <div class="atelier-bloc-photos">
    ${c.media({ nom: 'atelier-salle-2', alt: c.s('accueil.atelier.alt1'), classe: 'atelier-photo atelier-photo--1', ratio: '4 / 3', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    ${c.media({ nom: 'atelier-salle-3', alt: c.s('accueil.atelier.alt2'), classe: 'atelier-photo atelier-photo--2', ratio: '4 / 3', sizes: '(max-width: 760px) 70vw, 28vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  </div>
</section>

<section class="chezvous" id="chez-vous">
  <div class="conteneur chezvous-grille">
    <div class="chezvous-texte">
      <p class="surtitre" data-anime>${c.t('accueil.chezvous.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.chezvous.titre')}</h2>
      <p data-anime>${c.t('accueil.chezvous.texte')}</p>
      <fieldset class="choix-toiles" data-anime="cascade">
        <legend class="visuellement-cache">${c.t('accueil.chezvous.choix')}</legend>
        ${A.chezvous.map((id, i) => {
          const o = O[id];
          return html`<button type="button" class="choix-toile" data-choix="${id}" aria-pressed="${i === 0 ? 'true' : 'false'}">
            <span class="choix-vignette" style="aspect-ratio:${o.ratio}"><img src="/assets/images/${o.image}-480.webp" alt="" width="80" height="${Math.round(80 / o.ratio)}" loading="lazy"></span>
            <span><strong>${o.titre}</strong><br>${o.dims}</span>
          </button>`;
        })}
      </fieldset>
      <p class="chezvous-prix" data-anime><span data-accroche-cartel>${O[A.chezvous[0]].titre} · ${O[A.chezvous[0]].dims}</span> · ${c.t('commun.prixDemande')}</p>
      <p data-anime>${c.lien('contact', { params: `sujet=oeuvre&oeuvre=${A.chezvous[0]}`, ancre: 'formulaire', classe: 'bouton', texte: c.t('commun.demander'), attrs: 'data-accroche-lien data-survol="magnetique"' })}</p>
    </div>
    ${mur(c, A.chezvous.map((id) => O[id]), { alt: c.s('accueil.chezvous.alt'), repere: c.s('accueil.chezvous.repere') })}
  </div>
</section>

<section class="reconnaissance" id="reconnaissance">
  <div class="mots-geants" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>${A.villes1.join(' · ')} · ${A.villes1.join(' · ')}</p>
    <p data-fx-rangee data-sens="-1">${A.villes2.join(' · ')} · ${A.villes2.join(' · ')}</p>
  </div>
  <div class="conteneur">
    <h2 data-anime="lignes">${c.t('accueil.reconnaissance.titre')}</h2>
    <p class="reconnaissance-texte" data-anime>${c.t('accueil.reconnaissance.texte')}</p>
    <ul class="reconnaissance-cartes" data-anime="cascade">
      ${A.reconnaissance.map((r) => html`<li><p class="reco-lieu">${r.lieu}</p><p class="reco-titre">${r.titre}</p><p class="reco-annee">${r.annee}</p></li>`)}
    </ul>
    <p data-anime>${c.lien('parcours', { ancre: 'expositions', classe: 'lien-fleche', texte: c.t('accueil.reconnaissance.lien') })}</p>
  </div>
</section>

<section class="acquerir conteneur" id="acquerir">
  <div class="acquerir-tete">
    <p class="surtitre" data-anime>${c.t('accueil.acquerir.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('accueil.acquerir.titre')}</h2>
    <p data-anime>${c.t('accueil.acquerir.texte')}</p>
    ${c.media({ nom: 'atelier-salle-1', alt: c.s('accueil.fin.alt'), classe: 'acquerir-photo', ratio: '4 / 3', sizes: '(max-width: 900px) 92vw, 40vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  </div>
  <ul class="acquerir-cartes" data-anime="cascade">
    <li class="acquerir-carte acquerir-carte--atelier" data-survol="incline" data-survol-force="4">
      <h3>${c.t('accueil.acquerir.atelierTitre')}</h3><p>${c.t('accueil.acquerir.atelierTexte')}</p>
      ${c.lien('contact', { params: 'sujet=oeuvre', ancre: 'formulaire', classe: 'bouton', texte: c.t('accueil.acquerir.atelierAction') })}
    </li>
    <li class="acquerir-carte" data-survol="incline" data-survol-force="4">
      <h3>Rise Art</h3><p>${c.t('accueil.acquerir.riseTexte')}</p>
      <a class="lien-fleche" href="https://www.riseart.com/fr#q=baugier" target="_blank" rel="noopener">${c.t('accueil.acquerir.ouvrir', { nom: 'Rise Art' })}</a>
    </li>
    <li class="acquerir-carte" data-survol="incline" data-survol-force="4">
      <h3>Singulart</h3><p>${c.t('accueil.acquerir.singulartTexte')}</p>
      <a class="lien-fleche" href="https://www.singulart.com/fr/search?q=baugier" target="_blank" rel="noopener">${c.t('accueil.acquerir.ouvrir', { nom: 'Singulart' })}</a>
    </li>
    <li class="acquerir-carte" data-survol="incline" data-survol-force="4">
      <h3>${c.t('accueil.acquerir.galeriesTitre')}</h3><p>${c.t('accueil.acquerir.galeriesTexte')}</p>
    </li>
  </ul>
</section>

<section class="mur-final" id="fin">
  <div class="conteneur mur-final-grille">
    <div class="mur-final-texte">
      <p class="surtitre" data-anime>${c.t('accueil.fin.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.fin.titre')}</h2>
      <p data-anime>${c.t('accueil.fin.texte')}</p>
      <p class="fin-actions" data-anime>
        ${c.lien('contact', { params: 'sujet=visite', ancre: 'formulaire', classe: 'bouton', texte: c.t('accueil.fin.action'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
      </p>
    </div>
    <div class="accrochage-salon" data-effet="accrochage-salon">
      ${A.salon.map((rangee, r) => html`<div class="salon-rangee" style="--hh:${[1, 1.25, 0.92][r]}">${rangee.map((id, i) => html`<a class="salon-toile" href="${c.url('oeuvres', '', `oeuvre=${id}`)}" data-libelle="${c.libelle('oeuvres')}" style="--r:${O[id].ratio};--i:${r * 4 + i}" aria-label="${c.s('oeuvres.ouvrir', { titre: O[id].titre + ', ' + (O[id].annee || O[id].periode) })}"><img src="/assets/images/${O[id].image}-480.webp" alt="${O[id].alt}" width="480" height="${Math.round(480 / O[id].ratio)}" loading="lazy" decoding="async"></a>`)}</div>`)}
    </div>
  </div>
</section>
`;
};
