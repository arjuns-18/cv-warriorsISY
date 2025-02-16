function addTask() {
    const taskContainer = document.getElementById('task-container');
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new task div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', updateProgress);

    // Create label
    const label = document.createElement('label');
    label.innerText = taskText;

    // Append checkbox and label to task div
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);

    // Add the task div to the container
    taskContainer.appendChild(taskDiv);

    // Clear input field
    newTaskInput.value = '';
    updateProgress();
}

function updateProgress() {
    const tasks = document.querySelectorAll('.task input[type="checkbox"]');
    const completedTasks = Array.from(tasks).filter(task => task.checked).length;
    const progress = (completedTasks / tasks.length) * 100;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progress}%`;
}