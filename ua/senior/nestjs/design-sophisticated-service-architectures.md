#### * Design complex provider patterns

У програмуванні з використанням Nest.js, складні патерни провайдерів можуть бути корисними для організації коду в більш складних проектах. Ось декілька підходів до розробки складних патернів провайдерів:

1. **Фабричні провайдери**: Використовуються для створення провайдерів, які можуть мати складну логіку ініціалізації або потребують залежності, що визначаються під час виконання.

    ```typescript
    const myCustomToken = 'MY_CUSTOM_TOKEN';

    const myFactoryProvider = {
      provide: myCustomToken,
      useFactory: async (dependency1, dependency2) => {
        // виконати необхідну логіку
        return new MyResource(await dependency1.getData(), dependency2.config);
      },
      inject: [Dependency1, Dependency2],
    };
    ```

2. **Користувацькі асинхронні провайдери**: Дозволяють працювати з асинхронними даними або ресурсами, що потребують асинхронної ініціалізації, наприклад отримання конфігурацій з віддаленого сервера до старту програми.

    ```typescript
    const asyncProvider = {
      provide: 'ASYNC_CONFIG',
      useFactory: async () => {
        const config = await fetchRemoteConfig();
        return config;
      },
    };
    ```

3. **Динамічні модулі**: Дозволяють створювати модулі, які приймають конфігурацію під час імпорту.

    ```typescript
    @Module({})
    export class DynamicModule {
      static forRoot(options: ModuleOptions): DynamicModule {
        return {
          module: DynamicModule,
          providers: [
            {
              provide: 'CONFIG_OPTIONS',
              useValue: options,
            },
          ],
          exports: ['CONFIG_OPTIONS'],
        };
      }
    }
    ```

4. **Патерн декораторів**: Використовується для додавання поведінки до провайдерів, часто через декоратори, що робить код більш модульним.

    ```typescript
    function LogExecutionTime(): MethodDecorator {
      return (target, propertyKey, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
          console.log(`Executing ${String(propertyKey)}...`);
          const result = originalMethod.apply(this, args);
          if (result instanceof Promise) {
            result.then(() => console.log(`${String(propertyKey)} completed.`));
          } else {
            console.log(`${String(propertyKey)} completed.`);
          }
          return result;
        };

        return descriptor;
      };
    }

    class MyService {
      @LogExecutionTime()
      executeTask() {
        // деяка задача
      }
    }
    ```

Ці методи можуть бути комбіновані та адаптовані відповідно до потреб вашого проекту, щоб забезпечити краще управління залежностями, конфігурацією та розширюваністю коду.

| Back | Forward |
|---|---|
| [Implement advanced module hierarchies](/ua/senior/nestjs/implement-complex-module-structures.md)  | [Debug pipe execution](/ua/senior/nestjs/execute-debug-pipe.md) |