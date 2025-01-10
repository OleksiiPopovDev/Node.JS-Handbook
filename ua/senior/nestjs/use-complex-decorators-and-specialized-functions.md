#### * Use advanced decorators and custom modules

У Nest.js, декоратори та модулі є ключовими елементами, які допомагають створити модульну, масштабовану архітектуру.

### Використання Розширених Декораторів

У Nest.js декоратори використовуються для надання метаданих класам, методам, параметрам та властивостям. Декоратори можуть бути вбудованими або кастомними.

#### Вбудовані декоратори:

- `@Controller()`: Визначає зв'язок класу з контролером.
- `@Get()`, `@Post()`, `@Put()`, `@Delete()`: Використовуються для маршрутизації HTTP-запитів.
- `@Injectable()`: Вказує, що клас можна вкладати як сервіс.

#### Створення Кастомних Декораторів:

Кастомні декоратори надають гнучкість і дозволяють створювати спеціальні рішення для специфічних задач.

```typescript
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

Такі декоратори можна використовувати для реалізації, наприклад, контролю доступу на основі ролей.

### Кастомні Модулі

Модулі в Nest.js використовуються для організації коду та групування функціональності. Вони допомагають структурувати код та зберегти його у впорядкованому вигляді.

#### Створення Кастомного Модуля:

1. **Створення нового модуля**:

```typescript
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

2. **Імпорт кастомного модуля в інший модуль**:

```typescript
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
```

Таким чином, через комбінацію кастомних модулів та декораторів можна досягти гнучкої та добре структурованої архітектури у додатку Nest.js.

| Back | Forward |
|---|---|
| [Optimize file handling systems](/ua/senior/nodejs/improve-file-management-systems.md)  | [Integrate third-party libraries into the framework](/ua/senior/nestjs/incorporate-external-software-tools.md) |