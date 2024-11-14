document.addEventListener('DOMContentLoaded', function() {
    const continentData = {
        Africa: 'url(../src/assets/images/feed/continents/africa-feed.jpg)',
        Antarctica: 'url(../src/assets/images/feed/continents/antarctica-feed.jpeg)',
        Asia: 'url(../src/assets/images/feed/continents/asia.jpeg)',
        Australia: 'url(../src/assets/images/feed/continents/australia-feed.jpeg)',
        "North America": 'url(../src/assets/images/feed/continents/north-america-feed.jpg)',
        "South America": 'url(../src/assets/images/feed/continents/south-america-feed.jpeg)',
        Europe: 'url(../src/assets/images/feed/continents/europe-feed.jpeg)'
    };

    const titleContinent = document.getElementById('title-continent');
    const continentBg = document.getElementById('continent-bg');
    const continents = Object.keys(continentData);
    let currentIndex = 0;

    // Function to update the continent display
    function updateContinent(index) {
        const continent = continents[index];
        titleContinent.textContent = continent;
        continentBg.style.backgroundImage = continentData[continent];
    }

    // Initialize with the first continent
    updateContinent(currentIndex);

    // Event listeners for carousel buttons
    document.getElementById('prev-btn').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : continents.length - 1; // Loop to last if at the beginning
        updateContinent(currentIndex);
    });

    document.getElementById('next-btn').addEventListener('click', function() {
        currentIndex = (currentIndex < continents.length - 1) ? currentIndex + 1 : 0; // Loop to first if at the end
        updateContinent(currentIndex);
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const continentData = {
//         Africa: 'url(../src/assets/images/feed/continents/africa.jpg)',
//         Antarctica: 'url(../src/assets/images/feed/continents/antarctica.jpg)',
//         Asia: 'url(../src/assets/images/feed/continents/asia.jpg)',
//         Australia: 'url(../src/assets/images/feed/continents/australia.jpg)',
//         "North America": 'url(../src/assets/images/feed/continents/north-america.jpg)',
//         "South America": 'url(../src/assets/images/feed/continents/south-america.jpg)',
//         Europe: 'url(../src/assets/images/feed/continents/europe.jpg)'
//     };
//
//     const titleContinent = document.getElementById('title-continent');
//     const continentBg = document.getElementById('continent-bg');
//     const continentButtons = document.querySelectorAll('.continent');
//
//     const defaultContinent = "Africa";
//     titleContinent.textContent = defaultContinent;
//     continentBg.style.backgroundImage = continentData[defaultContinent];
//
//     continentButtons.forEach(function(button) {
//         button.addEventListener('click', function() {
//             const selectedContinent = this.getAttribute('data-continent'); // 'this' refers to the clicked button
//
//             // Update the title and background image
//             titleContinent.textContent = selectedContinent;
//             continentBg.style.backgroundImage = continentData[selectedContinent];
//
//             // Update underline styles
//             continentButtons.forEach(function(btn) {
//                 const underline = btn.nextElementSibling; // Get the corresponding underline div
//                 if (btn === this) {
//                     underline.classList.remove('bg-transparent');
//                     underline.classList.add('bg-new-white'); // Change to active color
//                 } else {
//                     underline.classList.remove('bg-new-white');
//                     underline.classList.add('bg-transparent'); // Change to transparent
//                 }
//             }, this); // Pass 'this' to maintain context
//         });
//     });
// });