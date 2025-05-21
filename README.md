# HCI Project (Microservices Edition)

This project is a full-stack web application using a **microservices architecture**. Each backend service is independent and managed via Docker Compose or Kubernetes. The frontend is built with Angular.

## Project Structure

- `HCI_project/` — Angular frontend (served by Nginx in Docker)
- `services/` — Microservices (Node.js/Express):
  - `auth-service/` (Authentication)
  - `product-service/` (Products, Lists, Categories, Reviews)
  - `notification-service/` (Notifications)
  - `wishlist-service/` (Wishlists)
  - `chat-service/` (Chat/Messages)
- `docker-compose.*.yml` — Docker Compose files for each environment
- `k8s/` — Kubernetes manifests for all services

---

## Running the Project

You can run the project in **development**, **staging**, **production**, or **Kubernetes** mode. Each mode uses its own configuration and unique ports.

### 1. Development Mode (Docker Compose)

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

### 2. Staging Mode (Docker Compose)

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

### 3. Production Mode (Docker Compose)

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

### 4. Kubernetes Mode (Recommended for Production)

#### **First-Time Setup**

1. **Build Docker Images for All Services**
   - For each service (including the frontend), build the Docker image. For the frontend, use the k8s environment:
     ```sh
     docker build --build-arg NODE_ENV=k8s -t cloudproject-frontend:k8s-1 ./HCI_project
     docker build -t cloudproject-auth-service:latest ./services/auth-service
     docker build -t cloudproject-product-service:latest ./services/product-service
     docker build -t cloudproject-notification-service:latest ./services/notification-service
     docker build -t cloudproject-wishlist-service:latest ./services/wishlist-service
     docker build -t cloudproject-chat-service:latest ./services/chat-service
     docker build -t cloudproject-mongodb:latest ./services/mongodb # if you have a custom MongoDB image
     ```
   - If using a remote cluster, push these images to your container registry.

2. **Deploy All Services to Kubernetes**
   - Apply all manifests in the `k8s/` directory:
     ```sh
     kubectl apply -f k8s/
     ```
   - This will create deployments and services for all microservices, MongoDB, and the frontend.

3. **Check That All Pods Are Running**
   ```sh
   kubectl get pods
   ```
   All pods should be in the `Running` state.

#### **How to Access the Frontend**

- The frontend is exposed via a **NodePort** on port **31501**.
- Open your browser and go to:
  - [http://localhost:31501](http://localhost:31501) (if running Kubernetes locally)
  - Or, [http://<node-ip>:31501](http://<node-ip>:31501) (if running on a remote cluster; get the node IP with `kubectl get nodes -o wide`)

#### **Kubernetes Service Ports**

| Service               | NodePort | URL Example                       |
|-----------------------|----------|-----------------------------------|
| Frontend              | 31501    | http://localhost:31501            |
| Auth Service          | 31234    | http://localhost:31234            |
| Product Service       | 31235    | http://localhost:31235            |
| Notification Service  | 31236    | http://localhost:31236            |
| Wishlist Service      | 31237    | http://localhost:31237            |
| Chat Service          | 31238    | http://localhost:31238            |
| MongoDB (internal)    | 27017    | mongodb://mongodb:27017           |

---

### 4.1. Creating Kubernetes Secrets for MongoDB URIs (Required!)

Before deploying to Kubernetes, you must create secrets for each service's MongoDB connection string. This keeps your credentials safe and out of version control.

**Run these commands in your terminal (PowerShell or bash):**

```sh
kubectl create secret generic auth-mongodb-uri-secret --from-literal=MONGODB_URI="mongodb+srv://<user>:<password>@cluster0.gje5dvf.mongodb.net/auth"
kubectl create secret generic product-mongodb-uri-secret --from-literal=MONGODB_URI="mongodb+srv://<user>:<password>@cluster0.gje5dvf.mongodb.net/product"
kubectl create secret generic notification-mongodb-uri-secret --from-literal=MONGODB_URI="mongodb+srv://<user>:<password>@cluster0.gje5dvf.mongodb.net/notification"
kubectl create secret generic wishlist-mongodb-uri-secret --from-literal=MONGODB_URI="mongodb+srv://<user>:<password>@cluster0.gje5dvf.mongodb.net/wishlist"
kubectl create secret generic chat-mongodb-uri-secret --from-literal=MONGODB_URI="mongodb+srv://<user>:<password>@cluster0.gje5dvf.mongodb.net/chat"
```

- Replace `<user>` and `<password>` with your MongoDB Atlas credentials.
- You only need to do this once per cluster (unless you want to update the credentials).

**How the Deployments use these secrets:**

Each service's deployment YAML references its secret like this:

```yaml
env:
- name: MONGODB_URI
  valueFrom:
    secretKeyRef:
      name: <service>-mongodb-uri-secret
      key: MONGODB_URI
```

For example, in `k8s/auth-service.yaml`:
```yaml
env:
- name: MONGODB_URI
  valueFrom:
    secretKeyRef:
      name: auth-mongodb-uri-secret
      key: MONGODB_URI
```

**If you skip this step, your services will fail to start because they won't have the database connection string!**

---

## Environment Variables

- **Do not commit your `.env` files or secrets to version control!**
- Each service uses its own `.env` file in its directory (see `services/*/.env`).
- For Kubernetes, environment variables are set in the deployment YAMLs in `k8s/`.

---

## Rebuilding & Troubleshooting

- If you change code, rebuild the Docker images and re-apply the Kubernetes manifests.
- To clear the frontend build, delete the `HCI_project/dist/` directory before rebuilding.
- Make sure Docker Desktop or your Kubernetes cluster is running before starting the project.
- If a service fails to connect, check the NodePorts and environment files.

---

## Microservices Overview

Each backend service is independent and communicates via HTTP REST APIs. The frontend connects to each service using the URLs defined in the Angular environment files (`HCI_project/src/environments/`).

---

For more details, see the Docker Compose files, Kubernetes manifests, and environment files for each mode. 