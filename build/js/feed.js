document.addEventListener('DOMContentLoaded', function() {
    const continentData = {
        Africa: 'url(../src/assets/images/feed/continents/africa.jpg)',
        Antarctica: 'url(../src/assets/images/feed/continents/antarctica.jpg)',
        Asia: 'url(../src/assets/images/feed/continents/asia.jpg)',
        Australia: 'url(../src/assets/images/feed/continents/australia.jpg)',
        "North America": 'url(../src/assets/images/feed/continents/north-america.jpg)',
        "South America": 'url(../src/assets/images/feed/continents/south-america.jpg)',
        Europe: 'url(../src/assets/images/feed/continents/europe.jpg)'
    };

    const titleContinent = document.getElementById('title-continent');
    const continentBg = document.getElementById('continent-bg');
    const continentButtons = document.querySelectorAll('.continent');

    const defaultContinent = "Africa";
    titleContinent.textContent = defaultContinent;
    continentBg.style.backgroundImage = continentData[defaultContinent];

    continentButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const selectedContinent = this.getAttribute('data-continent'); // 'this' refers to the clicked button

            // Update the title and background image
            titleContinent.textContent = selectedContinent;
            continentBg.style.backgroundImage = continentData[selectedContinent];

            // Update underline styles
            continentButtons.forEach(function(btn) {
                const underline = btn.nextElementSibling; // Get the corresponding underline div
                if (btn === this) {
                    underline.classList.remove('bg-transparent');
                    underline.classList.add('bg-new-white'); // Change to active color
                } else {
                    underline.classList.remove('bg-new-white');
                    underline.classList.add('bg-transparent'); // Change to transparent
                }
            }, this); // Pass 'this' to maintain context
        });
    });
});