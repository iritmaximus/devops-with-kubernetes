FROM node:22-alpine

ENV PORT=3001
RUN mkdir -p /usr/src/app/files

WORKDIR /app

COPY package.json package-lock.json /app
RUN npm install

COPY src /app

CMD [ "node", "src/index.js" ]
