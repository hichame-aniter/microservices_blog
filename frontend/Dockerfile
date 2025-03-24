FROM node:lts-alpine
WORKDIR /home/node/app
COPY . .
RUN chown -R node /home/node/app
USER node
RUN npm install
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]
