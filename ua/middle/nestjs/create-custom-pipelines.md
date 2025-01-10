#### * Create custom pipes

У Angular, Pipe - це інструмент для перетворення даних у відображенні. Створення власних кастомних pipes дозволяє реалізовувати специфічні перетворення під ваші потреби.

Ось кроки для створення кастомного pipe в Angular:

### 1. Створення нового pipe:

За допомогою Angular CLI ви можете створити pipe, використовуючи команду:

```bash
ng generate pipe customPipeName
```

Або скорочено:

```bash
ng g p customPipeName
```

Це створить файл `custom-pipe-name.pipe.ts` та додасть клас Pipe у проект.

### 2. Реалізація логіки pipe:

Після створення, ви можете реалізувати власну логіку у методі `transform` в класі pipe. Нижче наведено приклад:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipeName'
})
export class CustomPipeNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // Ваша логіка перетворення
    return modifiedValue;
  }
}
```

### 3. Використання pipe в компоненті:

Щоб використовувати pipe у вашому компоненті, просто додайте його в список declarations в модулі, наприклад `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomPipeNamePipe } from './custom-pipe-name.pipe';

@NgModule({
  declarations: [
    // інші компоненти
    CustomPipeNamePipe
  ],
  imports: [
    BrowserModule,
    // інші модулі
  ],
  providers: [],
  bootstrap: [/* головний компонент */]
})
export class AppModule { }
```

Далі ви можете використовувати pipe в шаблонах компонентів таким чином:

```html
<p>{{ someValue | customPipeName:arg1:arg2 }}</p>
```

### 4. Приклад реалізації:

Припустимо, вам потрібно реалізувати pipe, який перетворює текст у верхній регістр, але навпаки:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseUpperCase'
})
export class ReverseUpperCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('').toUpperCase();
  }
}
```

Застосування в шаблоні:

```html
<p>{{ 'hello' | reverseUpperCase }}</p>
```

Результат: `OLLEH`

Після реалізації кастомного pipe ви зможете використовувати його для специфічних трансформацій і легко інтегрувати в ваш Angular проект.

| Back | Forward |
|---|---|
| [Implement custom providers](/ua/middle/nestjs/implement-custom-providers.md)  | [Implement custom guards](/ua/middle/nestjs/implement-custom-guards.md) |