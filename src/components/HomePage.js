import { PROFILE_DATA } from '../data/profile.js';
import { renderTerminalMarkup } from './Terminal.js';

export function renderHomePage() {
  const featuredProjects = PROFILE_DATA.projects.slice(0, 2);
  const featuredArticles = PROFILE_DATA.articles.slice(0, 2);

  return `
    <div class="view-section hero-wrapper">
      <!-- Atmospheric Background Photo: Blurred B&W -> Animated Living Color on Hover -->
      <div class="hero-bg-photo-wrap" aria-hidden="true">
        <img src="./assets/profile-color.jpg" alt="" class="hero-bg-photo" />
        <div class="hero-bg-vignette"></div>
      </div>

      <div class="container hero-content-container">
        <!-- Hero Metadata Bar -->
        <div class="hero-meta-bar">
          <div>// SPECIFICATION: PORTFOLIO PROFILE</div>
          <div class="glitch-text" data-text="${PROFILE_DATA.status}">[ ${PROFILE_DATA.status} ]</div>
          <div>LOC: ${PROFILE_DATA.location}</div>
        </div>

        <!-- Exaggerated Hero Statement -->
        <h1 class="hero-statement">
          <span class="hero-row">CREATIVE</span>
          <span class="hero-row outline-text glitch-text" data-text="ENGINEER">ENGINEER</span>
          <span class="hero-row">& ARCHITECT</span>
        </h1>

        <!-- Monograph Sub-Grid -->
        <div class="hero-sub-grid">
          <p class="hero-intro-text">
            <strong>${PROFILE_DATA.name}</strong> is a software architect shaping zero-latency distributed engines and sculpting <strong>exaggerated minimalist</strong> digital surfaces. Eliminating cognitive clutter to let engineering purity speak.
          </p>
          <div class="hero-actions">
            <a href="#projects" class="btn-monochrome glitch-hover" data-text="EXPLORE PROJECTS ↗">
              <span>EXPLORE PROJECTS</span>
              <span>↗</span>
            </a>
            <a href="#contact" class="btn-outline">
              <span>INITIATE CONTACT</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Metrics Strip -->
    <div class="container">
      <div class="metrics-strip">
        ${PROFILE_DATA.metrics
          .map(
            (m) => `
          <div class="metric-card">
            <div class="metric-label">// ${m.label}</div>
            <div class="metric-value glitch-text" data-text="${m.value}">${m.value}</div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>

    <!-- Identity & Interactive Terminal Section -->
    <section class="view-section" style="padding-bottom: 2rem;">
      <div class="container">
        <div class="section-label">00 // IDENTITY & SYSTEM TELEMETRY</div>
        <div class="identity-grid">
          <!-- Portrait Frame -->
          <div class="portrait-card">
            <div class="portrait-meta-top">
              <span>[ FIG. 01 // ARCHITECT_PORTRAIT ]</span>
              <span>ID: SALMAN_01</span>
            </div>
            <div class="portrait-frame">
              <img src="./assets/profile-color.jpg" alt="${PROFILE_DATA.name} - Software Architect & Creative Technologist" class="portrait-img" />
              <span class="portrait-corner-tl">+</span>
              <span class="portrait-corner-tr">+</span>
              <span class="portrait-corner-bl">+</span>
              <span class="portrait-corner-br">+</span>
            </div>
            <div class="portrait-meta-bottom">
              <span>${PROFILE_DATA.name} // ARCHITECT</span>
              <span>28.6139° N, 77.2090° E</span>
            </div>
          </div>

          <!-- Interactive Terminal -->
          <div class="terminal-wrapper">
            ${renderTerminalMarkup()}
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy & Core Engineering Architecture -->
    <section class="view-section" style="padding-top: 2rem;">
      <div class="container">
        <div class="section-label">01 // CORE PHILOSOPHY</div>
        <div class="spec-grid">
          ${PROFILE_DATA.philosophies
            .map(
              (p) => `
            <div class="spec-column">
              <span class="spec-index">[ ${p.index} ]</span>
              <h2 class="spec-title glitch-hover" data-text="${p.title}">${p.title}</h2>
              <p class="spec-desc">${p.description}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- Featured Works Spotlight -->
    <section class="view-section" style="padding-top: 0;">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem;">
          <div>
            <div class="section-label">02 // SELECTED WORKS</div>
            <h2 style="font-family: var(--font-display); font-size: var(--font-h1); font-weight: 800; text-transform: uppercase; letter-spacing: -0.03em;">
              FEATURED SYSTEMS
            </h2>
          </div>
          <a href="#projects" class="btn-outline" style="padding: 0.75rem 1.25rem;">
            <span>ALL PROJECTS [0${PROFILE_DATA.projects.length}] ↗</span>
          </a>
        </div>

        <div class="projects-list">
          ${featuredProjects
            .map(
              (project) => `
            <div class="project-item" data-project-id="${project.id}">
              <div class="project-num">[ ${project.index} ]</div>
              <div class="project-info-main">
                <div class="project-name glitch-hover" data-text="${project.title}">${project.title}</div>
                <p class="project-snippet">${project.tagline}</p>
              </div>
              <div class="project-tags">
                ${project.stack.slice(0, 3).map((t) => `<span class="tag-pill">${t}</span>`).join('')}
              </div>
              <div class="project-cta">
                <span>VIEW SPEC ↗</span>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- Selected Journal Excerpts -->
    <section class="view-section" style="padding-top: 0;">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem;">
          <div>
            <div class="section-label">03 // ENGINEERING JOURNAL</div>
            <h2 style="font-family: var(--font-display); font-size: var(--font-h1); font-weight: 800; text-transform: uppercase; letter-spacing: -0.03em;">
              RECENT THINKING
            </h2>
          </div>
          <a href="#blog" class="btn-outline" style="padding: 0.75rem 1.25rem;">
            <span>ALL ARTICLES [0${PROFILE_DATA.articles.length}] ↗</span>
          </a>
        </div>

        <div class="blog-grid">
          ${featuredArticles
            .map(
              (article) => `
            <article class="article-card" data-article-id="${article.id}">
              <div>
                <div class="article-meta">
                  <span>[ ${article.category} ]</span>
                  <span>${article.readTime}</span>
                </div>
                <h3 class="article-headline glitch-hover" data-text="${article.title}">${article.title}</h3>
                <p class="article-excerpt">${article.summary}</p>
              </div>
              <div class="article-footer">
                <span>${article.date}</span>
                <span>READ ESSAY ↗</span>
              </div>
            </article>
          `
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- Quick Contact Hook -->
    <section class="view-section" style="padding-top: 0; padding-bottom: 6rem;">
      <div class="container">
        <div style="border: 1px solid var(--border-subtle); padding: clamp(2.5rem, 5vw, 4rem); background: var(--bg-surface); display: flex; flex-direction: column; gap: 2rem;">
          <div class="section-label" style="margin-bottom: 0;">04 // DIRECT CHANNEL</div>
          <div style="font-family: var(--font-display); font-size: var(--font-giant); font-weight: 900; line-height: 0.9; text-transform: uppercase; letter-spacing: -0.04em;">
            HAVE A SYSTEM TO CONSTRUCT?
          </div>
          <p style="color: var(--text-secondary); max-width: 680px; font-size: 1.05rem;">
            Available for architectural consulting, production scaling challenges, and bespoke web monographs.
          </p>
          <div>
            <a href="#contact" class="btn-monochrome glitch-hover" data-text="TRANSMIT MESSAGE ↗">
              <span>TRANSMIT MESSAGE</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
