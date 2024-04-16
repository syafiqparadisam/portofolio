# Gunakan image dasar Bun yang tersedia di Docker Hub
FROM oven/bun:1.0.3 as builder

# Tetapkan direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json (atau bun.lockb) ke dalam direktori kerja
COPY package.json bun.lockb ./

# Install dependencies menggunakan bun
RUN bun install

# Salin semua file proyek ke dalam direktori kerja
COPY . .

# Build aplikasi dengan Bun
RUN bun build

# Buat tahap runtime dengan menggunakan image dasar yang lebih ringan
FROM oven/bun:1.0.3 as runtime

# Tetapkan direktori kerja di dalam container
WORKDIR /app

# Salin hanya file yang diperlukan untuk menjalankan aplikasi (hasil build)
COPY --from=builder /app/dist /app/dist

# Salin package.json dan bun.lockb untuk runtime
COPY package.json bun.lockb ./

# Install runtime dependencies
RUN bun install --production

# Tetapkan port yang akan digunakan aplikasi
EXPOSE 3000

# Jalankan aplikasi dengan Bun
CMD ["bun", "run", "preview"]
