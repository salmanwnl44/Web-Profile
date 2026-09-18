import { PROFILE_DATA } from '../data/profile.js';
import { sound } from '../utils/glitch.js';

export function renderHeader() {
  return `
    <div class="container">
      <div class="header-inner">
        <!-- Brand / Identity -->
        <div class="brand-section">
          <a href="#home" class="brand-logo glitch-hover" data-text="${PROFILE_DATA.name}">
            <span>${PROFILE_DATA.name}</span>
            <span class="brand-badge">${PROFILE_DATA.initials}</span>
          </a>
        </div>

        <!-- Real-time HUD Status & Clock -->
        <div class="header-status">
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span id="hud-status" class="glitch-text" data-text="SYSTEM: OPERATIONAL">SYS: ONLINE</span>
          </div>
          <div class="status-clock">
            <span id="hud-clock">00:00:00 UTC</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="main-nav" id="main-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#home" class="nav-link" data-route="home">
                <span class="nav-num">01</span>
                <span class="nav-label">INDEX</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#projects" class="nav-link" data-route="projects">
                <span class="nav-num">02</span>
                <span class="nav-label">PROJECTS</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#blog" class="nav-link" data-route="blog">
                <span class="nav-num">03</span>
                <span class="nav-label">JOURNAL</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link" data-route="contact">
                <span class="nav-num">04</span>
                <span class="nav-label">CONTACT</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- System Controls: Sound & Navigation -->
        <div class="header-controls">
          <button id="sound-toggle-btn" class="control-btn" title="Toggle Mechanical Audio FX">
            <span id="sound-state-label">[ AUDIO: ON ]</span>
          </button>
          <button id="mobile-nav-toggle" class="mobile-toggle" aria-label="Toggle menu">
            <span>[ MENU ]</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function renderFooter() {
  return `
    <div class="container">
      <div class="footer-top">
        <div class="footer-statement glitch-text" data-text="BUILDING THE SILENT WEB">
          BUILDING THE SILENT WEB
        </div>
        <div class="footer-links-grid">
          <div>
            <div class="footer-col-title">Navigation</div>
            <ul class="footer-link-list">
              <li><a href="#home">[ 01 ] INDEX</a></li>
              <li><a href="#projects">[ 02 ] PROJECTS</a></li>
              <li><a href="#blog">[ 03 ] JOURNAL</a></li>
              <li><a href="#contact">[ 04 ] CONTACT</a></li>
            </ul>
          </div>
          <div>
            <div class="footer-col-title">Networks</div>
            <ul class="footer-link-list">
              <li><a href="${PROFILE_DATA.contact.github}" target="_blank" rel="noopener">GITHUB ↗</a></li>
              <li><a href="${PROFILE_DATA.contact.linkedin}" target="_blank" rel="noopener">LINKEDIN ↗</a></li>
              <li><a href="${PROFILE_DATA.contact.twitter}" target="_blank" rel="noopener">X / TWITTER ↗</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-ticker">
        <div>
          <span>© ${new Date().getFullYear()} ${PROFILE_DATA.name}. ALL RIGHTS RESERVED. EXAGGERATED MINIMALISM.</span>
        </div>
        <div style="display: flex; align-items: center; gap: 1.5rem;">
          <span>COORDINATES: 28.6139° N, 77.2090° E</span>
          <button id="back-to-top" class="back-to-top-btn">[ ↑ TOP ]</button>
        </div>
      </div>
    </div>
  `;
}

export function initNavigationHandlers() {
  // Live Clock updater
  const clockEl = document.getElementById('hud-clock');
  if (clockEl) {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'Asia/Kolkata'
      });
      clockEl.innerText = `${timeStr} IST`;
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

  // Audio Toggle
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundLabel = document.getElementById('sound-state-label');
  if (soundBtn && soundLabel) {
    soundBtn.addEventListener('click', () => {
      const isEnabled = sound.toggle();
      soundLabel.innerText = isEnabled ? '[ AUDIO: ON ]' : '[ AUDIO: OFF ]';
      if (isEnabled) sound.playClick();
    });
  }


  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      mobileBtn.innerHTML = isOpen ? '<span>[ CLOSE ]</span>' : '<span>[ MENU ]</span>';
      sound.playClick();
    });

    // Close mobile nav when clicking any link
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        mobileBtn.innerHTML = '<span>[ MENU ]</span>';
      });
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      sound.playClick();
    });
  }
}
