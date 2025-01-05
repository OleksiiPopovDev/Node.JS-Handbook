# Node.JS-Handbook

---
## Junior
### Node.js
1. [Що таке Node.js?](./junior/nodejs/1-what-is-nodejs.md)
2. [Які основні переваги та недоліки використання Node.js?](./junior/nodejs/what-are-the-main-advantages-and-disadvantages-of-using-nodejs.md)
3. [Для яких завдань Node.js не підходить?](./junior/nodejs/what-tasks-is-nodejs-not-suitable-for.md)
4. [Які в Node.js головні компоненти?](./junior/nodejs/what-are-the-main-components-of-a-nodejs-application.md)
5. [Яким чином Node.js сервер здатен обробляти одночасно багато паралельних запитів від клієнтів, маючи лише один thread?](./junior/nodejs/5-how-does-a-nodejs-server-handle-multiple-concurrent-requests-from-clients-in-parallel-using-only-one-thread.md)
6. [Чи можливо використовувати кілька потоків (threads)? За допомогою яких модулів це реалізовано?](./junior/nodejs/is-it-possible-to-use-multiple-threads-how-is-this-implemented-with-which-modules.md)
7. [Node.js інтерпретує чи компілює код програми?](./junior/nodejs/7-compiled.md)
8. [Як зчитувати великі файли за допомогою Node.js?](./junior/nodejs/how-to-read-large-files-with-nodejs.md)
9. [Що таке libuv i v8? Яке їхнє призначення?](./junior/nodejs/what-is-libuv-and-v8-what-are-they-used-for.md)
10. [Яка різниця між microtasks і macrotasks? Наведіть приклади таких завдань.](./junior/nodejs/what-is-the-difference-between-a-microtask-and-a-macro-task-provide-examples-of-each-type-of-task.md)
11. [Що таке стрим (stream)?](./junior/nodejs/what-is-a-stream.md)
12. [Які види стримів ви знаєте?](./junior/nodejs/12-what-types-of-strains-do-you-know.md)
13. [Що таке event loop? З яких компонентів складається і як працює?](./junior/nodejs/what-is-an-event-loop-its-components-and-how-does-it-work.md)
14. [Що таке логування і моніторинг?](./junior/nodejs/what-is-logging-and-monitoring.md)
15. [Чим відрізняється моноліт від мікросервісу?](./junior/nodejs/whats-the-difference-between-a-monolith-and-microservice.md)
16. [В чому різниця між такими ключовими словами мови, як string і String?](./junior/nodejs/whats-the-difference-between-keywords-like-string-and-string.md)
* [Understand Node.js basics](./junior/nodejs/learn-the-basics-of-nodejs.md)
* [Explain Node.js benefits and limitations](./junior/nodejs/what-are-the-benefits-and-limitations-of-nodejs.md)
* [Identify unsuitable use cases](./junior/nodejs/unusual-usage.md)
* [Understand single-thread model](./junior/nodejs/understand-singlethread-model.md)
* Explain multi-threading capabilities
* Understand middleware purpose
* Transition between middleware layers
* Read and process large files
* Use the built-in fs module for file operations
* Understand Node.js package managers (NPM/Yarn/PNPM)

### Express.js
17. Для чого використовують middleware?
18. Як переходити з однієї middleware в іншу?
19. Як пріоритизувати middleware?
20. Як організувати error handler?
* Basic routing with Express.js
* Handle errors with Express.js middleware

