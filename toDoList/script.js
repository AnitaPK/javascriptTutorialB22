// Task Manager Object
const taskManager = {
    tasks: [],
  
    // Function to generate unique ID
    generateId: function() {
      return '_' + Math.random().toString(36).substring(2, 9);
      
    },
  
    // Function to add a new task
    addTask: function(title, description) {
      const task = {
        id: this.generateId(),
        title: title,
        description: description,
        completed: false
      };
      console.log(task);
      this.tasks.push(task);
      this.displayTasks();
    },
  
    // Function to get all tasks
    getAllTasks: function() {
      return this.tasks;
    },
  
    // Function to update a task
    updateTask: function(id, title, description, completed) {
      const task = this.getTaskById(id);
      if (task) {
        task.title = title;
        task.description = description;
        task.completed = completed;
        this.displayTasks();
      } else {
        console.log('Task not found.');
      }
    },
  
    // Function to delete a task
    deleteTask: function(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        this.displayTasks();
      } else {
        console.log('Task not found.');
      }
    },
  
    // Function to display tasks
    displayTasks: function() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      this.tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${task.title}</strong>
          <p>${task.description}</p>
          <button onclick="taskManager.updateTask('${task.id}', prompt('Enter new title:', '${task.title}'), prompt('Enter new description:', '${task.description}'), ${task.completed})">Edit</button>
          <button onclick="taskManager.deleteTask('${task.id}')">Delete</button>
        `;
        taskList.appendChild(li);
      });
    }
  };
  
  // Add task form submission
  document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;
    taskManager.addTask(title, description);
    document.getElementById('taskForm').reset();
  });
  
  // Example tasks
  taskManager.addTask('Complete assignment', 'Finish the JavaScript assignment by Friday.');
  taskManager.addTask('Buy groceries', 'Buy milk, bread, and eggs from the supermarket.');
  