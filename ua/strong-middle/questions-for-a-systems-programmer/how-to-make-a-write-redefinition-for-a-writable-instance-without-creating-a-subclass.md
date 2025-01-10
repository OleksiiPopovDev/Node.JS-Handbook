#### 174. Як зробити перевизначення write для екземпляру Writable без створення класу спадкоємця?

У мові Java, якщо вам потрібно перевизначити метод `write` для екземпляра інтерфейсу `Writable` без створення окремого класу-нащадка, можна скористатися анонімним класом. Ось приклад, як це можна зробити:

```java
import java.io.*;

public class Main {
    public static void main(String[] args) {
        Writable myWritable = new Writable() {
            @Override
            public void write(OutputStream out) throws IOException {
                out.write("Hello, World!".getBytes());
            }
        };

        try (OutputStream out = new ByteArrayOutputStream()) {
            myWritable.write(out);
            System.out.println(out.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

interface Writable {
    void write(OutputStream out) throws IOException;
}
```

У цьому прикладі ми створюємо анонімний клас, який реалізує інтерфейс `Writable` і перевизначає метод `write`. Програма записує "Hello, World!" у `OutputStream`, демонструючи, що перевизначення виконувалось усередині анонімного класу.


| Back | Forward |
|---|---|
| [Де використовують патерн Revealing constructor (відкритий конструктор)?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-the-use-case-for-the-revealing-constructor-pattern.md)  | [У чому причина повільності викликів з JavaScript коду до аддонів на C, C++ чи під’єднаних через N-API?](/ua/strong-middle/questions-for-a-systems-programmer/what-is-the-reason-for-slow-function-calls-from-javascript-code-to-cc-addons-or-napi-connected-ones.md) |