FROM node:19.2-alpine3.16

WORKDIR /app

COPY app.js package.json ./

RUN npm install

CMD ["node", "app.js"]

#1 > docker build --tag cron-ticker .
#2 > docker container run cron-ticker 