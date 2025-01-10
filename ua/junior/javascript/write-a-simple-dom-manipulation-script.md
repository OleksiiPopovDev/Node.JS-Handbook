#### 57. Write simple DOM manipulation code

```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
    <style>
        #myButton {
            padding: 10px 20px;
            background-color: blue;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #myText {
            font-size: 24px;
            color: green;
        }
    </style>
</head>
<body>

    <button id="myButton">Click me!</button>
    <p id="myText">Hello, world!</p>

    <script>
        // Знайдемо елементи на сторінці
        const button = document.getElementById('myButton');
        const text = document.getElementById('myText');

        // Додамо обробник події кліку на кнопку
        button.addEventListener('click', () => {
            // Змінимо текст в елементі <p>
            text.textContent = 'Ви натиснули кнопку!';

            // Змінимо колір тексту
            text.style.color = 'red';
        });
    </script>

</body>
</html>
```

Цей приклад показує просте маніпулювання DOM, де натискання на кнопку змінює текст та колір елемента `<p>`.

| Back | Forward |
|---|---|
| [Handle errors with try-catch and Promise chains](/ua/junior/javascript/handling-errors-with-trycatch-blocks-and-promise-chaining.md)  | [Understand JavaScript module system (ESM and CommonJS)](/ua/junior/javascript/understand-javascript-module-system-esm-amp-cjs.md) |