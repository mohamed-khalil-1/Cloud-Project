FROM node:18-alpine AS builder

ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

WORKDIR /app

COPY package*.json ./

RUN npm ci && \
    npm install @rollup/rollup-linux-x64-musl && \
    npm rebuild

COPY . .

RUN if [ "$NODE_ENV" = "production" ]; then \
      cp src/environments/environment.prod.ts src/environments/environment.ts ; \
    elif [ "$NODE_ENV" = "staging" ]; then \
      cp src/environments/environment.staging.ts src/environments/environment.ts ; \
    elif [ "$NODE_ENV" = "k8s" ]; then \
      cp src/environments/environment.k8s.ts src/environments/environment.ts ; \
    fi

RUN if [ "$NODE_ENV" = "production" ]; then \
        npm run build:prod; \
    elif [ "$NODE_ENV" = "staging" ]; then \
        npm run build:staging; \
    elif [ "$NODE_ENV" = "k8s" ]; then \
        npm run build -- --configuration=k8s; \
    else \
        npm run build:dev; \
    fi

RUN ls -la dist/hci-project/browser

FROM nginx:1.25-alpine

COPY --from=builder /app/dist/hci-project/browser /usr/share/nginx/html

RUN ls -la /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENV NODE_ENV=$NODE_ENV

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
