#### * Use advanced SQL features (window functions, triggers)

### Window Functions

Window functions в SQL дозволяють виконувати розрахунки для кожного рядка в наборі результатів з урахуванням інших рядків. Вони відрізняються від агрегатних функцій тим, що не згортають результати в один рядок. Основні можливості включають:

- **ROW_NUMBER()**: Пронумеровує рядки в межах вікна (наприклад, для визначення першого запису в кожній групі).

  ```sql
  SELECT 
    employee_id,
    department,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY hire_date) AS rank_in_department
  FROM employees;
  ```

- **RANK()** і **DENSE_RANK()**: Присвоюють ранг рядкам в межах вікна. RANK() дозволяє мати пропуски в рангах у випадку нічиї, тоді як DENSE_RANK() їх не допускає.

  ```sql
  SELECT 
    employee_id,
    department,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank
  FROM employees;
  ```

- **SUM(), AVG(), MIN(), MAX()** та інші агрегатні функції у поєднанні з OVER(). Вони дозволяють виконувати агрегування без згортування рядків (наприклад, обчислити середній бал у межах вікна).

  ```sql
  SELECT 
    employee_id,
    salary,
    AVG(salary) OVER (PARTITION BY department) AS avg_salary_in_department
  FROM employees;
  ```

### Triggers

Triggers — це механізми, які автоматично виконують деякий код у відповідь на певні події в базі даних (вставка, оновлення або видалення даних). Вони часто використовуються для забезпечення цілісності даних або для автоматизації специфічних бізнес-логік.

- **CREATE TRIGGER**: Застосовується для створення тригера. Вказуємо тип події (BEFORE, AFTER, INSTEAD OF) і операцію (INSERT, UPDATE, DELETE).

  ```sql
  CREATE TRIGGER log_employee_change
  AFTER UPDATE ON employees
  FOR EACH ROW
  BEGIN
    INSERT INTO employee_changes (employee_id, old_salary, new_salary, change_date)
    VALUES (:OLD.employee_id, :OLD.salary, :NEW.salary, SYSDATE);
  END;
  ```

Цей тригер записує зміни в зарплаті співробітника в лог таблицю `employee_changes` після кожного оновлення інформації про співробітника.

### Висновок

Використання window functions і triggers дозволяє вирішувати більш складні завдання з аналізу та обробки даних у SQL. Вони забезпечують потужні можливості, які відкривають нові горизонти для вдосконалення додатків і баз даних.

| Back | Forward |
|---|---|
| [Що таке eventual consistency? Які ще бувають типи узгодженості?](/ua/senior/database/what-is-eventual-consistency-what-are-other-types-of-consistency.md)  | [Design scalable query logic](/ua/senior/database/create-efficient-database-queries.md) |