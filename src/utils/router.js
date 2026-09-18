/**
 * CLIENT-SIDE LIGHTWEIGHT ROUTER
 * Handles seamless page view transitions between Home, Projects, Blog, and Contact
 */

export class Router {
  constructor(routes, containerId = 'view-container') {
    this.routes = routes;
    this.container = document.getElementById(containerId);
    this.currentRoute = null;

    window.addEventListener('hashchange', () => this.handleHashChange());
  }

  init() {
    this.handleHashChange();
  }

  handleHashChange() {
    const rawHash = window.location.hash.slice(1);
    const [path] = rawHash.split('?');
    const targetRoute = path.toLowerCase().trim() || 'home';

    this.navigate(targetRoute, false);
  }

  navigate(routeName, updateHash = true) {
    if (!this.routes[routeName]) {
      routeName = 'home';
    }

    if (updateHash) {
      window.location.hash = routeName === 'home' ? '' : `#${routeName}`;
    }

    this.currentRoute = routeName;

    // Trigger subtle glitch fade transition
    if (this.container) {
      this.container.style.opacity = '0';
      this.container.style.transform = 'translateY(6px)';
      this.container.style.transition = 'opacity 180ms ease, transform 180ms ease';

      setTimeout(() => {
        const renderFn = this.routes[routeName];
        if (typeof renderFn === 'function') {
          this.container.innerHTML = renderFn();
        }

        window.scrollTo({ top: 0, behavior: 'instant' });

        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';

        // Dispatch route changed event
        window.dispatchEvent(new CustomEvent('routechange', {
          detail: { route: routeName }
        }));
      }, 140);
    }
  }
}
