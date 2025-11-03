document.addEventListener("DOMContentLoaded", () => {
  // Highlight current nav link
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.style.textDecoration = "underline";
    }
  });

  // Animate testimonials on click
  const quotes = document.querySelectorAll("blockquote");
  quotes.forEach(quote => {
    quote.addEventListener("click", () => {
      quote.style.backgroundColor = "#c8e6c9";
      setTimeout(() => {
        quote.style.backgroundColor = "#f0f0f0";
      }, 1000);
    });
  });
});
