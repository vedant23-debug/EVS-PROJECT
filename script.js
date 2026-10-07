/* =========================================
   DRINKING WATER SAFETY
   JAVASCRIPT
========================================= */


// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


// ================================
// SAFETY CHECKLIST
// ================================

const checkboxes = document.querySelectorAll(
    '.check-item input[type="checkbox"]'
);

const checkCount = document.getElementById("checkCount");
const checkProgress = document.getElementById("checkProgress");

function updateChecklist() {

    const total = checkboxes.length;

    let completed = 0;

    checkboxes.forEach(box => {

        if (box.checked) {
            completed++;
        }

    });

    checkCount.textContent = `${completed} / ${total}`;

    const percentage = (completed / total) * 100;

    checkProgress.style.width = `${percentage}%`;

}

checkboxes.forEach(box => {

    box.addEventListener("change", updateChecklist);

});

updateChecklist();


// ================================
// SCROLL REVEAL
// ================================

const revealElements = document.querySelectorAll(
    ".challenge-card, .disease-card, .parameter-card, .solution-card, .mini-info"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


// ================================
// SMOOTH ANCHOR OFFSET
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const navbarHeight = navbar.offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            15;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navItems.forEach(link => {
                    link.classList.remove("active");
                });

                const activeLink =
                    document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },

    {
        threshold: 0.35
    }

);

sections.forEach(section => {

    sectionObserver.observe(section);

});


// ================================
// HERO WATER CARD PARALLAX
// ================================

const waterCard =
    document.querySelector(".main-water-card");

if (waterCard && window.matchMedia("(min-width: 701px)").matches) {

    window.addEventListener("mousemove", event => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 8;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 8;

        waterCard.style.transform =
            `translate(${x}px, ${y}px) rotate(3deg)`;

    });

}


// ================================
// CURRENT YEAR
// ================================

const yearElement =
    document.querySelector(".footer-bottom span");

if (yearElement) {

    yearElement.textContent =
        `© ${new Date().getFullYear()} DrinkingWaterSafety.com`;

}