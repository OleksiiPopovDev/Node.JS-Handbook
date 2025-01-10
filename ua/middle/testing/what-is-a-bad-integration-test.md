#### 142. Наведіть приклад поганих інтеграційних і юніт-тестів.

Звичайно! Ось приклад поганих інтеграційних і юніт-тестів:

### Погані Юніт-Тести

1. **Занадто великі тести:**
   ```python
   def test_large_function():
       result = my_large_function(input_data)
       assert result.part1 == expected_part1
       assert result.part2 == expected_part2
       assert result.part3 == expected_part3
   ```
   *Проблема:* Такий тест перевіряє занадто багато аспектів функції одночасно. Якщо він не пройде, буде важко зрозуміти причину.

2. **Нестабільні тести:**
   ```python
   import random

   def test_random_behavior():
       result = my_function_with_random()
       assert result in [possible_outcome1, possible_outcome2]
   ```
   *Проблема:* Використання випадкових значень робить тест непередбачуваним, що ускладнює процес виявлення помилок.

3. **Тести, що залежать від зовнішніх систем:**
   ```python
   def test_external_api():
       response = call_external_api()
       assert response.status_code == 200
   ```
   *Проблема:* Такі тести можуть часто падати через проблеми із зовнішніми ресурсами, що не пов’язані з вашим кодом.

### Погані Інтеграційні Тести

1. **Тести без ізоляції:**
   ```python
   def test_database_interaction():
       create_user_in_db(user_data)
       assert get_user_from_db(user_data.id) == user_data
   ```
   *Проблема:* Такий тест може змінювати реальну базу даних без очищення після завершення, що може вплинути на інші тести.

2. **Тести без перевірок зворотної сумісності:**
   ```python
   def test_old_service_integration():
       response = call_new_service_with_old_data(old_data_format)
       assert response["status"] == "success"
   ```
   *Проблема:* Якщо новий сервіс змінює поведінку, тест може не виявити проблему з підтримкою старих форматів даних.

3. **Тести, що перевіряють непотрібні деталі:**
   ```python
   def test_frontend_render():
       html_output = render_frontend(data)
       assert "<div class='username'>" in html_output
       assert "<div class='email'>" in html_output
   ```
   *Проблема:* Такі тести перевіряють деталі імплементації, замість того щоб зосередитися на функціональності.

У кожному з цих прикладів, відсутність фокусу на ізоляції, стабільності та релевантних перевірках робить ці тести поганими. Хороші тести повинні бути простими, ізольованими, стабільними та зрозумілими.

| Back | Forward |
|---|---|
| [Навіщо потрібне E2E-тестування?](/ua/middle/testing/what-is-the-purpose-of-endtoend-testing.md)  | [Яким чином ви б протестували складний запит до бази даних у класі репозиторію?](/ua/middle/testing/how-would-you-protest-a-complex-database-query-in-the-repository-class.md) |