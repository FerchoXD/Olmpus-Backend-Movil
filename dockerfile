FROM node:20.11.1-slim

WORKDIR /usr/src/app

RUN npm install

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]