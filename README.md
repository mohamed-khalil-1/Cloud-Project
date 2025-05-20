# HCI Project (Microservices Edition)

This project is a full-stack web application using a **microservices architecture**. Each backend service is independent and managed via Docker Compose. The frontend is built with Angular.

## Project Structure

- `HCI_project/` — Angular frontend (served by Nginx in Docker)
- `services/` — Microservices (Node.js/Express):
  - `auth-service/` (Authentication)
  - `product-service/` (Products, Lists, Categories, Reviews)
  - `notification-service/` (Notifications)
  - `wishlist-service/` (Wishlists)
  - `chat-service/` (Chat/Messages)
- `docker-compose.*.yml` — Docker Compose files for each environment

---

## Running the Project

You can run the project in **development**, **staging**, or **production** mode. Each mode uses its own Docker Compose file and unique ports.

### 1. Development Mode

**Start:**
```sh
docker-compose -f docker-compose.development.yml up --build
```
**Stop:**
```sh
docker-compose -f docker-compose.development.yml down
```

- **Frontend:** [http://localhost:8081](http://localhost:8081)
- **Auth Service:** [http://localhost:4140](http://localhost:4140)
- **Product Service:** [http://localhost:4141](http://localhost:4141)
- **Notification Service:** [http://localhost:4142](http://localhost:4142)
- **Wishlist Service:** [http://localhost:4143](http://localhost:4143)
- **Chat Service:** [http://localhost:4144](http://localhost:4144)

---

### 2. Staging Mode

**Start:**
```sh
docker-compose -f docker-compose.staging.yml up --build
```
**Stop:**
```sh
docker-compose -f docker-compose.staging.yml down
```

- **Frontend:** [http://localhost:8082](http://localhost:8082)
- **Auth Service:** [http://localhost:4120](http://localhost:4120)
- **Product Service:** [http://localhost:4121](http://localhost:4121)
- **Notification Service:** [http://localhost:4122](http://localhost:4122)
- **Wishlist Service:** [http://localhost:4123](http://localhost:4123)
- **Chat Service:** [http://localhost:4124](http://localhost:4124)

---

### 3. Production Mode

**Start:**
```sh
docker-compose -f docker-compose.production.yml up --build
```
**Stop:**
```sh
docker-compose -f docker-compose.production.yml down
```

- **Frontend:** [http://localhost:8083](http://localhost:8083)
- **Auth Service:** [http://localhost:4130](http://localhost:4130)
- **Product Service:** [http://localhost:4131](http://localhost:4131)
- **Notification Service:** [http://localhost:4132](http://localhost:4132)
- **Wishlist Service:** [http://localhost:4133](http://localhost:4133)
- **Chat Service:** [http://localhost:4134](http://localhost:4134)

---

## Environment Variables

- **Do not commit your `.env` files or secrets to version control!**
- Each service uses its own `.env` file in its directory (see `services/*/.env`).

---

## Rebuilding & Troubleshooting

- If you change code, re-run the `up --build` command to rebuild the containers.
- To clear the frontend build, delete the `HCI_project/dist/` directory before rebuilding.
- Make sure Docker Desktop is running before starting the project.
- If a service fails to connect, check the ports and environment files.

---

## Microservices Overview

Each backend service is independent and communicates via HTTP REST APIs. The frontend connects to each service using the URLs defined in the Angular environment files (`HCI_project/src/environments/`).

---

For more details, see the Docker Compose files and environment files for each mode. 