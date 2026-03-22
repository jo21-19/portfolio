const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
const nav = document.querySelector(".navbar");
const highlight = document.querySelector(".nav-highlight");

const nameStr = "Yonatan Daniel";
let charIndex = 0;

function typeWriter() {
    const target = document.getElementById("typewriter-name");
    if (!target) return;

    if (charIndex < nameStr.length) {
        target.innerHTML += nameStr.charAt(charIndex);
        charIndex++;
        
        setTimeout(typeWriter, 150);
    } else {
        
        target.style.borderRight = "3px solid transparent";
    }
}


function moveHighlight(element) {
    if (!element) return;
    highlight.style.width = `${element.offsetWidth}px`;
    highlight.style.left = `${element.offsetLeft}px`;
}

function updateHighlight() {
    const activeLink = nav.querySelector("a.active") || navLinks[0];
    moveHighlight(activeLink);
}


window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    updateHighlight();
});


navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    });

    link.addEventListener("mouseenter", (e) => moveHighlight(e.target));
    link.addEventListener("mouseleave", updateHighlight);
});

window.addEventListener("load", () => {
    typeWriter();      
    updateHighlight(); 
})
window.addEventListener("resize", updateHighlight);
