import { PROFILE_DATA } from './data/profile.js';
import { Router } from './utils/router.js';
import { scrambleText, sound, showToast } from './utils/glitch.js';
import { renderHeader, renderFooter, initNavigationHandlers } from './components/Navigation.js';
import { renderHomePage } from './components/HomePage.js';
import { renderProjectsPage, initProjectsHandlers } from './components/ProjectsPage.js';
import { renderBlogPage, initBlogHandlers } from './components/BlogPage.js';
import { renderContactPage, initContactHandlers } from './components/ContactPage.js';

// DOM Elements
const headerEl = document.getElementById('site-header');
const footerEl = document.getElementById('site-footer');
const modalBackdrop = document.getElementById('modal-container');
const modalBody = document.getElementById('modal-content');
const modalCloseBtn = document.getElementById('modal-close-btn');
const cursor = document.getElementById('custom-cursor');
const cursorDot = document.getElementById('custom-cursor-dot');

// Render Static Shell (Header & Footer)
if (headerEl) headerEl.innerHTML = renderHeader();
if (footerEl) footerEl.innerHTML = renderFooter();
initNavigationHandlers();

// Custom Magnetic Cursor Logic
if (cursor && cursorDot) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  }, { passive: true });

  const loopCursor = () => {
    cursorX += (mouseX - cursorX) * 0.22;
    cursorY += (mouseY - cursorY) * 0.22;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(loopCursor);
  };
  loopCursor();

  const bindHoverElements = () => {
    const interactives = document.querySelectorAll('a, button, .project-item, .article-card, input, textarea, select');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovering');
      });
    });
  };

  // Bind on route changes
  window.addEventListener('routechange', () => {
    setTimeout(bindHoverElements, 50);
  });
  bindHoverElements();
}

// Glitch Text Scramble - strictly focused on brand logo, no continuous or distracting scrambles
function bindGlitchScramblers() {
  const brandLogo = document.querySelector('.brand-logo');
  if (brandLogo && !brandLogo._boundScramble) {
    brandLogo._boundScramble = true;
    brandLogo.addEventListener('mouseenter', () => {
      const targetText = brandLogo.getAttribute('data-text') || 'SALMAN';
      const logoText = brandLogo.querySelector('span');
      if (logoText) scrambleText(logoText, targetText, 25);
    });
  }
}

// Modal Handler (For Project Deep Dive & Article Reading)
function openModal(type, data) {
  if (!modalBackdrop || !modalBody) return;

  sound.playClick();
  modalBackdrop.style.display = 'flex';
  const modalDialog = document.querySelector('.modal-dialog');
  if (modalDialog) modalDialog.scrollTop = 0;
  setTimeout(() => modalBackdrop.classList.add('open'), 10);
  document.body.style.overflow = 'hidden';

  if (type === 'project') {
    modalBody.innerHTML = `
      <div>
        <div class="section-label">PROJECT SPEC // ${data.index}</div>
        <h2 class="modal-project-title glitch-text" data-text="${data.title}">${data.title}</h2>
        <p style="font-size: 1.2rem; color: var(--text-secondary); margin-bottom: 2rem;">
          ${data.tagline}
        </p>

        <table class="modal-spec-table">
          <tbody>
            <tr>
              <td>YEAR / STAGE</td>
              <td>${data.year} // PRODUCTION DEPLOYED</td>
            </tr>
            <tr>
              <td>CLIENT / DOMAIN</td>
              <td>${data.client}</td>
            </tr>
            <tr>
              <td>PERFORMANCE METRICS</td>
              <td style="color: #00ff66;">${data.metrics}</td>
            </tr>
            <tr>
              <td>TECHNOLOGY STACK</td>
              <td>${data.stack.join(' • ')}</td>
            </tr>
          </tbody>
        </table>

        <div class="modal-prose">
          <h3 class="modal-section-h3">// ARCHITECTURAL CHALLENGE</h3>
          <p>${data.deepDive.problem}</p>

          <h3 class="modal-section-h3">// SYSTEM TOPOLOGY</h3>
          <pre class="code-block-minimal"><code>${data.deepDive.architecture}</code></pre>

          <h3 class="modal-section-h3">// ENGINEERING SOLUTION & RESOLUTION</h3>
          <p>${data.deepDive.solution}</p>

          <h3 class="modal-section-h3">// VERIFIED PRODUCTION IMPACT</h3>
          <p><strong>${data.deepDive.impact}</strong></p>
        </div>

        <div style="display: flex; gap: 1.5rem; margin-top: 3.5rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle);">
          <a href="${data.githubUrl}" target="_blank" rel="noopener" class="btn-monochrome">
            <span>GITHUB SOURCE ↗</span>
          </a>
          <a href="${data.liveUrl}" target="_blank" rel="noopener" class="btn-outline">
            <span>LIVE INTERFACE ↗</span>
          </a>
        </div>
      </div>
    `;
  } else if (type === 'article') {
    modalBody.innerHTML = `
      <article>
        <div class="section-label">JOURNAL ESSAY // ${data.index}</div>
        <h2 class="modal-project-title glitch-text" data-text="${data.title}">${data.title}</h2>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); margin-bottom: 2.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); display: flex; gap: 2rem;">
          <span>DATE: ${data.date}</span>
          <span>TAG: ${data.category}</span>
          <span>ESTIMATED: ${data.readTime}</span>
        </div>

        <div class="modal-prose">
          ${formatMarkdownProse(data.content)}
        </div>

        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">END OF TRANSMISSION</span>
          <button id="modal-reader-close" class="btn-outline">[ RETURN TO JOURNAL ]</button>
        </div>
      </article>
    `;

    const readerClose = document.getElementById('modal-reader-close');
    if (readerClose) readerClose.addEventListener('click', closeModal);
  }

  // Bind glitch scrambler on modal titles
  const modalGlitch = modalBody.querySelector('.glitch-text');
  if (modalGlitch) {
    scrambleText(modalGlitch, modalGlitch.dataset.text, 25);
  }
}

