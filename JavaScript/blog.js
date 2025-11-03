// blog.js
document.addEventListener("DOMContentLoaded", () => {
  // Add read more functionality to articles with extra text
  const articles = document.querySelectorAll("article");

  articles.forEach(article => {
    // Only add Read More button if there's a paragraph
    const p = article.querySelector("p");
    if (p && !p.classList.contains("enhanced")) {
      const span = document.createElement("span");
      span.classList.add("more-text");
      span.textContent = " This is additional information about this topic. Learn more about EV maintenance and efficient driving!";
      p.appendChild(span);

      const btn = document.createElement("button");
      btn.classList.add("read-more-btn");
      btn.textContent = "Read More";
      article.appendChild(btn);
      p.classList.add("enhanced");

      // Button click event
      btn.addEventListener("click", () => {
        const moreText = p.querySelector(".more-text");
        if (moreText.style.display === "inline") {
          moreText.style.display = "none";
          btn.textContent = "Read More";
        } else {
          moreText.style.display = "inline";
          btn.textContent = "Read Less";
        }
      });
    }
  });

  // Simple header animation
  const header = document.querySelector("header h1");
  header.style.opacity = 0;
  header.style.transform = "translateY(-20px)";
  setTimeout(() => {
    header.style.transition = "all 1s ease";
    header.style.opacity = 1;
    header.style.transform = "translateY(0)";
  }, 300);
});
