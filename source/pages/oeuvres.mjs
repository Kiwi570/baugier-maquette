/* Catalogue : titre puis ruban de toiles qui glisse, filtres (période, support, format) gardés dans l'adresse,
   mur d'œuvres à leur proportion, visionneuse (loupe, cartel, voir au mur, demander l'œuvre) ouverte par ?oeuvre=. */
import { html, brut } from '../../outils/gabarit.mjs';
import { carteCatalogue, mur } from '../gabarits/oeuvres.mjs';

export const page = { cle: 'oeuvres', fichier: 'oeuvres', imagePartage: 'atelier-salle-2' };

export default (c) => {
  const toutes = c.donnees.oeuvres;
  const O = Object.fromEntries(toutes.map((o) => [o.id, o]));
  const ruban = ['1368', '689', 'annees-1980-1990-3', '764', '1120', 'annees-1990-2000-3', '754', '1128', '952', 'annees-1980-1990-11', '1119', '665', '1369', 'annees-2000-2010-2'].map((id) => O[id]);
  const filtre = (nom, valeurs) => html`<div class="filtre" role="group" aria-label="${c.s('oeuvres.' + nom)}">
    <span class="filtre-nom" aria-hidden="true">${c.t('oeuvres.' + nom)}</span>
    <button type="button" class="puce" data-filtre="${nom}" data-valeur="" aria-pressed="true">${c.t('oeuvres.tout')}</button>
    ${valeurs.map(([v, l]) => html`<button type="button" class="puce" data-filtre="${nom}" data-valeur="${v}" aria-pressed="false">${l}</button>`)}
  </div>`;
  const vignette = (o) => html`<span class="ruban-oeuvre" style="--r:${o.ratio}"><img src="/assets/images/${o.image}-480.webp" alt="" width="480" height="${Math.round(480 / o.ratio)}" loading="eager" decoding="async"></span>`;
  return html`
<section class="oeuvres-tete" id="debut">
  <div class="page-tete-texte conteneur oeuvres-tete-texte">
    <div>
      <p class="surtitre" data-anime="gsap" data-tete>${c.t('oeuvres.surtitre')}</p>
      <h1 class="tete-titre" data-anime="gsap"><span class="ligne-masque"><span class="tete-ligne">${c.t('oeuvres.titre1')}</span></span><span class="ligne-masque"><span class="tete-ligne"><em>${c.t('oeuvres.titre2')}</em></span></span></h1>
    </div>
    <div class="oeuvres-tete-droite">
      <p data-anime="gsap" data-tete class="masque-ecran-bas">${c.t('oeuvres.texte')}</p>
      <p class="actions" data-anime="gsap" data-tete><a class="bouton" href="#catalogue" data-action-principale data-sans-transition>${c.t('oeuvres.action')}</a><span class="info-cle" data-info-cle>${c.t('oeuvres.info')}</span></p>
    </div>
  </div>
  <div class="ruban-cadre" data-iris-centre>
    <div class="ruban-oeuvres" id="ruban-oeuvres" data-effet="ruban-oeuvres" aria-hidden="true" data-ruban data-visuel>
      <div class="ruban-piste">${ruban.map(vignette)}${ruban.map(vignette)}</div>
    </div>
    <button type="button" class="ruban-pause" data-pause-pour="ruban-oeuvres" data-libelle-pause="${c.s('commun.pause')}" data-libelle-lecture="${c.s('commun.lecture')}"><span data-libelle-bouton>${c.t('commun.pause')}</span></button>
  </div>
</section>

<section class="catalogue conteneur" id="catalogue" data-catalogue>
  <h2 class="visuellement-cache">${c.t('oeuvres.filtres')}</h2>
  <div class="filtres" data-anime>
    ${filtre('decennie', [['1980', '1980'], ['1990', '1990'], ['2000', '2000'], ['2010', '2010 → 2024']])}
    ${filtre('support', [['toile', c.s('oeuvres.s-toile')], ['papier', c.s('oeuvres.s-papier')], ['bois', c.s('oeuvres.s-bois')], ['carton', c.s('oeuvres.s-carton')]])}
    ${filtre('format', [['petit', c.s('oeuvres.f-petit')], ['moyen', c.s('oeuvres.f-moyen')], ['grand', c.s('oeuvres.f-grand')]])}
    <p class="catalogue-compte" aria-live="polite" data-compte data-modele="${c.s('oeuvres.compte')}">${c.t('oeuvres.compte', { n: toutes.length })}</p>
    <button type="button" class="bouton bouton--contour hasard" data-hasard>${c.t('oeuvres.hasard')}</button>
  </div>
  <ul class="cat-mur" data-anime="cascade">
    ${toutes.map((o) => carteCatalogue(c, o))}
    <li class="cat-fin" aria-hidden="true"></li>
  </ul>
  <div class="catalogue-vide" data-vide hidden><p>${c.t('oeuvres.aucune')}</p><button type="button" class="bouton bouton--contour" data-effacer>${c.t('oeuvres.effacer')}</button></div>
</section>



<section class="fin-oeuvre fin-oeuvre--pierre" id="fin">
  <div class="conteneur fin-oeuvre-grille">
    <div>
      <h2 data-anime="lignes">${c.t('oeuvres.finTitre')}</h2>
      <p data-anime>${c.t('oeuvres.finTexte')}</p>
      <p class="fin-actions" data-anime>${c.lien('contact', { params: 'sujet=visite', ancre: 'formulaire', classe: 'bouton', texte: c.t('oeuvres.finAction') })}</p>
      <div class="fin-en-ligne" id="en-ligne" data-anime>
        <p><strong>${c.t('oeuvres.ligneTitre')}.</strong> ${c.t('oeuvres.ligneTexte')}</p>
        <p class="en-ligne-liens">
          <a class="lien-fleche" href="https://www.riseart.com/fr#q=baugier" target="_blank" rel="noopener">Rise Art</a>
          <a class="lien-fleche" href="https://www.singulart.com/fr/search?q=baugier" target="_blank" rel="noopener">Singulart</a>
          ${c.lien('contact', { params: 'sujet=serigraphie', ancre: 'formulaire', classe: 'lien-fleche', texte: c.t('contact.sujetSerigraphie') })}
        </p>
      </div>
    </div>
    ${c.media({ nom: 'atelier-salle-3', alt: c.s('oeuvres.finAlt'), classe: 'fin-oeuvre-photo', ratio: '4 / 3', sizes: '(max-width: 760px) 92vw, 44vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  </div>
</section>

<div class="visionneuse" data-visionneuse data-recouvrement role="dialog" aria-modal="true" aria-label="${c.s('oeuvres.visionneuse')}" hidden>
  <div class="vis-barre">
    <p class="vis-compte" data-vis-compte></p>
    <div class="vis-boutons">
      <button type="button" class="vis-bouton" data-vis-mur aria-pressed="false" data-libelle-mur="${c.s('oeuvres.voirMur')}" data-libelle-seule="${c.s('oeuvres.voirSeule')}">${c.t('oeuvres.voirMur')}</button>
      <button type="button" class="vis-bouton vis-fermer" data-vis-fermer>${c.t('commun.fermer')}</button>
    </div>
  </div>
  <div class="vis-scene">
    <button type="button" class="vis-fleche vis-fleche--g" data-vis-prec aria-label="${c.s('oeuvres.precedente')}">←</button>
    <div class="vis-oeuvre" data-vis-oeuvre>
      <img data-vis-img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1" height="1">
      <div class="vis-loupe" data-vis-loupe aria-hidden="true" data-souris data-audit-ignorer></div>
    </div>
    ${mur(c, [toutes[0]], { classe: 'vis-mur', alt: c.s('accueil.chezvous.alt'), repere: c.s('accueil.chezvous.repere') })}
    <button type="button" class="vis-fleche vis-fleche--d" data-vis-suiv aria-label="${c.s('oeuvres.suivante')}">→</button>
  </div>
  <div class="vis-cartel">
    <div>
      <p class="vis-titre" data-vis-titre></p>
      <p class="vis-details" data-vis-details></p>
    </div>
    <div class="vis-actions">
      <p class="vis-prix">${c.t('commun.prixDemande')}</p>
      <a class="bouton" data-vis-demander href="${c.url('contact', 'formulaire', 'sujet=oeuvre')}" data-libelle="${c.libelle('contact')}">${c.t('commun.demander')}</a>
    </div>
  </div>
  <p class="vis-aide"><span class="vis-aide-souris">${c.t('oeuvres.loupe')}</span><span class="vis-aide-doigt">${c.t('oeuvres.glisser')}</span></p>
  <script type="application/json" data-vis-donnees>${brut(JSON.stringify(toutes.map((o) => ({ id: o.id, titre: o.titre, dims: o.dims, technique: o.technique, annee: o.annee, periode: o.periode, image: o.image, ratio: o.ratio, alt: o.alt, l: o.l, h: o.h, note: o.note }))).replace(/</g, '\\u003c'))}</script>
</div>
`;
};