### JavaScript
21. Що таке асинхронність і асинхронний код?
22. Яка відмінність між var, let і const? Чому варто використовувати const, якщо змінна не буде змінюватися далі в коді?
23. Як відкласти виконання функції на конкретний час?
24. Які ви знаєте способи оголошення функції?
25. Що таке анонімна функція?
26. Наведіть приклади функції, що самовикликається.
27. У чому різниця між function expression і function declaration?
28. Як з JS масиву чисел отримати інший масив, де залишаться тільки числа понад 10? Яку функцію масиву для цього використовувати?
29. Як видалити елемент масиву та об’єкта?
30. Для чого призначений тип void?
31. Де і для чого використовують super()?
32. Для чого потрібен this і в яких випадках його використовувати?
33. Що таке NaN і як його використати?
34. Що таке NPM? Які аналоги ви знаєте?
35. В чому переваги і недоліки NPM проти Yarn/PNPM?
36. Які методи Promise API ви знаєте? Яка різниця між ними?
37. Наведіть структуру HTTP request/response.
38. Що таке new Set() і new Map()?
39. Що таке логічний оператор && та || і чим відрізняються ці оператори від логічного оператора «??».
* Understand async workflows
* Differentiate var, let, and const
* Use Map and Set effectively
* Understand event loop fundamentals
* Handle errors with try-catch and Promise chains
* Write simple DOM manipulation code
* Understand JavaScript module system (ESM and CommonJS)

### Database
40. Для чого потрібні бази даних у застосунках?
41. Що таке ORM і для чого її використовують?
42. Що таке міграція даних? Для чого вона потрібна?
43. Що таке транзакція?
44. Як оновити значення колонки в таблиці?
45. За допомогою чого можна відфільтрувати таблицю Users за параметром віку?
* Understand ORM basics
* Implement data migrations
* Filter and query tables
* Understand relational vs non-relational databases

### WEB
46. Що таке Cross-Origin Resource Sharing (CORS)? Де трапляється?
47. Як отримати помилку CORS у консолі розробника?
48. Назвіть основні HTTP-методи RESTful або CRUD застосунків.
49. Що таке DNS?
* Understand CORS and HTTP methods
* Understand basic RESTful principles
* Use tools like Postman to test APIs

### Nest.js
* Understand Dependency Injection (DI) basics
* Define providers
* Understand pipes
* Understand guards
* Understand interceptors
* Understand basic usage of controllers
* Write simple unit tests for services and controllers
* Create RESTful APIs using controllers
* Use Nest.js CLI for project generation and scaffolding
* Basic usage of decorators like @Controller, @Get, @Post

---
## Middle
### Node.js
66. Назвіть переваги Node.js, якщо порівнювати з іншими технологіями для розробки серверних застосунків.
67. Для яких задач ви використали б кілька процесів/потоків (processes/threads)?
68. У чому полягає різниця паралельного та асинхронного програмування на прикладі серверних застосунків?
69. Які типи асинхронних операцій здатен виконувати Node.js?
70. Які модулі Node.js ви знаєте? Яке їхнє основне призначення?
71. Яка різниця між операційними помилками та помилками програміста?
72. Які сервіси можна використати для моніторингу і логування?
73. Що таке libuv? Назвіть його складові.
74. Які існують шаблони розподілених транзакцій?
75. Чи можливо програмно контролювати виділення і звільнення пам’яті в Node.js програмі?
76. Поясніть, що таке Garbage Collector.
77. Що означає «витік пам’яті» процеса? Як цьому запобігти?
78. Як налагодити heap out of memory?
79. Як налаштувати кешування?
80. Які є варіанти використання модулів child_process, worker_threads і cluster?
81. Яка різниця у використанні ES modules і CommonJS модулів?
82. Для чого і як використовують клас EventEmitter з базового модуля ’node:events’?
83. Скільки ядер процесора залучені при виконанні Node.js програми за замовчуванням?
84. Що таке middleware? Якщо ми пишемо свій middleware, чому саме там, чому не в коді сервісу?
85. Що таке EventEmitter в Node.js?
86. Яке призначення файлу package.json для Node.js проєктів?
87. Як можна за допомогою Node.js app прочитати файл з логами із файлової системи? Як прочитати файл, який займає понад 300 мегабайтів?
88. Поясніть цикл подій у Node.js.
89. Що таке і навіщо потрібен Thread Pool (Worker Pool)?
90. SIGTERM vs SIGINT: які їхні переваги та недоліки?
91. Що таке backpressure у контексті стримів? Як з цим боротись?
92. Для чого потрібні stream.PassThrough і pipe (pipeline)? Наведіть приклади використання.
93. Як використовувати події ’data’, ’end’, ’error’, ’finish’ у стримах Node.js?
94. Як обробити помилки при роботі зі стримами в Node.js?
95. Наведіть приклади роботи зі стримами різних типів.
96. Чи працювали ви з pino?
* Utilize multi-threading effectively
* Stream large files efficiently
* Explain roles of libuv and V8 in Node.js
* Optimize task scheduling
* Use child_process and worker_threads for parallel processing
* Handle real-time communication using WebSocket or Socket.io
* Manage environment variables securely
* Understand and handle backpressure in streams
* Implement caching strategies (Redis, MemoryCache)

