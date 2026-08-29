import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { prefersReducedMotion } from '../context/ScrollContext';
import { CLINIC } from '../config';

/** Survives remounts so we never schedule a second full intro after one has finished. */
let finishedThisLoad = false;

/** Brief branded preloader — counts up, then wipes away. Keeps it under ~1.6s. */
export default function Preloader({ onComplete }) {
  const rootRef = useRef(null);
  const numRef = useRef(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const finish = () => {
      if (finishedThisLoad) {
        onCompleteRef.current?.();
        return;
      }
      finishedThisLoad = true;
      onCompleteRef.current?.();
    };

    /* Already finished this page load — stay gone (handles stale remounts). */
    if (finishedThisLoad) {
      if (rootRef.current) gsap.set(rootRef.current, { display: 'none', autoAlpha: 0 });
      finish();
      return;
    }

    if (prefersReducedMotion()) {
      const t = setTimeout(() => {
        gsap.set(rootRef.current, { autoAlpha: 0, display: 'none' });
        finish();
      }, 250);
      return () => clearTimeout(t);
    }

    const ctx = gsap.context(() => {
      const obj = { v: 0 };
      const tl = gsap.timeline({ onComplete: finish });
      tl.to(obj, {
        v: 100,
        duration: 0.95,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (numRef.current) numRef.current.textContent = Math.round(obj.v);
        },
      })
        .to('.preloader__inner', { yPercent: -18, autoAlpha: 0, duration: 0.45, ease: 'power2.in' }, '-=0.1')
        .to(rootRef.current, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.85,
          ease: 'expo.inOut',
        }, '-=0.15')
        .set(rootRef.current, { display: 'none' });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="preloader" ref={rootRef} aria-hidden="true">
      <div className="preloader__inner">
        <span className="preloader__mark">
          <svg viewBox="0 0 64 64" width="52" height="52" aria-hidden="true">
            <rect width="64" height="64" rx="16" fill="var(--teal, #059669)" />
            <circle cx="32" cy="32" r="23" fill="#FFFFFF" />
            <path d="M32 15 C24 23 20 29 20 35 C20 42 25 47 32 47 C39 47 44 42 44 35 C44 29 40 23 32 15 Z" fill="var(--teal, #059669)" />
            <path d="M32 23 C32 23 27 31 27 36 C27 39 29.2 41 32 41 C34.8 41 37 39 37 36 C37 31 32 23 32 23 Z" fill="var(--gold, #D97706)" />
          </svg>
        </span>
        <span className="preloader__name">{CLINIC.name}</span>
        <span className="preloader__tag">{CLINIC.tagline}</span>
      </div>
      <span className="preloader__num" ref={numRef}>0</span>
    </div>
  );
}
