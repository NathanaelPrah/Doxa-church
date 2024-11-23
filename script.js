// Toggle Navigation Menu
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});

// Fetch Verse of the Day
document.addEventListener("DOMContentLoaded", () => {
  const verseEl = document.getElementById("verse-of-the-day");
  fetch("https://bible-api.com/john 3:16")
    .then(response => response.json())
    .then(data => {
      verseEl.textContent = `"${data.text}" - ${data.reference}`;
    })
    .catch(() => {
      verseEl.textContent = "Could not fetch the verse. Please try again later.";
    });
});
// JavaScript for toggling the navigation menu on smaller screens
document.querySelector('.nav-toggle').addEventListener('click', function() {
  document.querySelector('header ul.nav').classList.toggle('show');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
