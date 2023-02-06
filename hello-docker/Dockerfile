FROM node

RUN npm i -g nodemon 

WORKDIR /app

COPY package.json .

RUN npm i

COPY .  .

EXPOSE 3500

CMD ["npm", "run","dev" ]

