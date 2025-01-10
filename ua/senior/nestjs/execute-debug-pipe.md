#### * Debug pipe execution

У Nest.js "pipes" використовуються для трансформації та валідації даних перед обробкою у контролерах. Якщо ви хочете дебагувати виконання пайпів, ось кілька кроків, які можуть допомогти:

1. **Логування всередині пайпа:**
   Додайте виклики `console.log()` або використовуйте інший логер всередині пайпа, щоб відстежити вхідні та вихідні дані, а також проміжні кроки.

   ```typescript
   import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

   @Injectable()
   export class DebuggablePipe implements PipeTransform {
     transform(value: any, metadata: ArgumentMetadata) {
       console.log('Received value:', value);
       console.log('Metadata:', metadata);
       // Виконайте додаткову логіку тут
       const transformedValue = value; // Наприклад, просто повернути значення
       console.log('Transformed value:', transformedValue);
       return transformedValue;
     }
   }
   ```

2. **Перехоплення винятків:**
   Переконайтеся, що додаєте обробку винятків всередині пайпа, щоб зловити потенційні помилки.

   ```typescript
   try {
     // Ваш код трансформації
   } catch (error) {
     console.error('Error in pipe transformation:', error);
     throw error;
   }
   ```

3. **Використання засобів відлагодження:**
   Застосуйте інструменти налагодження (debugger) вашого IDE, щоб встановити точку зупину у методі `transform` пайпа, що дозволяє виконувати покрокове налагодження.

4. **Тестування пайпа:**
   Розробіть юніт-тести для ваших пайпів, щоб перевіряти різні сценарії використання та валідації.

5. **Перевід на продакшн:**
   При переведенні програми на продакшн, приберіть всі `console.log()`, щоб зменшити навантаження на лог-файли та уникнути витоку конфіденційної інформації.

Ці кроки допоможуть вам успішно дебагувати пайпи у вашій Nest.js програмі.

| Back | Forward |
|---|---|
| [Design complex provider patterns](/ua/senior/nestjs/design-sophisticated-service-architectures.md)  | [Design complex guard strategies](/ua/senior/nestjs/develop-intricate-security-protocols.md) |