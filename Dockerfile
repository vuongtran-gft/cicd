FROM --platform=linux/amd64 node:16

WORKDIR /app

# install dependencies 
# A Wildcard to make sure that we will copy both package.json and package-lock.json
COPY package*.json /app/

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]