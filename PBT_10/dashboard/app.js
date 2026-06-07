const userBody = document.getElementById('userBody');
const dogBody = document.getElementById('dogBody');
const countryBody = document.getElementById('countryBody');
const loadTime = document.getElementById('loadTime');
const refreshBtn = document.getElementById('refreshBtn');

function renderStatus(element, message) {
  element.innerHTML = `<div class="status">${message}</div>`;
}

function renderUserWidget(data) {
  const html = data.results.map(user => `
    <div>
      <strong>${user.name.first} ${user.name.last}</strong><br>
      ${user.email}
    </div>
  `).join('');
  userBody.innerHTML = html;
}

function renderDogWidget(data) {
  const html = data.message.map(src => `<img src="${src}" alt="Dog" width="100%" style="margin-bottom:12px;border-radius:16px;">`).join('');
  dogBody.innerHTML = html;
}

function renderCountryWidget(data) {
  const country = data[0];
  countryBody.innerHTML = `
    <p><strong>${country.name.common}</strong></p>
    <p>Region: ${country.region}</p>
    <p>Population: ${country.population.toLocaleString()}</p>
    <p>Capital: ${country.capital?.[0] || '-'}</p>
  `;
}

async function loadDashboard() {
  const startTime = Date.now();
  renderStatus(userBody, 'Loading users...');
  renderStatus(dogBody, 'Loading dog photos...');
  renderStatus(countryBody, 'Loading country info...');

  const promises = [
    fetch('https://randomuser.me/api/?results=4').then(r => r.json()),
    fetch('https://dog.ceo/api/breeds/image/random/4').then(r => r.json()),
    fetch('https://restcountries.com/v3.1/name/vietnam').then(r => r.json())
  ];

  const results = await Promise.allSettled(promises);
  results.forEach((result, index) => {
    if (index === 0) {
      if (result.status === 'fulfilled') renderUserWidget(result.value);
      else renderStatus(userBody, 'User API error');
    }
    if (index === 1) {
      if (result.status === 'fulfilled') renderDogWidget(result.value);
      else renderStatus(dogBody, 'Dog API error');
    }
    if (index === 2) {
      if (result.status === 'fulfilled') renderCountryWidget(result.value);
      else renderStatus(countryBody, 'Country API error');
    }
  });

  loadTime.textContent = Date.now() - startTime;
}

refreshBtn.addEventListener('click', loadDashboard);
loadDashboard();
