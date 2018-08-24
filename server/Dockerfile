FROM node:10.9.0-slim

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

ENV DISABLE_CORS=true

EXPOSE 8081
CMD [ "yarn", "prod" ]