import { useEffect, useRef } from 'react';
import { useScroll, useAnim, gsap, prefersReducedMotion, skipReveal } from '../context/ScrollContext';

/**
 * <MaskText/> — award-style masked word reveal.
 * Splits text into per-word masks and staggers them up on scroll
 * (or when `play` turns true, e.g. after the preloader).
 * Disabled on viewports ≤1024px so copy stays visible.
 *
 *   segments: [{ t: 'Care that puts you ', em: false }, { t: 'at ease.', em: true }]
 */
export function MaskText({
  as: Tag = 'h2',
  segments,
  text,
  className = '',
  play,            // undefined → reveal on scroll; boolean → manual control
  delay = 0,
  stagger = 0.045,
  ...rest
}) {
  const ref = useRef(null);
  const { ready } = useScroll();
  const segs = segments || [{ t: text || '' }];

  useEffect(() => {
    const el = ref.current;
    if (!ready || !el || skipReveal()) return;

    const words = el.querySelectorAll('.w-in');
    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 120, rotate: 2.5 });
      const vars = {
        yPercent: 0,
        rotate: 0,
        duration: 1.1,
        ease: 'power4.out',
        stagger,
        delay,
      };
      if (play === undefined) {
        gsap.to(words, {
          ...vars,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      } else if (play) {
        gsap.to(words, vars);
      }
    }, el);
    return () => ctx.revert();
  }, [ready, play]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Tag ref={ref} className={`mask-text ${className}`} {...rest}>
      {segs.map((seg, si) => {
        const words = seg.t.split(' ').filter(Boolean);
        return words.map((w, wi) => (
          <span key={`${si}-${wi}`}>
            <span className="w">
              <span className={`w-in${seg.em ? ' em' : ''}`}>{w}</span>
            </span>{' '}
          </span>
        ));
      })}
    </Tag>
  );
}

/** <Counter/> — animated number that counts up when scrolled into view. */
export function Counter({ to, suffix = '', decimals = 0, duration = 1.6, className = '' }) {
  const ref = useRef(null);
  const scope = useRef(null);
  const staticValue = skipReveal();

  useAnim(scope, (gsap) => {
    if (skipReveal()) return;
    const obj = { v: 0 };
    gsap.to(obj, {
      v: to,
      duration,
      ease: 'power2.out',
      scrollTrigger: { trigger: scope.current, start: 'top 90%', once: true },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = obj.v.toFixed(decimals);
      },
    });
  });

  return (
    <span ref={scope} className={`counter ${className}`}>
      <span ref={ref}>{staticValue || prefersReducedMotion() ? to : 0}</span>
      <span className="counter__suffix">{suffix}</span>
    </span>
  );
}

/**
 * <Magnetic/> — element gently follows the pointer (desktop only).
 * Uses gsap.quickTo → transform-only, zero layout thrash.
 */
export function Magnetic({ children, strength = 0.32, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.9, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.9, ease: 'elastic.out(1, 0.4)' });

    const move = (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * strength);
      yTo((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const leave = () => { xTo(0); yTo(0); };

    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`magnetic ${className}`}>
      {children}
    </div>
  );
}
