#### * Handle file uploads with Nest.js

У Nest.js можна обробляти завантаження файлів за допомогою пакету `@nestjs/platform-express`, який базується на бібліотеці `multer`. Ось кроки для налаштування завантаження файлів у вашому проекті:

### 1. Встановлення необхідних залежностей

По-перше, переконайтеся, що у вас встановлений `@nestjs/platform-express` та `multer`:

```bash
npm install @nestjs/platform-express multer
```

### 2. Створення контролера для обробки завантаження файлів

Далі створіть новий контролер, що міститиме ендпоінт для обробки завантаження файлів:

```ts
// file-upload.controller.ts
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class FileUploadController {
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file); // Тут ви можете обробити файл
    return {
      message: 'File uploaded successfully',
      fileName: file.originalname,
    };
  }
}
```

### 3. Додавання контролера до модуля

Не забудьте додати контролер у відповідний модуль, щоб Nest.js міг його використовувати:

```ts
// app.module.ts
import { Module } from '@nestjs/common';
import { FileUploadController } from './file-upload.controller';

@Module({
  controllers: [FileUploadController],
})
export class AppModule {}
```

### 4. Налаштування multer (за бажанням)

Ви можете передавати додаткові налаштування для `multer`, такі як обмеження розміру файлів, папка для збереження тощо:

```ts
// file-upload.controller.ts
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class FileUploadController {
  @Post('file')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Папка збереження файлів
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = extname(file.originalname);
        callback(null, file.fieldname + '-' + uniqueSuffix + ext);
      },
    }),
    limits: {
      fileSize: 1024 * 1024 * 5, // 5 MB
    },
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return {
      message: 'File uploaded successfully',
      fileName: file.filename,
    };
  }
}
```

### 5. Тестування

Запустіть ваш додаток і скористайтеся інструментами, такими як Postman або CURL, щоб протестувати завантаження файлів, надіславши HTTP POST запит на `http://localhost:3000/upload/file` із файлом.

Це базова реалізація завантаження файлів у Nest.js. Ви можете налаштовувати логіку під ваші потреби, додаючи перевірки типу файлів, логіку обробки і збереження в базі даних тощо.

| Back | Forward |
|---|---|
| [Understand WebSocket implementation in Nest.js](/ua/middle/nestjs/understand-websocket-implementation-in-nestjs.md)  | [Create GraphQL APIs using @nestjs/graphql](/ua/middle/nestjs/create-graphql-apis-using-nestjsgraphql.md) |