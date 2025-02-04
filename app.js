document.addEventListener("DOMContentLoaded", function () {
    // Slide Show Logic
    const headings = ["Educate", "Empower", "Enlighten"];
    const contents = [
        "Equipping healthcare professionals with essential knowledge and skills to leverage emerging technologies effectively.",
        "Providing tailored technology solutions that enhance operational efficiency and improve patient care.",
        "Offering insights into new opportunities through AR, VR, and data analytics, helping organizations recognize their potential for growth."
    ];
    const images = [
        "images/educate1.png",
        "images/empower3.png",
        "images/enlighten.png"
    ];

    let index = 0;
    let interval;

    function updateSlide() {
        document.getElementById("heading").textContent = headings[index];
        document.getElementById("content").textContent = contents[index];
        document.getElementById("slide-image").src = images[index];
        resetInterval(); // Restart auto-slide after manual change
    }

    function prevSlide() {
        index = (index - 1 + headings.length) % headings.length;
        updateSlide();
    }

    function nextSlide() {
        index = (index + 1) % headings.length;
        updateSlide();
    }

    function autoSlide() {
        index = (index + 1) % headings.length;
        updateSlide();
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(autoSlide, 4000);
    }

    // Set the interval for auto sliding
    interval = setInterval(autoSlide, 4000);

    // Add event listeners to arrow buttons
    document.querySelector(".left-arrow").addEventListener("click", prevSlide);
    document.querySelector(".right-arrow").addEventListener("click", nextSlide);

  // Navbar active page logic
const navLinks = document.querySelectorAll('.navbar a'); // Adjust the selector to match the links in the navbar
const currentPagePath = window.location.pathname;

// Function to reset active class from all links
function removeActiveClass() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to set the active class based on the current page
function setActiveLink() {
    navLinks.forEach(link => {
        // Check if the link pathname matches the current page path or if it's the homepage
        if (link.pathname === currentPagePath || 
            (currentPagePath === "/" && link.pathname.includes("index.html"))) {
            link.classList.add('active');
        }
    });
}

// Add event listener for clicks on nav links to set the active class
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        removeActiveClass(); // Remove active class from all links
        link.classList.add('active'); // Add active class to clicked link
    });
});

// Set the active link on page load
setActiveLink();

});
