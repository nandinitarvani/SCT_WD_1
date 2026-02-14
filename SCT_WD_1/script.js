// Fade-in animation on scroll
const faders = document.querySelectorAll(".fade-in");

// Navbar scroll color
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    // Fade-in
    faders.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if(position < screenPosition){
            element.classList.add("show");
        }
    });

    // Navbar color change
    if(window.scrollY > 50){
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
