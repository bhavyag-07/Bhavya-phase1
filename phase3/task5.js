const container = document.createElement('div');
container.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    border-radius: 15px;
    font-family: Arial, sans-serif;
    width: 450px;
    max-height: 80vh;
    overflow-y: auto;
    z-index: 9999;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
`;
container.innerHTML = `
    <h2 style="color:white; text-align:center; margin:0 0 20px 0">Task Manager</h2>    
    <!-- Add Task Section -->
    <div style="background:white; padding:15px; border-radius:10px; margin-bottom:15px">
        <input type="text" id="taskInput" placeholder="Enter task..." style="width:70%; padding:8px; border:1px solid #ddd; border-radius:5px">
        <button id="addBtn" style="background:#3498db; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer; margin-left:5px">Add</button>
    </div>   
    <!-- Dynamic List / To-Do List -->
    <div style="background:white; padding:15px; border-radius:10px; margin-bottom:15px">
        <h3 style="margin:0 0 10px 0"> My Tasks (<span id="taskCount">0</span>)</h3>
        <div id="taskList" style="min-height: 150px; max-height: 250px; overflow-y: auto">
            <p style="color:#999; text-align:center">No tasks yet. Add one above!</p>
        </div>
    </div> 
    <!-- Toggle Button Section -->
    <div style="background:white; padding:15px; border-radius:10px">
        <h3 style="margin:0 0 10px 0"> Theme Toggle</h3>
        <button id="toggleBtn" style="background:#27ae60; color:white; border:none; padding:10px 20px; border-radius:5px; cursor:pointer; width:100%">🌙 Toggle Dark/Light Mode</button>
        <p id="toggleStatus" style="text-align:center; margin-top:10px; color:#666">Current: Light Mode</p>
    </div>
    <button id="closeBtn" style="margin-top:15px; background:#e74c3c; color:white; border:none; padding:8px; border-radius:5px; cursor:pointer; width:100%">Close</button>
`;
document.body.appendChild(container);

// 1. DYNAMIC LIST & TO-DO LIST
let tasks = [];
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskListDiv = document.getElementById('taskList');
const taskCountSpan = document.getElementById('taskCount');
function updateTaskList() {
    taskListDiv.innerHTML = '';
    taskCountSpan.textContent = tasks.length;
    if (tasks.length === 0) {
        taskListDiv.innerHTML = '<p style="color:#999; text-align:center">No tasks yet. Add one above!</p>';
        return;
    }
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.style.cssText = `
            background: #f8f9fa;
            padding: 10px;
            margin: 8px 0;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            animation: slideIn 0.3s ease;
        `;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.style.marginRight = '10px';
        checkbox.style.cursor = 'pointer';
        checkbox.onclick = () => {
            if (checkbox.checked) {
                taskText.style.textDecoration = 'line-through';
                taskText.style.color = '#999';
            } else {
                taskText.style.textDecoration = 'none';
                taskText.style.color = '#333';
            }
        };
        const taskText = document.createElement('span');
        taskText.textContent = task;
        taskText.style.flex = '1';
        taskText.style.wordBreak = 'break-word';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'bin';
        deleteBtn.style.cssText = `
            background: #e74c3c;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
            margin-left: 10px;
        `;
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            updateTaskList();
        };        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);
        taskListDiv.appendChild(taskItem);
    });
}
function addTask() {
    const taskText = taskInput.value.trim();   
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }    
    tasks.push(taskText);
    updateTaskList();
    taskInput.value = ''; 
    taskInput.focus();
}
addBtn.onclick = addTask;
taskInput.onkeypress = (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
};
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to 
        {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);
// 2. TOGGLE BUTTON (Dark/Light Mode) 
let isDarkMode = false;
const toggleBtn = document.getElementById('toggleBtn');
const toggleStatus = document.getElementById('toggleStatus');
toggleBtn.onclick = () => {
    isDarkMode = !isDarkMode;   
    if (isDarkMode) {
        container.style.background = '#1a1a2e';
        toggleBtn.style.background = '#f39c12';
        toggleBtn.textContent = 'Toggle Dark/Light Mode';
        toggleStatus.textContent = 'Current: Dark Mode';
        toggleStatus.style.color = '#f39c12';
        const taskSections = document.querySelectorAll('#taskList div');
        taskSections.forEach(section => {
            if (section.style.background === '#f8f9fa') {
                section.style.background = '#2d2d44';
                section.style.color = 'white';
            }
        });
        taskInput.style.background = '#2d2d44';
        taskInput.style.color = 'white';
        taskInput.style.borderColor = '#667eea';
    } else {
        container.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        toggleBtn.style.background = '#27ae60';
        toggleBtn.textContent = 'Toggle Dark/Light Mode';
        toggleStatus.textContent = 'Current: Light Mode';
        toggleStatus.style.color = '#666';    
        taskInput.style.background = 'white';
        taskInput.style.color = '#333';
        taskInput.style.borderColor = '#ddd';        
        // Reset task items background
        const taskItems = document.querySelectorAll('#taskList div');
        taskItems.forEach(item => {
            item.style.background = '#f8f9fa';
            item.style.color = '#333';
        });
    }
}; 
document.getElementById('closeBtn').onclick = () => {
    container.remove();
    console.log('App closed');
};
console.log(' Task Manager Ready!');
console.log('Features:');
console.log('1. Dynamic List - Tasks appear as you add them');
console.log('2. To-Do List - Checkbox to mark complete, Delete button to remove');
console.log('3. Toggle Button - Switch between Dark/Light mode');