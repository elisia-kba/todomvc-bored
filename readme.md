# **TodoMVC avec Bored API**

## Description
**TodoMVC avec Bored API** est une application web interactive basée sur le projet TodoMVC classique. Ce projet intègre l'API [Bored API](https://bored-api.appbrewery) pour permettre aux utilisateurs d'ajouter aléatoirement des tâches à leur liste. Ces tâches aléatoires contiennent des activités variées accompagnées d'informations telles que le type d'activité, le nombre de participants et la durée estimée.

---

## Fonctionnalités

- Gestion classique des tâches (ajout, modification, suppression, complétion, filtrage).
- Ajout de tâches aléatoires provenant de la **Bored API**.

---

## Comment lancer le projet ?

1. **Cloner le projet** :
   ```bash
   git clone https://github.com/elisia-kba/todomvc-bored.git
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Démarrer l'application** :
   ```bash
   npm start
   ```

4. **Ouvrir l'application dans un navigateur** :
   ```
   http://localhost:4200
   ```

---

## Structure du projet

- **todo-list.component.ts** : Gère la logique pour afficher et interagir avec la liste des tâches.
- **bored.service.ts** : Service permettant de récupérer des activités aléatoires depuis la Bored API.
- **activity.model.ts** : Classe modélisant les données d’une activité avec ses attributs tels que `activity`, `type`, `price`, etc.
- **todo.service.ts** : Service pour gérer les tâches, incluant les tâches ajoutées manuellement et celles issues de la Bored API.

---

## Auteur

- Elisia KOUMBA

- [Mon GitHub](https://github.com/elisia-kba)

---

## Liens utiles

- [TodoMVC](https://todomvc.com/)
- [Bored API Documentation](https://bored-api.appbrewery.com/)

---

