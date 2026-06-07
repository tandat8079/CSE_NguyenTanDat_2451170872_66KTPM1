const galleryGrid = document.getElementById('galleryGrid');
const loadTrigger = document.getElementById('loadTrigger');
const loadingState = document.getElementById('loadingState');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

let page = 1;
let isLoading = false;

const lazyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      lazyObserver.unobserve(img);
    }
  });
}, { rootMargin: '200px' });

async function fetchPhotos() {
  if (isLoading) return;
  isLoading = true;
  loadingState.textContent = 'Đang tải ảnh...';
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`);
    const photos = await res.json();
    photos.forEach(photo => addPhotoCard(photo));
    page += 1;
    if (page > 5) {
      loadTrigger.textContent = 'Đã tải hết ảnh';
      observer.disconnect();
    }
  } catch (error) {
    loadingState.textContent = 'Không tải được ảnh';
  } finally {
    isLoading = false;
    loadingState.textContent = 'Cuộn xuống để tải thêm';
  }
}

function addPhotoCard(photo) {
  const card = document.createElement('div');
  card.className = 'photo-card';
  const img = document.createElement('img');
  img.dataset.src = photo.thumbnailUrl;
  img.alt = photo.title;
  lazyObserver.observe(img);
  card.appendChild(img);
  card.addEventListener('click', () => {
    modalImage.src = photo.url;
    modal.classList.remove('hidden');
  });
  galleryGrid.appendChild(card);
}

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    fetchPhotos();
  }
}, { rootMargin: '200px' });

observer.observe(loadTrigger);

closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});

fetchPhotos();
