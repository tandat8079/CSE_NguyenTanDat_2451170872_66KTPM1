const nameField = document.getElementById('nameField');
const emailField = document.getElementById('emailField');
const passwordField = document.getElementById('passwordField');
const confirmField = document.getElementById('confirmField');
const phoneField = document.getElementById('phoneField');
const submitBtn = document.getElementById('submitBtn');
const signupForm = document.getElementById('signupForm');
const nameMessage = document.getElementById('nameMessage');
const emailMessage = document.getElementById('emailMessage');
const passwordMessage = document.getElementById('passwordMessage');
const confirmMessage = document.getElementById('confirmMessage');
const phoneMessage = document.getElementById('phoneMessage');
const strengthBar = document.getElementById('strengthBar');
const successAlert = document.getElementById('successAlert');

function validateName() {
  const value = nameField.value.trim();
  const valid = value.length >= 2 && value.length <= 50;
  nameMessage.textContent = valid ? 'Tên hợp lệ' : 'Tên phải từ 2 đến 50 ký tự';
  nameMessage.style.color = valid ? '#16a34a' : '#dc2626';
  return valid;
}

function validateEmail() {
  const value = emailField.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  emailMessage.textContent = valid ? 'Email hợp lệ' : 'Email không đúng định dạng';
  emailMessage.style.color = valid ? '#16a34a' : '#dc2626';
  return valid;
}

function getPasswordStrength(password) {
  const lengthOK = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  if (!lengthOK) return 'weak';
  if (hasUpper && hasLower && hasNumber && hasSymbol) return 'strong';
  return 'medium';
}

function validatePassword() {
  const value = passwordField.value;
  const strength = getPasswordStrength(value);
  let message = 'Mật khẩu yếu';
  let color = '#dc2626';
  let width = '33%';
  if (strength === 'medium') {
    message = 'Mật khẩu trung bình';
    color = '#f59e0b';
    width = '66%';
  }
  if (strength === 'strong') {
    message = 'Mật khẩu mạnh';
    color = '#16a34a';
    width = '100%';
  }
  passwordMessage.textContent = message;
  passwordMessage.style.color = color;
  strengthBar.style.width = width;
  strengthBar.style.background = color;
  return strength !== 'weak';
}

function validateConfirm() {
  const valid = confirmField.value === passwordField.value && confirmField.value !== '';
  confirmMessage.textContent = valid ? 'Mật khẩu khớp' : 'Mật khẩu không khớp';
  confirmMessage.style.color = valid ? '#16a34a' : '#dc2626';
  return valid;
}

function validatePhone() {
  const digits = phoneField.value.replace(/\D/g, '');
  const formatted = digits.replace(/(\d{3})(\d{3})(\d{0,4})/, (m, a, b, c) => c ? `${a}-${b}-${c}` : `${a}-${b}`);
  phoneField.value = formatted;
  const valid = /^\d{3}-\d{3}-\d{4}$/.test(formatted);
  phoneMessage.textContent = valid ? 'Số điện thoại hợp lệ' : 'Số điện thoại phải có 10 chữ số';
  phoneMessage.style.color = valid ? '#16a34a' : '#dc2626';
  return valid;
}

function validateForm() {
  const valid = validateName() && validateEmail() && validatePassword() && validateConfirm() && validatePhone();
  submitBtn.disabled = !valid;
  return valid;
}

nameField.addEventListener('input', validateForm);
emailField.addEventListener('input', validateForm);
passwordField.addEventListener('input', () => {
  validatePassword();
  validateConfirm();
  validateForm();
});
confirmField.addEventListener('input', validateForm);
phoneField.addEventListener('input', validateForm);

signupForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!validateForm()) return;
  successAlert.classList.remove('hidden');
  signupForm.reset();
  strengthBar.style.width = '0';
  submitBtn.disabled = true;
  setTimeout(() => successAlert.classList.add('hidden'), 3000);
});
