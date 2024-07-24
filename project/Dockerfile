# Use base image from nodejs alpine
FROM node:20.12-alpine AS build

# Set workdir in docker container

# Copy source code


RUN --mount=type=secret,id=VITE_TEMPLATE_ID \
    VITE_TEMPLATE_ID=$(cat /run/secrets/VITE_TEMPLATE_ID)

RUN --mount=type=secret,id=VITE_PUBLIC_KEY \
    VITE_PUBLIC_KEY=$(cat /run/secrets/VITE_PUBLIC_KEY)

RUN --mount=type=secret,id=VITE_SERVICE_ID \
    VITE_SERVICE_ID=$(cat /run/secrets/VITE_SERVICE_ID)

# RUN  export VITE_SERVICE_ID=$(cat /run/secrets/VITE_SERVICE_ID) \
# && export VITE_TEMPLATE_ID=$(cat /run/secrets/VITE_TEMPLATE_ID) \
# && export VITE_PUBLIC_KEY=$(cat /run/secrets/VITE_PUBLIC_KEY)

WORKDIR /app

COPY . .
# ENV VITE_PUBLIC_KEY=Y5qSjyArYPDPZXVdM
# ENV VITE_SERVICE_ID=service_gyicy3e
# ENV VITE_TEMPLATE_ID=template_fo97i6y

# Install dependencies
RUN npm install

# Build the application
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
