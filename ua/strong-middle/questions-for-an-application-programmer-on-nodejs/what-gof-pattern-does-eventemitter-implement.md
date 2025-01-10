#### 192. Який паттерн з GoF реалізує EventEmitter?

EventEmitter реалізує шаблон (паттерн) проектування "Спостерігач" (Observer) з книги "Design Patterns: Elements of Reusable Object-Oriented Software" (GoF). У цьому паттерні об'єкт (у цьому випадку EventEmitter) керує списком інших об'єктів (спостерігачів) і повідомляє їм про будь-які зміни стану, зазвичай шляхом виклику методу. У Node.js це зазвичай здійснюється через підписку на певні події та їх обробку.

| Back | Forward |
|---|---|
| [Наведіть кілька типових патернів проєктування з GoF і приклади їхнього використання у Node.js.](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-are-typical-design-patterns-from-the-gof-and-how-are-they-used-in-nodejs.md)  | [У чому полягає проблема товстих контролерів?](/ua/strong-middle/questions-for-an-application-programmer-on-nodejs/what-is-the-problem-with-thick-controllers.md) |