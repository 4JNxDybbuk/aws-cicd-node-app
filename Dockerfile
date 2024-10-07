FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

FROM node:18-alpine AS final
WORKDIR /app
COPY  --from=base /app /app/
EXPOSE 5000
CMD [ "node" , "index.js" ]