### Nest.js
97. Як описати приєднання до бази даних?
98. Як реалізувати свій декоратор валідації?
* Implement DI in services
* Create and import modules
* Implement custom providers
* Create custom pipes
* Implement custom guards
* Write and execute integration tests
* Use testing libraries such as Jest for coverage
* Understand WebSocket implementation in Nest.js
* Handle file uploads with Nest.js
* Create GraphQL APIs using @nestjs/graphql
* Implement authentication using Passport.js and JWT

### Express.js
* Prioritize middleware execution
* Create modular routing systems
* Integrate with templating engines (e.g., EJS, Handlebars)
* Optimize transactional workflows

### JavaScript
99. Чому в JavaScript не рекомендують робити довгих обчислень у runtime?
100. Чи гарантовано setTimeout викличе функцію через заданий час? Від чого це залежить?
101. Що таке Promises?
102. Яка різниця між Promise.allSettled, Promise.race і Promise.any?
103. Що таке callback у JavaScript?
104. Чи кращі Promises за callback підхід? Чому?
105. Що таке замикання/closure?
106. Поясніть переваги та недоліки використання «use strict».
107. Наведіть приклад блокування циклу подій.
108. Яка різниця між abstract і interface?
109. Що таке Web Workers? Для чого їх використовують?
110. Які особливості передачі даними між worker’ами та основним потоком?
111. Які обмеження накладаються на потік Web Workers?
112. Окрім використання оператора ‘return’, як ще можна повернути результат виконання з функції (процедури)?
* Implement async patterns
* Use advanced array and object methods (reduce, map, filter)
* Use const for immutability
* Design efficient data structures
* Analyze event loop performance
* Understand and use the Proxy object
* Implement module exports and imports for scalability

### Microservices
113. Яка різниця між Monolith/SOA/Microservices?
114. Назвіть переваги і недоліки мікросервісної архітектури.
115. Як забезпечити стійкість і можливість масштабування мікросервісів?
116. Як відстежувати несправності?

### DevOps
117. Що таке CI (безперервна інтеграція)?
118. Як використовують Docker?
119. У чому різниця між blue/green розгортанням і rolling розгортанням.

### Networking
120. Як браузер дізнається, яку сторінку завантажити за адресою домену?
121. Яка різниця між HTTP і HTTPS?
122. Яким чином HTTPS робить вебзастосунок безпечнішим?
123. Що таке Socket? Яка різниця між Socket і long polling?
124. Який популярний архітектурний спосіб розробки API ви знаєте?
125. Яка різниця між GraphQL і REST?
126. Яким чином ви б спроєктували API для bulk delete?

### System Design
127. Що таке теорема CAP?
128. Чим горизонтальне масштабування відрізняється від вертикального масштабування?
129. Що ви розумієте під балансуванням навантаження? Чому це важливо при проєктуванні системи?
130. Яка концепція sync/async зв’язку між сервісами в архітектурі мікросервісу?
131. Які ви знаєте популярні методології реалізації async-зв’язку між сервісами в архітектурі мікросервісу? Які є плюси та мінуси?

