document.addEventListener("DOMContentLoaded", function () {
  // --- Navigation toggle for small screens ---
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // --- Smooth scrolling for nav links ---
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // --- Animate skill headings and icons on scroll ---
  const skillHeadings = document.querySelectorAll(".skills-category h3");
  const skillItems = document.querySelectorAll(".skill");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  skillHeadings.forEach((h) => observer.observe(h));
  skillItems.forEach((s) => observer.observe(s));

  // --- Contact form localStorage save ---
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("number").value,
        message: form.querySelector('input[type="text"]').value,
      };

      localStorage.setItem("contactFormData", JSON.stringify(formData));
      form.reset();
      alert("Message sent! Your details have been saved.");
    });
  }
});
