// static/js/Student/profile.js

document.addEventListener('DOMContentLoaded', async () => {
    // Redirect to login if not authenticated
    window.checkAuthAndRedirect();

    const avatarImg = document.getElementById('avatar');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const licenseInput = document.getElementById('license_category');

    try {
        const response = await window.makeAuthenticatedRequest(`${window.API_BASE_URL}/api/students/ABDELMOUNAIM/`);
        if (!response || !response.ok) throw new Error('Failed to load profile');

        const data = await response.json();

        // Fill inputs
        usernameInput.value = data.user?.username || '';
        emailInput.value = data.user?.email || '';
        phoneInput.value = data.user?.phone || '';
        licenseInput.value = data.license_category?.name || '';

        // Avatar
        avatarImg.src = data.avatar ? `${window.API_BASE_URL}${data.avatar}` : "/static/images/3.jpg";
    } catch (err) {
        console.error('Error loading profile:', err);
        alert('Failed to load profile. Please login again.');
        window.location.href = "/login/";
    }
});
