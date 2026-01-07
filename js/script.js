// Simple, minimal JavaScript for navigation and footer behavior.
// This keeps the site fast and easy to understand.

/**
 * Handles:
 * - Mobile hamburger menu toggle
 * - Closing the menu when a nav link is clicked
 * - Setting the current year in the footer
 */

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".main-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentYearEl = document.getElementById("current-year");

  // Set current year in footer
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Toggle mobile navigation open/closed
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Close mobile menu when a navigation link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav.classList.contains("nav-open")) {
        nav.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});


