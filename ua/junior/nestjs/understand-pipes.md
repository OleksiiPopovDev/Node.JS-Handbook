#### 78. Understand pipes

У Nest.js, **pipes** є одним з видів middleware, які використовуються для перетворення вхідних даних або для перевірки їхньої валідності перед передачею в обробник маршруту. Вони є важливою частиною життєвого циклу запиту.

### Основні характеристики Pipes в Nest.js:

1. **Перетворення (Transformation):** 
   Pipes можуть автоматично перетворювати вхідні дані. Наприклад, перетворення рядкових даних у числові.

2. **Валідація (Validation):**
   Pipes можуть використовуватися для перевірки валідності даних. Якщо дані не валідні, pipe може викинути помилку.

3. **Використання:**
   Pipes можуть бути використані на рівні метода, контролера або глобально для всього застосунку.

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

У цьому прикладі, `ParseIntPipe` перетворює вхідний рядок у число. Якщо перетворення не вдалося (результат `NaN`), pipe викидає `BadRequestException`.

### Де можна використовувати Pipes:

- **Метод:** Для специфічного обробника маршруту.
  
  ```typescript
  @Controller('items')
  export class ItemController {
    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: number) {
      // обробник
    }
  }
  ```

- **Контролер:** Для всіх маршрутов в межах одного контролера.

  ```typescript
  @UsePipes(new ValidationPipe())
  @Controller('items')
  export class ItemController {
    // обробник
  }
  ```

- **Глобально:** Для всього застосунку.

  ```typescript
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  ```

Підсумовуючи, pipes у Nest.js є потужним інструментом для обробки та ідентифікації вхідних даних, що робить їх не від'ємною частиною побудови надійних серверних програм.

| Back | Forward |
|---|---|
| [Define providers](/ua/junior/nestjs/define-providers.md)  | [Understand guards](/ua/junior/nestjs/understand-guards.md) |