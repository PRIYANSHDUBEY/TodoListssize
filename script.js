// Get references to HTML elements
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('add');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Add a delete button to each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Event listener for adding a task
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
