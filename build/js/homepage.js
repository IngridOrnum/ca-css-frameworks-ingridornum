const navInit = () => {
    const loginBtn = document.getElementById('nav-login');
    const loginForm = document.getElementById('login-form');
    const heroTitle = document.getElementById('hero-title');

    const toggleLogin = () => {
        loginForm.classList.toggle('hidden');
        loginForm.classList.toggle('flex');
        heroTitle.classList.toggle('hidden');
    }

    loginBtn.addEventListener('click', toggleLogin);

    const registerBtn = document.getElementById('nav-signup');
    const registerForm = document.getElementById('register-form');

    const toggleRegister = () => {
        registerForm.classList.toggle('hidden');
        registerForm.classList.toggle('flex');
        heroTitle.classList.toggle('hidden');
    }

    registerBtn.addEventListener('click', toggleRegister);

}

document.addEventListener('DOMContentLoaded', navInit)

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form form');
    const registerForm = document.querySelector('#register-form form');

    loginForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = 'profile.html';
    });

    registerForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = 'profile.html';
    });
});
