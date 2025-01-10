#### * Implement caching strategies (Redis, MemoryCache)

Для покращення продуктивності та зменшення часу відповіді додатків часто використовуються стратегії кешування. Давайте розглянемо, як можна реалізувати кешування за допомогою Redis та MemoryCache.

### Redis

Redis — це потужна in-memory база даних, яка часто використовується для реалізації кешування завдяки своїй швидкості і підтримці різноманітних типів даних.

1. **Встановлення Redis**

   Перед використанням Redis у вашому середовищі розробки, спочатку встановіть Redis на вашому сервері або використовуйте хмарні рішення, такі як AWS ElastiCache чи Heroku Redis.

2. **Підключення до Redis**

   Для підключення до Redis в середовищі .NET ви можете використовувати бібліотеку `StackExchange.Redis`. Додайте її через NuGet Package Manager:

   ```bash
   Install-Package StackExchange.Redis
   ```

3. **Приклад коду**

   ```csharp
   using StackExchange.Redis;
   using System;

   class RedisCacheExample
   {
       private static ConnectionMultiplexer redis = ConnectionMultiplexer.Connect("localhost");

       public static void Main(string[] args)
       {
           IDatabase db = redis.GetDatabase();

           // Додавання елемента до кешу
           db.StringSet("myKey", "Hello Redis!");

           // Отримання елементу з кешу
           string value = db.StringGet("myKey");
           Console.WriteLine(value);

           // Видалення елемента з кешу
           db.KeyDelete("myKey");
       }
   }
   ```

### MemoryCache

MemoryCache — це кеш, що зберігається в оперативній пам'яті на стороні сервера для локального застосування. Це відмінний вибір для додатків, що працюють в одному екземплярі.

1. **Використання MemoryCache**

   У .NET Core ви можете використовувати `MemoryCache` з пакету `Microsoft.Extensions.Caching.Memory`.

2. **Приклад коду**

   Спочатку необхідно додати залежності через NuGet:

   ```bash
   Install-Package Microsoft.Extensions.Caching.Memory
   ```

   Далі, ми можемо створити наступний код для роботи з MemoryCache:

   ```csharp
   using Microsoft.Extensions.Caching.Memory;
   using System;

   class MemoryCacheExample
   {
       private static IMemoryCache _cache = new MemoryCache(new MemoryCacheOptions());

       public static void Main(string[] args)
       {
           // Додавання елементу до кешу
           _cache.Set("myKey", "Hello MemoryCache!");

           // Отримання елемента з кешу
           if (_cache.TryGetValue("myKey", out string value))
           {
               Console.WriteLine(value);
           }

           // Видалення елемента з кешу
           _cache.Remove("myKey");
       }
   }
   ```

### Порівняння

- **Redis** добре підходить для розподілених систем, оскільки може взаємодіяти між різними екземплярами застосунків.
- **MemoryCache** краще використовувати у випадках, коли ваш застосунок працює у вигляді одного екземпляра, і вам потрібен швидкий доступ до кешованих даних без взаємодії з мережею.

Оберіть стратегію кешування з урахуванням специфіки вашої архітектури та вимог до продуктивності.

| Back | Forward |
|---|---|
| [Understand and handle backpressure in streams](/ua/middle/nodejs/understand-and-handle-backpressure-in-streams.md)  | [Як описати приєднання до бази даних?](/ua/middle/nestjs/how-to-connect-database.md) |