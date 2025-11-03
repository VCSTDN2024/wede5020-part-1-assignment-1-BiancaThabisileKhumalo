document.addEventListener("DOMContentLoaded", () => {
  // Highlight current nav link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.style.textDecoration = "underline";
    }
  });

  // Animate featured services on hover
  const serviceItems = document.querySelectorAll("section ul li");
  serviceItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.color = "#00695c";
      item.style.fontWeight = "bold";
    });
    item.addEventListener("mouseleave", () => {
      item.style.color = "#333";
      item.style.fontWeight = "normal";
    });
  });
});
