const headerText = document.getElementById("header-text");

// Function to animate header text
function animateText() {
    headerText.style.opacity = 0; // Start with hidden text
    headerText.style.transform = 'translateY(-10px)'; // Move up slightly
    setTimeout(() => {
        headerText.style.opacity = 1; // Fade in
        headerText.style.transform = 'translateY(0)'; // Move back to original position
    }, 500); // Delay before fading in
}

// Function to change the background gradient
function changeBackground() {
    const colors = [
        ['#ff7e5f', '#feb47b'], // Sunset
        ['#86a8e7', '#91eae4'], // Blue gradients
        ['#ff6a00', '#ee0979'], // Orange to Pink
        ['#4facfe', '#00f2fe'], // Blue to Turquoise
    ];
    
    let currentColorIndex = 0;
    setInterval(() => {
        document.body.style.background = `linear-gradient(135deg, ${colors[currentColorIndex][0]}, ${colors[currentColorIndex][1()]})`;
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 5000); // Change every 5 seconds
}

// Initiate animations
setInterval(animateText, 3000); // Repeat text animation every 3 seconds
animateText(); // Initial call to display the text right away
changeBackground(); // Start background gradient change

// Get the modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const profilePic = document.getElementById("profile-pic");
const closeBtn = document.querySelector(".close");

// When the user clicks on the profile picture, open the modal and display the image
profilePic.onclick = function () {
    modal.style.display = "block";
    modalImg.src = profilePic.src; // Set modal image source to the profile picture source
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the image, close the modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
