# base image
FROM node:9.6.1

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

EXPOSE 8080

RUN npm install
RUN npm install -g nodemon

CMD npm start