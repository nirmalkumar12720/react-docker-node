FROM node:16.15.1
WORKDIR /back-end
COPY package*.json /back-end/
RUN npm install
RUN npm install -g nodemon
COPY . /back-end/
EXPOSE 5000
CMD ["npm","start"]
