document.addEventListener("DOMContentLoaded", function () {
    const images = [
        {
            src: "images/indexeducation.png",
            title: "Educate",
            description: "Equipping healthcare professionals with essential knowledge and skills to leverage emerging technologies effectively."
        },
        {
            src: "images/indexempower.png",
            title: "Empower",
            description: "Providing tailored technology solutions that enhance operational efficiency and improve patient care."
        },
        {
            src: "images/indexenlighten.png",
            title: "Enlighten",
            description: "Offering insights into new opportunities through AR, VR, and data analytics, helping organizations recognize their potential for growth."
        }
    ];

    let currentImageIndex = 0;

    function changeImage() {
        const imageData = images[currentImageIndex];

        console.log("Changing to:", imageData.src); // Debugging

        const imageDisplay = document.getElementById("image-display");
        const imageTitle = document.getElementById("image-title");
        const imageDescription = document.getElementById("image-description");

        if (imageDisplay && imageTitle && imageDescription) {
            imageDisplay.src = imageData.src;
            imageTitle.textContent = imageData.title;
            imageDescription.textContent = imageData.description;
        } else {
            console.error("Image elements not found.");
        }

        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Start image change loop
    setInterval(changeImage, 5000);
});
