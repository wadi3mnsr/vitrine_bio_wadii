// utilities.js

/**
 * Bascule la classe "show" sur un élément
 * @param {string} elementId
 */
function toggleMenu(elementId) {
  const nav = document.getElementById(elementId);
  if (nav) {
    nav.classList.toggle("show");
  }
}
