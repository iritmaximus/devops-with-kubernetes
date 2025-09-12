FROM node:22-alpine AS base

ENV PORT 3001

WORKDIR /app
COPY package.json package-lock.json /app

RUN npm ci

COPY src /app

RUN mkdir -p /usr/local

FROM base AS server
CMD [ "node", "server.js" ]

FROM base AS file
CMD [ "node", "file.js" ]
