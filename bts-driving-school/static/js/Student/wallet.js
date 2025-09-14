// js/Student/wallet.js
document.addEventListener('DOMContentLoaded', async () => {
  const creditsBalance = document.getElementById('credits_balance');
  const lastUpdate = document.getElementById('last_update');

  try {
    const response = await makeAuthenticatedRequest('http://your-backend-url/api/wallets/');
    if (response) {
      const data = await response.json();
      creditsBalance.textContent = data[0]?.credits_balance || '0';
      lastUpdate.textContent = new Date(data[0]?.last_update).toLocaleString('ar-EG') || 'غير متوفر';
    } else {
      throw new Error('Failed to fetch wallet');
    }
  } catch (err) {
    console.error('Error loading wallet:', err);
    document.getElementById('content').innerHTML = '<p>حدث خطأ أثناء تحميل المحفظة</p>';
  }
});