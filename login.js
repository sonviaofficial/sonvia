const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const role = document.querySelector('select').value;

    if (role === 'Artist') {

        window.location.href = "artist-dashboard.html";

    } else if (role === 'Producer') {

        window.location.href = 'dashboard.html';

    } else if (role === 'Admin') {

        window.location.href = 'admin.html';

    } else {

        alert('Please select a role');

    }
});
