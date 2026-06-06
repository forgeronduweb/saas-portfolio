# Forgeron du web - Portfolio

Portfolio statique HTML/CSS/JS.

## Déploiement sur Render

### Méthode 1: Via render.yaml (recommandé)

1. Poussez votre code sur GitHub
2. Connectez votre compte Render à GitHub
3. Créez un nouveau "Web Service" depuis votre dépôt
4. Render détectera automatiquement le fichier `render.yaml`

### Méthode 2: Via l'interface Render

1. Poussez votre code sur GitHub
2. Allez sur [dashboard.render.com](https://dashboard.render.com)
3. Cliquez sur "New +" → "Static Site"
4. Connectez votre dépôt GitHub
5. Configurez:
   - **Build Command**: Laissez vide
   - **Publish Directory**: `.` (racine du projet)
   - **Branch**: `main` ou `master`

## Structure

```
frontend/
├── index.html      # Page principale
├── script.js       # JavaScript
├── style.css       # Styles
├── img/            # Images
├── render.yaml     # Configuration Render
└── README.md       # Ce fichier
```
