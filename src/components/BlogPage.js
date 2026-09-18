import { PROFILE_DATA } from '../data/profile.js';

let activeBlogCategory = 'ALL';

export function renderBlogPage() {
  const filtered = activeBlogCategory === 'ALL'
    ? PROFILE_DATA.articles
    : PROFILE_DATA.articles.filter(a => a.category === activeBlogCategory);

  return `
    <div class="view-section">
      <div class="container">
        <!-- Header -->
        <div class="blog-header">
          <div class="section-label">WRITING // INDEX 03</div>
          <h1 class="blog-title glitch-text" data-text="ENGINEERING JOURNAL">
            ENGINEERING JOURNAL
          </h1>
          <p style="color: var(--text-secondary); max-width: 680px; font-size: 1.1rem; line-height: 1.5; margin-top: 1rem;">
            Post-mortems, architectural blueprints, lessons learned across 8+ years of production engineering, and essays on radical minimalism.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="filter-bar">
          ${['ALL', 'ENGINEERING', 'DESIGN', 'CAREER']
            .map(
              cat => `
            <button class="filter-btn blog-filter-btn ${activeBlogCategory === cat ? 'active' : ''}" data-category="${cat}">
              [ ${cat} ]
            </button>
          `
            )
            .join('')}
        </div>

        <!-- Articles Grid -->
        <div class="blog-grid" id="blog-container">
          ${filtered
            .map(
              article => `
            <article class="article-card" data-article-id="${article.id}">
              <div>
                <div class="article-meta">
                  <span>[ ${article.category} ]</span>
                  <span>${article.readTime}</span>
                </div>
                <h2 class="article-headline glitch-hover" data-text="${article.title}">${article.title}</h2>
                <p class="article-excerpt">${article.summary}</p>
              </div>
              <div class="article-footer">
                <span>// ${article.date}</span>
                <span style="text-decoration: underline;">READ ESSAY ↗</span>
              </div>
            </article>
          `
            )
            .join('')}
        </div>
      </div>
    </div>
  `;
}

export function initBlogHandlers(onOpenModal) {
  // Category Filtering
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      activeBlogCategory = e.target.dataset.category;
      const routerContainer = document.getElementById('view-container');
      if (routerContainer) {
        routerContainer.innerHTML = renderBlogPage();
        initBlogHandlers(onOpenModal);
      }
    });
  });

  // Article Click to open reader modal
  const articleCards = document.querySelectorAll('.article-card');
  articleCards.forEach(card => {
    card.addEventListener('click', () => {
      const aid = card.dataset.articleId;
      const article = PROFILE_DATA.articles.find(a => a.id === aid);
      if (article && typeof onOpenModal === 'function') {
        onOpenModal('article', article);
      }
    });
  });
}
