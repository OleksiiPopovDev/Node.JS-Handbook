#### * Scale applications with Kubernetes and Docker in Nest.js projects

## Масштабування додатків з Kubernetes і Docker в проектах на Nest.js

Масштабування додатків — це один з ключових аспектів розробки, особливо коли мова йде про великі або динамічні навантаження. Для проектів на Nest.js один з найефективніших способів досягти масштабованості — це використання контейнеризації з Docker в поєднанні з оркестрацією за допомогою Kubernetes. Ось пояснення цих процесів:

### Docker

1. **Контейнеризація**: Docker дозволяє "упакувати" ваш додаток разом з усіма його залежностями в єдиний контейнер. Це забезпечує консистентність середовища виконання незалежно від хост-системи.

2. **Створення Docker-файла**: Для Nest.js проекту створіть `Dockerfile`, який визначає інструкції для побудови Docker-образу. Наприклад:
   ```dockerfile
   # Вибір базового образу Node.js
   FROM node:alpine

   # Встановлення робочої директорії
   WORKDIR /usr/src/app

   # Копіювання package.json та package-lock.json
   COPY package*.json ./

   # Встановлення залежностей
   RUN npm install

   # Копіювання вихідного коду
   COPY . .

   # Компіляція проекту
   RUN npm run build

   # Відкриття порту
   EXPOSE 3000

   # Команда для запуску додатку
   CMD ["npm", "run", "start:prod"]
   ```

3. **Створення образу**: Використовуйте команду `docker build` для створення Docker-образу вашого Nest.js додатку:
   ```bash
   docker build -t my-nestjs-app .
   ```

### Kubernetes

1. **Окрестрація контейнерів**: Kubernetes дозволяє розподіляти контейнери на кластері комп'ютерів, автоматично керувати їхнім життєвим циклом, перевпускати контейнери у разі збоїв і балансувати навантаження.

2. **Налаштування YAML**: Для розгортання Docker-контейнерів в кластері Kubernetes, створіть файли налаштувань в форматі YAML:
   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: nestjs-deployment
   spec:
     replicas: 3
     selector:
       matchLabels:
         app: nestjs
     template:
       metadata:
         labels:
           app: nestjs
       spec:
         containers:
         - name: nestjs
           image: my-nestjs-app
           ports:
           - containerPort: 3000
   ```

3. **Розгортання**: Скористайтеся командою `kubectl` для розгортання вашого додатку на кластері:
   ```bash
   kubectl apply -f deployment.yaml
   ```

### Переваги

- **Автоматичне масштабування**: Kubernetes може автоматично масштабувати кількість реплік ваших контейнерів залежно від навантаження.
- **Відмовостійкість**: Kubernetes автоматично пересоздає контейнери у разі збоїв.
- **Балансування навантаження**: Kubernetes розподіляє вхідні запити між репліками вашого додатку для забезпечення рівномірного навантаження.

### Висновок

Використання Docker і Kubernetes разом із Nest.js забезпечує надійність, гнучкість і ефективність в процесі розгортання та управління масштабованими додатками. Це знижує ризики та полегшує адміністрування програмних рішень у виробничому середовищі.

| Back | Forward |
|---|---|
| [Implement advanced GraphQL features (e.g., subscriptions, resolvers)](/ua/senior/nestjs/implement-advanced-graphql-features.md)  | [Debug and enhance DI performance](/ua/senior/nestjs/improve-dependency-injection.md) |