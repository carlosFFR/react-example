#!/bin/bash

# Construir el proyecto
npm run build

# Navegar al directorio de salida de la compilación
cd dist

# Inicializar un nuevo repositorio Git en dist
git init

# Añadir todos los archivos a Git
git add -A

# Hacer un commit
git commit -m 'deploy'

# Forzar el push a la rama gh-pages del repositorio remoto
git push -f git@github.com:carlosFFR/reac-example.git main:gh-pages

# Volver al directorio anterior
cd -
