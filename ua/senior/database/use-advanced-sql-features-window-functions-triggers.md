#### * Use advanced SQL features (window functions, triggers)

# Використання передових функцій SQL (віконні функції, тригери)

## Віконні функції

Віконні функції в SQL дозволяють виконувати обчислення по групах рядків, визначених віконним кадром, без необхідності створення додаткових підзапитів або використання агрегатних функцій з групуванням. Це особливо корисно для виконання складних аналітичних запитів.

### Приклади віконних функцій

1. **ROW_NUMBER()**
   ```sql
   SELECT employee_id, salary,
          ROW_NUMBER() OVER (ORDER BY salary DESC) AS rank
   FROM employees;
   ```
   Цей запит присвоює кожному співробітнику порядковий номер на основі величини його заробітної плати у спадному порядку.

2. **RANK()**
   ```sql
   SELECT employee_id, salary,
          RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS department_rank
   FROM employees;
   ```
   Тут `RANK()` присвоює ранги співробітникам по їх заробітній платі в межах кожного відділу.

3. **SUM()**
   ```sql
   SELECT department_id, employee_id, salary,
          SUM(salary) OVER (PARTITION BY department_id) AS total_department_salary
   FROM employees;
   ```
   У цьому прикладі обчислюється загальна заробітна плата в межах кожного відділу.

## Тригери

Тригери в SQL - це спеціальні процедури, які автоматично виконуються у відповідь на певні події в таблицях бази даних, такі як вставка, оновлення або видалення рядків. Це дозволяє автоматизувати контроль цілісності даних та бізнес-логіку у вашій базі.

### Приклад створення тригера

```sql
CREATE TRIGGER update_salary_history
AFTER UPDATE OF salary ON employees
FOR EACH ROW
BEGIN
  INSERT INTO salary_history (employee_id, old_salary, new_salary, change_date)
  VALUES (:OLD.employee_id, :OLD.salary, :NEW.salary, SYSDATE);
END;
```

У цьому прикладі тригер `update_salary_history` автоматично вставляє запис до таблиці `salary_history` кожен раз, коли оновлюється заробітна плата співробітника, зберігаючи стару, нову зарплату та дату змінення.

### Поради щодо використання тригерів

1. **Обмежуйте складність:** Тригери можуть суттєво вплинути на продуктивність, тому робіть їх якомога простішими.
2. **Документація:** Завжди документуйте логіку бізнесу, яка реалізується за допомогою тригерів, щоб уникнути складнощів у підтримці коду.
3. **Тестування:** Приділяйте особливу увагу тестуванню тригерів, щоб переконатися у їх коректному виконанні, особливо при обробці великих обсягів даних.

Використання передових функцій SQL, таких як віконні функції та тригери, допомагає ефективно управляти даними та реалізовувати складні бізнес-вимоги.

| Back | Forward |
|---|---|
| [Що таке eventual consistency? Які ще бувають типи узгодженості?](/ua/senior/database/what-is-eventual-consistency-what-other-types-of-consistency-are-there.md)  | [Design scalable query logic](/ua/senior/database/design-scalable-query-logic.md) |