FROM node:18-alpine

WORKDIR /app

# Kopiere package.json zuerst für besseres Layer-Caching
COPY package*.json ./

# Konfiguriere npm und installiere Abhängigkeiten
RUN npm config set legacy-peer-deps true
RUN npm install --legacy-peer-deps

# Kopiere den restlichen Code
COPY . .

# Baue die Anwendung
RUN npm run build

# Installiere serve für statisches Hosting
RUN npm install -g serve

# Expose Port 3000
EXPOSE 3000

# Starte den Server
CMD ["serve", "-s", "build"]