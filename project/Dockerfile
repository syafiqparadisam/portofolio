# Use base image from nodejs alpine
FROM node:20.12-alpine AS build

# Set workdir in docker container
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Mount environment variable from github and build app
RUN --mount=type=secret,id=VITE_TEMPLATE_ID,required=true,mode=0666 \
    --mount=type=secret,id=VITE_PUBLIC_KEY,required=true,mode=0666 \
    --mount=type=secret,id=VITE_SERVICE_ID,required=true,mode=0666 \
    VITE_TEMPLATE_ID=$(cat /run/secrets/VITE_TEMPLATE_ID) \
    VITE_PUBLIC_KEY=$(cat /run/secrets/VITE_PUBLIC_KEY) \
    VITE_SERVICE_ID=$(cat /run/secrets/VITE_SERVICE_ID) \
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
