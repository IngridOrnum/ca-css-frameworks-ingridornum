const visitBlogBtn = document.getElementById('visit-blogpage-btn');

document.addEventListener('DOMContentLoaded', () => {

    visitBlogBtn.addEventListener('click', () => {
        window.location.href = 'feed.html';
    })
})
