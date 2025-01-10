#### * Integrate Nest.js with cloud services like AWS or Google Cloud

## Інтеграція Nest.js з хмарними сервісами, такими як AWS або Google Cloud

Інтеграція Nest.js з хмарними сервісами може значно підвищити функціональність вашого додатку. Ось кроки для інтеграції з AWS і Google Cloud:

### AWS (Amazon Web Services)

1. **Встановіть AWS SDK**:
   ```bash
   npm install aws-sdk
   ```

2. **Налаштуйте облікові дані**:
   - Облікові дані AWS можна зберігати через змінні середовища або у файлі `~/.aws/credentials`.

3. **Використання AWS S3 як приклад**:
   - Імпортуйте AWS SDK у ваш сервіс чи контролер:
     ```typescript
     import * as AWS from 'aws-sdk';

     const s3 = new AWS.S3({
       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
       region: process.env.AWS_REGION,
     });
     ```

   - Завантаження файлів:
     ```typescript
     const uploadFile = async (file) => {
       const params = {
         Bucket: process.env.AWS_S3_BUCKET_NAME,
         Key: file.originalname,
         Body: file.buffer,
       };
       return await s3.upload(params).promise();
     };
     ```

4. **Інші сервіси AWS**:
   - Аналогічно, можна інтегрувати з іншими сервісами, такими як DynamoDB, Lambda, або SNS.

### Google Cloud

1. **Встановіть модулі Google Cloud**:
   ```bash
   npm install @google-cloud/storage
   ```

2. **Налаштуйте облікові дані**:
   - Завантажте файл ключа JSON для вашого облікового запису сервісу з Google Cloud Console.
   - Встановіть шлях до файлу в змінній `GOOGLE_APPLICATION_CREDENTIALS`.

3. **Використання Google Cloud Storage як приклад**:
   - Імпортуйте модуль у ваш сервіс чи контролер:
     ```typescript
     import { Storage } from '@google-cloud/storage';

     const storage = new Storage();
     const bucketName = process.env.GCLOUD_STORAGE_BUCKET;
     const bucket = storage.bucket(bucketName);
     ```

   - Завантаження файлів:
     ```typescript
     const uploadFile = async (file) => {
       const blob = bucket.file(file.originalname);
       const blobStream = blob.createWriteStream();

       blobStream.on('error', err => {
         console.log(err);
       });

       blobStream.end(file.buffer);
     };
     ```

4. **Інші сервіси Google Cloud**:
   - Залежно від вашого завдання, можливо, буде потрібно встановити інші специфічні пакети, такі як `@google-cloud/pubsub` для Pub/Sub або `@google-cloud/compute` для Compute Engine.

### Загальні рекомендації
- Використовуйте типи та інтерфейси для безпечнішого коду.
- Винесіть код інтеграції в окремі сервіси для кращого розподілу відповідальності.
- Використовуйте модулі конфігурацій Nest.js для управління змінними середовища.

Інтеграція з хмарними сервісами дозволяє Nest.js додаткам масштабуватися та використовувати безліч потужних функціональностей, доступних через API хмарного постачальника.

| Back | Forward |
|---|---|
| [Handle microservices with @nestjs/microservices](/ua/senior/nestjs/handle-microservices-with-nestjsmicroservices.md)  | [Build and manage microservice patterns in Nest.js](/ua/senior/nestjs/build-microservice-patterns-with-nestjs.md) |