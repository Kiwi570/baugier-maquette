# Galerie Baugier · maquette

Maquette de présentation du site de **Marcel Baugier**, peintre abstrait, atelier-galerie de Barjols (Var).
Adresse en ligne : https://baugier-maquette.vercel.app

## Pages (v2)

- **Accueil** :
  - la toile n° 1368 qui se construit (intro), puis la lumière de la verrière ;
  - le mot de Jean Vautrin ;
  - quatre salles où les toiles s'accrochent au défilement et où le mur prend leur teinte ;
  - la plus grande toile (240 × 145 cm), dont les cotes se tracent ;
  - l'atelier des tanneries ;
  - « Chez vous » : accrochage à l'échelle réelle au-dessus d'une console de 180 cm, avec un cartel de musée ;
  - reconnaissance, acquérir ;
  - un mur d'accrochage en salon de dix toiles pour venir à l'atelier.
- **Œuvres** : les 113 œuvres, filtrables par période, support et format (les filtres restent dans l'adresse), plus « Une œuvre au hasard ». La visionneuse propose une loupe, « Voir au mur » avec cartel et « Demander cette œuvre ». Chaque œuvre a son lien direct : `/oeuvres?oeuvre=1368`.
- **L'atelier** : la salle des tanneries, les chiffres, la table aux couleurs avec « Sur quoi il peint », les toiles au mur, la vidéo Instagram, les expositions permanentes.
- **Parcours** : la frise de la vie du peintre, suivie d'un point qui avance au défilement ; le texte de Jean Vautrin ; les 40 expositions par région (en accordéon sur téléphone) ; les ventes et achats publics.
- **Contact** : téléphone, e-mail et adresse, un formulaire simulé (prérempli depuis une œuvre) et un schéma d'accès.
- **404** : un cadre vide.

Pages du site actuel non reprises : aucune (les quatre pages par décennie sont réunies dans Œuvres, avec un lien direct par période : `/oeuvres?decennie=1980`).

## À fournir par le client

| Élément | État |
|---|---|
| Mentions légales (éditeur, directeur de la publication) | à compléter |
| Politique de confidentialité (formulaire de contact) | à compléter |
| Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse à vérifier au moment de la mise en ligne) | à compléter |
| SIRET ou numéro de la Maison des artistes / Urssaf artistes-auteurs | à compléter |
| Horaires ou conditions de visite de l'atelier (non publiés : le site dit « appelez avant de venir ») | à compléter |
| Prix des œuvres (affichés « Prix sur demande ») et disponibilité de chaque œuvre (vendue, réservée, collection privée : seule la n° 703 est notée « collection privée ») | à compléter |
| Titres des œuvres (le site actuel n'a que des numéros) | facultatif |
| Références, dimensions et années des 21 œuvres des années 1980, de 8 œuvres des années 1990 et de 3 des années 2000, sans légende sur le site actuel (affichées « Sans numéro ») | à compléter |
| Années des expositions (seules trois sont datées) | facultatif |
| Sous-préfecture citée dans les achats publics : « Châlons-sur-Saône » (Chalon-sur-Saône ou Châlons-en-Champagne ?) | à confirmer |
| Liste et photos des sérigraphies (une seule image sur le site actuel) | facultatif |
| Comptes Instagram, Facebook (les icônes du site actuel mènent aux comptes de Wix France) | à compléter |
| Crédits des illustrations générées : collines du Haut-Var (Parcours), salon au mur blanc (accrochage à l'échelle), cadre vide (404) | à reporter sur le site final |

Retiré ou remplacé faute d'information : les prix (« Prix sur demande »), les horaires (« Appelez avant de venir pour être sûr de trouver le peintre à l'atelier »), le nombre exact d'expositions par année.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête `X-Robots-Tag` dans `vercel.json`), le formulaire simulé (le brancher sur un vrai envoi), la ligne « Maquette de présentation » du pied de page, les mentions « à compléter ».
- Garder : la mention « Illustration générée » sur les trois images créées par IA.

## Travailler sur la maquette

- Textes : `donnees/textes/fr.json` ; œuvres : `donnees/oeuvres.json` ; expositions, parcours, accueil : `donnees/*.json`.
- Pages : `source/pages/*.mjs` ; style : `assets/css/site.css` ; effets : `assets/js/site.js` et `assets/js/catalogue.js`.
- Générer les pages : `node outils/generer.mjs` (ne jamais modifier les `.html` à la main).
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/rapport.md`).
