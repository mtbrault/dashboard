# base image
FROM node:9.6.1

RUN mkdir /usr/src/api
WORKDIR /usr/src/api

ENV PATH /usr/src/api/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent

# start app
CMD ["npm", "start"]