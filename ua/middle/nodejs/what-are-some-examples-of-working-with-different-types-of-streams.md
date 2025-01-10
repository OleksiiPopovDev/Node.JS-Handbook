#### 95. Наведіть приклади роботи зі стримами різних типів.

Робота зі стримами (потоками) забезпечує ефективну обробку даних у різних мовах програмування. Ось кілька прикладів на різних мовах:

### 1. Python: робота з файловими стримами

```python
# Відкриття файлу для читання
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)

# Відкриття файлу для запису
with open('output.txt', 'w') as file:
    file.write("Це приклад запису в файл.")
```

### 2. Java: використання стримів для обробки колекцій

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Андрій", "Богдан", "Вікторія");
        
        List<String> filteredNames = names.stream()
                                          .filter(name -> name.startsWith("Б"))
                                          .collect(Collectors.toList());

        System.out.println("Імена, що починаються з 'Б': " + filteredNames);
    }
}
```

### 3. Node.js: використання стримів для обробки HTTP-запитів

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    let body = '';
  
    req.on('data', chunk => {
        body += chunk.toString(); // Конвертація буфера в строку
    });

    req.on('end', () => {
        console.log('Отримано дані:', body);
        res.end('Дані отримано успішно');
    });
});

server.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});
```

### 4. C#: використання файлів Asynchronous Streams

```csharp
using System;
using System.IO;
using System.Threading.Tasks;

class Program
{
    public static async Task Main()
    {
        await using var stream = new FileStream("example.txt", FileMode.Open);

        byte[] buffer = new byte[1024];
        int bytesRead;

        while ((bytesRead = await stream.ReadAsync(buffer, 0, buffer.Length)) > 0)
        {
            Console.WriteLine("Прочитано байт: " + bytesRead);
        }
    }
}
```

Ці приклади демонструють, як різні мови програмування та їх бібліотеки надають засоби для роботи зі стримами, що допомагає оптимізувати обробку даних.

| Back | Forward |
|---|---|
| [Як обробити помилки при роботі зі стримами в Node.js?](/ua/middle/nodejs/how-to-handle-errors-when-working-with-streams-in-nodejs.md)  | [Чи працювали ви з pino?](/ua/middle/nodejs/have-you-worked-with-pino.md) |