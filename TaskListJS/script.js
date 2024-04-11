// Функция для добавления новой задачи
function addTask() {
    const taskText = taskInput.value.trim(); // Получаем текст задачи

    if (taskText === '') return; // Проверяем, что текст не пустой

    // Создаем новый элемент списка задач
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Создаем чекбокс "Выполнено"
    const doneCheckbox = document.createElement('input');
    doneCheckbox.type = 'checkbox';
    doneCheckbox.classList.add('done-checkbox');

    // Создаем текст задачи
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    // Создаем кнопку удаления задачи
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem); // Удаляем задачу из списка при клике на кнопку
    });

    // Добавляем чекбокс, текст задачи и кнопку удаления в элемент списка задач
    taskItem.appendChild(doneCheckbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    // Добавляем элемент списка задач в список
    taskList.appendChild(taskItem);

    taskInput.value = ''; // Очищаем поле ввода после добавления задачи
}
