import { PROFILE_DATA } from '../data/profile.js';

let activeCategory = 'ALL';

export function renderProjectsPage() {
  const filtered = activeCategory === 'ALL'
    ? PROFILE_DATA.projects
    : PROFILE_DATA.projects.filter(p => p.category === activeCategory);

  return `
    <div class="view-section">
      <div class="container">
        <!-- Header -->
        <div class="projects-header">
          <div class="section-label">ARCHIVE // INDEX 02</div>
          <h1 class="projects-title glitch-text" data-text="ENGINEERED SYSTEMS">
            ENGINEERED SYSTEMS
          </h1>
          <p style="color: var(--text-secondary); max-width: 680px; font-size: 1.1rem; line-height: 1.5; margin-top: 1rem;">
            A curated index of production-grade distributed engines, performance kernels, and experimental minimalist web tools built between 2024 and 2026.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="filter-bar">
          ${['ALL', 'SYSTEMS', 'CREATIVE TECH']
            .map(
              cat => `
            <button class="filter-btn ${activeCategory === cat ? 'active' : ''}" data-category="${cat}">
              [ ${cat} ]
            </button>
          `
            )
            .join('')}
        </div>

        <!-- Projects Index List -->
        <div class="projects-list" id="projects-container">
          ${filtered
            .map(
              project => `
            <div class="project-item" data-project-id="${project.id}">
              <div class="project-num">[ ${project.index} ]</div>
              <div class="project-info-main">
                <div class="project-name glitch-hover" data-text="${project.title}">${project.title}</div>
                <p class="project-snippet">${project.tagline}</p>
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #00ff66; margin-top: 0.25rem;">
                  METRICS: ${project.metrics}
                </div>
              </div>
              <div class="project-tags">
                ${project.stack.map(tag => `<span class="tag-pill">${tag}</span>`).join('')}
              </div>
              <div class="project-cta">
                <span class="btn-outline" style="padding: 0.6rem 1rem; font-size: 0.72rem;">INSPECT SPEC ↗</span>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </div>
  `;
}

export function initProjectsHandlers(onOpenModal) {
  // Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeCategory = e.target.dataset.category;
      const routerContainer = document.getElementById('view-container');
      if (routerContainer) {
        routerContainer.innerHTML = renderProjectsPage();
        initProjectsHandlers(onOpenModal);
      }
    });
  });

  // Project Click to open detailed modal
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      const pid = item.dataset.projectId;
      const project = PROFILE_DATA.projects.find(p => p.id === pid);
      if (project && typeof onOpenModal === 'function') {
        onOpenModal('project', project);
      }
    });
  });
}
