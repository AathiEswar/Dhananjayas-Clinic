import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../context/ScrollContext';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    // 1. Force unlock any scroll lock so transitions are never stuck
    document.documentElement.classList.remove('is-scroll-locked', 'is-menu-open');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    // 2. If navigating without hash, jump synchronously to absolute top (0, 0)
    if (!hash) {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch {
        window.scrollTo(0, 0);
      }
    } else {
      // If hash present, scroll smoothly to target element
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }

    // 3. Refresh ScrollTrigger for new page measurements
    const triggerTimer = setTimeout(() => {
      ScrollTrigger?.refresh?.();
    }, 40);

    return () => clearTimeout(triggerTimer);
  }, [pathname, hash]);

  return null;
}
