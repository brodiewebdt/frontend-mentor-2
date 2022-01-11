
// Variables
const shareMobile = document.querySelector(".share-mobile");
const shareDesktop = document.querySelector(".share-desktop");
const btnShare = document.querySelector(".share-img");

// Functions
btnShare.addEventListener('click', function() {
    if (window.innerWidth <= 800) {
        shareMobile.classList.toggle("mobile-active");
        return;
      }
      shareDesktop.classList.toggle("desktop-active");
})


