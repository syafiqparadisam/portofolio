# Use base image from nodejs alpine
FROM node:22.5-alpine

# Set workdir in docker container
WORKDIR /app

# Copy all file inside docker container
COPY package*.json .

# Install dependencies
RUN npm install

COPY . .

# runs app
CMD ["npm run build && npm run preview"]

