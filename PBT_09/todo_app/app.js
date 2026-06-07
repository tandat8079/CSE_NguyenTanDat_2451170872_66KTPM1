const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const list = document.querySelector('#todoList');
const countText = document.querySelector('#countText');
const filters = document.querySelectorAll('#filters button');
const clearCompleted = document.querySelector('#clearCompleted');

let todos = JSON.parse(localStorage.getItem('todos') || '[]');
let activeFilter = 'all';

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function formatTodoItem(todo) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.dataset.id = todo.id;
  if (todo.completed) {
    li.classList.add('completed');
  }

  const text = document.createElement('div');
  text.className = 'text';
  text.textContent = todo.text;

  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'delete';
  remove.textContent = '❌';

  li.appendChild(text);
  li.appendChild(remove);
  return li;
}

function updateCount() {
  const left = todos.filter(todo => !todo.completed).length;
  countText.textContent = `${left} items left`;
}

function renderTodos() {
  list.innerHTML = '';
  const visible = todos.filter(todo => {
    if (activeFilter === 'active') return !todo.completed;
    if (activeFilter === 'completed') return todo.completed;
    return true;
  });
  visible.forEach(todo => list.appendChild(formatTodoItem(todo)));
  updateCount();
}

function addTodo(text) {
  todos.push({ id: Date.now().toString(), text, completed: false });
  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}

function editTodo(id, newText) {
  todos = todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo);
  saveTodos();
  renderTodos();
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  addTodo(value);
  input.value = '';
  input.focus();
});

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter;
    renderTodos();
  });
});

clearCompleted.addEventListener('click', () => {
  todos = todos.filter(todo => !todo.completed);
  saveTodos();
  renderTodos();
});

list.addEventListener('click', event => {
  const item = event.target.closest('li');
  if (!item) return;
  const id = item.dataset.id;
  if (event.target.classList.contains('delete')) {
    deleteTodo(id);
    return;
  }
  if (event.target.classList.contains('text')) {
    toggleTodo(id);
  }
});

list.addEventListener('dblclick', event => {
  const item = event.target.closest('li');
  if (!item || event.target.classList.contains('delete')) return;
  const id = item.dataset.id;
  const todo = todos.find(todo => todo.id === id);
  if (!todo) return;

  const inputEdit = document.createElement('input');
  inputEdit.type = 'text';
  inputEdit.value = todo.text;
  inputEdit.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const value = inputEdit.value.trim();
      if (value) editTodo(id, value);
    }
  });
  inputEdit.addEventListener('blur', () => {
    const value = inputEdit.value.trim();
    if (value) editTodo(id, value);
    else renderTodos();
  });

  item.innerHTML = '';
  item.appendChild(inputEdit);
  inputEdit.focus();
});

renderTodos();
