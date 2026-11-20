/* L'atelier-galerie : ouverture plein cadre sur la salle, trois chiffres, la table aux couleurs,
   les toiles au mur, la vidéo Instagram, les expositions permanentes, venir. */
import { html } from '../../outils/gabarit.mjs';
import { oeuvreFigure } from '../gabarits/oeuvres.mjs';

export const page = { cle: 'atelier', fichier: 'atelier', imagePartage: 'atelier-salle-1' };

export default (c) => { const O = Object.fromEntries(c.donnees.oeuvres.map((o) => [o.id, o])); return html`
<section class="atelier-tete" id="debut">
  ${c.media({ nom: 'atelier-salle-1', alt: c.s('atelier.alt'), priorite: true, classe: 'atelier-tete-fond', sizes: '100vw', cadrage: '50% 45%', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="8"' })}
  <div class="atelier-tete-texte conteneur">
    <p class="surtitre" data-anime="gsap" data-tete>${c.t('atelier.surtitre')}</p>
    <h1 class="tete-titre" data-anime="gsap"><span class="ligne-masque"><span class="tete-ligne">${c.t('atelier.titre1')}</span></span><span class="ligne-masque"><span class="tete-ligne"><em>${c.t('atelier.titre2')}</em></span></span></h1>
    <p data-anime="gsap" data-tete class="masque-ecran-tres-bas">${c.t('atelier.texte')}</p>
    <p class="actions" data-anime="gsap" data-tete>${c.lien('contact', { params: 'sujet=visite', ancre: 'formulaire', classe: 'bouton', texte: c.t('atelier.action'), attrs: 'data-action-principale' })}<span class="info-cle" data-info-cle>${c.t('atelier.info')}</span></p>
  </div>
</section>

<section class="atelier-chiffres conteneur" id="chiffres">
  <h2 class="visuellement-cache">${c.t('atelier.chiffresTitre')}</h2>
  <ul class="grands-chiffres" data-anime="cascade" data-visuel>
    <li><strong>1985</strong><span>${c.t('atelier.c1')}</span></li>
    <li><strong data-compteur="300">300</strong><span>${c.t('atelier.c2')}</span></li>
    <li><strong>2</strong><span>${c.t('atelier.c3')}</span></li>
  </ul>
</section>

<section class="bloc-image conteneur" id="table">
  ${c.media({ nom: 'atelier-peintre', alt: c.s('atelier.peintreAlt'), classe: 'bloc-image-media', ratio: '3 / 4', cadrage: '62% 40%', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-anime="rideau"' })}
  <div>
    <h2 data-anime="lignes">${c.t('atelier.peintreTitre')}</h2>
    <p data-anime>${c.t('atelier.peintreTexte')}</p>
    <p data-anime>${c.lien('oeuvres', { classe: 'lien-fleche', texte: c.t('commun.voirOeuvres') })}</p>
  </div>
</section>

<section class="salles-photos" id="salles">
  <div class="conteneur salles-photos-tete">
    <h2 data-anime="lignes">${c.t('atelier.sallesTitre')}</h2>
    <p data-anime>${c.t('atelier.sallesTexte')}</p>
  </div>
  <div class="salles-photos-grille conteneur">
    ${c.media({ nom: 'atelier-salle-2', alt: c.s('atelier.salle1Alt'), classe: 'salles-photo', ratio: '4 / 3', sizes: '(max-width: 760px) 90vw, 55vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
    ${c.media({ nom: 'atelier-salle-3', alt: c.s('atelier.salle2Alt'), classe: 'salles-photo salles-photo--2', ratio: '4 / 3', sizes: '(max-width: 760px) 90vw, 40vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  </div>
</section>

<section class="atelier-infos conteneur" id="visiter">
  <div class="carte-info carte-info--sombre" data-anime>
    <h2>${c.t('atelier.videoTitre')}</h2>
    <p>${c.t('atelier.videoTexte')}</p>
    <a class="bouton bouton--clair" href="https://www.instagram.com/p/DAv-hmgxcHW/" target="_blank" rel="noopener">${c.t('atelier.videoAction')}</a>
  </div>
  <div class="carte-info" data-anime>
    <h2>${c.t('atelier.permanentesTitre')}</h2>
    <ul class="liste-lieux" data-anime="cascade">
      <li><strong>Barjols</strong> Atelier Marcel Baugier</li>
      <li><strong>Cannes</strong> Galerie Michelle Champetier</li>
      <li><strong>Draguignan</strong> Galerie « Le Hangart »</li>
      <li><strong>Ribérac</strong> Galerie Le 5</li>
    </ul>
  </div>
  <div class="carte-info" data-anime>
    <h2>${c.t('atelier.visiterTitre')}</h2>
    <p>${c.t('atelier.visiterTexte')}</p>
    <p class="coord"><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><br>${c.site.contact.adresse}</p>
    ${c.lien('contact', { ancre: 'venir', classe: 'lien-fleche', texte: c.t('contact.itineraire') })}
  </div>
</section>

<section class="fin-oeuvre" id="fin">
  <div class="conteneur fin-oeuvre-grille">
    <div>
      <h2 data-anime="lignes">${c.t('atelier.finTitre')}</h2>
      <p data-anime>${c.t('atelier.finTexte')}</p>
      <p class="fin-actions" data-anime>${c.lien('contact', { params: 'sujet=oeuvre', ancre: 'formulaire', classe: 'bouton', texte: c.t('atelier.finAction') })} ${c.lien('oeuvres', { classe: 'bouton bouton--contour', texte: c.t('commun.voirOeuvres') })}</p>
    </div>
    ${oeuvreFigure(c, O['1128'], { classe: 'fin-oeuvre-toile', sizes: '(max-width: 760px) 90vw, 45vw', lien: true })}
  </div>
</section>
`;
};
