FROM nginx:1.13.12-alpine

COPY dist/shoppingList /usr/share/nginx/html

WORKDIR /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/

RUN touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/run/nginx.pid \
    && chown -R nginx:nginx /var/cache/nginx

USER nginx

EXPOSE 8080