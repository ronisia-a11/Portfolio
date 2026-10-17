/**
 * ==========================================================================
 * PORTFOLIO - COMPOSANTS COMMUNS (NAVBAR, FOOTER, MODAL & THÈME)
 * ==========================================================================
 * Ce fichier gère l'affichage unifié de la barre de navigation et du pied de page
 * sur l'ensemble des pages du portfolio pour éviter toute répétition de code.
 */

// Configuration des informations globales du profil
const PORTFOLIO_CONFIG = {
  authorName: "Mon Portfolio",
  shortRole: "Développeur Web & Créateur Multimédia",
  bioFooter: "Passionné par l'informatique, le développement de solutions numériques, le design graphique et la production vidéo.",
  currentYear: new Date().getFullYear(),
  socialLinks: {
    github: "https://github.com/ronisia-a11",
    linkedin: " https://www.linkedin.com/in/falleu-ronis-3676a8395/",
    tiktok: "https://tiktok.com/@linformaticien18",
    facebook: ": https://web.facebook.com/profile.php?id=61560552572433",
    whatsapp: "https://wa.me/683976216" // Remplacer par son numéro WhatsApp
  }
};

/**
 * Génération et injection de la barre de navigation
 */
function renderNavbar() {
  const headerContainer = document.getElementById('site-header');
  if (!headerContainer) return;

  // Déterminer la page active
  const currentPath = window.location.pathname.toLowerCase();
  const pageName = document.body.getAttribute('data-page') || '';

  const isAccueil = pageName === 'accueil' || currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
  const isCompetences = pageName === 'competences' || currentPath.includes('competences') || currentPath.includes('projets-');
  const isAttestations = pageName === 'attestations' || currentPath.includes('attestations');
  const isContact = pageName === 'contact' || currentPath.includes('contact');

  headerContainer.className = 'site-header';
  headerContainer.innerHTML = `
    <div class="container navbar">
      <a href="index.html" class="nav-brand" aria-label="Retour à l'accueil">
        <div class="brand-icon">💻</div>
        <span class="brand-name">Portfolio</span>
      </a>

      <nav class="nav-menu" id="nav-menu" aria-label="Navigation principale">
        <a href="index.html" class="nav-link ${isAccueil ? 'active' : ''}">
          <span>🏠</span> Accueil
        </a>
        <a href="competences.html" class="nav-link ${isCompetences ? 'active' : ''}">
          <span>💻</span> Compétences
        </a>
        <a href="attestations.html" class="nav-link ${isAttestations ? 'active' : ''}">
          <span>📜</span> Attestations
        </a>
        <a href="contact.html" class="nav-link ${isContact ? 'active' : ''}">
          <span>📩</span> Contact
        </a>
      </nav>

      <div class="nav-actions">
        <!-- Bouton Changement de thème (Sombre / Clair) -->
        <button class="theme-toggle" id="theme-toggle" title="Basculer le mode sombre / clair" aria-label="Basculer thème">
          <span id="theme-icon">🌙</span>
        </button>

        <!-- Menu Mobile Hamburger -->
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Ouvrir le menu de navigation" aria-expanded="false">
          ☰
        </button>
      </div>
    </div>
  `;

  initNavbarEvents();
}

/**
 * Événements interactifs de la navbar (menu burger et scroll)
 */
function initNavbarEvents() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu au clic sur un lien
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fermer le menu si clic à l'extérieur
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Effet d'ombre lors du défilement
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/**
 * Génération et injection du Footer commun
 */
