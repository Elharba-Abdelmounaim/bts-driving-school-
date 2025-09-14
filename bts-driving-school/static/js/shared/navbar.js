// js/shared/navbar.js
document.addEventListener('DOMContentLoaded', async () => {
  const navbarDiv = document.getElementById('navbar');
  if (navbarDiv) {
    try {
      const response = await fetch('shared/navbar.html');
      if (!response.ok) throw new Error('Failed to load navbar');
      navbarDiv.innerHTML = await response.text();
    } catch (err) {
      console.error('Navbar load error:', err);
      navbarDiv.innerHTML = '<p>Error loading navigation bar</p>';
    }
  }
});

function logout() {
  localStorage.clear();
  window.location.href = 'Login.html';
}