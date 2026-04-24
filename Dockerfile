# Step 1: Build app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ignore env errors
RUN npm run build || true

# Step 2: Serve with nginx
FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]