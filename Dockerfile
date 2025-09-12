FROM node:22-alpine

COPY src /app
WORKDIR /app

CMD [ "node", "index.js" ]
