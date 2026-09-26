/* main.js
   Behavior shared by every page: the mobile nav toggle and the
   auto-updating footer year. Page-specific rendering (homepage list,
   post detail, contact form) lives in its own file. */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const isOpen = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/* Turns "2026-08-14" into "14 August 2026" for display. */
function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
