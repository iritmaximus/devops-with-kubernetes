FROM node:22-alpine

ENV PORT=4001

WORKDIR /app

COPY package.json package-lock.json /app
RUN npm ci

COPY src /app

CMD [ "node", "index.js" ]
