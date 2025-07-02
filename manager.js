// manager.js

const ObserverManager = {
  initFadeInObserver: function () {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }
};

const CardManager = {
  initCardHover: function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const title = card.querySelector(".card-title");
      const list = card.querySelector(".card-list");

      if (title && list) {
        title.addEventListener("mouseenter", () => {
          list.style.display = "block";
        });

        title.addEventListener("mouseleave", () => {
          list.style.display = "none";
        });

        card.addEventListener("mouseleave", () => {
          list.style.display = "none";
        });
      }
    });
  }
};

const FormManager = {
  validateContactForm: function (formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nom = form.nom.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!nom || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      alert("Merci pour votre message !");
      form.reset();
    });
  }
};