### Security
132. Які типи чутливості вебзастосунків ви знаєте?
133. Як захиститися від XSS?
134. Як захистити cookie?
135. Що таке CORS?
136. Що таке Content Security Policy?

### Testing
137. Навіщо писати тести?
138. Чому юніти мають бути базою в піраміді тестування?
139. Для чого потрібне інтеграційне тестування?
140. Навіщо потрібне юніт-тестування?
141. Навіщо потрібне E2E-тестування?
142. Наведіть приклад поганих інтеграційних і юніт-тестів.
143. Яким чином ви б протестували складний запит до бази даних у класі репозиторію?
144. Які б типи/обсяг тестів ви обрали для абсолютно нової системи без будь-яких обмежень з боку замовника?

### Database
145. Що таке транзакції в базах даних? Для чого вони потрібні?
146. Які рівні ізоляції транзакцій бувають? Плюси і мінуси?
147. Що таке foreign key? Яку роль він виконує?
148. Що таке JOIN?
149. Чим LEFT відрізняється від INNER?
150. Які переваги бази даних SQL, якщо порівнювати з базою даних NoSQL?
151. Коли слід використовувати базу даних NoSQL замість реляційної бази даних?
152. Як індекс бази даних може підвищити продуктивність?
153. Які мінуси додавання індексів?
154. Які типи індексів існують і яка різниця між ними?
155. Що таке властивість ACID у базі даних?
156. Як створити index для бази даних, якщо вона реляційна?
* Optimize query performance
* Implement database indexing
* Handle relationships between tables (e.g., one-to-many, many-to-many)
* Implement secure REST APIs

## Strong Middle
### Questions for a systems programmer
160. Які ви знаєте проблеми, баги та вузькі місця у Node.js?
161. Які ви знаєте вбудовані засоби серіалізації у Node.js, аналогічні до JSON, але для бінарної серіалізації?
162. Чому Node.js не однопотоковий? Доведіть, що він ніколи не був однопотоковим?
163. Чим замінити deprecated: fs.exists?
164. Що таке back pressure для стримів? Що спричинила б його відсутність?
165. Що таке MessagePort і BroadcastChannel?
166. Чим відрізняються fs.stat, fs.fstat, fs.lstat?
167. Як пов’язані node:async_hooks і AsyncLocalStorage?
168. Чого не вистачає у ESM, що підтримується у CJS?
169. Як стежити за змінами файлів і директорій на диску? Які з цим можуть виникати проблеми?
170. Що можна робити за допомогою node:vm?
171. Як захистити SharedArrayBuffer від запису з різних worker_threads?
172. Доведіть, що будь-який модуль у Node.js при завантаженні огортається у функцію і створює замикання?
173. Де використовують патерн Revealing constructor (відкритий конструктор)?
174. Як зробити перевизначення write для екземпляру Writable без створення класу спадкоємця?
175. У чому причина повільності викликів з JavaScript коду до аддонів на C, C++ чи під’єднаних через N-API?
176. Навіщо потрібен WASI та які можливості він дає?
177. Для чого використовують new Error.captureStackTrace?
178. Які ви знаєте deprecated API та якою є стратегія їх виведення з використання?
179. Чому важливо виконувати правило eslint: consistent-return з огляду на оптимізацію v8?

