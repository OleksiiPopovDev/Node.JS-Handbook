#### * Use const for immutability

В JavaScript `const` використовується для оголошення змінних, значення яких не можуть бути переназначені після їх ініціалізації. Це дозволяє забезпечити (певний рівень) незмінність. Ось приклад:

```javascript
const PI = 3.14159;
PI = 3.15; // Це викличе помилку, оскільки ми намагаємось змінити значення, оголошене через const.
```

Однак, важливо врахувати, що `const` запобігає зміні прив'язки змінної, але якщо значенням є змінний тип даних, як-от об'єкт або масив, то можна змінювати їх вміст:

```javascript
const person = {
  name: 'Андрій',
  age: 25
};

person.age = 26; // Це допустимо, властивості об'єкта можна змінювати.
console.log(person.age); // 26
```

Таким чином, коректніше говорити, що `const` забезпечує незмінність прив'язки змінної, але не обов'язково незмінність внутрішнього стану об'єкта або масиву, на які він вказує.

| Back | Forward |
|---|---|
| [Use advanced array and object methods (reduce, map, filter)](/ua/middle/javascript/use-advanced-array-and-object-methods-like-reduce-map-filter.md)  | [Design efficient data structures](/ua/middle/javascript/design-efficient-data-structures.md) |