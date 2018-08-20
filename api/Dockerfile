FROM node:10-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8081
CMD [ "yarn", "prod" ]