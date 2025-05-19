FROM node:16-alpine

WORKDIR /app

# Kopieren der package.json und Installation der Abhängigkeiten mit legacy-peer-deps
COPY package*.json ./
RUN npm config set legacy-peer-deps true
RUN npm install --legacy-peer-deps

# Erst danach den restlichen Code kopieren
COPY . .

# Exportieren der Umgebungsvariable für den Build
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Build ausführen
RUN npm run build

# Installieren von serve für statisches Hosting
RUN npm install -g serve

# Port exponieren
EXPOSE 3000

# Server starten
CMD ["serve", "-s", "build"]