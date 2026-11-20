# Rapport d’audit

Projet : `baugier-maquette` · 20/11/2026 19:27:47 · 18 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/oeuvres,/atelier,/parcours,/contact

## Résumé

- Statut : **86 échec(s)**
- Passe : `20261120-181015-rapide-cible` · version ?v=1
- Échecs : **86**
- À regarder : **115**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (30), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (14), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (2), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (4), souris immobile (3), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `atelier.html` — fichier introuvable : /assets/partage/atelier-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `oeuvres.html` — fichier introuvable : /assets/partage/oeuvres-fr.jpg
- **image de partage** — `parcours.html` — fichier introuvable : /assets/partage/parcours-fr.jpg

### texte coupé (11)

- **texte coupé** — `/` — div.hero-texte:nth-of-type(2) > h1.hero-titre.tete-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne.tete-ligne « Marcel » — coupé par section#debut > div.hero-texte:nth-of-type(2) > h1.hero-titre.tete-titre > span.ligne-masque:nth-of-type(1) « Marcel » _(390×844 sansWebgl, 390×844 normal, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/` — h1.hero-titre.tete-titre > span.ligne-masque:nth-of-type(2) > span.hero-ligne.tete-ligne > em « Baugier » — coupé par section#debut > div.hero-texte:nth-of-type(2) > h1.hero-titre.tete-titre > span.ligne-masque:nth-of-type(2) « Baugier » _(390×844 sansWebgl, 390×844 normal, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/atelier` — div.atelier-tete-texte.conteneur > h1.tete-titre > span.ligne-masque:nth-of-type(1) > span.tete-ligne « Une salle des » — coupé par section#debut > div.atelier-tete-texte.conteneur > h1.tete-titre > span.ligne-masque:nth-of-type(1) « Une salle des » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/atelier` — h1.tete-titre > span.ligne-masque:nth-of-type(2) > span.tete-ligne > em « anciennes tanneries » — coupé par section#debut > div.atelier-tete-texte.conteneur > h1.tete-titre > span.ligne-masque:nth-of-type(2) « anciennes tanneries » _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/contact` — div.contact-tete-texte > h1.tete-titre > span.ligne-masque:nth-of-type(1) > span.tete-ligne « Venir à » — coupé par section#debut > div.contact-tete-texte > h1.tete-titre > span.ligne-masque:nth-of-type(1) « Venir à » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/contact` — h1.tete-titre > span.ligne-masque:nth-of-type(2) > span.tete-ligne > em « l'atelier » — coupé par section#debut > div.contact-tete-texte > h1.tete-titre > span.ligne-masque:nth-of-type(2) « l'atelier » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/oeuvres` — div:nth-of-type(1) > h1.tete-titre > span.ligne-masque:nth-of-type(1) > span.tete-ligne « 113 œuvres, » — coupé par div.page-tete-texte.conteneur:nth-of-type(1) > div:nth-of-type(1) > h1.tete-titre > span.ligne-masque:nth-of-type(1) « 113 œuvres, » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/oeuvres` — h1.tete-titre > span.ligne-masque:nth-of-type(2) > span.tete-ligne > em « de 1980 à 2024 » — coupé par div.page-tete-texte.conteneur:nth-of-type(1) > div:nth-of-type(1) > h1.tete-titre > span.ligne-masque:nth-of-type(2) « de 1980 à 2024 » _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/parcours` — div.parcours-tete-texte.conteneur > h1.tete-titre > span.ligne-masque:nth-of-type(1) > span.tete-ligne « De Barjols au Louvre, » — coupé par section#debut > div.parcours-tete-texte.conteneur > h1.tete-titre > span.ligne-masque:nth-of-type(1) « De Barjols au Louvre, » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/parcours` — h1.tete-titre > span.ligne-masque:nth-of-type(2) > span.tete-ligne > em « et retour » — coupé par section#debut > div.parcours-tete-texte.conteneur > h1.tete-titre > span.ligne-masque:nth-of-type(2) « et retour » _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte coupé** — `/parcours` — section#debut > p.annee-geante « 1946 » — coupé par section#debut « Illustration générée 1946 PARCOURS De Barjols au L » _(390×844 sansJs, 320×568 sansJs)_

