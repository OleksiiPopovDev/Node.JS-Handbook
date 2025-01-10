#### * Handle relationships between tables (e.g., one-to-many, many-to-many)

Для ефективного управління зв'язками між таблицями в реляційних базах даних використовуються такі концепції, як "один-до-багатьох" (one-to-many) і "багато-до-багатьох" (many-to-many). Нижче пояснюється, як ці зв'язки реалізуються:

### Один-до-багатьох (One-to-Many)
Цей зв'язок передбачає, що один запис в одній таблиці може бути пов'язаний з багатьма записами в іншій таблиці. Щоб реалізувати зв'язок "один-до-багатьох":

1. **Первинний ключ**: Основна таблиця містить первинний ключ (Primary Key), який однозначно ідентифікує кожен запис.

2. **Зовнішній ключ**: Залежна таблиця містить зовнішній ключ (Foreign Key), який посилається на первинний ключ основної таблиці.

#### Приклад:
Припустимо, є дві таблиці: `Customers` і `Orders`.

- **Customers**: Має первинний ключ `CustomerID`.
- **Orders**: Має зовнішній ключ `CustomerID`, що посилається на `CustomerID` у таблиці `Customers`.

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(255)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    OrderDate DATE,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
```

### Багато-до-багатьох (Many-to-Many)
Для реалізації зв'язку "багато-до-багатьох" використовується проміжна таблиця, яка містить зовнішні ключі для обох пов'язаних таблиць:

1. **Проміжна таблиця**: Ця таблиця реалізує зв'язок, містить два зовнішні ключі, які посилаються на первинні ключі двох інших таблиць.

#### Приклад:
Припустимо, є дві таблиці: `Students` і `Courses`.

- **Students**: Має первинний ключ `StudentID`.
- **Courses**: Має первинний ключ `CourseID`.
- **Enrollments**: Проміжна таблиця з полями `StudentID` і `CourseID`, кожне з яких є зовнішнім ключем.

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(255)
);

CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    Title VARCHAR(255)
);

CREATE TABLE Enrollments (
    StudentID INT,
    CourseID INT,
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID),
    PRIMARY KEY (StudentID, CourseID)
);
```

### Підсумок
Зв'язки в реляційних базах даних дозволяють структурувати дані так, щоб вони були взаємопов'язані, що забезпечує гнучкість і цілісність даних. Використання первинних і зовнішніх ключів є основним підходом для реалізації зв'язків між таблицями.

| Back | Forward |
|---|---|
| [Implement database indexing](/ua/middle/database/create-database-indexes.md)  | [Implement secure REST APIs](/ua/middle/database/implement-secure-rest-apis.md) |