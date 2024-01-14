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