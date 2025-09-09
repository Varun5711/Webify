FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3002

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
  CMD wget -q -O- http://localhost:3002 || exit 1

CMD ["node", "server.js"]