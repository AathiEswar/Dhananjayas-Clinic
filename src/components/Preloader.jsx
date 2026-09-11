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
          <svg viewBox="0 0 80 80" width="60" height="60" aria-hidden="true">
            <rect width="80" height="80" rx="20" fill="var(--bg-soft, #F2EFE9)" />
            <circle cx="40" cy="40" r="26" fill="none" stroke="var(--gold, #C69255)" strokeWidth="2.5" opacity="0.4" />
            <path d="M40 12 V68" stroke="var(--teal, #0F4C3A)" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="40" cy="12" r="3.5" fill="var(--gold, #C69255)" />
            <path d="M40 40 C32 26 20 34 26 48 C32 58 40 40 40 40 Z" fill="var(--teal, #0F4C3A)" opacity="0.85" />
            <path d="M40 40 C48 26 60 34 54 48 C48 58 40 40 40 40 Z" fill="var(--teal, #0F4C3A)" opacity="0.85" />
            <circle cx="40" cy="40" r="5" fill="#FFFFFF" />
            <circle cx="40" cy="40" r="2.5" fill="var(--gold, #C69255)" />
          </svg>
        </span>
        <h1 className="preloader__name">
          <span>MOUNAA HEALTH</span>
          <span>CENTER · Kannivakkam</span>
        </h1>
        <span className="preloader__tag">{CLINIC.tagline}</span>
      </div>
      <span className="preloader__num" ref={numRef}>0</span>
    </div>
  );
}
