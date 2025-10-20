// script.js — controls menu, theme, typing, menu buttons & years

// MENU toggle for small screens (applies on all pages)
document.querySelectorAll('.menu-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav-links');
    if(nav) nav.classList.toggle('open');
  });
});

// Theme toggle (persists)
const themeToggle = document.getElementById('themeToggle');
if(themeToggle){
  const current = localStorage.getItem('ckj-theme') || 'dark';
  if(current === 'light') document.documentElement.classList.add('light-theme');
  themeToggle.textContent = current === 'light' ? '🌞' : '🌙';
  themeToggle.addEventListener('click', ()=>{
    const isLight = document.documentElement.classList.toggle('light-theme');
    themeToggle.textContent = isLight ? '🌞' : '🌙';
    localStorage.setItem('ckj-theme', isLight ? 'light' : 'dark');
  });
}

// Typing effect (on index.html only)
(function typingEffect(){
  const typingEl = document.getElementById('typing-text');
  if(!typingEl) return; // only run on home page

  const phrases = [
   "An aspiring Information Technology professional with keen interest in",
   "programming, networking, system administration and web designing.",

   "Passionate and motivated to leverage my skills to teach, contribute and",
   "enhance productivity with the use of technology in any firm's operations.",

   "I am seeking for a dynamic role in any forward-thinking IT Department",
      "and a strong focus on IT solutions, data entry, and database management.",
   "I’m ready to give expertise advice to grow your business", 
   "via problem-solving attitude and reliable IT solutions.",

   "Advanced Expertise Skills include.....",
    "Cybersecurity Enthusiast & Software Developer",
    "Innovator in Smart IoT Solutions",
    "Teacher • Builder • Problem-solver",
    "Click on the contact button to reach out to me"
  ];

  let pIndex = 0, cIndex = 0;
  let current = '', isDeleting = false;
  const typeSpeed = 100;   // characters per step (typing)
  const eraseSpeed = 60;   // erasing speed
  const pauseAfter = 1600; // pause after full phrase

  function tick(){
    const full = phrases[pIndex];
    if(!isDeleting){
      // typing
      current = full.slice(0, ++cIndex);
      typingEl.textContent = current;
      if(current === full){
        // pause then start deleting
        isDeleting = true;
        setTimeout(tick, pauseAfter);
        return;
      }
    } else {
      // deleting
      current = full.slice(0, --cIndex);
      typingEl.textContent = current;
      if(cIndex === 0){
        isDeleting = false;
        pIndex = (pIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, isDeleting ? eraseSpeed : typeSpeed);
  }
  tick();
})();

// set the footer years in all pages
document.querySelectorAll('[id^=year]').forEach(el=>{
  el.textContent = new Date().getFullYear();
});

// Update footer year
document.getElementById('yearContact').textContent = new Date().getFullYear();

// Mobile menu toggle
document.getElementById('menuBtnContact').addEventListener('click', ()=>{
  const nav = document.querySelector('.nav-links');
  if(nav) nav.classList.toggle('open');
});

// Form submission via Formspree
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if(response.ok){
      document.getElementById('form-success').style.display = 'block';
      form.reset();
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  }).catch(err=>{
    alert('Oops! There was a problem submitting your form.');
  });
});


