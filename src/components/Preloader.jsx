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
            <rect width="64" height="64" rx="16" fill="var(--oviam-blue, #1D357D)" />
            <circle cx="32" cy="32" r="23" fill="#FFFFFF" />
            <rect x="27" y="15" width="10" height="34" rx="3" fill="var(--oviam-red, #DC2626)" />
            <rect x="15" y="27" width="34" height="10" rx="3" fill="var(--oviam-red, #DC2626)" />
            <circle cx="32" cy="32" r="6" fill="var(--oviam-gold, #F5A623)" />
          </svg>
        </span>
        <span className="preloader__name">{CLINIC.name}</span>
        <span className="preloader__tag">{CLINIC.tagline}</span>
      </div>
      <span className="preloader__num" ref={numRef}>0</span>
    </div>
  );
}
