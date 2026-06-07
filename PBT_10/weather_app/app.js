const form = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const statusText = document.getElementById('statusText');
const weatherResult = document.getElementById('weatherResult');
const historyList = document.getElementById('historyList');

const STORAGE_KEY = 'weatherHistory';
let history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

function setStatus(message, isError = false) {
  statusText.textContent = message;
  statusText.style.color = isError ? '#dc2626' : '#475569';
}

function saveHistory() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 5)));
}

function renderHistory() {
  historyList.innerHTML = '';
  history.forEach(city => {
    const button = document.createElement('button');
    button.textContent = city;
    button.addEventListener('click', () => fetchWeather(city));
    historyList.appendChild(button);
  });
}

function showWeather(name, weather) {
  weatherResult.classList.remove('hidden');
  weatherResult.innerHTML = `
    <p><strong>Thành phố:</strong> ${name}</p>
    <p><strong>Nhiệt độ:</strong> ${weather.temperature}°C</p>
    <p><strong>Tốc độ gió:</strong> ${weather.windspeed} km/h</p>
    <p><strong>Weather code:</strong> ${weather.weathercode}</p>
    <p><strong>Thời gian:</strong> ${weather.time}</p>
  `;
}

async function fetchWeather(city) {
  const name = city.trim();
  if (!name) return;
  setStatus('Đang tải...', false);
  weatherResult.classList.add('hidden');
  try {
    const locationResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1`);
    if (!locationResponse.ok) throw new Error('Lỗi lấy tọa độ');
    const locationData = await locationResponse.json();
    if (!locationData.results || !locationData.results.length) {
      throw new Error('Không tìm thấy thành phố');
    }
    const { latitude, longitude, name: cityName, country } = locationData.results[0];
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`);
    if (!weatherResponse.ok) throw new Error('Lỗi lấy thời tiết');
    const weatherData = await weatherResponse.json();
    const current = weatherData.current_weather;
    showWeather(`${cityName}, ${country}`, current);
    setStatus('Lấy dữ liệu thành công');
    history = [name, ...history.filter(item => item.toLowerCase() !== name.toLowerCase())];
    history = history.slice(0, 5);
    saveHistory();
    renderHistory();
  } catch (error) {
    setStatus(error.message || 'Lỗi khi tải dữ liệu', true);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  fetchWeather(cityInput.value);
});

renderHistory();
