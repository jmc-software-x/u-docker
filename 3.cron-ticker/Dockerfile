FROM node:19.2-alpine3.16

WORKDIR /app

COPY app.js package.json ./

RUN npm install

CMD ["node", "app.js"]

#1 > docker build --tag cron-ticker .
#2 > docker container run cron-ticker


#? Create Version Image
#1 > docker tag cron-ticker:latest cron-ticker:1.3.0

#? Build with specific version
#1 > docker build --tag cron-ticker:1.3.0 .

#? Rename image
#1 > docker tag cron-ticker:viper jalzdelezz/ud-node-cronticker:1.3.0

#? Push to Docker Hub
#1 > docker push jalzdelezz/ud-node-cronticker:1.3.0

#? Get and run the image
#1 > docker container run jalzdelezz/ud-node-cronticker:1.3.0
