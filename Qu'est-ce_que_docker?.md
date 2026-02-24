# Présentation de Docker

## 1. Qu’est-ce que Docker ?

Docker est un outil qui permet d’exécuter une application dans un environnement isolé appelé **conteneur**.

Un conteneur est une sorte de boîte qui contient tout ce dont une application a besoin pour fonctionner :

* le programme
* les bibliothèques
* les dépendances
* la configuration
* le serveur si nécessaire

Grâce à cela, l’application fonctionne de la même manière sur n’importe quel ordinateur.

---

## 2. Pourquoi Docker existe ?

Dans un environnement informatique classique, une application dépend fortement du système sur lequel elle est installée.

Cela crée souvent des problèmes :

* différences de versions de logiciels
* dépendances manquantes
* configuration incorrecte
* incompatibilités entre machines

Docker résout ce problème en fournissant un environnement standardisé qui fonctionne partout de la même façon.

---

## 3. À quoi sert Docker ?

Docker sert principalement à exécuter des applications de manière fiable et reproductible.

On l’utilise notamment pour :

### Développement

Tous les développeurs utilisent exactement le même environnement.

### Déploiement

Une application peut être envoyée sur un serveur ou dans le cloud sans modification.

### Tests

Il est possible de lancer rapidement des environnements temporaires pour tester.

### Isolation des services

Chaque composant d’un système peut fonctionner séparément :

* site web
* base de données
* API
* services internes

---

## 4. Quand utilise-t-on Docker ?

Docker est utilisé lorsque l’on veut :

* développer un site ou une application
* déployer un logiciel sur un serveur
* travailler en équipe avec un environnement commun
* automatiser l’installation d’un programme
* tester plusieurs configurations rapidement
* reproduire un environnement de production
* exécuter plusieurs services indépendants

---

## 5. Les avantages de Docker

### Portabilité

Une application fonctionne partout de la même façon.

### Rapidité d’installation

Un environnement complet peut être lancé en une seule commande.

### Isolation

Les applications ne se perturbent pas entre elles.

### Reproductibilité

Le même environnement est utilisé en développement, test et production.

### Gain de temps

Moins de configuration manuelle sur les machines.

### Performance

Les conteneurs sont plus légers que les machines virtuelles.

---

## 6. Les inconvénients de Docker

### Courbe d’apprentissage

Il faut comprendre plusieurs concepts techniques (images, conteneurs, volumes, réseaux, etc.).

### Complexité en production

Gérer de nombreux conteneurs nécessite des outils supplémentaires.

### Isolation partielle

Les conteneurs partagent le système de l’ordinateur hôte.

### Gestion du stockage

La persistance des données doit être configurée correctement.

### Consommation de ressources

Un grand nombre de conteneurs peut utiliser beaucoup de mémoire ou de processeur.

---

## 7. Différence avec une machine virtuelle

### Machine virtuelle

* simule un ordinateur complet
* plus lourde
* démarrage plus lent

### Docker

* exécute uniquement l’application
* plus léger
* démarrage rapide

---

## 8. Résumé

Docker permet de :

* emballer une application avec tout ce dont elle a besoin
* la faire fonctionner partout de la même manière
* simplifier le développement et le déploiement
* isoler les différents services d’un système
* gagner du temps et éviter les erreurs de configuration
