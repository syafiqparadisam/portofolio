# Use base image from nodejs alpine
FROM node:20.12-alpine AS build

# Set workdir in docker container
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Build the application
# Here, we use the build secrets
RUN --mount=type=secret,id=vite_service_id \
    --mount=type=secret,id=vite_template_id \
    --mount=type=secret,id=vite_public_key \
    VITE_SERVICE_ID=$(cat /run/secrets/vite_service_id) \
    VITE_TEMPLATE_ID=$(cat /run/secrets/vite_template_id) \
    VITE_PUBLIC_KEY=$(cat /run/secrets/vite_public_key) \
    npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to the Nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port on which the app will run
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
