# Utilise l'image officielle de Node.js comme image de base
FROM node:latest

# Définit le répertoire de travail
WORKDIR /app

# Copie les fichiers de votre application dans le répertoire de travail
COPY package*.json ./
COPY . .

# Installe les dépendances
RUN npm install

# Expose le port 3000 utilisé par votre application
EXPOSE 3000

# Démarre l'application
CMD ["npm", "start"]
