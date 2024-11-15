document.addEventListener('DOMContentLoaded', () => {


    const visitBlogBtn = document.getElementById('visit-blogpage-btn');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const dropdown = document.getElementById('dropdown-menu');

    visitBlogBtn.addEventListener('click', () => {
        window.location.href = 'feed.html';
    })

    const showDropdown = () => {
        dropdown.classList.remove('hidden');
        hamburgerBtn.classList.add('hidden');
        closeBtn.classList.remove('hidden');
    }

    const hideDropdown = () => {
        dropdown.classList.add('hidden');
        hamburgerBtn.classList.remove('hidden');
        closeBtn.classList.add('hidden');
    };

    hamburgerBtn.addEventListener('click', showDropdown);
    closeBtn.addEventListener('click', hideDropdown);
})