### contraste insuffisant (4)

- **contraste insuffisant** — `/` — section#reconnaissance > div.mots-geants:nth-of-type(1) > p:nth-of-type(1) « Paris · Florence · Cannes · Monaco · Gand · Menton » — 1.29:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#reconnaissance > div.mots-geants:nth-of-type(1) > p:nth-of-type(2) « Riyad · Sion · Aix-la-Chapelle · Avignon · Marseil » — 1.39:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#grande > div.grande-collant > p.grande-mot.grande-mot--g:nth-of-type(1) « 240 cm » — 1.44:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_
- **contraste insuffisant** — `/` — section#grande > div.grande-collant > p.grande-mot.grande-mot--d:nth-of-type(2) « 145 cm » — 1.44:1 (minimum 3:1) _(1366×768 normal, 844×390 normal)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/` — a.oeuvre-lien > figure.media.oeuvre-media > picture > img « Marcel Baugier, N° 827, acrylique sur toile, 100 × » — o-827-100x100-toile-2007 (5/5, faible, 42 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — a.oeuvre-lien > figure.media.oeuvre-media > picture > img « Marcel Baugier, N° 827, acrylique sur toile, 100 × » — o-827-100x100-toile-2007 (5/5, faible, 30 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### premier écran : information clé hors de l’écran (4)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.hero-actions:nth-of-type(3) > span.hero-info « 113 œuvres, de 1980 à 2024 · prix sur demande » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/atelier` — section#debut > div.atelier-tete-texte.conteneur > p.actions:nth-of-type(3) > span.info-cle « 207 rue des Tanneurs, 83670 Barjols » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — div.contact-tete-texte > dl.coordonnees > div:nth-of-type(1) > dd « 207 rue des Tanneurs, 83670 Barjols » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/parcours` — section#debut > div.parcours-tete-texte.conteneur > p.actions:nth-of-type(3) > span.info-cle « Né le 13 juin 1946 à Barjols » _(390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — p[data-fx-rangee=""]:nth-child(1) ; p[data-sens="-1"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — div.mur.mur--photo:nth-of-type(2) > div.mur-scene > figure.media.mur-photo > figcaption.mention-ia « Illustration générée » — avec div.conteneur.chezvous-grille > div.mur.mur--photo:nth-of-type(2) > div.mur-scene > p.mur-repere « Console : 180 cm » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/atelier` — section#chiffres > ul.grands-chiffres.fx-fini > li:nth-of-type(1) > strong « 1985 » — avec section#chiffres > ul.grands-chiffres.fx-fini > li:nth-of-type(1) > span « l'année où le peintre construit l'atelier » _(1366×768 normal)_
- **textes qui se chevauchent** — `/atelier` — section#chiffres > ul.grands-chiffres.fx-fini > li:nth-of-type(2) > strong « 300 » — avec section#chiffres > ul.grands-chiffres.fx-fini > li:nth-of-type(2) > span « m² sous la charpente des tanneries » _(1366×768 normal)_
- **textes qui se chevauchent** — `/atelier` — section#chiffres > ul.grands-chiffres.fx-fini > li:nth-of-type(3) > strong « 2 » — avec section#chiffres > ul.grands-chiffres.fx-fini > li:nth-of-type(3) > span « espaces : l'atelier et la salle d'exposition » _(1366×768 normal)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/atelier` — section#debut > div.atelier-tete-texte.conteneur > p.actions:nth-of-type(3) > a.bouton « Préparer la visite » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/parcours` — section#debut > div.parcours-tete-texte.conteneur > p.actions:nth-of-type(3) > a.bouton « Voir les expositions » _(390×844 sansJs, 320×568 sansJs)_

