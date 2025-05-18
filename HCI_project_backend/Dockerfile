# Stage 1: Build
FROM node:18-slim AS builder
WORKDIR /app

# Install build dependencies
RUN apt-get update && apt-get install -y python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies and rebuild bcrypt
RUN npm ci && \
    npm rebuild bcrypt --build-from-source

# Copy source code
COPY . .

# Stage 2: Production
FROM node:18-slim
WORKDIR /app

# Install runtime dependencies
RUN apt-get update && apt-get install -y python3 make g++

# Copy built application
COPY --from=builder /app .
COPY --from=builder /app/node_modules ./node_modules

# Rebuild bcrypt for the production environment
RUN npm rebuild bcrypt --build-from-source

# Create a non-root user
RUN groupadd -r appgroup && \
    useradd -r -g appgroup -d /app appuser && \
    chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Add health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:3500/ || exit 1

# Expose the port
EXPOSE 3500

# Start the application
CMD ["node", "index.js"]