document.addEventListener('DOMContentLoaded', async () => {
  // Load Navbar
  const navbarDiv = document.getElementById('navbar');
  if (navbarDiv) {
    const response = await fetch('shared/navbar.html');
    navbarDiv.innerHTML = await response.text();
  }

  // Login form handling
  const loginForm = document.getElementById('login-form');
  const errorDiv = document.getElementById('error');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch(`${window.API_BASE_URL}/api/token/`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          errorDiv.textContent = 'Invalid username or password';
          errorDiv.classList.remove('d-none');
          return;
        }

        const data = await response.json();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('role', data.role);

        // Redirect based on role
        window.location.href = 'index.html#student_dashboard';
      } catch (err) {
        console.error('Login error:', err);
        errorDiv.textContent = 'An error occurred, please try again';
        errorDiv.classList.remove('d-none');
      }
    });
  } else {
    // SPA: Load content based on hash
    checkAuthAndRedirect();
    const hash = window.location.hash.slice(1) || 'student_dashboard';
    loadPage(hash);
  }

  // Hash change listener
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    loadPage(hash);
  });
});

// Load page content
async function loadPage(page) {
  const contentDiv = document.getElementById('content');
  if (!contentDiv) return;

  try {
    const response = await fetch(`Student/${page}.html`);
    if (!response.ok) throw new Error('Page not found');
    contentDiv.innerHTML = await response.text();
  } catch (err) {
    contentDiv.innerHTML = `<h2>Error loading page: ${page}</h2>`;
    console.error(err);
  }
}
