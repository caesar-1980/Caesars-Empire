// Toggle menu for small screens
document.getElementById('menuBtn')?.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Form Submission
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();

  // Send email via Formspree (replace YOUR_FORM_ID)
  const form = e.target;
  const formData = new FormData(form);

  fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: formData,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if(response.ok){
      document.getElementById('form-success').style.display = 'block';
      form.reset();
    } else {
      alert('Oops! There was a problem sending your message.');
    }
  }).catch(error => alert('Network error. Try again later.'));
});

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();


// Menu toggle
document.querySelectorAll('.menu-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav-links');
    if(nav) nav.classList.toggle('open');
  });
});

// Footer year
document.querySelectorAll('[id^=year]').forEach(el=>{
  el.textContent = new Date().getFullYear();
});
