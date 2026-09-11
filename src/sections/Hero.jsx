import { useRef } from 'react';
import { useScroll, useAnim, skipReveal } from '../context/ScrollContext';
import { CLINIC } from '../config';
import { SPECIALTIES_TICKER, DOCTORS } from '../data';
import Button from '../components/Button';
import Marquee from '../components/Marquee';
import Icon from '../lib/Icons';

const Stars = ({ n = 5 }) => (
  <span className="stars" aria-label={`${CLINIC.rating} star rating`}>
    {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={13} />)}
  </span>
);

export default function Hero() {
  const { openBooking } = useScroll();
  const scope = useRef(null);
  const nextDoc = DOCTORS[0];

  /* gentle perpetual float on the cards (instant start, zero delay) */
  useAnim(scope, (gsap) => {
    if (skipReveal()) return;
    gsap.to('.hero__card--slot', { y: -10, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    gsap.to('.hero__card--rating', { y: -14, duration: 3.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
  });

  return (
    <section className="hero" data-scroll-section id="top" ref={scope}>
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--1" data-scroll data-scroll-speed="1.2" />
        <span className="hero__blob hero__blob--2" data-scroll data-scroll-speed="-0.8" />
      </div>

      <div className="hero__inner container">
        <div className="hero__copy">
          <h1 className="hero__title">
            Advanced Piles, Fistula &amp; Fissure Care. <em>Minimally invasive &amp; virtually painless.</em>
          </h1>

          <p className="hero__sub">
            25+ years of specialized proctology &amp; Kshara Sutra excellence in <strong className="hero__sub-highlight">New Perungalathur</strong>, Tambaram. 30-minute day-care procedures, same-day walk-home discharge, and 100% sphincter preservation.
          </p>

          <div className="hero__ctas">
            <Button magnetic icon="calendar" onClick={() => openBooking()} aria-label="Book a consultation">
              Book consultation
            </Button>
            <Button variant="ghost" icon="phone" href={CLINIC.phoneHref}>
              Call {CLINIC.phoneDisplay}
            </Button>
          </div>

          <a
            className="hero__yt-badge"
            href="#procedure-guide"
            data-cursor="hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: '700',
              color: 'var(--teal)',
              background: 'var(--teal-mist)',
              padding: '7px 14px',
              borderRadius: '999px',
              marginTop: '4px',
              width: 'fit-content',
              maxWidth: '100%',
              boxSizing: 'border-box',
              textDecoration: 'none',
              border: '1px solid var(--border)',
            }}
          >
            <span className="pulse-dot" aria-hidden="true" />
            <span>30-Min Day-Care · Same-Day Walk-Home Discharge</span>
            <Icon name="arrowR" size={13} strokeWidth={2.2} />
          </a>

          <div className="hero__proof">
            <span className="hero__proof-item">
              <Stars />
              <strong>{CLINIC.rating}</strong> · {CLINIC.reviewCount} reviews
            </span>
            <span className="hero__proof-sep" aria-hidden="true" />
            <span className="hero__proof-item"><strong>10,000+</strong> Relieved</span>
            <span className="hero__proof-sep" aria-hidden="true" />
            <span className="hero__proof-item"><strong>100%</strong> Continence Preserved</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="false">
          {/* Main Hero Visual: Dr. Dhananjaya Proctology Clinic */}
          <div className="hero__main-card" data-scroll data-scroll-speed="-0.3">
            <div className="hero__img-frame">
              <img
                src="/dr-dhananjaya-hero.jpg"
                alt="Dr. Dhananjaya - Advanced Piles, Fistula and Fissure Specialist Clinic in New Perungalathur, Tambaram"
                className="hero__main-img"
              />
              <div className="hero__img-badge">
                <span className="hero__img-badge-dot" />
                <span>Laser Piles &amp; Kshara Sutra Clinic</span>
              </div>
              <div className="hero__img-caption">
                <p className="hero__img-quote">“30-Minute Day-Care Relief. Same-Day Discharge Without Painful Cuts.”</p>
                <span className="hero__img-sub">G.R. Complex, NGO Nagar Main Road, New Perungalathur (Tambaram)</span>
              </div>
            </div>
            <span className="hero__floating-heart" title="Sphincter-Preserving Laser &amp; Kshara Sutra Surgery">
              ✦
            </span>
          </div>

          <div className="hero__card hero__card--slot" data-scroll data-scroll-speed="0.6">
            <p className="hero__card-eyebrow"><span className="pulse-dot" aria-hidden="true" /> Next Consultation Slot</p>
            <p className="hero__card-doc">{nextDoc.name}</p>
            <p className="hero__card-dept">{nextDoc.dept}</p>
            <p className="hero__card-time"><Icon name="clock" size={14} /> {nextDoc.slot}</p>
            <button
              className="hero__card-btn"
              onClick={() => openBooking(nextDoc.dept, nextDoc.slot)}
              data-cursor="hover"
            >
              Book consultation <Icon name="arrowR" size={14} strokeWidth={2.2} />
            </button>
          </div>

          <div className="hero__card hero__card--rating" data-scroll data-scroll-speed="1.1">
            <Stars />
            <p><strong>{CLINIC.rating}</strong> Google Verified</p>
            <span>{CLINIC.reviewCount} verified patient reviews</span>
          </div>

          <div className="hero__chip" data-scroll data-scroll-speed="0.9">
            <Icon name="pin" size={15} /> NGO Nagar, New Perungalathur (Tambaram)
          </div>
        </div>
      </div>

      <div className="hero__ticker" aria-hidden="true">
        <Marquee duration={34}>
          {SPECIALTIES_TICKER.map((s) => (
            <span className="ticker__item" key={s}>
              {s} <i>✦</i>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
