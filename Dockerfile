FROM node:18-alpine

WORKDIR /app

# Kopiere package.json und package-lock.json
COPY package*.json ./

# Installiere Abhängigkeiten mit --legacy-peer-deps
RUN npm install --legacy-peer-deps

# Kopiere den Rest des Projekts
COPY . .

# Baue das Projekt
RUN npm run build

# Installiere serve für Produktion
RUN npm install -g serve

# Exponiere den Port
EXPOSE 3000

# Starte den Server
CMD ["serve", "-s", "build"]