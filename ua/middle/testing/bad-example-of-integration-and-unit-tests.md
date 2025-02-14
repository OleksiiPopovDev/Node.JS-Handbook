#### 142. Наведіть приклад поганих інтеграційних і юніт-тестів.

Щоб зрозуміти, що таке погані інтеграційні та юніт-тести, визначимо спочатку цілі цих тестів:

- **Юніт-тести** перевіряють окремі функції або методи незалежно від іншого коду.
- **Інтеграційні тести** перевіряють, як різні модулі системи працюють разом.

Ось приклади поганих тестів для кожного з цих типів:

### Погані Юніт-тести

1. **Залежать від зовнішніх сервісів**: 
   ```python
   def test_get_user_data():
       response = api_client.get_user_data(user_id=1)
       assert response.status_code == 200
   ```
   - **Чому погано**: Юніт-тести повинні бути ізольовані від зовнішніх сервісів, таких як API. Використання зовнішних сервісів робить тести повільними і схильними до збоїв через зовнішні зміни або неполадки.

2. **Тестують занадто багато логіки**:
   ```python
   def test_calculate_total_amount():
       order = Order(items=[Item(price=10), Item(price=20)])
       assert order.calculate_total() == 30
   ```
   - **Чому погано**: Це може бути симптомом погано структурованого коду, де одна функція або метод містить забагато логіки. Юніт-тести мають зосереджуватися на окремих функціях.

3. **Сильно прив'язані до реалізації**:
   ```python
   def test_sorting_algorithm():
       result = sorting_algorithm([3, 2, 1])
       assert result == [1, 2, 3]
   ```
   - **Чому погано**: Юніт-тест занадто прив'язаний до конкретного алгоритму або порядку операцій замість результату, що може ускладнити зміни в реалізації без переписання тестів.

### Погані Інтеграційні тести

1. **Покривають занадто велике навантаження на систему**:
   ```python
   def test_full_application():
       # Запуск всього стеку, включаючи UI
       # Забагато кроків для єдиного тесту
   ```
   - **Чому погано**: Якщо тест перевіряє занадто велику кількість компонентів одночасно, він може бути складним у написанні та підтримці. Також важко ідентифікувати, що саме пішло не так при його провалі.

2. **Залежать від фіксованого порядку тестів**:
   ```python
   def test_user_creation():
       # Тест створення користувача

   def test_user_profile():
       # Цей тест передбачає, що тест_user_creation вже пройшов
   ```
   - **Чому погано**: Інтеграційні тести мають бути незалежними. Зв'язування тестів послідовністю може призвести до ситуацій, коли один провал забезпечує провал всіх наступних тестів.

3. **Недостатня ізоляція середовища**:
   ```python
   def test_database_interaction():
       # Працює напряму з тестовою базою даних, яка змінюється іншими тестами
   ```
   - **Чому погано**: Якщо тестове середовище не ізольоване, зміни, внесені одним тестом, можуть впливати на результати інших тестів, що унеможливлює ідентифікацію справжньої причини провалу.

Погані тесті можуть ускладнювати процес розробки, бути причиною хибних тривог або навпаки пропускати критичні баги, тому важливо їх уникати та створювати ефективні, ізольовані та зрозумілі тести.

| Back | Forward |
|---|---|
| [Навіщо потрібне E2E-тестування?](/ua/middle/testing/what-is-the-purpose-of-e2e-testing.md)  | [Яким чином ви б протестували складний запит до бази даних у класі репозиторію?](/ua/middle/testing/how-would-you-protest-a-complex-database-query-in-a-repository-class.md) |