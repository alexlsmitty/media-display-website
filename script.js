// Function to initialize card toggle behavior
function initCardToggle() {
    // Select every toggle button inside a game card
    const toggleButtons = document.querySelectorAll('.game .close');
  
    toggleButtons.forEach(button => {
      // Set the initial button text for a collapsed card
      button.innerText = "Click for more info";
  
      button.addEventListener('click', () => {
        // Find the closest parent card element
        const card = button.closest('.game');
        // Toggle the "expanded" class
        card.classList.toggle('expanded');
        
        // Updating the button text based on the card's state
        if (card.classList.contains('expanded')) {
          button.innerText = "Show less";
        } else {
          button.innerText = "Click for more info";
        }
      });
    });
  }
  //Function for updating release timers and injecting them into each game card
function updateReleaseTimers() {
const games = document.querySelectorAll('.game');
const now = new Date();

games.forEach(game => {
    const releaseDateStr = game.getAttribute('data-release-date');
    console.log(releaseDateStr);
    if (!releaseDateStr) return; // skip if no release date

    const releaseDate = new Date(releaseDateStr);
    // Calculate difference in years (approx)
    const diffTime = now - releaseDate;
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

    const yearsSpan = game.querySelector('.years-since');
    if (yearsSpan) {
    yearsSpan.textContent = diffYears.toString();
    }
});
}

// Run both initializations on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initCardToggle();
    updateReleaseTimers();
  });
  