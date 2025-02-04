// Get all links in the navbar
const navLinks = document.querySelectorAll('.navbar a');

// Loop through all the links and remove the 'active' class
navLinks.forEach(link => {
    link.classList.remove('active');
});

// Get the current page URL
const currentPage = window.location.href;

// Loop through each link to see if its href matches the current page
navLinks.forEach(link => {
    if (link.href === currentPage) {
        link.classList.add('active');
    }
});
