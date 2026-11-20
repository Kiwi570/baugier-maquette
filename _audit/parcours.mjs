/* Parcours propres à la Galerie Baugier : filtres du catalogue (gardés dans l'adresse), visionneuse
   (ouverture par lien direct, flèches, Échap, retour du focus, voir au mur), accrochage de l'accueil,
   formulaire prérempli par ?sujet=oeuvre&oeuvre=1368. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  for (const taille of ['1366×768', '390×844']) {
    const { ctx, page } = await contexte({ taille: T(taille) });
    const cliquer = async (sel) => { await page.$eval(sel, (e) => e.scrollIntoView({ block: 'center', behavior: 'instant' })); await attendre(250); await page.click(sel, { timeout: 8000 }); };
    try {
      /* Filtres : 12 œuvres pour les années 1990, adresse mise à jour, rien de vide. */
      await page.goto(BASE + '/oeuvres', { waitUntil: 'load' });
      await attendrePret(page);
      await cliquer('[data-filtre="decennie"][data-valeur="1990"]');
      await attendre(900);
      const f = await page.evaluate(() => ({ n: [...document.querySelectorAll('.cat-item')].filter((x) => !x.hidden).length, url: location.search }));
      if (f.n !== 12) R.echec('filtres', `${f.n} œuvres affichées pour les années 1990 au lieu de 12`, { page: '/oeuvres', taille });
      if (!f.url.includes('decennie=1990')) R.echec('filtres', 'le filtre n’est pas gardé dans l’adresse', { page: '/oeuvres', taille });
      await page.goto(BASE + '/oeuvres?decennie=2000&support=toile', { waitUntil: 'load' });
      await attendrePret(page);
      const g = await page.evaluate(() => [...document.querySelectorAll('.cat-item')].filter((x) => !x.hidden).every((x) => x.dataset.decennie === '2000' && x.dataset.support === 'toile'));
      if (!g) R.echec('filtres', 'une adresse filtrée affiche des œuvres hors filtre', { page: '/oeuvres', taille });

      /* Visionneuse par lien direct. */
      await page.goto(BASE + '/oeuvres?oeuvre=667', { waitUntil: 'load' });
      await attendrePret(page);
      await attendre(700);
      const v = await page.evaluate(() => { const d = document.querySelector('[data-visionneuse]'); return { ouverte: d && !d.hidden, titre: document.querySelector('[data-vis-titre]')?.textContent }; });
      if (!v.ouverte || v.titre !== 'N° 667') R.echec('visionneuse', `le lien direct n’ouvre pas l’œuvre n° 667 (${v.titre})`, { page: '/oeuvres?oeuvre=667', taille });
      await page.keyboard.press('ArrowRight'); await attendre(700);
      const t2 = await page.evaluate(() => document.querySelector('[data-vis-titre]')?.textContent);
      if (t2 === 'N° 667') R.echec('visionneuse', 'la flèche droite ne change pas d’œuvre', { page: '/oeuvres', taille });
      await cliquer('[data-vis-mur]'); await attendre(1300);
      const m = await page.evaluate(() => { const t = document.querySelector('.vis-mur [data-toile]'), s = document.querySelector('.vis-mur .mur-scene'); if (!t || !s) return null; const a = t.getBoundingClientRect(), b = s.getBoundingClientRect(); return a.left >= b.left - 1 && a.right <= b.right + 1 && a.top >= b.top - 1 && a.width > 10; });
      if (m === false) R.echec('voir au mur', 'la toile sort du mur dans la visionneuse', { page: '/oeuvres', taille });
      await page.keyboard.press('Escape'); await attendre(500);
      const fermee = await page.evaluate(() => document.querySelector('[data-visionneuse]').hidden && !location.search.includes('oeuvre='));
      if (!fermee) R.echec('visionneuse', 'Échap ne ferme pas la visionneuse ou laisse l’œuvre dans l’adresse', { page: '/oeuvres', taille });

      /* Formulaire prérempli. */
      await page.goto(BASE + '/contact?sujet=oeuvre&oeuvre=1368#formulaire', { waitUntil: 'load' });
      await attendrePret(page);
      const p = await page.evaluate(() => ({ o: document.querySelector('[name="oeuvre"]').value, s: document.querySelector('[name="sujet"]:checked')?.value }));
      if (p.o !== '1368' || p.s !== 'oeuvre') R.echec('formulaire', `le formulaire n’est pas prérempli (${JSON.stringify(p)})`, { page: '/contact', taille });

      /* Accrochage : changer de toile change la largeur à l'échelle (240 cm plus large que 80 cm). */
      await page.goto(BASE + '/', { waitUntil: 'load' });
      await attendrePret(page);
      await page.evaluate(() => document.querySelector('#chez-vous').scrollIntoView());
      await attendre(800);
      const l1 = await page.evaluate(() => document.querySelector('#chez-vous [data-toile]').getBoundingClientRect().width);
      await cliquer('[data-choix="667"]'); await attendre(1500);
      const l2 = await page.evaluate(() => document.querySelector('#chez-vous [data-toile]').getBoundingClientRect().width);
      if (!(l2 > l1 * 2.6 && l2 < l1 * 3.4)) R.echec('accrochage', `rapport de largeur 240/80 faux : ${l1.toFixed(0)} px puis ${l2.toFixed(0)} px`, { page: '/', taille });
    } finally { await ctx.close(); }
  }
}