function renderFooter() {
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;

  footerContainer.className = 'site-footer';
  footerContainer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <!-- Colonne 1 : Présentation de l'Auteur -->
        <div class="footer-brand">
          <div class="nav-brand">
            <div class="brand-icon">💻</div>
            <span class="brand-name">Portfolio</span>
          </div>
          <p>${PORTFOLIO_CONFIG.bioFooter}</p>
          <div class="footer-social-icons">
            <a href="${PORTFOLIO_CONFIG.socialLinks.github}" target="_blank" rel="noopener noreferrer" class="footer-social-link" title="GitHub" aria-label="GitHub">
              <img src="images/logos/github.svg" alt="GitHub" />
            </a>
            <a href="${PORTFOLIO_CONFIG.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer" class="footer-social-link" title="LinkedIn" aria-label="LinkedIn">
              <img src="images/logos/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="${PORTFOLIO_CONFIG.socialLinks.tiktok}" target="_blank" rel="noopener noreferrer" class="footer-social-link" title="TikTok" aria-label="TikTok">
              <img src="images/logos/tiktok.svg" alt="TikTok" />
            </a>
            <a href="${PORTFOLIO_CONFIG.socialLinks.facebook}" target="_blank" rel="noopener noreferrer" class="footer-social-link" title="Facebook" aria-label="Facebook">
              <img src="images/logos/facebook.svg" alt="Facebook" />
            </a>
          </div>
        </div>

        <!-- Colonne 2 : Liens des pages -->
        <div class="footer-col">
          <h4>Navigation</h4>
          <ul class="footer-links">
            <li><a href="index.html">🏠 Accueil</a></li>
            <li><a href="competences.html">💻 Compétences</a></li>
            <li><a href="attestations.html">📜 Attestations</a></li>
            <li><a href="contact.html">📩 Contact</a></li>
          </ul>
        </div>

        <!-- Colonne 3 : Domaines de Compétences -->
        <div class="footer-col">
          <h4>Spécialités</h4>
          <ul class="footer-links">
            <li><a href="projets-web.html">🌐 Développement Web</a></li>
            <li><a href="projets-design.html">🎨 Design Graphique</a></li>
            <li><a href="projets-video.html">🎬 Montage Vidéo</a></li>
            <li><a href="competences.html#technologies">⚙️ Technologies & Langages</a></li>
          </ul>
        </div>

        <!-- Colonne 4 : Réseaux & Contact -->
        <div class="footer-col">
          <h4>Réseaux Sociaux</h4>
          <ul class="footer-links">
            <li><a href="${PORTFOLIO_CONFIG.socialLinks.github}" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="${PORTFOLIO_CONFIG.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="${PORTFOLIO_CONFIG.socialLinks.tiktok}" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href="${PORTFOLIO_CONFIG.socialLinks.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>

      <!-- Barre inférieure de copyright -->
      <div class="footer-bottom">
        <p>&copy; ${PORTFOLIO_CONFIG.currentYear} - Mon Portfolio. Tous droits réservés.</p>
        <button class="back-to-top" id="back-to-top" aria-label="Remonter en haut de page">
          <span>Haut de page</span> ↑
        </button>
      </div>
    </div>
  `;

  // Gestion du retour en haut
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/**
 * Gestion du mode sombre / clair
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  if (!themeToggle || !themeIcon) return;

  // Récupérer la préférence sauvegardée
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('light-theme');
    themeIcon.textContent = '🌙';
  }

  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    themeIcon.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  });
}

/**
 * Système de Modale / Lightbox globale pour afficher les attestations et projets en grand
 */
function initGlobalModal() {
  // Création de l'élément modal s'il n'existe pas encore
  if (!document.getElementById('global-modal')) {
    const modalMarkup = document.createElement('div');
    modalMarkup.id = 'global-modal';
    modalMarkup.className = 'modal-overlay';
    modalMarkup.innerHTML = `
      <div class="modal-container" role="dialog" aria-modal="true">
        <button class="modal-close-btn" id="modal-close-btn" aria-label="Fermer la boîte de dialogue">✕</button>
        <img id="modal-image" class="modal-img" src="" alt="Aperçu" />
        <div class="modal-content">
          <h3 id="modal-title">Titre</h3>
          <p id="modal-description">Description</p>
        </div>
      </div>
    `;
    document.body.appendChild(modalMarkup);

    const closeBtn = document.getElementById('modal-close-btn');
    closeBtn.addEventListener('click', closeModal);

    modalMarkup.addEventListener('click', (e) => {
      if (e.target === modalMarkup) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalMarkup.classList.contains('active')) {
        closeModal();
      }
    });
  }
}

/**
 * Fonction publique pour ouvrir la modale
 */
window.openModal = function (imageSrc, title, description) {
  const modal = document.getElementById('global-modal');
  const modalImg = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');

  if (modal && modalImg && modalTitle && modalDesc) {
    modalImg.src = imageSrc;
    modalImg.alt = title || 'Aperçu';
    modalTitle.textContent = title || '';
    modalDesc.textContent = description || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

/**
 * Fonction pour fermer la modale
 */
window.closeModal = function () {
  const modal = document.getElementById('global-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/**
 * Notification Toast
 */
window.showToast = function (message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
};

// Initialisation automatique au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  initThemeToggle();
  initGlobalModal();
});
