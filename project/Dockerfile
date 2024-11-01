# Use base image from nodejs alpine
FROM node:20.12-alpine AS build

# Set workdir in docker container
WORKDIR /app

COPY package*.json .

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Definisikan argumen build
ARG VITE_SERVICE_ID
ARG VITE_TEMPLATE_ID
ARG VITE_PUBLIC_KEY

# Set environment variable dari argumen
ENV VITE_SERVICE_ID=$VITE_SERVICE_ID
ENV VITE_PUBLIC_KEY=$VITE_PUBLIC_KEY
ENV VITE_TEMPLATE_ID=$VITE_TEMPLATE_ID

RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine

# Copy the build output to the Nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 80

# Adding healthcheck to container
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost:80/ || exit 1

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
