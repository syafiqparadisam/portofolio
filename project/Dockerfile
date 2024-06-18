# Gunakan image dasar nodejs yang tersedia di Docker Hub
FROM node:20.12-alpine

# Tetapkan direktori kerja di dalam container
WORKDIR /app

ARG VITE_SERVICE_ID
ARG VITE_PUBLIC_KEY
ARG VITE_TEMPLATE_ID

ENV VITE_SERVICE_ID=${VITE_SERVICE_ID}
ENV VITE_PUBLIC_KEY=${VITE_PUBLIC_KEY}
ENV VITE_TEMPLATE_ID=${VITE_TEMPLATE_ID}


# # Salin semua file proyek ke dalam direktori kerja
COPY . .

# # Install dependencies menggunakan bun
RUN npm install

# # Build aplikasi dengan Bun
RUN npm run build

CMD [ "npm", "run","preview"]

