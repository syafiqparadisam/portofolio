# Use base image from nodejs alpine
FROM node:20.12-alpine

# Set workdir in docker container
WORKDIR /app

# Copy all file inside docker container
COPY . .

# Install dependencies
RUN npm install

# Building app 
RUN npm run build

# runs app
CMD [ "npm", "run","preview"]

