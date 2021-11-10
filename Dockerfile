FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

EXPOSE 19000 19001 19002

RUN npm install && npm install -g expo-cli

COPY . ./

CMD [ "npm", "start" ]