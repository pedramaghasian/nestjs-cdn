FROM openresty/openresty:1.21.4.1-0-bullseye-fat

RUN opm get ledgetech/lua-resty-http

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