function closeModal() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    modalBackdrop.style.display = 'none';
    if (modalBody) modalBody.innerHTML = '';
  }, 250);
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
    closeModal();
  }
});

// Helper to format article markdown cleanly
function formatMarkdownProse(md) {
  return md
    .split('\n\n')
    .map(block => {
      block = block.trim();
      if (!block) return '';
      if (block.startsWith('### ')) {
        return `<h3 class="modal-section-h3">${block.replace('### ', '')}</h3>`;
      }
      if (block.startsWith('> ')) {
        return `<blockquote style="border-left: 2px solid #ffffff; padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: #ffffff;">${block.replace('> ', '')}</blockquote>`;
      }
      if (block.startsWith('```')) {
        const code = block.replace(/```[a-z]*\n?/g, '').trim();
        return `<pre class="code-block-minimal"><code>${escapeHtml(code)}</code></pre>`;
      }
      if (block.startsWith('1. ') || block.startsWith('- ')) {
        const items = block.split('\n').map(item => `<li>${item.replace(/^(\d+\.|\-)\s+/, '')}</li>`).join('');
        return `<ul style="padding-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8;">${items}</ul>`;
      }
      return `<p>${block}</p>`;
    })
    .join('');
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Router Initializer
const routes = {
  home: () => renderHomePage(),
  projects: () => renderProjectsPage(),
  blog: () => renderBlogPage(),
  contact: () => renderContactPage()
};

const router = new Router(routes);

// Route Change Lifecycle
window.addEventListener('routechange', (e) => {
  const route = e.detail.route;

  // Update Nav Active states
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.route === route) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Attach page-specific interactions
  if (route === 'home') {
    // Hero background photo hover animation
    const heroWrap = document.querySelector('.hero-wrapper');
    if (heroWrap) {
      heroWrap.addEventListener('mouseenter', () => heroWrap.classList.add('hero-hovered'));
      heroWrap.addEventListener('mouseleave', () => heroWrap.classList.remove('hero-hovered'));
    }

    // Project cards on home click
    document.querySelectorAll('.project-item').forEach(item => {
      item.addEventListener('click', () => {
        const pid = item.dataset.projectId;
        const project = PROFILE_DATA.projects.find(p => p.id === pid);
        if (project) openModal('project', project);
      });
    });

    // Article cards on home click
    document.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', () => {
        const aid = card.dataset.articleId;
        const article = PROFILE_DATA.articles.find(a => a.id === aid);
        if (article) openModal('article', article);
      });
    });
  } else if (route === 'projects') {
    initProjectsHandlers((type, data) => openModal(type, data));
  } else if (route === 'blog') {
    initBlogHandlers((type, data) => openModal(type, data));
  } else if (route === 'contact') {
    initContactHandlers();
  }

  bindGlitchScramblers();
});

// Initialize Router on boot
router.init();
