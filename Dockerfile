FROM node:16-alpine AS build

COPY . /farewell-app

WORKDIR /farewell-app

COPY package*.json ./

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
