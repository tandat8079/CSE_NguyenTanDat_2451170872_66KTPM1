const images = [
  { src: 'https://placehold.co/900x500?text=Image+1', title: 'Image 1' },
  { src: 'https://placehold.co/900x500?text=Image+2', title: 'Image 2' },
  { src: 'https://placehold.co/900x500?text=Image+3', title: 'Image 3' },
  { src: 'https://placehold.co/900x500?text=Image+4', title: 'Image 4' },
  { src: 'https://placehold.co/900x500?text=Image+5', title: 'Image 5' },
  { src: 'https://placehold.co/900x500?text=Image+6', title: 'Image 6' }
];

const displayImage = document.getElementById('displayImage');
const caption = document.getElementById('caption');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playBtn = document.getElementById('playBtn');
const palette = document.getElementById('palette');
const commandInput = document.getElementById('commandInput');
const commandList = document.getElementById('commandList');

let currentIndex = 0;
let isPlaying = false;
let autoplayId = null;
const commands = [
  { name: 'next', label: 'Next image' },
  { name: 'prev', label: 'Previous image' },
  { name: 'first', label: 'Go to first image' },
  { name: 'last', label: 'Go to last image' },
  { name: 'toggle', label: 'Play/Pause slideshow' }
];

function renderImage() {
  const item = images[currentIndex];
  displayImage.src = item.src;
  displayImage.alt = item.title;
  caption.textContent = `${item.title} (${currentIndex + 1}/${images.length})`;
}

function changeIndex(index) {
  currentIndex = (index + images.length) % images.length;
  renderImage();
}

function nextImage() {
  changeIndex(currentIndex + 1);
}

function prevImage() {
  changeIndex(currentIndex - 1);
}

function togglePlay() {
  isPlaying = !isPlaying;
  playBtn.textContent = isPlaying ? 'Pause' : 'Play';
  if (isPlaying) {
    autoplayId = setInterval(nextImage, 2000);
  } else {
    clearInterval(autoplayId);
  }
}

function openPalette() {
  palette.classList.remove('hidden');
  commandInput.value = '';
  commandInput.focus();
  renderPalette();
}

function closePalette() {
  palette.classList.add('hidden');
}

function renderPalette(filter = '') {
  commandList.innerHTML = '';
  commands
    .filter(command => command.label.toLowerCase().includes(filter.toLowerCase()))
    .forEach(command => {
      const li = document.createElement('li');
      li.textContent = command.label;
      li.tabIndex = 0;
      li.addEventListener('click', () => executeCommand(command.name));
      commandList.appendChild(li);
    });
}

function executeCommand(name) {
  if (name === 'next') nextImage();
  if (name === 'prev') prevImage();
  if (name === 'first') changeIndex(0);
  if (name === 'last') changeIndex(images.length - 1);
  if (name === 'toggle') togglePlay();
  closePalette();
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
playBtn.addEventListener('click', togglePlay);

document.addEventListener('keydown', event => {
  if (event.ctrlKey && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openPalette();
    return;
  }

  if (!palette.classList.contains('hidden')) {
    if (event.key === 'Escape') closePalette();
    return;
  }

  if (event.key === 'ArrowRight') nextImage();
  if (event.key === 'ArrowLeft') prevImage();
  if (event.key === ' ') {
    event.preventDefault();
    togglePlay();
  }
  if (/^[1-9]$/.test(event.key)) {
    const index = Number(event.key) - 1;
    if (index < images.length) changeIndex(index);
  }

  if (event.key === 'Escape') closePalette();
});

commandInput.addEventListener('input', () => renderPalette(commandInput.value));
commandInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const match = commands.find(c => c.label.toLowerCase().includes(commandInput.value.toLowerCase()));
    if (match) executeCommand(match.name);
  }
  if (event.key === 'Escape') closePalette();
});

palette.addEventListener('click', event => {
  if (event.target === palette) closePalette();
});

renderImage();
