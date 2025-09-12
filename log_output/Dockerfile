FROM node:22-alpine as base

ENV PORT 3001

WORKDIR /app
COPY package.json package-lock.json /app

RUN npm ci

COPY src /app

RUN mkdir -p /usr/local

FROM base as server
CMD [ "node", "index.js" ]

FROM base as file
CMD [ "node", "file.js" ]
