#### 250. Що таке foreign keys і constraints у SQL базах даних?

У SQL базах даних, `foreign keys` і `constraints` є важливими концепціями, які використовуються для забезпечення цілісності та зв’язків між таблицями.

### Foreign Keys (Зовнішні ключі)
Зовнішній ключ (`foreign key`) — це стовпець або набір стовпців у таблиці, які встановлюють зв’язок зі схожим або ідентичним стовпцем в іншій таблиці. Основна мета зовнішніх ключів — підтримувати цілісність даних (referential integrity) між реляційними таблицями.

#### Приклад:
```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    OrderDate DATE,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
```

У цьому випадку, `CustomerID` у таблиці `Orders` є зовнішнім ключем, який посилається на стовпець `CustomerID` у таблиці `Customers`.

### Constraints (Обмеження)
Обмеження (`constraints`) використовуються в SQL для забезпечення правил і цілісності даних у таблицях баз даних. Вони автоматично накладають певні умови, яким повинні відповідати дані, і допомагають запобігати некоректному введенню чи зміні даних.

#### Основні типи обмежень:
1. **PRIMARY KEY**: забезпечує унікальність для ідентифікації рядків у таблиці.
2. **FOREIGN KEY**: забезпечує референтну цілісність між таблицями.
3. **UNIQUE**: гарантує, що у стовпці всі значення будуть унікальними.
4. **NOT NULL**: забороняє збереження `NULL` значень у зазначених стовпцях.
5. **CHECK**: визначає умови, які кожен рядок повинний задовольняти.

#### Приклад з використанням обмежень:
```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) CHECK (Price > 0)
);
```

У цьому прикладі:
- `PRIMARY KEY` гарантує унікальність `ProductID`.
- `NOT NULL` забезпечує, щоб `ProductName` не мало `NULL` значень.
- `CHECK` гарантує, що значення `Price` завжди буде більше нуля.

| Back | Forward |
|---|---|
| [Наведіть плюси та мінуси Shared DB.](/ua/senior/database/what-are-the-pros-and-cons-of-a-shared-database.md)  | [Що таке масштабування баз даних? Як це робити?](/ua/senior/database/what-is-database-scaling-how-to-do-it.md) |