# Gunakan image dasar Bun yang tersedia di Docker Hub
FROM node:20.12-alpine AS builder

# Tetapkan direktori kerja di dalam container
WORKDIR /app

# # Salin package.json dan package-lock.json ke dalam direktori kerja
COPY package*.json .

# # Install dependencies menggunakan bun
RUN npm install

# # Salin semua file proyek ke dalam direktori kerja
COPY . .

# # Build aplikasi dengan Bun
RUN npm run build

# Buat tahap runtime dengan menggunakan image dasar yang lebih ringan
FROM node:20.12-alpine AS runtime

WORKDIR /app

# Salin hanya file yang diperlukan untuk menjalankan aplikasi (hasil build)
COPY --from=builder ./app/dist /app/dist

EXPOSE 5100

CMD [ "npm", "run","preview"]

