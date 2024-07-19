# Use base image from nodejs alpine
FROM node:20.12-alpine as build

# Set workdir in docker container
WORKDIR /app

# COPY package*.json .
COPY . .

# Install dependencies
RUN npm install

RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine

# Copy the build output to the Nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port on which the app will run
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]