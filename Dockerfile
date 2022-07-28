FROM node:16

EXPOSE 8080

RUN mkdir -p /home/node/app/Key/node_modules

WORKDIR /home/node/app/Key

COPY server/ ./

RUN npm install

RUN chown -R node:node .

USER node

CMD [ "node","build/index.js" ]