### élément recouvert (1)

- **élément recouvert** — `/contact` — section#venir > figure.carte-var > svg > g:nth-of-type(2) — par section#venir > figure.carte-var > svg > path _(390×844 normal, 1366×768 normal)_

### épinglage : image isolée différente (flash) (52)

- **épinglage : image isolée différente (flash)** — `/` — à 650 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 667 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 683 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 700 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 717 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 733 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 750 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 767 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 783 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 800 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 817 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 833 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 850 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 867 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 883 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 900 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 917 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 933 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 950 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 967 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 983 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1000 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1017 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1067 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1083 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1483 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1517 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1533 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1550 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1567 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1583 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1600 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1617 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1633 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1650 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1667 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1683 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1700 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1717 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1733 ms (films/epinglage-1.png) _(1366×768)_
- … et 12 autres (rapport.json)

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (6)

- **section sans visuel** — `/` — section#acquerir « ACQUÉRIR UNE TOILE Les prix se donnent à l'atelier » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansWebgl, 390×844 normal, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/atelier` — section#visiter « L'atelier en vidéo Le peintre a publié une visite  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#formulaire « Écrire au peintre Pour demander le prix d'une œuvr » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/oeuvres` — section#en-ligne « Aussi en ligne Une sélection est proposée sur Rise » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/parcours` — section#vautrin « « BAUGIER brûle sous ses glacis » L'écrivain Jean  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/parcours` — section#expositions « 40 expositions Telles qu'elles figurent sur le sit » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (100)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « PEINTRE ABSTRAIT · BARJOLS, VAR » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-oeuvre:nth-of-type(3) > p.cartel.hero-cartel > span:nth-of-type(1) « N° 1368 · Acrylique sur toile · 80 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#manifeste > div.manifeste-texte > p.surtitre:nth-of-type(1) « CE QU'EN DIT JEAN VAUTRIN » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#salle-1990 > figure.oeuvre.salle-oeuvre:nth-of-type(2) > figcaption.cartel > span:nth-of-type(1) « N° 414 · 85 × 70 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#salle-2000 > figure.oeuvre.salle-oeuvre:nth-of-type(1) > figcaption.cartel > span:nth-of-type(1) « N° 689 · 130 × 110 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#salle-2000 > figure.oeuvre.salle-oeuvre:nth-of-type(2) > figcaption.cartel > span:nth-of-type(1) « N° 754 · 92 × 73 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#salle-2000 > figure.oeuvre.salle-oeuvre:nth-of-type(3) > figcaption.cartel > span:nth-of-type(1) « N° 827 · 100 × 100 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#salle-2010 > figure.oeuvre.salle-oeuvre:nth-of-type(1) > figcaption.cartel > span:nth-of-type(1) « N° 1128 · 106 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#salle-2010 > figure.oeuvre.salle-oeuvre:nth-of-type(2) > figcaption.cartel > span:nth-of-type(1) « N° 1369 · 80 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#salle-2010 > figure.oeuvre.salle-oeuvre:nth-of-type(3) > figcaption.cartel > span:nth-of-type(1) « N° 1206 · 100 × 70 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#atelier > div.atelier-bloc-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « L'ATELIER-GALERIE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.mur.mur--photo:nth-of-type(2) > div.mur-scene > figure.media.mur-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.chezvous-grille > div.mur.mur--photo:nth-of-type(2) > div.mur-scene > p.mur-repere « Console : 180 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#acquerir > div.acquerir-tete > p.surtitre:nth-of-type(1) « ACQUÉRIR UNE TOILE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — section#debut > div.atelier-tete-texte.conteneur > p.surtitre:nth-of-type(1) « L'ATELIER-GALERIE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — div.conteneur.fin-oeuvre-grille > figure.oeuvre.fin-oeuvre-toile > figcaption.cartel > span:nth-of-type(1) « N° 1128 · 106 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.conteneur.fin-oeuvre-grille > figure.oeuvre.fin-oeuvre-toile > figcaption.cartel > span:nth-of-type(1) « N° 689 · 130 × 110 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — ul.cat-mur.fx-fini > li.cat-item:nth-of-type(1) > p.cartel > span:nth-of-type(1) « N° 1388 · 70 × 50 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — ul.cat-mur.fx-fini > li.cat-item:nth-of-type(2) > p.cartel > span:nth-of-type(1) « N° 1385 · 70 × 50 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — ul.cat-mur.fx-fini > li.cat-item:nth-of-type(3) > p.cartel > span:nth-of-type(1) « N° 1383 · 70 × 50 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — ul.cat-mur.fx-fini > li.cat-item:nth-of-type(4) > p.cartel > span:nth-of-type(1) « N° 1382 · 70 × 50 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — ul.cat-mur.fx-fini > li.cat-item:nth-of-type(5) > p.cartel > span:nth-of-type(1) « N° 1381 · 70 × 50 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — ul.cat-mur.fx-fini > li.cat-item:nth-of-type(6) > p.cartel > span:nth-of-type(1) « N° 1380 · 70 × 50 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — ul.cat-mur.fx-fini > li.cat-item:nth-of-type(7) > p.cartel > span:nth-of-type(1) « N° 1370 · 70 × 50 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/oeuvres` — ul.cat-mur.fx-fini > li.cat-item:nth-of-type(8) > p.cartel > span:nth-of-type(1) « N° 1375 · 70 × 50 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- … et 75 autres (rapport.json)

