function downloadMinecraft() {
  window.location.href = 'minecraft-1-21-81.apk';
}

function downloadRallyFurry() {
  window.location.href = 'rally-furry.apk';
}

// Live search functionality
function runSearch() {
  const searchBox = document.getElementById('searchBox');
  const cards = document.querySelectorAll('.game-card');
  const searchTerm = searchBox.value.toLowerCase();

  cards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    card.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });
}

// Menu dropdown
function toggleMenu() {
  const dropdown = document.getElementById('menuDropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Optional Theme Toggle (inside menu)
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
}

// Profile popup logic
function openProfilePopup() {
  document.getElementById('profilePopup').style.display = 'block';
}

function closeProfilePopup() {
  document.getElementById('profilePopup').style.display = 'none';
}

function saveProfile() {
  const name = document.getElementById('username').value;
  const imageInput = document.getElementById('profileImage');
  const profileName = document.getElementById('profile-name');
  const profileBox = document.querySelector('.profile-box img');

  if (name) {
    profileName.textContent = name;
  }

  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileBox.src = e.target.result;
    };
    reader.readAsDataURL(imageInput.files[0]);
  }

  closeProfilePopup();
}

