import { useScroll } from '../context/ScrollContext';
import { CLINIC } from '../config';
import { NAV_LINKS, SERVICES } from '../data';
import Icon from '../lib/Icons';

export default function Footer() {
  const { scrollTo, openBooking } = useScroll();
  const go = (target) => (e) => { e.preventDefault(); scrollTo(target); };

  return (
    <footer className="footer" data-scroll-section>
      <div className="container">
        <div className="footer__top">
          <p className="footer__tag" data-reveal>Care that puts you at ease.</p>
          <h2 className="footer__wordmark" aria-hidden="true">
            {CLINIC.name.split('').map((ch, i) => (
              <span key={i} style={{ '--i': i }}>{ch === ' ' ? ' ' : ch}</span>
            ))}
          </h2>
        </div>

        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <p>
              A multi-specialty clinic in {CLINIC.city} where appointments run
              on time and doctors listen first.
            </p>
            <button className="btn btn--primary btn--sm" onClick={() => openBooking()} data-cursor="hover">
              <span className="btn__solo">Book appointment</span>
              <span className="btn__ic"><Icon name="calendar" size={14} strokeWidth={2} /></span>
            </button>
          </div>

          <nav className="footer__col" aria-label="Explore">
            <h4>Explore</h4>
            {NAV_LINKS.map((l) => (
              <a key={l.target} href={l.target} onClick={go(l.target)} data-cursor="hover">{l.label}</a>
            ))}
          </nav>

          <nav className="footer__col" aria-label="Departments">
            <h4>Departments</h4>
            {SERVICES.slice(0, 6).map((s) => (
              <a key={s.id} href="#services" onClick={go('#services')} data-cursor="hover">{s.title}</a>
            ))}
          </nav>

          <div className="footer__col" aria-label="Contact">
            <h4>Contact</h4>
            <p>{CLINIC.address}</p>
            <a href={CLINIC.phoneHref} data-cursor="hover">{CLINIC.phoneDisplay}</a>
            <a href={`mailto:${CLINIC.email}`} data-cursor="hover">{CLINIC.email}</a>
            <p className="footer__hours">Mon–Sat 8 AM – 9 PM · Sun 9 AM – 1 PM</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 {CLINIC.name}. All rights reserved.</p>
          <p className="footer__legal">
            <a href="#top" onClick={(e) => e.preventDefault()} data-cursor="hover">Privacy</a>
            <a href="#top" onClick={(e) => e.preventDefault()} data-cursor="hover">Terms</a>
          </p>
          <button className="footer__up round-btn" onClick={() => scrollTo('#top', { offset: 0 })} aria-label="Back to top" data-cursor="hover">
            <Icon name="arrowR" size={16} strokeWidth={2} className="rot--90" />
          </button>
        </div>
      </div>
    </footer>
  );
}
