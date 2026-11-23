/* Parcours : les collines en ouverture et l'année qui défile, la frise d'une vie, Jean Vautrin, les 40 expositions. */
import { html } from '../../outils/gabarit.mjs';
import { oeuvreFigure } from '../gabarits/oeuvres.mjs';

export const page = { cle: 'parcours', fichier: 'parcours', imagePartage: 'grok/collines' };

export default (c) => {
  const O = Object.fromEntries(c.donnees.oeuvres.map((o) => [o.id, o]));
  const image = (nom) => {
    if (!nom) return '';
    const o = c.donnees.oeuvres.find((x) => x.image === nom);
    if (o) return c.media({ nom, alt: o.alt, classe: 'frise-image oeuvre-media', ratio: String(o.ratio), sizes: '(max-width: 760px) 60vw, 22vw' });
    return c.media({ nom, alt: c.s('atelier.salle2Alt'), classe: 'frise-image', ratio: '4 / 3', sizes: '(max-width: 760px) 60vw, 22vw' });
  };
  return html`
<section class="parcours-tete" id="debut">
  ${c.media({ nom: 'grok/collines', alt: c.s('parcours.alt'), priorite: true, classe: 'page-tete-media parcours-fond', sizes: '100vw', cadrage: '60% 60%', attrs: 'data-iris-centre' })}
  <p class="annee-geante" data-effet="annee-qui-defile" data-de="1946" data-a="2024" aria-hidden="true" data-visuel data-audit-ignorer>1946</p>
  <div class="parcours-tete-texte conteneur">
    <p class="surtitre" data-anime="gsap" data-tete>${c.t('parcours.surtitre')}</p>
    <h1 class="tete-titre" data-anime="gsap"><span class="ligne-masque"><span class="tete-ligne">${c.t('parcours.titre1')}</span></span><span class="ligne-masque"><span class="tete-ligne"><em>${c.t('parcours.titre2')}</em></span></span></h1>
    <p data-anime="gsap" data-tete class="masque-ecran-bas">${c.t('parcours.texte')}</p>
    <p class="actions" data-anime="gsap" data-tete><a class="bouton" href="#expositions" data-action-principale data-sans-transition>${c.t('parcours.action')}</a><span class="info-cle" data-info-cle>${c.t('parcours.info')}</span></p>
  </div>
</section>

<section class="frise conteneur" id="vie">
  <h2 data-anime="lignes">${c.t('parcours.friseTitre')}</h2>
  <ol class="frise-liste">
    <svg class="frise-trait" viewBox="0 0 4 1000" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M2 0V1000" stroke="currentColor" stroke-width="2" fill="none" vector-effect="non-scaling-stroke"/></svg>
    <span class="frise-point" aria-hidden="true" data-effet="frise-point" data-audit-ignorer></span>
    ${c.donnees.parcours.map((e, i) => html`<li class="frise-etape ${e.image ? 'frise-etape--image' : ''}" data-anime>
      <p class="frise-annee">${e.annee}</p>
      <div class="frise-corps"><h3>${e.titre}</h3><p>${e.texte}</p></div>
      ${image(e.image)}
    </li>`)}
  </ol>
</section>

<section class="vautrin" id="vautrin">
  <div class="conteneur vautrin-grille">
    <div>
      <h2 data-anime="lignes"><em>${c.t('parcours.vautrinTitre')}</em></h2>
      ${oeuvreFigure(c, O['annees-1980-1990-12'], { classe: 'vautrin-toile', sizes: '(max-width: 760px) 80vw, 30vw', lien: true, attrs: 'data-anime' })}
    </div>
    <div>
      <p data-anime>${c.t('parcours.vautrinTexte1')}</p>
      <p data-anime>${c.t('parcours.vautrinTexte2')}</p>
      <blockquote class="vautrin-citation" data-anime><p>« ${c.t('parcours.vautrinCitation')} »</p><footer>${c.t('parcours.vautrinAuteur')}</footer></blockquote>
      <p class="vautrin-delacroix" data-anime>${c.t('parcours.delacroix')}</p>
    </div>
  </div>
</section>

<section class="expositions conteneur" id="expositions">
  <div class="expositions-tete">
    <h2 data-anime="lignes"><span data-compteur="40">40</span> ${c.t('parcours.expoTitreMot')}</h2>
    <p data-anime>${c.t('parcours.expoTexte')}</p>
  </div>
  <div class="expositions-grille">
    ${c.donnees.expositions.map((g) => html`<details class="expo-groupe" data-anime open>
      <summary><h3>${g.region} <span>${g.lieux.length}</span></h3></summary>
      <ul>${g.lieux.map(([v, l]) => html`<li><strong>${v}</strong><span>${l}</span></li>`)}</ul>
    </details>`)}
  </div>
  <div class="reconnu" data-anime>
    <h3>${c.t('parcours.reconnuTitre')}</h3>
    <p>${c.t('parcours.drouot')}</p>
    <p>${c.t('parcours.achats')}</p>
    <p>${c.t('parcours.distinction')}</p>
  </div>
</section>

<section class="fin-oeuvre fin-oeuvre--pierre" id="fin">
  <div class="conteneur fin-oeuvre-grille">
    <div>
      <h2 data-anime="lignes">${c.t('parcours.finTitre')}</h2>
      <p data-anime>${c.t('parcours.finTexte')}</p>
      <p class="fin-actions" data-anime>${c.lien('oeuvres', { params: 'decennie=2010', ancre: 'catalogue', classe: 'bouton', texte: c.t('parcours.finAction') })} ${c.lien('contact', { params: 'sujet=visite', ancre: 'formulaire', classe: 'bouton bouton--contour', texte: c.t('commun.actionEntete') })}</p>
    </div>
    ${oeuvreFigure(c, O['1365'], { classe: 'fin-oeuvre-toile', sizes: '(max-width: 760px) 90vw, 40vw', lien: true })}
  </div>
</section>
`;
};
