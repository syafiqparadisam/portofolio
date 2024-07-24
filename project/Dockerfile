# Use base image from nodejs alpine
FROM node:20.12-alpine AS build

# Set workdir in docker container
WORKDIR /app

# Copy source code

RUN --mount=type=secret,id=vite_service_id | \
    cat /run/secrets/vite_service_id


RUN --mount=type=secret,id=vite_template_id | \
    cat /run/secrets/vite_template_id


RUN --mount=type=secret,id=vite_public_key | \
    cat /run/secrets/vite_public_key

COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

RUN echo ${VITE_PUBLIC_KEY}
RUN echo ${VITE_TEMPLATE_ID}
RUN echo ${VITE_SERVICE_ID}


# Use a lightweight web server to serve the app
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to the Nginx web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port on which the app will run
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
