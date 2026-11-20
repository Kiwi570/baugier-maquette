/* Page 404 : un cadre vide, aux couleurs de l'atelier. */
import { html } from '../../outils/gabarit.mjs';
import { existsSync } from 'node:fs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => {
  const photo = existsSync(new URL('../../assets/images/grok/cadre-vide-1600.webp', import.meta.url));
  return html`
<section class="page-tete introuvable" id="debut">
  <div class="page-tete-texte">
    <p class="surtitre" data-anime>404</p>
    <h1 data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p class="fin-actions" data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('oeuvres', { classe: 'bouton bouton--contour', texte: c.t('introuvable.oeuvres') })}</p>
  </div>
  ${photo ? c.media({ nom: 'grok/cadre-vide', alt: c.s('introuvable.alt'), priorite: true, classe: 'page-tete-media', sizes: '(max-width: 760px) 100vw, 48vw', attrs: 'data-iris-centre data-fx="zoom"' })
    : html`<div class="cadre-vide" data-iris-centre data-visuel role="img" aria-label="${c.s('introuvable.alt')}" data-effet="cadre-vide"><span></span></div>`}
</section>
`;
};
