FROM node:15-alpine

EXPOSE 3000

RUN mkdir -p /home/node/app/Key/node_modules

WORKDIR /home/node/app/Key

COPY server/ ./

RUN npm install

RUN chown -R node:node .

USER node

CMD [ "node","build/index.js" ]
