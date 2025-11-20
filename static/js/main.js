// particles
particlesJS.load('particles','https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js@2.0.0/demo/particles.json',()=>{});
// typing
const phrases=["AI Engineer","Computer Vision Specialist","Building Tomorrow's Intelligence"];
let i=0,j=0,dir=1,el=document.querySelector('#typed span');
(function loop(){
el.textContent=phrases[i].substring(0,j);
j+=dir;
if(j===phrases[i].length+8){dir=-1;}
if(j===0){dir=1;i=(i+1)%phrases.length;}
setTimeout(loop,200);
})();
// dark-mode
const html=document.documentElement,btn=document.getElementById('themeToggle'),icon=btn.querySelector('i');
function setTheme(dark){
dark?html.classList.add('dark'):html.classList.remove('dark');
icon.className=dark?'fa-solid fa-sun':'fa-solid fa-moon';
localStorage.setItem('theme',dark?'dark':'light');
}
btn.onclick=()=>setTheme(!html.classList.contains('dark'));
setTheme(localStorage.getItem('theme')==='dark');
// nav active
const sections=document.querySelectorAll('section'),navs=document.querySelectorAll('.nav-link');
window.addEventListener('scroll',()=>{
let cur='';sections.forEach(s=>{if(scrollY>=s.offsetTop-100)cur=s.id;});
navs.forEach(n=>n.classList.toggle('text-primary',n.getAttribute('href').slice(1)===cur));
});
// mobile menu
const menu=document.getElementById('mobileMenu'),btnm=document.getElementById('menuBtn');
btnm.onclick=()=>menu.classList.toggle('hidden');
// back-to-top
const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>topBtn.classList.toggle('hidden',scrollY<400));
topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
// contact form
document.getElementById('contactForm').addEventListener('submit',async(e)=>{
e.preventDefault();
const fd=new FormData(e.target),data=Object.fromEntries(fd);
const res=await fetch('/send-email',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
const json=await res.json();
alert(json.success?'Message sent!':'Failed to send.');
});
// year
document.getElementById('year').textContent=new Date().getFullYear();
// AOS AOS.init({duration:800,once:true});