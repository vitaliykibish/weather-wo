FROM node:13
WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "server.js" ]
