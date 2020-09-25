# multi-stage build
FROM node:14 as builder

# copy client code
COPY . /client

# change directory
WORKDIR /client

# install dependencies
RUN yarn

# build frontend code and dependencies
RUN yarn build

FROM nginx:1.19

CMD /bin/bash -c "envsubst '\$PORT \$REACT_APP_REMOTE_APP_SERVER_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

# heroku config:push

COPY --from=builder /client/nginx.conf /etc/nginx/conf.d/default.conf.template
# expects that it builds before 
COPY  --from=builder /client/build /usr/share/nginx/html 
