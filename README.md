# THESE ARE My GAMES 🎮

Une application web full-stack permettant de gérer et de recenser sa propre bibliothèque de jeux vidéo. 

Ce projet est développé dans un but d'apprentissage et de perfectionnement sur l'architecture MERN (MongoDB, Express.js, React, Node.js). L'objectif principal est d'assimiler la conception d'une API RESTful avec Node.js et Express, ainsi que la manipulation d'une base de données NoSQL via MongoDB, tout en consolidant l'intégration front-end avec React.

## 🚀 Fonctionnalités

* **Authentification :** Création de compte et connexion pour un accès personnalisé.
* **Tableau de bord :** Affichage de l'ensemble de la bibliothèque de jeux sous forme de fiches.
* **Gestion des fiches de jeux :** Formulaire complet permettant d'ajouter un jeu avec des informations détaillées (titre, plateforme, date de début, temps de jeu, statut, commentaires, note sur 20 et illustration).
* **Interface Responsive :** Design optimisé pour un affichage fluide sur ordinateur et sur mobile.

## 🛠️ Technologies Utilisées

### Front-End
* **Framework :** React (initialisé avec Vite)
* **Routage :** React Router DOM
* **Style :** CSS natif
* **Typographie & Icônes :** Google Fonts, FontAwesome

### Back-End (En cours d'intégration)
* **Environnement :** Node.js
* **Framework :** Express.js
* **Base de données :** MongoDB

## 📁 Architecture Front-End

L'espace de travail React est organisé de manière modulaire afin de séparer la logique de l'interface :
- `src/Assets/` : Ressources statiques, médias et logos.
- `src/Components/` : Composants UI isolés et réutilisables (ex: Header, formulaires).
- `src/Layout/` : Composants de mise en page encadrant les vues.
- `src/Pages/` : Composants principaux représentant les différentes routes de l'application (LogIn, Dashboard, Error404).

## ⚙️ Installation et Lancement en local

Prérequis : Disposer de [Node.js](https://nodejs.org/) installé sur votre machine.

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/Corentin25/These-are-my-games.git
   ```

2. Naviguer vers le dossier du projet :
   ```bash
   cd TAMG-Code
   ```

3. Installer les dépendances du projet :
   ```bash
   npm install
   ```

4. Démarrer le serveur de développement :
   ```bash
   npm run dev
   ```

L'application sera accessible localement, généralement sur `http://localhost:5173`.

## 👨‍💻 Auteur

* **Corentin**