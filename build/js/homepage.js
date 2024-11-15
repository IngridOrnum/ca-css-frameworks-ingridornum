document.addEventListener('DOMContentLoaded', () => {
    const navInit = () => {
        const loginBtn = document.getElementById('nav-login');
        const loginForm = document.getElementById('login-form');
        const registerBtn = document.getElementById('nav-signup');
        const registerForm = document.getElementById('register-form');
        const heroContent = document.getElementById('hero-content');
        const blurBg = document.getElementById('blur-background');
        const loginAlt = document.getElementById('login-alt');
        const registerAlt = document.getElementById('register-alt');
        const heroLoginBtn = document.getElementById('hero-login-btn');

        const showBackgroundElements = () => {
            heroContent.classList.add('hidden');
            blurBg.classList.remove('hidden');
        };

        const hideBackgroundElements = () => {
            heroContent.classList.remove('hidden');
            blurBg.classList.add('hidden');
        };

        const showLoginForm = () => {
            registerForm.classList.add('hidden');
            registerForm.classList.remove('flex');
            loginForm.classList.remove('hidden');
            loginForm.classList.add('flex');
            showBackgroundElements();
        };

        const showRegisterForm = () => {
            loginForm.classList.add('hidden');
            loginForm.classList.remove('flex');
            registerForm.classList.remove('hidden');
            registerForm.classList.add('flex');
            showBackgroundElements();
        };

        loginBtn?.addEventListener('click', () => {
            if (loginForm.classList.contains('hidden')) {
                showLoginForm();
            } else {
                hideBackgroundElements();
                loginForm.classList.add('hidden');
                loginForm.classList.remove('flex');
            }
        });

        loginAlt?.addEventListener('click', () => {
            if (loginForm.classList.contains('hidden')) {
                showLoginForm();
            } else {
                hideBackgroundElements();
                loginForm.classList.add('hidden');
                loginForm.classList.remove('flex');
            }
        });

        registerBtn?.addEventListener('click', () => {
            if (registerForm.classList.contains('hidden')) {
                showRegisterForm();
            } else {
                hideBackgroundElements();
                registerForm.classList.add('hidden');
                registerForm.classList.remove('flex');
            }
        });

        registerAlt?.addEventListener('click', () => {
            if (registerForm.classList.contains('hidden')) {
                showRegisterForm();
            } else {
                hideBackgroundElements();
                registerForm.classList.add('hidden');
                registerForm.classList.remove('flex');
            }
        });

        heroLoginBtn?.addEventListener('click', () => {
            if (registerForm.classList.contains('hidden')) {
                showRegisterForm();
            } else {
                hideBackgroundElements();
                registerForm.classList.add('hidden');
                registerForm.classList.remove('flex');
            }
        });
    };

    const formInit = () => {
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
    };

    navInit();
    formInit();
});

