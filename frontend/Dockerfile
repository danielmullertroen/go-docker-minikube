FROM node:23-alpine

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000 5173

CMD ["npm", "run", "dev"]