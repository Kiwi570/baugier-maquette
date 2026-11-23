# Rapport d’audit

Projet : `baugier-maquette` · 23/11/2026 15:07:51 · 23 min · 6 page(s) · audit complet

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261123-134504-complet` · version ?v=2
- Échecs : **9**
- À regarder : **10**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (14), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (7), souris immobile (3), vitesse (5), captures (1)

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

### zone tactile sous 44 px (7)

- **zone tactile sous 44 px** — `/` — div.conteneur.mur-final-grille > div.accrochage-salon:nth-of-type(2) > div.salon-rangee:nth-of-type(1) > a.salon-toile:nth-of-type(1) « Ouvrir N° 1191, 2018 » — 43 × 63 px _(320×568 normal, 320×568 sansJs, 320×568 sansWebgl)_
- **zone tactile sous 44 px** — `/` — div.conteneur.mur-final-grille > div.accrochage-salon:nth-of-type(2) > div.salon-rangee:nth-of-type(3) > a.salon-toile:nth-of-type(3) « Ouvrir N° 1205, 2018 » — 40 × 58 px _(320×568 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl)_
- **zone tactile sous 44 px** — `/parcours` — section#expositions > div.expositions-grille:nth-of-type(2) > details.expo-groupe:nth-of-type(1) > summary « Var et Provence 22 » — 376 × 40 px _(844×390 normal, 768×1024 normal, 1024×768 normal, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +3)_
- **zone tactile sous 44 px** — `/parcours` — section#expositions > div.expositions-grille:nth-of-type(2) > details.expo-groupe:nth-of-type(2) > summary « Côte d'Azur et Monaco 5 » — 376 × 40 px _(844×390 normal, 768×1024 normal, 1024×768 normal, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +3)_
- **zone tactile sous 44 px** — `/parcours` — section#expositions > div.expositions-grille:nth-of-type(2) > details.expo-groupe:nth-of-type(3) > summary « Paris 6 » — 376 × 40 px _(844×390 normal, 768×1024 normal, 1024×768 normal, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +3)_
- **zone tactile sous 44 px** — `/parcours` — section#expositions > div.expositions-grille:nth-of-type(2) > details.expo-groupe:nth-of-type(4) > summary « Ailleurs en France 1 » — 376 × 40 px _(844×390 normal, 768×1024 normal, 1024×768 normal, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +3)_
- **zone tactile sous 44 px** — `/parcours` — section#expositions > div.expositions-grille:nth-of-type(2) > details.expo-groupe:nth-of-type(5) > summary « À l'étranger 6 » — 376 × 40 px _(844×390 normal, 768×1024 normal, 1024×768 normal, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +3)_

### texte coupé (1)

- **texte coupé** — `/` — section#grande > div.grande-collant > div.grande-cadre:nth-of-type(2) > p.cote-label.cote-label--v:nth-of-type(2) « 145 cm » — coupé par section#grande > div.grande-collant « LA PLUS GRANDE TOILE DU CATALOGUE Une toile de 2,4 » _(768×1024 normal, 768×1024 sansJs, 768×1024 sansWebgl)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/oeuvres` — div#en-ligne > p:nth-of-type(1) « Aussi en ligne. Une sélection est proposée sur Ris » — avec div#en-ligne > p.en-ligne-liens:nth-of-type(2) > a.lien-fleche:nth-of-type(1) « Rise Art » _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_

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

### section sans visuel (4)

- **section sans visuel** — `/` — section#acquerir « ACQUÉRIR UNE TOILE Les prix se donnent à l'atelier » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/atelier` — section#visiter « L'atelier en vidéo Le peintre a publié une visite  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#formulaire « Écrire au peintre Pour demander le prix d'une œuvr » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/parcours` — section#expositions « 40 expositions Telles qu'elles figurent sur le sit » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### bouton sans effet visible (1)

- **bouton sans effet visible** — `/oeuvres` — Une œuvre au hasard _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 14 min de travail pour 80 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2814 ms depuis le premier octet
- Ouverture /atelier (1366×768) : 2548 ms depuis le premier octet
- film de l'ouverture /atelier 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (1366×768) : 2608 ms depuis le premier octet
- Ouverture /oeuvres (1366×768) : 2608 ms depuis le premier octet
- Ouverture /parcours (1366×768) : 2546 ms depuis le premier octet
- Ouverture / (390×844) : 2795 ms depuis le premier octet
- Ouverture /atelier (390×844) : 2552 ms depuis le premier octet
- Ouverture /contact (390×844) : 2591 ms depuis le premier octet
- Ouverture /oeuvres (390×844) : 2589 ms depuis le premier octet
- Ouverture /parcours (390×844) : 2506 ms depuis le premier octet
- Bords de l’écran : 425 images d’intro, 12 de voile et 192 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /atelier : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /oeuvres : aucune section épinglée ou plein écran.
- Tient dans l'écran /parcours : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 475, tâche la plus longue 0 ms
- Fluidité /atelier 1366×768 (molette) : 0 % d'images lentes sur 229, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 176, tâche la plus longue 0 ms
- Fluidité /oeuvres 1366×768 (molette) : 1 % d'images lentes sur 475, tâche la plus longue 149 ms
- Fluidité /parcours 1366×768 (molette) : 0 % d'images lentes sur 328, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /atelier 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /oeuvres 390×844 (doigt) : 0 % d'images lentes sur 1387, tâche la plus longue 0 ms
- Fluidité /parcours 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /atelier : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /oeuvres : 0.58 s de calcul au chargement (téléphone ralenti).
- Vitesse /parcours : 0.39 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/oeuvres,/parcours --seulement=fichiers,mesures
```
