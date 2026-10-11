/**
 * ==========================================================================
 * PORTFOLIO PERSONNEL - LOGIQUE INTERACTIVE PRINCIPALE (MAIN.JS)
 * ==========================================================================
 * - Validation intelligente du formulaire de contact
 * - Filtrage dynamique des projets (Design, Vidéo, Web)
 * - Animations d'apparition
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initProjectFilters();
});

/**
 * Validation et soumission du formulaire de contact
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('nom');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('sujet');
  const messageInput = document.getElementById('message');

  // Validation en direct lors de la saisie
  const validateField = (input, condition) => {
    if (condition) {
      input.classList.remove('is-invalid');
      return true;
    } else {
      input.classList.add('is-invalid');
      return false;
    }
  };

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      validateField(nameInput, nameInput.value.trim().length >= 2);
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      validateField(emailInput, isEmailValid(emailInput.value.trim()));
    });
  }

  if (subjectInput) {
    subjectInput.addEventListener('input', () => {
      validateField(subjectInput, subjectInput.value.trim().length >= 3);
    });
  }

  if (messageInput) {
    messageInput.addEventListener('input', () => {
      validateField(messageInput, messageInput.value.trim().length >= 10);
    });
  }

  // Soumission du formulaire
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameOk = validateField(nameInput, nameInput.value.trim().length >= 2);
    const isEmailOk = validateField(emailInput, isEmailValid(emailInput.value.trim()));
    const isSubjectOk = validateField(subjectInput, subjectInput.value.trim().length >= 3);
    const isMessageOk = validateField(messageInput, messageInput.value.trim().length >= 10);

    if (isNameOk && isEmailOk && isSubjectOk && isMessageOk) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // État de chargement
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>⏳ Envoi en cours...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (typeof window.showToast === 'function') {
          window.showToast("Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.");
        } else {
          alert("Votre message a été envoyé avec succès !");
        }
      }, 1000);
    } else {
      if (typeof window.showToast === 'function') {
        window.showToast("Veuillez vérifier les champs du formulaire.");
      }
    }
  });
}

/**
 * Système de filtre pour les pages de projets (Design, Vidéo, Web)
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Activer le bouton sélectionné
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
