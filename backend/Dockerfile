FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app
COPY . .
RUN chown -R node /home/node/app
COPY ./startup.sh /
RUN chmod +x /home/node/app/startup.sh
USER node
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "sh", "/home/node/app/startup.sh" ]
# CMD ["npm", "start" ]