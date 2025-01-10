#### * Create custom pipes

Для створення кастомних (власних) пайпів у Nest.js ми можемо використовувати інтерфейс `PipeTransform`. Пайпи в Nest.js переважно використовуються для трансформації або валідації даних перед обробкою запиту контролером.

Ось приклад, як можна створити простий кастомний пайп:

1. **Створіть файл Пайпу:** Почнемо з створення файлу, де буде зберігатись наш пайп, наприклад `parse-int.pipe.ts`.

2. **Імплементуйте PipeTransform:** Реалізуйте інтерфейс `PipeTransform` у вашому класі.

```typescript
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
```

- **`transform` Метод:** Основний метод, який виконує трансформацію чи валідацію значення.
- **`ArgumentMetadata` параметр:** Додає контексту щодо метаданих аргументу, який є корисним для більш специфічних перевірок.

3. **Зареєструйте та використовуйте ваш Пайп у контролері або маршруті:**

Тепер, коли ви створили пайп, його можна використовувати у вашому контролері.

```typescript
import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { ParseIntPipe } from './parse-int.pipe';

@Controller('numbers')
export class NumbersController {
  @Get()
  async findOne(@Query('id', ParseIntPipe) id: number) {
    return `Number id is ${id}`;
  }
}
```

У цьому прикладі `ParseIntPipe` буде автоматично викликано до того, як значення `id` передадуть у `findOne` метод. Якщо `id` не конвертується в число, буде кинуто помилку `BadRequestException`.

Таким чином, ви можете створювати пайпи, які будуть корисні для різних задач, таких як валідація, трансформація даних чи їхнє структурування.

| Back | Forward |
|---|---|
| [Implement custom providers](/ua/middle/nestjs/implement-custom-providers.md)  | [Implement custom guards](/ua/middle/nestjs/implement-custom-guards.md) |