#* /app /usr /lib
FROM node:24.5.0-alpine

#* cd app
WORKDIR /app

#* Dest /app
COPY package.json ./

#* Install dependencies
RUN npm install

#* Copiar todo el contenido de la carpeta actual al contenedor
COPY . .

#* Realizar testing
RUN npm run test

#* Comando run de la imagen
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

#? Crear una nueva imagen con un nombre y version
#7 > docker build -t jalzdelezz/ud-node-cronticker:mapache .
#8 > docker container run -d jalzdelezz/ud-node-cronticker:mapache
#9 > docker exec -it <container_id> sh