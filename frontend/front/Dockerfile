FROM mhart/alpine-node:16.4
WORKDIR /front-end
COPY package*.json /front-end/
RUN npm install
COPY . /front-end/
EXPOSE 3000
CMD ["npm", "start"]