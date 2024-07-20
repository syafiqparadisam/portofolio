# Use base image from nodejs alpine
FROM node:20.12-alpine as build

# Set workdir in docker container
WORKDIR /app

ARG VITE_SERVICE_ID
ARG VITE_TEMPLATE_ID
ARG VITE_PUBLIC_KEY

ENV VITE_SERVICE_ID=$VITE_SERVICE_ID
ENV VITE_TEMPLATE_ID=$VITE_TEMPLATE_ID
ENV VITE_PUBLIC_KEY=$VITE_PUBLIC_KEY

# COPY package*.json .
COPY . .

# Install dependencies
RUN npm install

RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to the Nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port on which the app will run
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
