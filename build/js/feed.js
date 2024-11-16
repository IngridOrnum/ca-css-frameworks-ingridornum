document.addEventListener('DOMContentLoaded', function() {
    const continentData = {
        Africa: 'url(assets/images/feed/continents/africa-feed.jpg)',
        Antarctica: 'url(assets/images/feed/continents/antarctica-feed.jpeg)',
        Asia: 'url(assets/images/feed/continents/asia.jpeg)',
        Australia: 'url(assets/images/feed/continents/australia-feed.jpeg)',
        "North America": 'url(assets/images/feed/continents/north-america-feed.jpg)',
        "South America": 'url(assets/images/feed/continents/south-america-feed.jpeg)',
        Europe: 'url(assets/images/feed/continents/europe-feed.jpeg)'
    };

    const titleContinent = document.getElementById('title-continent');
    const continentBg = document.getElementById('continent-bg');
    const continents = Object.keys(continentData);
    const continentButtons = document.querySelectorAll('.continent');
    let currentIndex = 0;

    function updateContinent(index) {
        const continent = continents[index];
        titleContinent.textContent = continent;
        continentBg.style.backgroundImage = continentData[continent];

        continentButtons.forEach((button,i) => {
            const underline = button.nextElementSibling;
            if (i === index) {
                underline.classList.remove('bg-transparent');
                underline.classList.add('bg-new-white');
                button.classList.add('active:bg-new-white');
            } else {
                underline.classList.add('bg-transparent');
                underline.classList.remove('bg-new-white');
                button.classList.remove('active:bg-new-white');
            }
        })
    }

    updateContinent(currentIndex);

    document.getElementById('prev-btn').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : continents.length - 1; // Loop to last if at the beginning
        updateContinent(currentIndex);
    });

    document.getElementById('next-btn').addEventListener('click', function() {
        currentIndex = (currentIndex < continents.length - 1) ? currentIndex + 1 : 0; // Loop to first if at the end
        updateContinent(currentIndex);
    });

    continentButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            currentIndex = index; // Set the current index to the clicked continent's index
            updateContinent(currentIndex); // Update the display
        });
    });
});