#### 83. Create RESTful APIs using controllers

Щоб створити RESTful API використовуючи контролери в Nest.js, необхідно виконати кілька кроків. Розглянемо їх на прикладі створення простого CRUD додатку:

### 1. Встановити Nest.js

Спершу переконайтеся, що ви маєте Nest CLI, він спростить процес створення структур:

```bash
npm i -g @nestjs/cli
nest new project-name
```

### 2. Створення контролера

Nest.js використовує декоратори для визначення маршрутів у контролерах.

#### Генеруємо контролер:

```bash
nest generate controller items
```

Це створить новий файл контролера `items.controller.ts`.

#### Приклад контролера:

```typescript
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll() {
    return 'Це поверне всі елементи';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Це поверне елемент з id: ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return 'Це створить новий елемент';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return `Це оновить елемент з id: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Це видалить елемент з id: ${id}`;
  }
}
```

### 3. Визначення DTO (Data Transfer Objects)

DTO використовуються для визначення структури даних, що передаються.

#### Приклад DTO:

```typescript
// create-item.dto.ts
export class CreateItemDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
}

// update-item.dto.ts
export class UpdateItemDto {
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
}
```

### 4. Реєстрація контролера в модулі

Після створення контролера, його необхідно зареєструвати в модулі.

```typescript
import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';

@Module({
  controllers: [ItemsController],
})
export class ItemsModule {}
```

### 5. Додавання модуля до загального додатку

Після цього, не забудьте додати новий модуль в `app.module.ts`.

```typescript
import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule],
})
export class AppModule {}
```

### Висновок

Тепер у вас є базовий RESTful API з контролером, що забезпечує повний набір класичних CRUD операцій. За реальної розробки додатку попрацюйте над інтеграцією сервісів для обробки бізнес-логіки та підключення до бази даних для зберігання даних.

| Back | Forward |
|---|---|
| [Write simple unit tests for services and controllers](/ua/junior/nestjs/what-are-some-simple-unit-tests-for-services-and-controllers.md)  | [Use Nest.js CLI for project generation and scaffolding](/ua/junior/nestjs/use-the-nestjs-cli-for-project-generation-and-scaffolding.md) |