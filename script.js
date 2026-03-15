// =========================
// Smooth scroll + active link
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });

    moveHighlight(); // keep highlight synced with active
});

// Smooth scroll on click
navLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({behavior: "smooth"});
    });
});

// =========================
// Navbar Pink Highlight Follow
// =========================
const nav = document.querySelector(".navbar");
const highlight = document.querySelector(".nav-highlight");
const links = nav.querySelectorAll("a");

// Move highlight on hover
links.forEach(link => {
    link.addEventListener("mouseenter", (e) => {
        const { offsetLeft, offsetWidth } = e.target;
        highlight.style.width = `${offsetWidth}px`;
        highlight.style.left = `${offsetLeft}px`;
    });
    link.addEventListener("mouseleave", () => {
        const active = nav.querySelector("a.active") || links[0];
        highlight.style.width = `${active.offsetWidth}px`;
        highlight.style.left = `${active.offsetLeft}px`;
    });
});

// Initial position
window.addEventListener("load", () => {
    const active = nav.querySelector("a.active") || links[0];
    highlight.style.width = `${active.offsetWidth}px`;
    highlight.style.left = `${active.offsetLeft}px`;
});