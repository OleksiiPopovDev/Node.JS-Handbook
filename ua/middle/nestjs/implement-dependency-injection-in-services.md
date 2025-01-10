#### * Implement DI in services

Впровадження залежностей (Dependency Injection, DI) в сервісах є основним підходом для полегшення тестування, зменшення зв'язаності коду та підвищення його гнучкості. Нижче надано приклад, як можна впровадити DI в сервісах на прикладі мови програмування C# з використанням ASP.NET Core, одного з найпопулярніших фреймворків, який підтримує це:

### 1. Визначення інтерфейсу сервісу

Спочатку потрібно визначити інтерфейс для сервісу:

```csharp
public interface IMyService
{
    void DoWork();
}
```

### 2. Реалізація цього інтерфейсу

Потім створюється клас, який реалізує цей інтерфейс:

```csharp
public class MyService : IMyService
{
    public void DoWork()
    {
        // Реалізація роботи
        Console.WriteLine("Work is done.");
    }
}
```

### 3. Реєстрація сервісу в DI контейнері

За допомогою ASP.NET Core, ви можете зареєструвати сервіс в DI контейнері в `Startup.cs`:

```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddTransient<IMyService, MyService>();
    }

    // Інші методи
}
```

- `AddTransient` - новий екземпляр сервісу створюється при кожному запиті.
- `AddScoped` - новий екземпляр створюється для кожного HTTP-запиту.
- `AddSingleton` - єдиний екземпляр сервісу для всього додатку.

### 4. Використання сервісу за допомогою DI

Далі DI може бути використане в будь-якому місці, де доступний конструктор:

```csharp
public class MyController : ControllerBase
{
    private readonly IMyService _myService;

    public MyController(IMyService myService)
    {
        _myService = myService;
    }

    public IActionResult DoAction()
    {
        _myService.DoWork();
        return Ok();
    }
}
```

### Висновок

Dependency Injection полегшує заміну різних реалізацій інтерфейсу без зміни клієнтського коду, що значно спрощує модульне тестування і підтримку коду. Це один з ключових принципів для побудови додатків з високою якістю коду.

| Back | Forward |
|---|---|
| [Як реалізувати свій декоратор валідації?](/ua/middle/nestjs/how-to-implement-your-validation-decorator.md)  | [Create and import modules](/ua/middle/nestjs/create-and-import-modules.md) |