document.addEventListener("DOMContentLoaded", () => {

    /* ----------------------------------------
       TYPING EFFECT (your custom version)
    -----------------------------------------*/
    const phrases = [
        "AI Engineer",
        "Computer Vision Specialist",
        "Building Tomorrow's Intelligence"
    ];
    let i = 0, j = 0, dir = 1;
    const typedEl = document.querySelector("#typed");

    // create span
    if (typedEl) {
        typedEl.innerHTML = "<span></span>";
        let span = typedEl.querySelector("span");

        function typingLoop() {
            span.textContent = phrases[i].substring(0, j);
            j += dir;

            if (j === phrases[i].length + 8) dir = -1;
            if (j === 0) { dir = 1; i = (i + 1) % phrases.length; }

            setTimeout(typingLoop, 200);
        }
        typingLoop();
    }


    /* ----------------------------------------
       PARTICLES EFFECT (your custom config)
    ----------------------------------------*/
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#3b82f6" },
                shape: { type: "circle" },
                opacity: { value: 0.3, random: false },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#3b82f6",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: "none",
                    straight: false,
                    out_mode: "out",
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.8 } },
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }


    /* ----------------------------------------
       DARK MODE
    ----------------------------------------*/
    const html = document.documentElement;
    const themeBtn = document.getElementById("themeToggle");
    const mobileThemeBtn = document.getElementById("mobileThemeToggle");

    function applyTheme(dark) {
        if (dark) {
            html.classList.add("dark");
            if (themeBtn) themeBtn.querySelector("i").className = "fa-solid fa-sun";
            if (mobileThemeBtn) mobileThemeBtn.querySelector("i").className = "fa-solid fa-sun";
        } else {
            html.classList.remove("dark");
            if (themeBtn) themeBtn.querySelector("i").className = "fa-solid fa-moon";
            if (mobileThemeBtn) mobileThemeBtn.querySelector("i").className = "fa-solid fa-moon";
        }
        localStorage.setItem("theme", dark ? "dark" : "light");
    }

    if (themeBtn) themeBtn.onclick = () => applyTheme(!html.classList.contains("dark"));
    if (mobileThemeBtn) mobileThemeBtn.onclick = () => applyTheme(!html.classList.contains("dark"));

    applyTheme(localStorage.getItem("theme") === "dark");


    /* ----------------------------------------
       NAV ACTIVE HIGHLIGHT
    ----------------------------------------*/
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let cur = "";

        sections.forEach((s) => {
            if (scrollY >= s.offsetTop - 150) cur = s.id;
        });

        navLinks.forEach((link) => {
            link.classList.toggle(
                "text-primary",
                link.getAttribute("href") === `#${cur}`
            );
        });
    });


    /* ----------------------------------------
       MOBILE MENU
    ----------------------------------------*/
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && mobileMenu) {
        menuBtn.onclick = () => {
            mobileMenu.classList.toggle("hidden");
        };
    }


    /* ----------------------------------------
       BACK TO TOP BUTTON
    ----------------------------------------*/
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            topBtn.classList.toggle("show", scrollY > 400);
        });

        topBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    }


    /* ----------------------------------------
       CONTACT FORM
    ----------------------------------------*/
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const fd = new FormData(form);
            const data = Object.fromEntries(fd);

            try {
                const res = await fetch("/send-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                const json = await res.json();
                alert(json.success ? "Message Sent!" : "Failed to send");
            } catch {
                alert("Error sending message.");
            }
        });
    }


    /* ----------------------------------------
       AOS ANIMATION
    ----------------------------------------*/
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
        });
    }


    /* ----------------------------------------
       TILT EFFECT
    ----------------------------------------*/
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".card-3d"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.3
        });

        VanillaTilt.init(document.querySelectorAll(".tech-card"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.02
        });

        VanillaTilt.init(document.querySelectorAll(".creative-card"), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.02
        });
    }

    /* ----------------------------------------
       YEAR
    ----------------------------------------*/
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});