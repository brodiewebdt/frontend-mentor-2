// const bar = document.querySelector(".fa-bars");
 // const menu = document.querySelector(".menu");

// bar.addEventListener("click", () => {
// menu.classList.toggle("show-menu");
// });


// const hamburger = document.getElementById('hamburger');
// const nav = document.querySelector('.nav');

// hamburger.addEventListener('click', e => {
// 	// body.classList.toggle('show-nav');
// 	nav.classList.toggle('show-nav');
// });


const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')
const hamburger = document.querySelector('.fas')

navToggle.addEventListener('click', function() {
    console.log(links.classList)
    console.log(links.classList.contains('random'))
    console.log(links.classList.contains('links'))
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links')
        hamburger.classList.remove('fa-times')
        hamburger.classList.add('fa-bars')
    } else {
        links.classList.add('show-links')
        hamburger.classList.remove('fa-bars')
        hamburger.classList.add('fa-times')
    }
})