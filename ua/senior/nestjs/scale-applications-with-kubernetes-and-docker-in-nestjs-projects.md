#### * Scale applications with Kubernetes and Docker in Nest.js projects

Щоб масштабувати додатки з використанням Kubernetes і Docker у проектах на Nest.js, слід дотримуватись кількох ключових кроків:

### 1. Контейнеризація Nest.js з Docker

1. **Створіть Dockerfile**:
   - Напишіть `Dockerfile` для збірки образу Nest.js додатку.
   ```dockerfile
   # Вказуємо базовий образ
   FROM node:18-alpine

   # Вказуємо робочу директорію всередині контейнера
   WORKDIR /usr/src/app

   # Копіюємо package.json та package-lock.json, якщо є
   COPY package*.json ./

   # Встановлюємо залежності
   RUN npm install

   # Копіюємо решту коду додатку
   COPY . .

   # Збираємо додаток
   RUN npm run build

   # Вказуємо команду для запуску додатку
   CMD ["node", "dist/main"]
   ```

2. **Збірка образу Docker**:
   ```bash
   docker build -t nestjs-app .
   ```

3. **Запуск контейнера локально для перевірки**:
   ```bash
   docker run -p 3000:3000 nestjs-app
   ```

### 2. Налаштування Kubernetes для вашого додатку

1. **Створіть файл конфігурацій Kubernetes**:

   - Створіть `deployment.yaml` щоб визначити розгортання:
     ```yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: nestjs-app
     spec:
       replicas: 3
       selector:
         matchLabels:
           app: nestjs-app
       template:
         metadata:
           labels:
             app: nestjs-app
         spec:
           containers:
           - name: nestjs-app
             image: nestjs-app:latest
             ports:
             - containerPort: 3000
     ```

   - Створіть `service.yaml` для доступу до вашого додатку:
     ```yaml
     apiVersion: v1
     kind: Service
     metadata:
       name: nestjs-service
     spec:
       type: LoadBalancer
       ports:
       - port: 80
         targetPort: 3000
       selector:
         app: nestjs-app
     ```

2. **Застосування конфігурації**:
   - Виконайте для застосування:
   ```bash
   kubectl apply -f deployment.yaml
   kubectl apply -f service.yaml
   ```

### 3. Моніторинг та масштабування

- **Автомасштабування**:
  - Використовуйте `Horizontal Pod Autoscaler` для автоматичного масштабування:
  ```bash
  kubectl autoscale deployment nestjs-app --cpu-percent=50 --min=1 --max=10
  ```

- **Моніторинг**:
  - Інтегруйте рішення для моніторингу, такі як Prometheus або Grafana, щоб слідкувати за станом додатку.

Ці кроки забезпечать базове налаштування для розгортання та масштабування ваших Nest.js додатків за допомогою Kubernetes та Docker. Важливо забезпечити безперервну інтеграцію та доставку (CI/CD) для поліпшення потоків роботи і підтримки нових змін.

| Back | Forward |
|---|---|
| [Implement advanced GraphQL features (e.g., subscriptions, resolvers)](/ua/senior/nestjs/implement-advanced-graphql-features.md)  | [Debug and enhance DI performance](/ua/senior/nestjs/improve-dependency-injection-performance.md) |