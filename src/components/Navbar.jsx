import { useEffect, useRef, useState } from 'react';
import { useScroll } from '../context/ScrollContext';
import { CLINIC, WA_DEFAULT } from '../config';
import { NAV_LINKS } from '../data';
import Icon from '../lib/Icons';
import Button from './Button';

export default function Navbar() {
  const { onScroll, scrollTo, openBooking, loaded, lockScroll, unlockScroll } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    return onScroll((y, limit) => {
      setScrolled(y > 32);
      setProgress(Math.min(1, y / limit));
      const goingDown = y > lastY.current + 4;
      const goingUp = y < lastY.current - 4;
      if (y > 480 && goingDown) setHidden(true);
      else if (goingUp || y <= 480) setHidden(false);
      lastY.current = y;
    });
  }, [onScroll]);

  // hold the page still under the mobile menu (and put it back on close)
  useEffect(() => {
    if (!menuOpen) return;
    lockScroll();
    return unlockScroll;
  }, [menuOpen, lockScroll, unlockScroll]);

  // Esc closes; so does growing past the burger breakpoint — otherwise a
  // rotate/resize would leave an off-screen menu holding the scroll lock.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const mq = window.matchMedia('(min-width: 961px)');
    const onWide = (e) => { if (e.matches) setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onWide);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onWide);
    };
  }, [menuOpen]);

  const go = (target) => (e) => {
    e.preventDefault();
    if (!menuOpen) {
      scrollTo(target);
      return;
    }
    setMenuOpen(false);
    // let the panel start sliding clear before the page moves underneath it
    setTimeout(() => scrollTo(target), 260);
  };

  return (
    <>
      <header
        className={`nav ${scrolled ? 'is-scrolled' : ''} ${hidden && !menuOpen ? 'is-hidden' : ''} ${loaded ? 'is-in' : ''}`}
      >
        <div className="nav__inner">
          <a className="nav__brand" href="#top" onClick={go('#top')} aria-label={`${CLINIC.name} — home`} data-cursor="hover">
            <span className="nav__mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" width="38" height="38">
                <rect width="64" height="64" rx="16" fill="var(--teal, #059669)" />
                <circle cx="32" cy="32" r="23" fill="#FFFFFF" />
                <path d="M32 15 C24 23 20 29 20 35 C20 42 25 47 32 47 C39 47 44 42 44 35 C44 29 40 23 32 15 Z" fill="var(--teal, #059669)" />
                <path d="M32 23 C32 23 27 31 27 36 C27 39 29.2 41 32 41 C34.8 41 37 39 37 36 C37 31 32 23 32 23 Z" fill="var(--gold, #D97706)" />
              </svg>
            </span>
            <span className="nav__brand-txt">
              <strong>Care &amp; Cure</strong>
              <em>Homoeopathic Clinic</em>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.target} href={l.target} onClick={go(l.target)} className="nav__link" data-cursor="hover">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="nav__phone" href={CLINIC.phoneHref} data-cursor="hover" aria-label={`Call ${CLINIC.phoneDisplay}`}>
              <Icon name="phone" size={16} />
              <span>{CLINIC.phoneDisplay}</span>
            </a>
            <a className="nav__wa" href={WA_DEFAULT} target="_blank" rel="noreferrer" data-cursor="hover" aria-label={`WhatsApp ${CLINIC.name}`}>
              <Icon name="whatsapp" size={17} />
              <span>WhatsApp</span>
            </a>
            <Button variant="primary" className="btn--sm nav__cta" onClick={() => openBooking()} icon="calendar">
              Book appointment
            </Button>
            <button
              className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label="Menu"
            >
              <span /><span />
            </button>
          </div>
        </div>
        <span className="nav__progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      </header>

      {/* Mobile full-screen menu */}
      <div className={`menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="menu__links" aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <a key={l.target} href={l.target} onClick={go(l.target)} style={{ '--i': i }} className="menu__link">
              <span>{l.label}</span>
              <Icon name="arrow" size={22} />
            </a>
          ))}
        </nav>
        <div className="menu__foot">
          <button className="btn btn--primary btn--block" onClick={() => { setMenuOpen(false); openBooking(); }}>
            <span className="btn__solo">Book appointment</span>
            <span className="btn__ic"><Icon name="calendar" size={16} strokeWidth={2} /></span>
          </button>
          <div className="menu__row">
            <a className="btn btn--ghost btn--half" href={CLINIC.phoneHref}>
              <span className="btn__solo">Call</span>
              <span className="btn__ic"><Icon name="phone" size={15} strokeWidth={2} /></span>
            </a>
            <a className="btn btn--wa btn--half" href={WA_DEFAULT} target="_blank" rel="noreferrer">
              <span className="btn__solo">WhatsApp</span>
              <span className="btn__ic"><Icon name="whatsapp" size={15} strokeWidth={2} /></span>
            </a>
          </div>
          <p className="menu__hours">Open today · 8:00 AM – 9:00 PM</p>
        </div>
      </div>
    </>
  );
}
