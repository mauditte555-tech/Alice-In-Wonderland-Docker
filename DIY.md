# Procédure de création de site web via Docker

Ce guide explique comment créer un site web sur Docker.
Pour ce faire, plusieurs étapes:
- Installer Docker Desktop sur Windows et l’utiliser avec Visual Studio Code.
- Création des fichiers HTML et JavaScript.
- Compilation et déploiement du site en local.

---

# Docker Desktop et VS Code

## Prérequis

* Windows 10 ou 11 (64 bits)
* Virtualisation activée dans le BIOS
* WSL 2 recommandé (Windows Subsystem for Linux)

---

## Installer WSL 2

Ouvre **PowerShell en administrateur** et tape :

```powershell
wsl --install
```

Redémarre ton ordinateur si demandé.

Vérifie l’installation :

```powershell
wsl --status
```

---

## Installer Docker Desktop

1. Télécharger Docker Desktop :
   https://www.docker.com/products/docker-desktop/

2. Lancer l’installateur

3. Redémarrer le PC

---

## Vérifier l’installation

Ouvre **PowerShell** ou **Invite de commandes** :

```bash
docker --version
```

Tester Docker avec :

```bash
docker run hello-world
```

Si un message de confirmation apparaît, Docker fonctionne.

---

## Installer Visual Studio Code

Télécharger VS Code :
https://code.visualstudio.com/

Installer avec les options par défaut.

---

## Installer les extensions utiles dans VS Code

Dans VS Code :

1. Cliquer sur l’onglet **Extensions**
2. Installer :

* Docker
* Remote - WSL (si utilisation de WSL)

---

## Tester Docker dans VS Code

Dans VS Code :

1. Ouvrir un dossier
2. Ouvrir le terminal intégré (Ctrl + `)
3. Taper :

```bash
docker ps
```

Si la liste des conteneurs apparaît (même vide), tout fonctionne.

---

# Création du site web

Créer les fichiers du site :

* index.html
* style.css
* script.js
* dossier audio (si musique)

Structure recommandée :

```
Alice-In-Wonderland-Docker
│
├── index.html
├── style.css
├── script.js
├── audio/
│   └── musique.mp3
```

---

# Créer le Dockerfile

Dans le dossier du projet, créer un fichier :

```
Dockerfile
```

Contenu :

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```

Ce fichier indique à Docker d’utiliser Nginx pour servir le site web.

---

# Test manuel sans Docker Compose

Construire l’image :

```bash
docker build -t nom-du-site .
```

Lancer le conteneur :

```bash
docker run -p 8080:80 nom-du-site
```

Ouvrir dans le navigateur :

http://localhost:8080

---

# Utiliser Docker Compose pour lancer le site

Docker Compose permet de gérer le site avec une seule commande.

---

## Créer le fichier docker-compose.yml

Dans le dossier du projet, créer :

```
docker-compose.yml
```

Contenu :

```yaml
version: '3.8'

services:
  site-web:
    build: .
    container_name: alice-wonderland
    ports:
      - "8080:80"
    volumes:
      - ./:/usr/share/nginx/html
    restart: unless-stopped
```

---

## Explication de la configuration

* build: .
  Construit l’image depuis le Dockerfile.

* container_name
  Nom du conteneur.

* ports
  Le site sera accessible sur http://localhost:8080

* volumes
  Permet de modifier les fichiers HTML / CSS / JS sans reconstruire l’image.

* restart: unless-stopped
  Redémarrage automatique du conteneur.

---

## Lancer le site avec Docker Compose

Dans le terminal :

```bash
docker-compose up -d
```

Site accessible sur :

http://localhost:8080

---

## Arrêter le site

```bash
docker-compose down
```

---

## Voir les conteneurs actifs

```bash
docker ps
```

---

## Mettre à jour le site

Si modification HTML / CSS / JS :

Recharger simplement la page du navigateur.

Si modification du Dockerfile :

```bash
docker-compose up -d --build
```

---

# Structure finale du projet

```
Alice-In-Wonderland-Docker
│
├── docker-compose.yml
├── Dockerfile
├── index.html
├── style.css
├── script.js
└── audio/
    └── musique.mp3
```

---

# Résumé de la procédure complète

1. Installer WSL 2
2. Installer Docker Desktop
3. Vérifier Docker avec hello-world
4. Installer VS Code et extensions Docker
5. Créer les fichiers du site
6. Créer le Dockerfile
7. Créer docker-compose.yml
8. Lancer le site avec :

```bash
docker-compose up -d
```

Le site est maintenant opérationnel en local.

![RugbyYayGIF](https://github.com/user-attachments/assets/6dd36e75-8732-40bf-a652-9e910dca71dc)
