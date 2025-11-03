document.addEventListener("DOMContentLoaded", () => {
  // Highlight current nav link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.style.textDecoration = "underline";
    }
  });

  // Animate service sections on click
  const serviceSections = document.querySelectorAll("main section");
  serviceSections.forEach(section => {
    section.addEventListener("click", () => {
      section.style.backgroundColor = "#e0f7fa";
      setTimeout(() => {
        section.style.backgroundColor = "white";
      }, 800);
    });
  });
});
