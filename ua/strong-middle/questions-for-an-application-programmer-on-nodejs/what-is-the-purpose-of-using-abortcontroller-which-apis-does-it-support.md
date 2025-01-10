#### 183. Навіщо використовують AbortController? В яких API він підтримується?

`AbortController` є об'єктом в JavaScript, який використовується для контролю і скасування асинхронних операцій, таких як HTTP-запити. Його основне призначення — забезпечити спосіб для програмістів зупиняти виконання запиту або задачі, яка є вже в процесі.

### Основні використання `AbortController`:

1. **Скасування HTTP-запитів**: Найчастіше використовується з Fetch API для скасування запитів, якщо вони більше не потрібні або якщо потрібно уникнути зайвого навантаження на сервер.
   
2. **Контроль асинхронних операцій**: Використовується для контролю інших асинхронних операцій, як-от таймери або анімації, які можуть бути скасовані при необхідності.

### Як працює `AbortController`:

1. **Створення AbortController**: Спочатку створюється екземпляр `AbortController`.

   ```javascript
   const controller = new AbortController();
   ```

2. **Отримання сигналу**: Потім отримується сигнал, що буде використовуватись для пов'язання з операцією, яку потрібно контролювати.

   ```javascript
   const signal = controller.signal;
   ```

3. **Передача сигналу у запит**: Після цього цей сигнал передається в асинхронну операцію. Зокрема, у Fetch API:

   ```javascript
   fetch(url, { signal })
     .then(response => {
       // Обробка відповіді
     })
     .catch(error => {
       if (error.name === 'AbortError') {
         console.log('Запит був скасований');
       } else {
         console.error('Інша помилка:', error);
       }
     });
   ```

4. **Скасування операції**: Якщо потрібно скасувати операцію, викликається метод `abort()` у `AbortController`.

   ```javascript
   controller.abort();
   ```

### API, де `AbortController` підтримується:

- **Fetch API**: Найпоширеніше використання для скасування HTTP-запитів.
- **ReadableStream і WritableStream**: Часто в контексті роботи з потоками даних.
- В інших API, які використовують асинхронність і можуть приймати сигнал скасування.

`AbortController` забезпечує зручний механізм для контролю асинхронності в JavaScript і допомагає робити програми більш ефективними, дозволяючи скасовувати непотрібні завдання.

| Back | Forward |
|---|---|
| [Як скопіювати теку з вкладеними файлами та іншими теками за допомогою node:fs?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/how-to-copy-a-directory-with-nested-files-and-directories-using-nodefs.md)  | [Чим сучасним замінити node:domain API?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-is-a-modern-replacement-for-the-nodedomain-api.md) |