#### * Implement custom event loop extensions

Реалізація власних розширень циклу подій (event loop) є більш складним завданням, яке зазвичай потребує глибокого розуміння функціонування JavaScript-рушія. Проте, базову імітацію або розширення циклу подій можна створити для освітніх цілей. Давайте спростимо це:

1. **Основи циклу подій**:
    - Event Loop в JavaScript виконує код, коллбеки з черг макрозавдань (наприклад, setTimeout, setInterval) і мікрозавдань (наприклад, проміси та queueMicrotasks).

2. **Імітація простого циклу подій**:
    - Ми можемо створити модель, що імітує механізм обробки черги завдань. Ось простий приклад:

```javascript
class SimpleEventLoop {
    constructor() {
        this.taskQueue = [];
        this.running = false;
    }

    addTask(task) {
        this.taskQueue.push(task);
    }

    run() {
        if (this.running) return;
        this.running = true;
        
        while (this.taskQueue.length > 0) {
            const task = this.taskQueue.shift();
            task();
        }

        this.running = false;
    }
}

// Приклад використання
const eventLoop = new SimpleEventLoop();

eventLoop.addTask(() => {
    console.log('Завдання 1');
});

eventLoop.addTask(() => {
    console.log('Завдання 2');
    eventLoop.addTask(() => {
        console.log('Завдання 4');
    });
});

eventLoop.addTask(() => {
    console.log('Завдання 3');
});

eventLoop.run();
```

3. **Пояснення**:
   - Створюємо `SimpleEventLoop` клас, де `taskQueue` є масивом для завдань.
   - `addTask` додає завдання до черги.
   - `run` виконує всі завдання в черзі послідовно до порожнечі черги.
   
4. **Обмеження**:
   - Цей приклад є спрощеною імітацією і не враховує асинхронні операції, такі як файлові операції, HTTP-запити, або розгляд черг мікрозавдань.
   - Реальна реалізація event loop в JavaScript набагато складніша і компонується з браузером чи Node.js для обробки різного роду асинхронності.

Це базовий навчальний приклад, який допомагає зрозуміти, що таке черга завдань і як вони можуть бути оброблені у циклі, але не слід плутати його з повноцінним циклом подій, що використовує рушії JavaScript.

| Back | Forward |
|---|---|
| [Implement custom data structures](/ua/senior/javascript/implement-custom-data-structures.md)  | [Contribute to open-source JavaScript libraries or frameworks](/ua/senior/javascript/contribute-to-opensource-javascript.md) |