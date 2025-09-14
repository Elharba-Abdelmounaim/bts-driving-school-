// js/app.js
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const errorDiv = document.getElementById('error');

      try {
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('access_token', data.access);
          localStorage.setItem('refresh_token', data.refresh);
          localStorage.setItem('user_role', data.role);
          window.location.href = 'index.html#dashboard';
        } else {
          errorDiv.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
          errorDiv.classList.remove('d-none');
        }
      } catch (err) {
        errorDiv.textContent = 'حدث خطأ، حاول مرة أخرى';
        errorDiv.classList.remove('d-none');
      }
    });
  } else {
    checkAuthAndRedirect();
    const hash = window.location.hash.slice(1) || 'student_dashboard';
    loadPage(hash);
  }
});

async function loadPage(page) {
  const content = document.getElementById('content');
  try {
    const response = await fetch(`Student/${page}.html`);
    content.innerHTML = await response.text();
    const script = document.createElement('script');
    script.src = `js/Student/${page}.js`;
    document.body.appendChild(script);
  } catch (err) {
    console.error('Failed to load page:', err);
    content.innerHTML = '<p>حدث خطأ أثناء تحميل الصفحة</p>';
  }
}