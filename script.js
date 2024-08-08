document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const rotationDegree = scrollPosition / 2; // Adjust this value as needed

    // Select the element to rotate
    const rotatingImage = document.getElementById('image-aneme');

    // Apply rotation
    rotatingImage.style.transform = `rotate(${rotationDegree}deg)`;
});
