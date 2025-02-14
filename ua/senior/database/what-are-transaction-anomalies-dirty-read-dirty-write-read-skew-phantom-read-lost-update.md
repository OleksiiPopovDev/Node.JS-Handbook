#### 241. Що таке аномалії транзакцій (dirty read, dirty write, read skew, phantom read, lost update)?

У контексті баз даних аномалії транзакцій відносяться до небажаних явищ, що можуть статися при неналежній ізоляції транзакцій. Ось опис основних аномалій:

1. **Dirty Read (Брудне читання)**:
   - Відбувається, коли одна транзакція читає незатверджені зміни, зроблені іншою транзакцією. Якщо друга транзакція скасовується (відкочується), дані, прочитані першою транзакцією, стають неприпустимими або "брудними".

2. **Dirty Write (Брудний запис)**:
   - Стається, коли одна транзакція змінює дані, які ще не були затверджені іншою транзакцією. Це може призвести до нестабільного стану бази даних, якщо одна з цих транзакцій скасовується.

3. **Read Skew (Висновок з розбіжностей)**:
   - Також відомий як непослідовне читання. Виникає, коли транзакція читає дані, які були змінені іншими транзакціями після початку читання, що може призвести до непослідовності результатів.

4. **Phantom Read (Фантомне читання)**:
   - Трапляється, коли протягом однієї транзакції виконуються кілька читань з умовою, а між читаннями друга транзакція змінює дані (наприклад, додає або видаляє рядки), що відповідають цій умові. В результаті, під час повторного виконання тієї ж операції умови можуть змінитись, що створює "фантомні" рядки, які були або не були помічені раніше.

5. **Lost Update (Втрачений оновлення)**:
   - Виникає, коли дві або більше транзакцій читають той самий рядок і кожна з транзакцій модифікує його, а тільки одна зміна згодом записується. Інші зміни "втрачаються", тобто переписуються тією, що збереглась останньою.

Всі ці аномалії можуть порушити цілісність даних і можуть бути мінімізовані шляхом використання відповідних рівнів ізоляції у системах управління базами даних.

| Back | Forward |
|---|---|
| [Навіщо існують рівні ізоляції транзакції? Наведіть приклади.](/ua/senior/database/what-is-the-purpose-of-transaction-isolation-levels-provide-examples.md)  | [У чому різниця нормалізованих і ненормалізованих даних? Наведіть приклад, коли які краще використовувати.](/ua/senior/database/what-is-the-difference-between-normalized-and-denormalized-data-provide-an-example-of-when-to-use-each.md) |