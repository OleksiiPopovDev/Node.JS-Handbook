#### * Write simple DOM manipulation code

Ось простий приклад маніпуляції DOM за допомогою JavaScript. Цей код змінює текст у HTML-елементі <div> з ідентифікатором "myDiv" на "Привіт, світе!" після натискання кнопки.

HTML:
```html
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
</head>
<body>
    <div id="myDiv">Цей текст буде змінено</div>
    <button id="myButton">Змінити текст</button>

    <!-- Підключення JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

JavaScript (script.js):
```javascript
// Знаходимо елемент <button> за ідентифікатором
const button = document.getElementById('myButton');

// Додаємо обробник подій для натискання на кнопку
button.addEventListener('click', function() {
    // Знаходимо елемент <div> за ідентифікатором
    const div = document.getElementById('myDiv');

    // Змінюємо текстовий вміст елемента <div>
    div.textContent = 'Привіт, світе!';
});
```

У цьому прикладі, коли ви натиснете кнопку "Змінити текст", текст у елементі `<div>` зміниться на "Привіт, світе!". Це демонструє базове використання маніпуляції DOM з JavaScript.

| Back | Forward |
|---|---|
| [Handle errors with try-catch and Promise chains](/ua/junior/javascript/how-to-handle-errors-in-programming-using-trycatch-blocks-and-promise-chains.md)  | [Understand JavaScript module system (ESM and CommonJS)](/ua/junior/javascript/understand-javascript-module-systems.md) |