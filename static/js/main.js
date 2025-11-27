// particles
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#3b82f6"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.3,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#3b82f6",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 0.8
                }
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});

// typing
const phrases = ["AI Engineer", "Computer Vision Specialist", "Building Tomorrow's Intelligence"];
let i = 0, j = 0, dir = 1, el = document.querySelector('#typed span');
(function loop() {
    if (el) {
        el.textContent = phrases[i].substring(0, j);
        j += dir;
        if (j === phrases[i].length + 8) { dir = -1; }
        if (j === 0) { dir = 1; i = (i + 1) % phrases.length; }
    }
    setTimeout(loop, 200);
})();

// dark-mode
const html = document.documentElement, btn = document.getElementById('themeToggle'), icon = btn.querySelector('i');
function setTheme(dark) {
    dark ? html.classList.add('dark') : html.classList.remove('dark');
    icon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}
if (btn) {
    btn.onclick = () => setTheme(!html.classList.contains('dark'));
}
setTheme(localStorage.getItem('theme') === 'dark');

// nav active
const sections = document.querySelectorAll('section'), navs = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let cur = ''; sections.forEach(s => { if (scrollY >= s.offsetTop - 100) cur = s.id; });
    navs.forEach(n => n.classList.toggle('text-primary', n.getAttribute('href').slice(1) === cur));
});

// mobile menu
const menu = document.getElementById('mobileMenu'), btnm = document.getElementById('menuBtn');
if (btnm) {
    btnm.onclick = () => menu.classList.toggle('hidden');
}

// back-to-top
const topBtn = document.getElementById('topBtn');
if (topBtn) {
    window.addEventListener('scroll', () => topBtn.classList.toggle('hidden', scrollY < 400));
    topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

// contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(e.target), data = Object.fromEntries(fd);
        const res = await fetch('/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        const json = await res.json();
        alert(json.success ? 'Message sent!' : 'Failed to send.');
    });
}

// year
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// AOS
// AOS.init({duration:800,once:true});