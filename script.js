document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["Anurag Kushwaha."],
        typeSpeed: 60,
        backSpeed: 30,
        startDelay: 300,
        showCursor: false,
        fadeOut: false,  // Disable fade-out effect
        fadeIn: true ,    // Enable fade-in effect
        easing: 'easeInOutExpo',
        
        loop: false
    };

    var typed = new Typed('#typed-output', options);
});

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var offset = -100; // Adjust the offset as needed
        section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        window.scrollBy(0, offset);
    }
}