### Questions for an application programmer on Node.js
180. Чому потрібно додавати префікс node при завантаженні вбудованих модулів?
181. Що можна зробити за допомогою for await з request: IncomingMessage?
182. Як скопіювати теку з вкладеними файлами та іншими теками за допомогою node:fs?
183. Навіщо використовують AbortController? В яких API він підтримується?
184. Чим сучасним замінити node:domain API?
185. Яке API реалізує nodejs/undici?
186. Коли ми можемо використовувати синхронні версії операцій з файлами з node:fs замість асинхронних? На що звертати увагу, ухвалюючи таке рішення?
187. Наведіть найкращі практики для обробки помилок в асинхронному коді.
188. Як у проєктах на Node.js можуть з’явитися вразливості з (на вибір): XSS, Path traversal, SQLI, CSRF? Як від них захищатися?
189. Як можливі race conditions при асинхронному програмуванні?
190. Які є плюси та мінуси розділення коду на .js та окремо тайпінги .d.ts?
191. Наведіть кілька типових патернів проєктування з GoF і приклади їхнього використання у Node.js.
192. Який паттерн з GoF реалізує EventEmitter?
193. У чому полягає проблема товстих контролерів?
194. Наведіть приклади протікання абстракцій у типових системах на базі Node.js.
195. Як можна створити singleton за допомогою системи модульності у Node.js?
196. Наведіть приклад патерну adapter з вбудованих бібліотек.
197. Для чого нам потрібні такі поля Error: error.cause, error.code, error.message, error.stack?

## Senior
### Node.js
198. Які найбільші проблеми платформи Node.js?
199. Скільки потоків Node.js використовує для роботи? Яким чином можна регулювати цю кількість?
200. Чи є в Node.js можливість виконувати скрипти, написані іншими мовами?
201. Чи є різниця у виконанні microtasks/macrotasks залежно від версій Node.js?
202. Як працювати із вбудованими Node.js функціями, реалізованими через callback інтерфейс в async/await стилі?
203. У чому полягає різниця між require/module.exports і ES6-модулями?
204. З яких стадій складається цикл event loop в libuv?
205. Яким чином бібліотека libuv досягає неблокуючого вводу і виводу?
206. Що таке гарантії доставки повідомлень та якими вони бувають?
207. У яких випадках ви застосували б асинхронний зв’язок між двома системами?
208. Чи можна замінити в V8 в Node.js?
209. Як налаштувати логування і моніторинг? Які найкращі практики ви знаєте?
210. Як би ви використали стрими для покращення продуктивності вебзастосунку?
* Use middleware for advanced request handling
* Implement custom logging systems (e.g., Winston, Pino)
* Use performance monitoring tools (e.g., Prometheus, New Relic)
* Secure Node.js applications (e.g., helmet.js, sanitization libraries)
* Analyze event loop behavior
* Design advanced task prioritization
* Debug task execution issues
* Handle distributed systems communication in Node.js
* Use clustering for high-availability Node.js applications
* Contribute to the Node.js ecosystem
* Implement custom threading solutions
* Optimize file handling systems

### Nest.js
* Use advanced decorators and custom modules
* Integrate third-party libraries into the framework
* Understand CQRS (Command Query Responsibility Segregation) with Nest.js
* Implement event-driven architectures using EventEmitter
* Handle microservices with @nestjs/microservices
* Integrate Nest.js with cloud services like AWS or Google Cloud
* Build and manage microservice patterns in Nest.js
* Design and implement dynamic modules
* Implement advanced GraphQL features (e.g., subscriptions, resolvers)
* Scale applications with Kubernetes and Docker in Nest.js projects
* Debug and enhance DI performance
* Implement advanced module hierarchies
* Design complex provider patterns
* Debug pipe execution
* Design complex guard strategies

### Express.js
* Build complex middleware systems
* Integrate authentication mechanisms
* Use Express.js for SSR (Server-Side Rendering)
* Implement multi-tenancy in Express applications
* Build middleware systems optimized for performance
* Implement advanced SSR or CSR pipelines

