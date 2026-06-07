const api = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  async getUsers() {
    const res = await fetch(`${this.baseURL}/users`);
    if (!res.ok) throw new Error('Không tải được users');
    return res.json();
  },
  async getUser(id) {
    const res = await fetch(`${this.baseURL}/users/${id}`);
    if (!res.ok) throw new Error('Không tải được user');
    return res.json();
  },
  async createUser(data) {
    const res = await fetch(`${this.baseURL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Tạo user thất bại');
    return res.json();
  },
  async updateUser(id, data) {
    const res = await fetch(`${this.baseURL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Cập nhật user thất bại');
    return res.json();
  },
  async deleteUser(id) {
    const res = await fetch(`${this.baseURL}/users/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Xóa user thất bại');
    return res.json();
  }
};

const ui = {
  tableBody: document.querySelector('#userTable tbody'),
  loading: document.getElementById('loading'),
  message: document.getElementById('message'),
  formTitle: document.getElementById('formTitle'),
  nameField: document.getElementById('nameField'),
  emailField: document.getElementById('emailField'),
  phoneField: document.getElementById('phoneField'),
  cancelEdit: document.getElementById('cancelEdit'),
  currentUserId: null,
  renderUsers(users) {
    this.tableBody.innerHTML = '';
    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </td>
      `;
      row.querySelector('.edit').addEventListener('click', () => loadEditForm(user));
      row.querySelector('.delete').addEventListener('click', () => deleteUser(user.id));
      this.tableBody.appendChild(row);
    });
  },
  showLoading() {
    this.loading.classList.remove('hidden');
  },
  hideLoading() {
    this.loading.classList.add('hidden');
  },
  showError(message) {
    this.message.textContent = message;
    this.message.className = 'message error';
    this.message.classList.remove('hidden');
    setTimeout(() => this.message.classList.add('hidden'), 3000);
  },
  showSuccess(message) {
    this.message.textContent = message;
    this.message.className = 'message';
    this.message.classList.remove('hidden');
    setTimeout(() => this.message.classList.add('hidden'), 3000);
  }
};

let users = [];
const searchInput = document.getElementById('searchInput');
const userForm = document.getElementById('userForm');

async function loadUsers() {
  try {
    ui.showLoading();
    users = await api.getUsers();
    ui.renderUsers(users);
  } catch (error) {
    ui.showError(error.message);
  } finally {
    ui.hideLoading();
  }
}

function loadEditForm(user) {
  ui.currentUserId = user.id;
  ui.formTitle.textContent = 'Edit user';
  ui.nameField.value = user.name;
  ui.emailField.value = user.email;
  ui.phoneField.value = user.phone || '';
  ui.cancelEdit.classList.remove('hidden');
}

async function saveUser(event) {
  event.preventDefault();
  const data = {
    name: ui.nameField.value.trim(),
    email: ui.emailField.value.trim(),
    phone: ui.phoneField.value.trim()
  };
  try {
    if (ui.currentUserId) {
      const updated = await api.updateUser(ui.currentUserId, data);
      users = users.map(user => user.id === ui.currentUserId ? { ...user, ...updated } : user);
      ui.showSuccess('Đã cập nhật user');
    } else {
      const created = await api.createUser(data);
      users.unshift(created);
      ui.showSuccess('Đã tạo user mới');
    }
    ui.renderUsers(users);
    resetForm();
  } catch (error) {
    ui.showError(error.message);
  }
}

async function deleteUser(id) {
  try {
    await api.deleteUser(id);
    users = users.filter(user => user.id !== id);
    ui.renderUsers(users);
    ui.showSuccess('Đã xóa user');
  } catch (error) {
    ui.showError(error.message);
  }
}

function resetForm() {
  ui.currentUserId = null;
  ui.formTitle.textContent = 'Thêm user';
  userForm.reset();
  ui.cancelEdit.classList.add('hidden');
}

function filterUsers() {
  const keyword = searchInput.value.trim().toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(keyword) || user.email.toLowerCase().includes(keyword)
  );
  ui.renderUsers(filtered);
}

userForm.addEventListener('submit', saveUser);
searchInput.addEventListener('input', filterUsers);
ui.cancelEdit.addEventListener('click', resetForm);

loadUsers();
