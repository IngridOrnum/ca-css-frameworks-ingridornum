const navInit = () => {
    const loginBtn = document.getElementById('nav-login');
    const loginForm = document.getElementById('login-form');
    const registerBtn = document.getElementById('nav-signup');
    const registerForm = document.getElementById('register-form');
    const heroTitle = document.getElementById('hero-title');
    const blurBg = document.getElementById('blur-background');

    const showBackgroundElements = () => {
        heroTitle.classList.add('hidden');
        blurBg.classList.remove('hidden');
    };

    const hideBackgroundElements = () => {
        heroTitle.classList.remove('hidden');
        blurBg.classList.add('hidden');
    };

    const showLoginForm = () => {
        registerForm.classList.add('hidden'); // Hide register form
        registerForm.classList.remove('flex');
        loginForm.classList.remove('hidden'); // Show login form
        loginForm.classList.add('flex');
        showBackgroundElements();
    };

    const showRegisterForm = () => {
        loginForm.classList.add('hidden'); // Hide login form
        loginForm.classList.remove('flex');
        registerForm.classList.remove('hidden'); // Show register form
        registerForm.classList.add('flex');
        showBackgroundElements();
    };

    loginBtn.addEventListener('click', () => {
        if (loginForm.classList.contains('hidden')) {
            showLoginForm();
        } else {
            hideBackgroundElements();
            loginForm.classList.add('hidden');
            loginForm.classList.remove('flex');
        }
    });

    registerBtn.addEventListener('click', () => {
        if (registerForm.classList.contains('hidden')) {
            showRegisterForm();
        } else {
            hideBackgroundElements();
            registerForm.classList.add('hidden');
            registerForm.classList.remove('flex');
        }
    });
}

document.addEventListener('DOMContentLoaded', navInit);

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


// const navInit = () => {
//     const loginBtn = document.getElementById('nav-login');
//     const loginForm = document.getElementById('login-form');
//     const registerBtn = document.getElementById('nav-signup');
//     const registerForm = document.getElementById('register-form');
//     const heroTitle = document.getElementById('hero-title');
//     const blurBg = document.getElementById('blur-background');
//
//     const showBackgroundElements = () => {
//         heroTitle.classList.add('hidden');
//         blurBg.classList.remove('hidden');
//     };
//
//     const hideBackgroundElements = () => {
//         heroTitle.classList.remove('hidden');
//         blurBg.classList.add('hidden');
//     };
//
//     const toggleLogin = () => {
//         if (!registerForm.classList.contains('hidden')) {
//             registerForm.classList.add('hidden');
//             registerForm.classList.remove('flex');
//         }
//         loginForm.classList.toggle('hidden');
//         loginForm.classList.toggle('flex');
//         heroTitle.classList.toggle('hidden');
//         blurBg.classList.toggle('hidden');
//
//         if (!loginForm.classList.contains('hidden')) {
//             showBackgroundElements();
//         } else {
//             hideBackgroundElements();
//         }
//     }
//
//     const toggleRegister = () => {
//         if (!loginForm.classList.contains('hidden')) {
//             loginForm.classList.add('hidden');
//             loginForm.classList.remove('flex');
//         }
//         registerForm.classList.toggle('hidden');
//         registerForm.classList.toggle('flex');
//         heroTitle.classList.toggle('hidden');
//         blurBg.classList.toggle('hidden');
//
//         if (!registerForm.classList.contains('hidden')) {
//             showBackgroundElements();
//         } else {
//             hideBackgroundElements();
//         }
//     }
//
//     loginBtn.addEventListener('click', toggleLogin);
//     registerBtn.addEventListener('click', toggleRegister);
// }
//
// document.addEventListener('DOMContentLoaded', navInit)
//
// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.querySelector('#login-form form');
//     const registerForm = document.querySelector('#register-form form');
//
//     loginForm?.addEventListener('submit', (event) => {
//         event.preventDefault();
//         window.location.href = 'profile.html';
//     });
//
//     registerForm?.addEventListener('submit', (event) => {
//         event.preventDefault();
//         window.location.href = 'profile.html';
//     });
// });
