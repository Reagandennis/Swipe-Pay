<script>
  // Smooth scrolling on click of nav links
  const navLinks = document.querySelectorAll('header nav ul li a');
  navLinks.forEach(link ={">"} {
    link.addEventListener('click', e => {
      e.preventDefault();
      const sectionId = link.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    })
  });

  // Form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', e ={">"} {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
    form.reset();
  });
</script>
