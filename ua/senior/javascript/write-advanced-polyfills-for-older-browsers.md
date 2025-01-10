#### * Write advanced polyfills for compatibility

Створення поліфілів (polyfills) для забезпечення сумісності може бути необхідним, коли ви хочете використовувати нові можливості JavaScript в старих браузерах, які їх не підтримують. Ось приклад декількох поліфілів для сучасних функцій JavaScript:

### Поліфіл для `Array.prototype.includes`

Метод `Array.prototype.includes` перевіряє, чи містить масив певний елемент:

```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {

    // Логічна перевірка
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    // Масив
    var o = Object(this);

    // Довжина масиву
    var len = o.length >>> 0;

    if (len === 0) {
      return false;
    }

    // Початковий індекс
    var n = fromIndex | 0;
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    while (k < len) {
      if (o[k] === searchElement) {
        // Елемент знайдено
        return true;
      }
      k++;
    }

    // Елемент не знайдено
    return false;
  };
}
```

### Поліфіл для `Object.assign`

Метод `Object.assign` використовується для копіювання значень всіх перелічуваних власних властивостей з одного або більшої кількості джерельних об'єктів до цільового об'єкта:

```javascript
if (typeof Object.assign != 'function') {
  Object.assign = function(target, varArgs) { 
    if (target == null) { 
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) { 
        for (var nextKey in nextSource) {
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to;
  };
}
```

### Поліфіл для `Promise`

`Promise` використовується для асинхронних обчислень, і його реалізація може бути досить складною:

```javascript
if (!window.Promise) {
  window.Promise = function(executor) {
    var _this = this;
    _this.callbacks = [];

    function resolve(value) {
      setTimeout(function() {
        _this.data = value;
        _this.callbacks.forEach(function(callback) {
          callback(value);
        });
      }, 0);
    }

    executor(resolve);
  };

  window.Promise.prototype.then = function(onResolved) {
    var _this = this;
    return new Promise(function(resolve) {
      _this.callbacks.push(function(value) {
        var result = onResolved(value);
        if (result instanceof Promise) {
          result.then(resolve);
        } else {
          resolve(result);
        }
      });
    });
  };
}
```

Ці поліфіли надають базову функціональність для згаданих вище методів та класів. Пам'ятайте, що для повної підтримки нових можливостей JavaScript й інших мов програмування часто доцільно використовувати бібліотеки на кшталт Babel або core-js, які забезпечують оптимальні рішення для поліфілів.

| Back | Forward |
|---|---|
| [Implement TypeScript for JavaScript projects](/ua/senior/javascript/implement-typescript-in-js-projects.md)  | [Design custom decorators](/ua/senior/javascript/design-custom-decorations.md) |