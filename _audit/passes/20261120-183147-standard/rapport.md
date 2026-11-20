# Rapport d’audit

Projet : `baugier-maquette` · 20/11/2026 19:50:44 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261120-183147-standard` · version ?v=1
- Échecs : **5**
- À regarder : **205**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (14), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (4), souris immobile (3), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-181015-rapide-cible | rapide | /,/oeuvres,/atelier,/parcours,/contact | toutes | 86 | 115 | 2 | échecs |
| **20261120-183147-standard** (celle-ci) | standard | toutes | toutes | 5 | 205 | 2 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — p[data-fx-rangee=""]:nth-child(1) ; p[data-sens="-1"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « PEINTRE ABSTRAIT · BARJOLS, VAR » — avec div.hero-texte:nth-of-type(2) > h1.hero-titre.tete-titre > span.ligne-masque:nth-of-type(1) > span.hero-ligne.tete-ligne « Marcel » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/404` — section#debut > div.page-tete-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « 404 » — avec section#debut > div.page-tete-texte:nth-of-type(1) > h1 « Cette toile n'est pas accrochée ici » _(1920×1080 normal)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/atelier` — section#debut > div.atelier-tete-texte.conteneur > p.actions:nth-of-type(3) > span.info-cle « 207 rue des Tanneurs, 83670 Barjols » _(320×568 normal)_
- **premier écran : information clé hors de l’écran** — `/parcours` — section#debut > div.parcours-tete-texte.conteneur > p.actions:nth-of-type(3) > span.info-cle « Né le 13 juin 1946 à Barjols » _(320×568 normal)_

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

- **section sans visuel** — `/` — section#acquerir « ACQUÉRIR UNE TOILE Les prix se donnent à l'atelier » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/atelier` — section#visiter « L'atelier en vidéo Le peintre a publié une visite  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#formulaire « Écrire au peintre Pour demander le prix d'une œuvr » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/oeuvres` — section#en-ligne « Aussi en ligne Une sélection est proposée sur Rise » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/parcours` — section#vautrin « « BAUGIER brûle sous ses glacis » L'écrivain Jean  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/parcours` — section#expositions « 40 expositions Telles qu'elles figurent sur le sit » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (190)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-texte:nth-of-type(2) > p.surtitre:nth-of-type(1) « PEINTRE ABSTRAIT · BARJOLS, VAR » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-oeuvre:nth-of-type(3) > p.cartel.hero-cartel > span:nth-of-type(1) « N° 1368 · Acrylique sur toile · 80 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#manifeste > div.manifeste-texte > p.surtitre:nth-of-type(1) « CE QU'EN DIT JEAN VAUTRIN » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur.fx-fini:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(2) > figcaption.cartel > span:nth-of-type(1) « N° 414 · 85 × 70 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur.fx-fini:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(1) > figcaption.cartel > span:nth-of-type(1) « N° 689 · 130 × 110 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur.fx-fini:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(2) > figcaption.cartel > span:nth-of-type(1) « N° 754 · 92 × 73 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur.fx-fini:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(3) > figcaption.cartel > span:nth-of-type(1) « N° 764 · 92 × 73 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur.fx-fini:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(1) > figcaption.cartel > span:nth-of-type(1) « N° 1128 · 106 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur.fx-fini:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(2) > figcaption.cartel > span:nth-of-type(1) « N° 1369 · 80 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur.fx-fini:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(3) > figcaption.cartel > span:nth-of-type(1) « N° 1119 · 90 × 60 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#atelier > div.atelier-bloc-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « L'ATELIER-GALERIE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.mur.mur--photo:nth-of-type(2) > div.mur-scene > figure.media.mur-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.chezvous-grille > div.mur.mur--photo:nth-of-type(2) > div.mur-scene > p.mur-repere « Console : 180 cm » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#acquerir > div.acquerir-tete > p.surtitre:nth-of-type(1) « ACQUÉRIR UNE TOILE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(2) > figcaption.cartel > span:nth-of-type(1) « N° 414 · 85 × 70 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(1) > figcaption.cartel > span:nth-of-type(1) « N° 689 · 130 × 110 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(2) > figcaption.cartel > span:nth-of-type(1) « N° 754 · 92 × 73 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(3) > figcaption.cartel > span:nth-of-type(1) « N° 764 · 92 × 73 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(1) > figcaption.cartel > span:nth-of-type(1) « N° 1128 · 106 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(2) > figcaption.cartel > span:nth-of-type(1) « N° 1369 · 80 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.salle-mur:nth-of-type(2) > figure.oeuvre.salle-oeuvre:nth-of-type(3) > figcaption.cartel > span:nth-of-type(1) « N° 1119 · 90 × 60 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#grande > div.grande-collant > div.grande-texte > p.surtitre:nth-of-type(1) « LA PLUS GRANDE TOILE DU CATALOGUE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#grande > div.grande-collant > div.grande-texte > p.cartel:nth-of-type(2) « N° 667 · Acrylique sur toile · 240 × 145 cm · 2004 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — section#debut > div.atelier-tete-texte.conteneur > p.surtitre:nth-of-type(1) « L'ATELIER-GALERIE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/atelier` — div.conteneur.fin-oeuvre-grille > figure.oeuvre.fin-oeuvre-toile > figcaption.cartel > span:nth-of-type(1) « N° 1128 · 106 × 80 cm » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 165 autres (rapport.json)

### typographie française (3)

- **typographie française** — `/` — section#manifeste > div.manifeste-texte > blockquote.citation > p « « Il est un peu le Matisse de l'abstraction. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/atelier` — section#visiter > div.carte-info:nth-of-type(2) > ul.liste-lieux.fx-fini > li:nth-of-type(3) « Draguignan Galerie « Le Hangart » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/parcours` — div.conteneur.vautrin-grille > div > blockquote.vautrin-citation > p « « J'aime l'ami et je n'en finis pas de découvrir l » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/contact` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal, 390×844 normal)_

## Non lancé

- **parcours:projet** : page.click: Timeout 8000ms exceeded.
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 71 min de travail pour 115 min de budget, 14 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 8 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /atelier, /contact, /oeuvres, /parcours.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2802 ms depuis le premier octet
- Ouverture /atelier (1366×768) : 2471 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2536 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /oeuvres (1366×768) : 2526 ms depuis le premier octet
- Ouverture /parcours (1366×768) : 2478 ms depuis le premier octet
- Ouverture / (390×844) : 2739 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2475 ms depuis le premier octet
- Ouverture /contact (390×844) : 2529 ms depuis le premier octet
- film de l'ouverture /contact 390×844 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /oeuvres (390×844) : 2486 ms depuis le premier octet
- Ouverture /parcours (390×844) : 2510 ms depuis le premier octet
- bords de l’écran /atelier 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 468 images d’intro, 13 de voile et 195 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /oeuvres : aucune section épinglée ou plein écran.
- Tient dans l'écran /parcours : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 479, tâche la plus longue 0 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 215, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 156, tâche la plus longue 0 ms
- Fluidité /oeuvres 1366×768 (molette) : 1 % d'images lentes sur 532, tâche la plus longue 68 ms
- Fluidité /parcours 1366×768 (molette) : 0 % d'images lentes sur 326, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /oeuvres 390×844 (doigt) : 0 % d'images lentes sur 1410, tâche la plus longue 0 ms
- Fluidité /parcours 390×844 (doigt) : 0 % d'images lentes sur 1330, tâche la plus longue 0 ms
- Vitesse / : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /oeuvres : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /parcours : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours
```
