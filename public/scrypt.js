function autoIncrement(id, end, interval) {
  const element = document.getElementById(id);
  let count = 0;
  element.innerText = count;

  setInterval(() => {
    count += 1;

    if (count > end) {
      count = 0; // reset the counter when it exceeds 1000
    }

    element.innerText = count;
  }, interval);
}

window.onload = () => {
  autoIncrement("numbers-teacher", 250, 200); // Adjust interval speed here
  autoIncrement("numbers-students", 2050, 100); // Adjust interval speed here
};

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
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
  document
    .querySelectorAll(".form")
    .forEach((f) => f.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));

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

  document.getElementById("join-modal").style.display = "none";

// Join form handling on Home page
  // const form = document.getElementById('join-form');

  // form.addEventListener('submit', async (e) => {
  //   e.preventDefault(); // Prevent default page reload

  //   // Collect form data
  //   const name = form.elements['name'].value;
  //   const email = form.elements['email'].value;
  //   const message = form.elements['message'].value;

  //   // Send data to backend
  //   try {
  //     const response = await fetch('http://localhost:8000/api/submit-form', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name, email, message }),
  //     });

  //     const result = await response.json();

  //     if (result.success) {
  //       alert('Form submitted! You will be contacted soon.');
  //       form.reset(); // Clear the form
  //     } else {
  //       alert('Something went wrong. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Failed to submit form.');
  //   }
  // });

  const form = document.getElementById("join-form");
  const responseMessage = document.getElementById("success-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const res = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      responseMessage.innerText = "Thanks! Your form has been submitted.";
      alert("Thanks! Your form has been submitted.");
      document.getElementById("join-modal").style.display = "none";
      form.reset();
    } else {
      responseMessage.innerText = "Oops! There was a problem submitting your form.";
    }
  });