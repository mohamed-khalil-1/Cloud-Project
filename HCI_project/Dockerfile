# Stage 1: Build
FROM node:18-alpine AS builder

# Add build argument for environment
ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and fix rollup issue
RUN npm ci && \
    npm install @rollup/rollup-linux-x64-musl && \
    npm rebuild

# Copy source code
COPY . .

# Copy the correct environment file based on NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; then \
      cp src/environments/environment.prod.ts src/environments/environment.ts ; \
    elif [ "$NODE_ENV" = "staging" ]; then \
      cp src/environments/environment.staging.ts src/environments/environment.ts ; \
    elif [ "$NODE_ENV" = "k8s" ]; then \
      cp src/environments/environment.k8s.ts src/environments/environment.ts ; \
    fi

# Build the application with explicit environment
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm run build:prod; \
    elif [ "$NODE_ENV" = "staging" ]; then \
        npm run build:staging; \
    elif [ "$NODE_ENV" = "k8s" ]; then \
        npm run build -- --configuration=k8s; \
    else \
        npm run build:dev; \
    fi

# Debug: List contents of dist directory
RUN ls -la dist/hci-project/browser

# Stage 2: Production
FROM nginx:1.25-alpine

# Copy built assets from builder
COPY --from=builder /app/dist/hci-project/browser /usr/share/nginx/html

# Debug: List contents of nginx html directory
RUN ls -la /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add environment variable to nginx
ENV NODE_ENV=$NODE_ENV

# Add health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
