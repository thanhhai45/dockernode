# syntax=docker/dockerfile:1

FROM node:14.15.1 as base

ENV NODE_ENV=production

WORKDIR /app



RUN npm install --production

COPY . .


CMD ["node", "server.js"]
