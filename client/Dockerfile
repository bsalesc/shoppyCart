FROM node:10.9.0-slim as builder

WORKDIR /app/

COPY package.json yarn.lock angular.json tsconfig.json ./
COPY src/ ./src/

RUN yarn && yarn deploy

FROM nginx:1.13.12-alpine

COPY --from=builder /app/dist/shoppingList /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/

RUN touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/run/nginx.pid \
    && chown -R nginx:nginx /var/cache/nginx

USER nginx

EXPOSE 8080