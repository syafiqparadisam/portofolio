# Use base image from nodejs alpine
FROM node:20.12-alpine

# Set workdir in docker container
WORKDIR /app

# build args when build this image
ARG VITE_SERVICE_ID
ARG VITE_PUBLIC_KEY
ARG VITE_TEMPLATE_ID


# set env file from args
ENV VITE_SERVICE_ID=${VITE_SERVICE_ID}
ENV VITE_PUBLIC_KEY=${VITE_PUBLIC_KEY}
ENV VITE_TEMPLATE_ID=${VITE_TEMPLATE_ID}


# Copy all file inside docker container
COPY . .

# Install dependencies
RUN npm install

# Building app 
RUN npm run build

# runs app
CMD [ "npm", "run","preview"]

