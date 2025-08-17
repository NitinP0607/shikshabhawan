  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
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


function showForm(type) {
  // Hide all forms
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));

  // Show selected form
  document.getElementById(type + "-form").classList.add("active");

  // Highlight selected tab
  event.target.classList.add("active");
}

// Pop-up form

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.getElementById("join-modal").style.display = "flex";
    }, 2000);
  });

  // Close modal on X click
  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("join-modal").style.display = "none";
  });

  // Optional: handle form submission
  document.getElementById("join-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for joining!");
    document.getElementById("join-modal").style.display = "none";
  });