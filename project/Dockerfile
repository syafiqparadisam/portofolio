# Use base image from nodejs alpine
FROM node:20.12-alpine

# Set workdir in docker container
WORKDIR /app

# Copy all file inside docker container
# COPY package*.json .
COPY . .

# Install dependencies
RUN npm install

RUN npm run build

# runs app
CMD npm run preview

