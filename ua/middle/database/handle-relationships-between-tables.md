#### * Handle relationships between tables (e.g., one-to-many, many-to-many)

У реляційних базах даних взаємозв'язки між таблицями є ключовими для зберігання та управління даними. Нижче наведено основні типи зв'язків, їх особливості та реалізація:

### 1. One-to-Many (один-до-багатьох)

#### Опис:
Цей тип зв'язку означає, що один запис в одній таблиці може бути пов'язаний з багатьма записами в іншій таблиці.

#### Реалізація:
- Таблиця «багатьох» містить зовнішній ключ, що посилається на первинний ключ таблиці «одного».
  
#### Приклад:
Розглянемо дві таблиці: `Authors` та `Books`. Один автор може мати багато книг, але кожна книга належить лише одному автору.

```sql
CREATE TABLE Authors (
    AuthorID INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(100),
    AuthorID INT,
    FOREIGN KEY (AuthorID) REFERENCES Authors(AuthorID)
);
```

### 2. Many-to-Many (багато-до-багатьох)

#### Опис:
У цьому випадку один запис в одній таблиці може бути пов'язаний з багатьма записами в іншій таблиці, і навпаки.

#### Реалізація:
- Створюється проміжна (сполучна) таблиця, яка містить зовнішні ключі до обох таблиць, які є частинами зв'язку. Ця таблиця може також містити додаткові атрибути.

#### Приклад:
Розглянемо таблиці `Students` та `Courses`, де студент може бути записаний на багато курсів, а курс можуть відвідувати багато студентів. Використовується проміжна таблиця `Enrollments`.

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100)
);

CREATE TABLE Courses (
    CourseID INT PRIMARY KEY,
    CourseName VARCHAR(100)
);

CREATE TABLE Enrollments (
    StudentID INT,
    CourseID INT,
    EnrollmentDate DATE,
    PRIMARY KEY (StudentID, CourseID),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
```

### 3. One-to-One (один-до-одного)

#### Опис:
Цей тип зв'язку означає, що один запис в одній таблиці є пов'язаним тільки з одним записом в іншій таблиці.

#### Реалізація:
- Один з підходів — обидві таблиці мають такий самий первинний ключ, який одночасно є і зовнішнім ключем.

#### Приклад:
Розглянемо таблиці `Users` та `UserProfiles`, де кожен користувач має лише один профіль.

```sql
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(100)
);

CREATE TABLE UserProfiles (
    ProfileID INT PRIMARY KEY,
    UserID INT,
    Address VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
```

Ці структури забезпечують цілісність даних і допомагають оптимізувати запити, відповідно до зв'язків між даними.

| Back | Forward |
|---|---|
| [Implement database indexing](/ua/middle/database/implement-database-indexing.md)  | [Implement secure REST APIs](/ua/middle/database/implement-secure-rest-apis.md) |