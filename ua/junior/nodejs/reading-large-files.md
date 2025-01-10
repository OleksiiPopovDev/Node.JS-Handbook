#### * Read and process large files

Обробка великих файлів може бути складною задачою, особливо коли пам'яті недостатньо для завантаження всього файлу одразу. Нижче наведено кілька підходів, як можна ефективно читати та обробляти великі файли на Python:

### Використання режиму обробки файла по рядках

Цей спосіб підходить для текстових файлів, де можна обробляти файли рядок за рядком. Це дозволяє не тримати у пам'яті весь файл одразу.

```python
def process_large_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        for line in file:
            # Обробляємо кожен рядок файлу
            process_line(line)

def process_line(line):
    # Реалізуйте логіку обробки рядка
    print(line.strip())
```

### Використання бібліотеки `pandas`

Якщо файл — це CSV, можна використовувати `pandas`, щоб читати файл частинами, завантажуючи лише необхідну кількість рядків за раз.

```python
import pandas as pd

def process_large_csv(filepath, chunk_size=10000):
    # Читаємо CSV частинами
    for chunk in pd.read_csv(filepath, chunksize=chunk_size):
        process_chunk(chunk)

def process_chunk(chunk):
    # Реалізуйте логіку обробки частинки даних
    print(chunk.head())
```

### Використання `iterator` в Python

Ітератори допомагають зберегти пам'ять, оскільки дані створюються по запиту.

```python
def read_large_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        while True:
            chunk = file.read(1024)  # Читаємо 1024 байти за раз
            if not chunk:
                break
            process_chunk(chunk)

def process_chunk(chunk):
    # Реалізуйте логіку обробки частинки даних
    print(chunk)
```

### Робота із `SQL`

Якщо великі дані зберігаються у базі даних, використання SQL-запитів з обмеженням кількості повернених записів може бути також ефективним підходом.

### Використання `dask`

`dask` — це бібліотека, яка дозволяє обробляти великі обсяги даних за рахунок паралельних обчислень.

```python
import dask.dataframe as dd

def process_large_data_with_dask(filepath):
    df = dd.read_csv(filepath)
    result = df.apply(your_processing_function, axis=1).compute()
    print(result)

def your_processing_function(row):
    # Реалізуйте логіку обробки для кожного рядка даних
    return row
```

Обраний підхід залежить від специфіки задачі, формату файлу та доступних ресурсів.

| Back | Forward |
|---|---|
| [Transition between middleware layers](/ua/junior/nodejs/transition-between-middleware-layers.md)  | [Use the built-in fs module for file operations](/ua/junior/nodejs/use-the-builtin-fs-module-for-file-operations.md) |