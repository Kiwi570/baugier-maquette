/* Contact : venir à l'atelier (coordonnées, formulaire simulé prérempli par ?sujet=&oeuvre=), carte du Var, accès. */
import { html } from '../../outils/gabarit.mjs';
import { oeuvreFigure } from '../gabarits/oeuvres.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'atelier-salle-3' };

export default (c) => {
  const O = Object.fromEntries(c.donnees.oeuvres.map((o) => [o.id, o]));
  const k = c.site.contact;
  return html`
<section class="contact-tete" id="debut">
  <div class="contact-tete-texte">
    <p class="surtitre" data-anime="gsap" data-tete>${c.t('contact.surtitre')}</p>
    <h1 class="tete-titre" data-anime="gsap"><span class="ligne-masque"><span class="tete-ligne">${c.t('contact.titre1')}</span></span><span class="ligne-masque"><span class="tete-ligne"><em>${c.t('contact.titre2')}</em></span></span></h1>
    <p data-anime="gsap" data-tete class="masque-ecran-tres-bas">${c.t('contact.texte')}</p>
    <p class="actions" data-anime="gsap" data-tete><a class="bouton" href="tel:${k.telephoneLien}" data-action-principale>${c.t('contact.action')} · ${k.telephone}</a><span class="info-cle" data-info-cle>${c.t('contact.info')}</span></p>
    <dl class="coordonnees" data-anime="gsap" data-tete>
      <div><dt>${c.t('contact.telephone')}</dt><dd><a href="tel:${k.telephoneLien}">${k.telephone}</a></dd></div>
      <div><dt>${c.t('contact.email')}</dt><dd><a href="mailto:${k.email}">${k.email}</a></dd></div>
      <div><dt>${c.t('contact.horaires')}</dt><dd>${c.t('contact.horairesTexte')}</dd></div>
    </dl>
  </div>
  ${c.media({ nom: 'atelier-salle-3', alt: c.s('contact.alt'), priorite: true, classe: 'contact-tete-media', sizes: '(max-width: 760px) 100vw, 46vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
</section>

<section class="contact-form conteneur" id="formulaire">
  <div class="contact-form-tete">
    <h2 data-anime="lignes">${c.t('contact.formTitre')}</h2>
    <p data-anime>${c.t('contact.formTexte')}</p>
  </div>
  <form class="formulaire" data-formulaire data-anime action="#" method="post">
    <fieldset class="champ champ--choix">
      <legend>${c.t('contact.sujet')}</legend>
      <div class="choix">
        <label><input type="radio" name="sujet" value="oeuvre" checked> ${c.t('contact.sujetOeuvre')}</label>
        <label><input type="radio" name="sujet" value="visite"> ${c.t('contact.sujetVisite')}</label>
        <label><input type="radio" name="sujet" value="serigraphie"> ${c.t('contact.sujetSerigraphie')}</label>
        <label><input type="radio" name="sujet" value="autre"> ${c.t('contact.sujetAutre')}</label>
      </div>
    </fieldset>
    <div class="champ"><label for="f-oeuvre">${c.t('contact.oeuvre')}</label><input id="f-oeuvre" name="oeuvre" type="text" inputmode="text" aria-describedby="f-oeuvre-aide"><p class="champ-aide" id="f-oeuvre-aide">${c.t('contact.oeuvreAide')}</p></div>
    <div class="champ"><label for="f-nom">${c.t('contact.nom')}</label><input id="f-nom" name="nom" type="text" autocomplete="name" required></div>
    <div class="champ"><label for="f-courriel">${c.t('contact.courriel')}</label><input id="f-courriel" name="courriel" type="email" autocomplete="email" required></div>
    <div class="champ"><label for="f-tel">${c.t('contact.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
    <div class="champ champ--large"><label for="f-message">${c.t('contact.message')}</label><textarea id="f-message" name="message" rows="5" required></textarea></div>
    <p class="champ-aide champ--large">${c.t('contact.rgpd')}</p>
    <p class="champ--large"><button class="bouton" type="submit">${c.t('contact.envoyer')}</button></p>
    <p class="message-envoi champ--large" data-message-envoi data-texte="${c.s('contact.simule')}" tabindex="-1" hidden aria-live="polite"></p>
  </form>
</section>

<section class="venir conteneur" id="venir">
  <div>
    <h2 data-anime="lignes">${c.t('contact.carteTitre')}</h2>
    <p data-anime>${c.t('contact.carteTexte')}</p>
    <p data-anime><a class="lien-fleche" href="https://www.google.com/maps/search/?api=1&query=207+rue+des+Tanneurs+83670+Barjols" target="_blank" rel="noopener">${c.t('contact.itineraire')}</a></p>
  </div>
  <figure class="carte-var" data-visuel>
    <svg viewBox="0 0 600 420" role="img" aria-labelledby="carte-titre" data-fx="trace">
      <title id="carte-titre">${c.t('atelier.carteAlt')}</title>
      <g fill="none" stroke="#CFC6B6" stroke-width="1.5" pointer-events="none">
        <path d="M-10 330 C 80 290 150 300 230 270 S 380 250 470 200 S 560 150 620 160"/>
        <path d="M-10 370 C 90 340 170 350 260 320 S 420 300 500 250 S 580 220 620 225"/>
        <path d="M-10 120 C 90 140 160 110 240 120 S 380 90 450 60 S 560 40 620 50"/>
        <path d="M-10 80 C 100 95 170 70 250 75 S 390 40 470 20"/>
      </g>
      <path d="M170 330 C 220 300 250 250 312 202" fill="none" stroke="#B23A24" stroke-width="2.5" stroke-linecap="round" data-fx-trait/>
      <g data-repere><circle cx="330" cy="190" r="8" fill="#B23A24"/><circle cx="330" cy="190" r="20" fill="none" stroke="#B23A24" stroke-width="1.5"/></g>
      <text x="360" y="186" font-size="26" fill="#1B1A17" font-family="Instrument Serif, Georgia, serif">Barjols</text>
      <text x="360" y="210" font-size="14" fill="#4D4A44" font-family="Inter Tight, Arial, sans-serif">Atelier, 207 rue des Tanneurs</text>
      <circle cx="170" cy="330" r="5" fill="#1B1A17"/>
      <text x="186" y="352" font-size="16" fill="#1B1A17" font-family="Inter Tight, Arial, sans-serif">Brignoles</text>
      <g transform="translate(540 70)" fill="#4D4A44" font-family="Inter Tight, Arial, sans-serif" font-size="13"><path d="M0 -26 L 7 0 L 0 -6 L -7 0 Z" fill="#1B1A17"/><text x="-5" y="18">N</text></g>
      <text x="24" y="400" font-size="13" fill="#4D4A44" font-family="Inter Tight, Arial, sans-serif">Var, Haut-Var · schéma sans échelle</text>
    </svg>
  </figure>
</section>

<section class="fin-oeuvre fin-oeuvre--pierre" id="fin">
  <div class="conteneur fin-oeuvre-grille">
    <div>
      <h2 data-anime="lignes">${c.t('contact.finTitre')}</h2>
      <p data-anime>${c.t('contact.finTexte')}</p>
      <p class="fin-actions" data-anime>${c.lien('oeuvres', { classe: 'bouton', texte: c.t('contact.finAction') })}</p>
    </div>
    ${oeuvreFigure(c, O['689'], { classe: 'fin-oeuvre-toile', sizes: '(max-width: 760px) 90vw, 40vw', lien: true })}
  </div>
</section>
`;
};
