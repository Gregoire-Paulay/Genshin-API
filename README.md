# Genshin Impact API

Mon API Genshin Impact en FR avec de la data sur les Personnages, Artéfacts, Boss hebdomadaires, Boss de monde, Matériaux d'Ascension et d'Aptitudes.

<br />

## Artéfacts

### Route : /artifacts

Method: GET
Description: Liste de tous les artéfacts

### Route : /artifacts/details

Method: GET
Description: Détails sur 1 artéfacts

| query | info              | required |
| ----- | ----------------- | -------- |
| id    | id de l'artéfact  | yes      |
| name  | nom de l'artéfact | yes      |

Seulement 1 des paramètres est nécéssaire

<br/>

## Matériaux d'aptitudes

### Route : /books

Method: GET
Description: Liste de tous les matériaux d'aptitudes

### Route : /books/domain

Method: GET
Description: Liste des matériaux d'aptitude d'un domaine

| query | info                       | required |
| ----- | -------------------------- | -------- |
| id    | id du domaine              | yes      |
| name  | nom du matériau d'aptitude | yes      |

Seulement 1 des paramètres est nécéssaire

### Route : /books/details

Method: GET
Description: Détails d'un matériau d'aptitude

| query | info                       | required |
| ----- | -------------------------- | -------- |
| name  | nom du matériau d'aptitude | yes      |

<br/>

## Personnages

### Route : /characters

Method: GET
Description: Liste de tous les personnages

### Route : /characters/details

Method: GET
Description: Information d'un personnage

| query | info              | required |
| ----- | ----------------- | -------- |
| id    | id du personnage  | yes      |
| name  | nom du personnage | yes      |

Seulement 1 des paramètres est nécéssaire

<br/>

## Daily

### Route : /daily

Method: GET
Description: Matériaux de personnages et d'armes disponible de e manière journalière
<br/>

## Boss de monde

### Route : /boss/normal

Method: GET
Description: Liste des boss de monde

### Route : /boss/normal/details

Method: GET
Description: Information sur 1 boss de monde

| query | info        | required |
| ----- | ----------- | -------- |
| id    | id du boss  | yes      |
| name  | nom du boss | yes      |

Seulement 1 des paramètres est nécéssaire

<br/>

## Matériaux d'ascension

### Route : /stone

Method: GET
Description: Liste de tout les matériaux d'ascension (Pierres)

### Route : /stone/details

Method: GET
Description: Détails sur 1 matériau d'ascension

| query | info                        | required |
| ----- | --------------------------- | -------- |
| id    | id du matériau d'ascension  | yes      |
| name  | nom du matériau d'ascension | yes      |

Seulement 1 des paramètres est nécéssaire

<br/>

## Armes

### Route : /weapon/materials

Method: GET
Description: Liste des matériaux d'ascension d'armes

### Route : /weapon/materials/details

Method: GET
Description: Détails sur les matériaux d'ascension d'un domaine

| query | info                       | required |
| ----- | -------------------------- | -------- |
| id    | id du matériau d'ascension | yes      |

### Route : /weapons

Method: GET
Description: Liste de toutes les armes

### Route : /weapons/details

Method: GET
Description: Information sur 1 arme

| query | info          | required |
| ----- | ------------- | -------- |
| id    | id de l'arme  | yes      |
| name  | nom de l'arme | yes      |

Seulement 1 des paramètres est nécéssaire

<br/>

## Boss hebdomadaires

### Route : /boss/weekly

Method: GET
Description: Liste des boss hebdomadaires

### Route : /boss/weekly/details

Method: GET
Description: Information sur 1 boss hebdomadaire

| query | info                     | required |
| ----- | ------------------------ | -------- |
| id    | id du boss hebdomadaire  | yes      |
| name  | nom du boss hebdomadaire | yes      |

Seulement 1 des paramètres est nécéssaire

<br/>

## Running the project

Clone this repository :

```
git clone https://github.com/Gregoire-Paulay/Genshin-API.git
cd Genshin-API
```

Install packages :

```
npm install

```

When installation is complete, you have to launch :

```
npx nodemon server.ts

```

Once server is running on localhost you can use your browser or <a href="https://www.postman.com/">postman</a> to test it

## Star, Fork, Clone & Contribute

Feel free to contribute on this repository, if you see any arror in this genshin API feel free to contact me. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!
