/* Gabarits des œuvres : figure avec cartel, carte du catalogue, mur à l'échelle.
   Une œuvre n'est jamais recadrée : la figure prend la proportion exacte de sa photo. */
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { html, brut } from '../../outils/gabarit.mjs';

const racine = join(dirname(fileURLToPath(import.meta.url)), '../..');
const existe = (p) => existsSync(join(racine, p));

export const cartel = (o) => [o.titre, o.dims].filter(Boolean).join(' · ');
export const annee = (o) => (o.annee ? String(o.annee) : o.periode);

export function oeuvreFigure(c, o, { classe = '', sizes = '40vw', lien = false, priorite = false, attrs = '' } = {}) {
  const media = c.media({ nom: o.image, alt: o.alt, classe: 'oeuvre-media', sizes, priorite });
  return html`<figure class="oeuvre ${classe}" style="--r:${o.ratio};--teinte:${o.teinte}" data-teinte="${o.teinte}"${brut(attrs ? ' ' + attrs : '')}>
  ${lien ? c.lien('oeuvres', { params: `oeuvre=${o.id}`, classe: 'oeuvre-lien', texte: media, attrs: `aria-label="${c.s('oeuvres.ouvrir', { titre: o.titre + ', ' + annee(o).toLowerCase() })}"` }) : media}
  <figcaption class="cartel"><span>${cartel(o)}</span><span>${annee(o)}</span></figcaption>
</figure>`;
}

/* Mur à l'échelle : une console de 180 cm, la toile accrochée au-dessus à sa vraie taille.
   La photo du mur (Grok) remplace le décor dessiné dès qu'elle est produite. */
export function mur(c, oeuvres, { alt = '', repere = '', classe = '' } = {}) {
  const o = oeuvres[0];
  const photo = existe('assets/images/mur-salon-1280.webp') || existe('assets/images/grok/mur-salon-1280.webp');
  const nomPhoto = existe('assets/images/grok/mur-salon-1280.webp') ? 'grok/mur-salon' : 'mur-salon';
  const donnees = JSON.stringify(oeuvres.map((x) => ({ id: x.id, l: x.l, h: x.h, image: x.image, titre: x.titre, dims: x.dims, ratio: x.ratio, alt: x.alt })));
  return html`<div class="mur ${classe} ${photo ? 'mur--photo' : 'mur--dessin'}" data-mur data-oeuvres="${donnees}">
  <div class="mur-scene">
    ${photo ? c.media({ nom: nomPhoto, alt, classe: 'mur-photo', sizes: '(max-width: 760px) 100vw, 60vw' }) : html`<div class="mur-dessin" role="img" aria-label="${alt}"><span class="mur-plinthe"></span><span class="mur-console"></span></div>`}
    <div class="mur-toile" data-toile data-effet="accrochage" style="--l:${o.l};--h:${o.h}">
      <img src="/assets/images/${o.image}-960.webp" alt="${o.alt}" width="960" height="${Math.round(960 / o.ratio)}" loading="lazy" decoding="async">
    </div>
    <p class="mur-cartel" data-mur-cartel aria-hidden="true"><strong>${o.titre}</strong><span>${o.dims || ''}</span><span>Marcel Baugier</span></p>
    <p class="mur-repere" aria-hidden="true">${repere}</p>
  </div>
</div>`;
}

export function carteCatalogue(c, o) {
  const support = o.support || 'inconnu', format = o.format || 'inconnu';
  return html`<li class="cat-item" style="--r:${o.ratio};--teinte:${o.teinte}" data-decennie="${o.decennie}" data-support="${support}" data-format="${format}" data-id="${o.id}">
  <a class="cat-lien" href="${c.url('oeuvres', '', `oeuvre=${o.id}`)}" data-oeuvre="${o.id}" data-sans-transition aria-label="${c.s('oeuvres.ouvrir', { titre: o.titre + ', ' + annee(o) })}">
    ${c.media({ nom: o.image, alt: o.alt, classe: 'oeuvre-media', sizes: '(max-width: 760px) 46vw, (max-width: 1200px) 30vw, 22vw' })}
  </a>
  <p class="cartel"><span>${o.titre}${o.dims ? html` · ${o.dims}` : ''}</span><span>${annee(o)}</span></p>
</li>`;
}

export { brut };
