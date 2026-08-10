import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../context/ScrollContext';

/**
 * Custom cursor — a dot + trailing ring. Desktop fine-pointers only.
 * gsap.quickTo keeps it on the compositor (transform only, one listener).
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    document.documentElement.classList.add('has-cursor');

    const dx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power2.out' });
    const dy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power2.out' });
    const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

    let shown = false;
    const move = (e) => {
      if (!shown) {
        shown = true;
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.25 });
      }
      dx(e.clientX); dy(e.clientY);
      rx(e.clientX); ry(e.clientY);
    };

    const INTERACTIVE = 'a, button, [data-cursor="hover"], input, select, textarea, [role="button"]';
    const over = (e) => {
      if (e.target.closest?.(INTERACTIVE)) {
        gsap.to(ring, { scale: 1.9, backgroundColor: 'rgba(15,76,66,0.08)', duration: 0.3 });
        gsap.to(dot, { scale: 0.4, duration: 0.3 });
      }
    };
    const out = (e) => {
      if (e.target.closest?.(INTERACTIVE)) {
        gsap.to(ring, { scale: 1, backgroundColor: 'rgba(15,76,66,0)', duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      }
    };
    const down = () => gsap.to(ring, { scale: 0.85, duration: 0.2 });
    const up = () => gsap.to(ring, { scale: 1, duration: 0.3 });
    const leave = () => { shown = false; gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3 }); };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    document.documentElement.addEventListener('mouseleave', leave);

    return () => {
      document.documentElement.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
