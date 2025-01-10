#### * Write advanced polyfills for compatibility

Щоб створити передові поліфіли для кращої сумісності з старшими браузерами, потрібно розуміти, як працюють нові функції та як їх реалізувати за допомогою старих засобів мови JavaScript. Ось кілька прикладів поліфілів для сучасних методів.

### Array.prototype.includes

Метод `includes` визначає, чи міститься в масиві певний елемент, повертаючи `true` або `false` відповідно. Щоб створити поліфіл для `Array.prototype.includes`, можна використати метод `indexOf`:

```javascript
if (!Array.prototype.includes) {
  Array.prototype.includes = function(element, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }
    
    var o = Object(this);
    var len = o.length >>> 0;
    
    if (len === 0) {
      return false;
    }
    
    var n = fromIndex | 0;
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    
    while (k < len) {
      if (o[k] === element) {
        return true;
      }
      k++;
    }
    
    return false;
  };
}
```

### Object.assign

Метод `Object.assign` копіює всі перелічувані власні властивості з одного або декількох вихідних об'єктів у цільовий об'єкт. Щоб створити поліфіл, можна скористатися таким підходом:

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

### String.prototype.startsWith

Метод `startsWith` перевіряє, чи рядок починається з вказаної підстрічки. Його поліфіл може виглядати так:

```javascript
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(search, pos) {
    pos = pos || 0;
    return this.substr(pos, search.length) === search;
  };
}
```

### Array.from

Метод `Array.from` створює новий екземпляр масиву з об'єктоподібного або ітерованого об'єкта. Поліфіл для нього:

```javascript
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    return function from(arrayLike/*, mapFn, thisArg */) {
      var C = this;

      var items = Object(arrayLike);

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      var len = toLength(items.length);

      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      var k = 0;
      var kValue;

      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }

      A.length = len;
      return A;
    };
  }());
}
```

Ці поліфіли є тільки частиною того, що можна реалізувати. Завжди слідкуйте за тим, щоб нові фічі мали поліфіли для підтримки у старіших середовищах.

| Back | Forward |
|---|---|
| [Implement TypeScript for JavaScript projects](/ua/senior/javascript/implement-typescript-for-javascript-projects.md)  | [Design custom decorators](/ua/senior/javascript/create-special-effects.md) |