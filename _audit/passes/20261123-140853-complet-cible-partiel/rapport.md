# Rapport d’audit

Projet : `baugier-maquette` · 23/11/2026 15:13:56 · 5 min · 3 page(s) · audit complet ciblé sur /,/oeuvres,/parcours (étapes : fichiers, mesures, ecran, mouvement)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-140853-complet-cible-partiel` · version ?v=2
- Échecs : **1**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (117), balayage (3), mouvement (6), effets du plan (7), souris immobile (3)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-134504-complet | complet | toutes | toutes | 9 | 10 | 1 | échecs |
| **20261123-140853-complet-cible-partiel** (celle-ci) | complet | /,/oeuvres,/parcours | fichiers, mesures, ecran, mouvement | 1 | 2 | 0 | échecs |

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/oeuvres` — div#en-ligne > p:nth-of-type(1) « Aussi en ligne. Une sélection est proposée sur Ris » — avec div#en-ligne > p.en-ligne-liens:nth-of-type(2) > a.lien-fleche:nth-of-type(1) « Rise Art » _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (1)

- **section sans visuel** — `/parcours` — section#expositions « 40 expositions Telles qu'elles figurent sur le sit » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 14 min de travail pour 80 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /oeuvres : aucune section épinglée ou plein écran.
- Tient dans l'écran /parcours : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/oeuvres --seulement=fichiers,mesures
```
