#### 6. Чи можливо використовувати кілька потоків (threads)? За допомогою яких модулів це реалізовано?

Так, в Python можливо використовувати кілька потоків (threads) для виконання завдань паралельно. Це може бути корисно для задач, пов'язаних з обробкою вводу/виводу або незначними обчислювальними операціями. Для реалізації багатопоточності в Python можна скористатися такими модулями:

1. **threading**: Цей модуль забезпечує високорівневий інтерфейс для роботи з потоками. Він дозволяє створювати та керувати потоками, блокувати ресурси, використовувати замки та взаємодіяти між потоками.

    ```python
    import threading

    def print_numbers():
        for i in range(5):
            print(i)

    thread = threading.Thread(target=print_numbers)
    thread.start()
    thread.join()
    ```

2. **concurrent.futures**: Це модуль, який надає високорівневий API для асинхронного виконання викликів через пул потоків або процесів. ThreadPoolExecutor з цього модуля можна використовувати для багатопоточності.

    ```python
    from concurrent.futures import ThreadPoolExecutor

    def print_number(number):
        print(number)

    with ThreadPoolExecutor(max_workers=3) as executor:
        executor.map(print_number, range(5))
    ```

Обмеження використання потоків в Python пов'язані з GIL (Global Interpreter Lock), який дозволяє тільки одному потоку виконувати обчислювальні операції одночасно в інтерпретаторі CPython. Це означає, що багатопоточність не є оптимальною для CPU-зв'язаних завдань. Для таких завдань краще використовувати багатопроцессорність за допомогою модуля `multiprocessing`.

| Back | Forward |
|---|---|
| [Яким чином Node.js сервер здатен обробляти одночасно багато паралельних запитів від клієнтів, маючи лише один thread?](/ua/junior/nodejs/how-does-a-nodejs-server-handle-multiple-parallel-requests-from-clients-simultaneously-using-only-one-thread.md)  | [Node.js інтерпретує чи компілює код програми?](/ua/junior/nodejs/7-does-nodejs-interpret-or-compile-code.md) |