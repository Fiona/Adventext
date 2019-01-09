FROM node

WORKDIR /adventext/webclient
COPY package.json /adventext/webclient

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]