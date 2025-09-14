document.addEventListener('DOMContentLoaded', async () => {
  window.checkAuthAndRedirect();

  try {
    const response = await window.makeAuthenticatedRequest(`${window.API_BASE_URL}/api/students/me/`);
    if (response && response.ok) {
      const data = await response.json();
      document.getElementById('studentName').textContent = data.user.username || 'Student';
    } else {
      document.getElementById('studentName').textContent = 'Student';
    }
  } catch (err) {
    console.error('Failed to load user information:', err);
    document.getElementById('studentName').textContent = 'Student';
  }
});
