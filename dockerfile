FROM node:latest

USER root

RUN npm install -g @nestjs/cli

EXPOSE 5001

CMD [ "node" ]