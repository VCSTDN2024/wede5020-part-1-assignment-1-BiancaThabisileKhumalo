// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Highlight active nav link based on current page
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.style.textDecoration = "underline";
    }
  });

  // Add checklist interactivity
  const checklistItems = document.querySelectorAll("section ul li");
  checklistItems.forEach(item => {
    item.addEventListener("click", () => {
      item.style.textDecoration = item.style.textDecoration === "line-through" ? "none" : "line-through";
      item.style.color = item.style.textDecoration === "line-through" ? "#999" : "#333";
    });
  });
});
