  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  
const quotes = [
  "Teaching is the one profession that creates all other professions",
  "Education is the most powerful weapon which you can use to change the world",
  "The mind is not a vessel to be filled, but a fire to be kindled.",
  "Children must be taught how to think, not what to think",
  "Learning is a treasure that will follow its owner everywhere",
];

let index = 0;
const quoteElement = document.getElementById("quote-text");

function changeQuote() {
  index = (index + 1) % quotes.length;
  quoteElement.style.opacity = 0;
  setTimeout(() => {
    quoteElement.textContent = quotes[index];
    quoteElement.style.opacity = 1;
  }, 500);
}

setInterval(changeQuote, 4000);