### Architecture
211. Які є способи масштабувати Node.js сервер?
212. Які є переваги кластеризації Node.js застосунку? Які проблеми можуть виникнути?
213. У чому основна різниця чи схожість у роботі вебсерверів на Node.js або, наприклад, на Apache (PHP)?
214. Що таке методологія Twelve-Factor App?
215. Які показники моніторингу найважливіші?
216. Опишіть дизайн-паттерн SAGA. Яка різниця між транзакцією та операцією компенсації в SAGA, в SOA?
217. Що таке авторизація та аутентифікація?
218. Express vs Nest.js: які переваги і недоліки кожного фреймворку? Коли який доцільніше використовувати?
219. Що таке CLS і де варто його використовувати?
220. Що таке graceful shutdown? Як його імплементувати?
221. Наведіть приклади імплементації GoF патернів у Node.js і фреймворках.
222. Порівняйте MessageQ, RabbitMQ і Kafka.
223. Які проблеми розв’язує serverless?

### JavaScript
224. З якою швидкістю витягуватимуться дані за ключем зі звичайного JavaScript об’єкта? Поясніть, що це за структура даних і як вона працює?
225. Чим JS відрізняється від багатопотокових мов?
226. Що таке функції вищого порядку?
227. Назвіть об’єкти першого класу.
228. Як зрозуміти, чи є у вашому коді/застосунку витоки пам’яті (memory leaks)?
229. Як працювати з асинхронною відповіддю?
230. Як можна отримати інкапсуляцію всередині класу без використання Typescript?
* Optimize code for the event loop
* Use advanced JavaScript design patterns (Observer, Singleton, Factory)
* Handle memory leaks in JavaScript
* Optimize async systems
* Debug event loop bottlenecks
* Implement TypeScript for JavaScript projects
* Write advanced polyfills for compatibility
* Design custom decorators
* Design reusable modules
* Develop custom async utilities
* Implement advanced scoping mechanisms
* Implement custom data structures
* Implement custom event loop extensions
* Contribute to open-source JavaScript libraries or frameworks

### Microservices
231. Розкажіть про ваш досвід роботи з мікросервісами в Node.js. Як ви забезпечували комунікацію між різними сервісами?
232. Як ви працювали з міграцією та покращенням сервісів в архітектурі мікросервісів?
233. Як би ви підходили до тестування та дебагу застосунку з мікросервісною архітектурою у Node.js?
234. Як би ви впоралися зі збоями в розподіленій системі (Failed message processing, dead letter queue)?
235. Які патерни для побудови мікросервісної архітектури ви використовували?
236. Як працює gateway?
237. Що таке CAP теорема?
238. Що краще: окремі бази даних для окремих мікросервісів чи одна база даних для всіх мікросервісів? Чому?

### Database
239. Які бувають рівні ізоляції транзакцій та чим вони відрізняються?
240. Навіщо існують рівні ізоляції транзакції? Наведіть приклади.
241. Що таке аномалії транзакцій (dirty read, dirty write, read skew, phantom read, lost update)?
242. У чому різниця нормалізованих і ненормалізованих даних? Наведіть приклад, коли які краще використовувати.
243. У чому різниця між оптимістичним та песимістичним блокуванням?
244. Навіщо потрібні індекси пошуку? Які мінуси в індексів?
245. Що таке race condition? Можете навести приклад?
246. Що таке реплікація? Навіщо вона потрібна?
247. Яка різниця між графом і деревом?
248. Чи доводилось вам робити оптимізацію перформансу за допомогою структур даних?
249. Наведіть плюси та мінуси Shared DB.
250. Що таке foreign keys і constraints у SQL базах даних?
251. Що таке масштабування баз даних? Як це робити?
252. Що таке шардинг?
253. Що таке concurrent locking в базі даних?
254. Чому властивості ACID важливі для SQL баз даних?
255. Що таке eventual consistency? Які ще бувають типи узгодженості?
* Use advanced SQL features (window functions, triggers)
* Design scalable query logic
* Optimize NoSQL data models for performance
* Design scalable ORM systems
* Debug complex queries
* Implement distributed query handling
* Handle eventual consistency in distributed databases
* Design database schemas for multi-region setups
