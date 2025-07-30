FROM node:19.2-alpine3.16

WORKDIR /app

COPY app.js package.json ./

RUN npm install

CMD ["node", "app.js"]

#1 > docker build --tag cron-ticker .
#2 > docker container run cron-ticker


#? Rename image
#1 > docker tag cron-ticker:latest cron-ticker:1.3.0

#? Build with specific version
#1 > docker build --tag cron-ticker:1.3.0 .
