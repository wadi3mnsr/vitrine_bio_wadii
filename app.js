// app.js

document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle example
  const burger = document.getElementById("burgerButton");
  if (burger) {
    burger.addEventListener("click", () => toggleMenu("navMenu"));
  }

  // Form validation
  FormManager.validateContactForm(".contact-form");

  // Fade-in animation
  ObserverManager.initFadeInObserver();

  // Card hover
  CardManager.initCardHover();
});

