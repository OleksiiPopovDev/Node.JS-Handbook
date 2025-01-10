#### * Handle file uploads with Nest.js

Щоб обробляти завантаження файлів у Nest.js, можна використовувати пакет `@nestjs/platform-express`, який інтегрується з бібліотекою `multer` для завантаження файлів. Ось, як це можна зробити:

1. **Встановлення залежностей**:

   Спочатку встановіть необхідний пакет:

   ```bash
   npm install --save @nestjs/platform-express
   ```

2. **Створення контролера**:

   Додайте контролер, який буде відповідати за обробку завантаження файлів. Використовуйте декоратор `@UseInterceptors` з `FileInterceptor` з `@nestjs/platform-express`.

   ```typescript
   import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
   import { FileInterceptor } from '@nestjs/platform-express';

   @Controller('upload')
   export class UploadController {
     @Post('file')
     @UseInterceptors(FileInterceptor('file'))
     uploadFile(@UploadedFile() file: Express.Multer.File) {
       console.log(file);
       return {
         filename: file.filename,
         originalname: file.originalname,
       };
     }
   }
   ```

   У цьому прикладі, `@Post('file')` створює маршрут для завантаження файлів. Декоратор `@UploadedFile()` дозволяє отримати доступ до завантаженого файлу.

3. **Конфігурація збереження файлу (опціонально)**:

   Ви можете налаштувати місце збереження файлу, формат імені файлу, розмір тощо:

   ```typescript
   import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
   import { FileInterceptor } from '@nestjs/platform-express';
   import { diskStorage } from 'multer';
   import { extname } from 'path';

   @Controller('upload')
   export class UploadController {
     @Post('file')
     @UseInterceptors(FileInterceptor('file', {
       storage: diskStorage({
         destination: './uploads', // Папка для збереження файлів
         filename: (req, file, callback) => {
           const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
           const ext = extname(file.originalname); // Розширення файлу
           callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
         }
       }),
     }))
     uploadFile(@UploadedFile() file: Express.Multer.File) {
       console.log(file);
       return {
         filename: file.filename,
         originalname: file.originalname,
       };
     }
   }
   ```

4. **Перевірка заборонених файлів (опціонально)**:

   Ви можете додати перевірку на заборонені типи файлів або інші обмеження, додавши функцію `fileFilter` до конфігурації `FileInterceptor`.

   ```typescript
   @UseInterceptors(FileInterceptor('file', {
     storage: diskStorage({
       destination: './uploads',
       filename: (req, file, callback) => {
         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
         const ext = extname(file.originalname);
         callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
       }
     }),
     fileFilter: (req, file, callback) => {
       if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
         return callback(new Error('Only image files are allowed!'), false);
       }
       callback(null, true);
     },
   }))
   ```

Ця реалізація дозволяє завантажувати файли з певними обмеженнями і зберігати їх у вказаній директорії. Переконайтеся, що директорія `./uploads` вже існує або створіть її перед завантаженням файлів.

| Back | Forward |
|---|---|
| [Understand WebSocket implementation in Nest.js](/ua/middle/nestjs/understand-websocket-implementation-in-nestjs.md)  | [Create GraphQL APIs using @nestjs/graphql](/ua/middle/nestjs/create-graphql-apis-using-nestjsgraphql.md) |