// js/Student/notifications.js
document.addEventListener('DOMContentLoaded', async () => {
  const notificationsList = document.getElementById('notifications-list');

  try {
    const response = await makeAuthenticatedRequest('http://your-backend-url/api/notifications/');
    if (response) {
      const data = await response.json();
      notificationsList.innerHTML = data.map(notification => `
        <div class="card mb-2">
          <div class="card-body">
            <p>${notification.message || 'غير متوفر'}</p>
            <small>${new Date(notification.created_at).toLocaleString('ar-EG')}</small>
          </div>
        </div>
      `).join('');
    } else {
      throw new Error('Failed to fetch notifications');
    }
  } catch (err) {
    console.error('Error loading notifications:', err);
    notificationsList.innerHTML = '<p>حدث خطأ أثناء تحميل الإشعارات</p>';
  }
});