// static/js/shared/auth.js

window.API_BASE_URL = 'http://127.0.0.1:8000';

window.checkAuthAndRedirect = function() {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role");
    if (!token || !role) {
        window.location.href = "/login/";
    }
};

window.logout = function() {
    localStorage.clear();
    window.location.href = "/login/";
};

window.makeAuthenticatedRequest = async function(url, options = {}) {
    const token = localStorage.getItem('access_token');
    if (!token) return null;

    options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(url, options);
        return response;
    } catch (err) {
        console.error(err);
        return null;
    }
};