### typographie française (3)

- **typographie française** — `/` — section#manifeste > div.manifeste-texte > blockquote.citation > p « « Il est un peu le Matisse de l'abstraction. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/atelier` — section#visiter > div.carte-info:nth-of-type(2) > ul.liste-lieux.fx-fini > li:nth-of-type(3) « Draguignan Galerie « Le Hangart » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/parcours` — div.conteneur.vautrin-grille > div > blockquote.vautrin-citation > p « « J'aime l'ami et je n'en finis pas de découvrir l » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/contact` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **parcours:projet** : page.click: Timeout 30000ms exceeded.
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 41 min de travail pour 75 min de budget, 13 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 8 min pour 5 prévues.
- Audit rapide : étapes lourdes sur /, /atelier, /contact, /oeuvres, /parcours.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2754 ms depuis le premier octet
- Ouverture /atelier (1366×768) : 2464 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2524 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /oeuvres (1366×768) : 2546 ms depuis le premier octet
- Ouverture /parcours (1366×768) : 2496 ms depuis le premier octet
- Ouverture / (390×844) : 2740 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2549 ms depuis le premier octet
- Ouverture /contact (390×844) : 2565 ms depuis le premier octet
- Ouverture /oeuvres (390×844) : 2529 ms depuis le premier octet
- film de l'ouverture /oeuvres 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /parcours (390×844) : 2475 ms depuis le premier octet
- film de l'ouverture /parcours 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 394 images d’intro, 13 de voile et 159 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /oeuvres : aucune section épinglée ou plein écran.
- Tient dans l'écran /parcours : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 541, tâche la plus longue 0 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 226, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 182, tâche la plus longue 0 ms
- Fluidité /oeuvres 1366×768 (molette) : 1 % d'images lentes sur 520, tâche la plus longue 119 ms
- Fluidité /parcours 1366×768 (molette) : 0 % d'images lentes sur 341, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1331, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /oeuvres 390×844 (doigt) : 0 % d'images lentes sur 1409, tâche la plus longue 0 ms
- Fluidité /parcours 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Vitesse / : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /oeuvres : 0.60 s de calcul au chargement (téléphone ralenti).
- Vitesse /parcours : 0.36 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,ecran,parcours
```
