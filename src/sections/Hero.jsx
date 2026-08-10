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
          <p className="eyebrow hero__eyebrow" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <span className="pulse-dot" aria-hidden="true" />
            <span>Open today · Same-day slots available · {CLINIC.city}</span>
            <span className="chip chip--red">Psychologist Available</span>
          </p>

          <h1 className="hero__title">
            Complete care for your <em>body &amp; mind health.</em>
          </h1>

          <p className="hero__sub">
            18+ years of trusted general physician care, family medicine, chronic disease management,
            and psychologist consultations in Guduvanchery. Attentive care at an affordable ₹200 fee.
          </p>

          <div className="hero__ctas">
            <Button magnetic icon="calendar" onClick={() => openBooking()} aria-label="Book a consultation">
              Book a consultation
            </Button>
            <Button variant="ghost" icon="phone" href={CLINIC.phoneHref}>
              Call the clinic
            </Button>
          </div>

          <div className="hero__proof">
            <span className="hero__proof-item">
              <Stars />
              <strong>{CLINIC.rating}</strong> · {CLINIC.reviewCount} reviews
            </span>
            <span className="hero__proof-sep" aria-hidden="true" />
            <span className="hero__proof-item"><strong>₹200</strong> Consult Fee</span>
            <span className="hero__proof-sep" aria-hidden="true" />
            <span className="hero__proof-item"><strong>18+</strong> years exp.</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="false">
          <div className="hero__arch" data-scroll data-scroll-speed="-0.5" aria-hidden="true">
            <span className="hero__arch-ring" />
            <span className="hero__arch-sun" />
            <svg className="hero__ecg" viewBox="0 0 320 80" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 46 H70 l12-26 16 44 12-30 10 12 h34 l10-18 14 30 10-12 h122" fill="none" />
            </svg>
          </div>

          <div className="hero__card hero__card--slot" data-scroll data-scroll-speed="0.6">
            <p className="hero__card-eyebrow"><span className="pulse-dot" aria-hidden="true" /> Next available</p>
            <p className="hero__card-doc">{nextDoc.name}</p>
            <p className="hero__card-dept">{nextDoc.dept}</p>
            <p className="hero__card-time"><Icon name="clock" size={14} /> {nextDoc.slot}</p>
            <button
              className="hero__card-btn"
              onClick={() => openBooking(nextDoc.dept, nextDoc.slot)}
              data-cursor="hover"
            >
              Consult today <Icon name="arrowR" size={14} strokeWidth={2.2} />
            </button>
          </div>

          <div className="hero__card hero__card--rating" data-scroll data-scroll-speed="1.1">
            <Stars />
            <p><strong>{CLINIC.rating}</strong> on Google</p>
            <span>{CLINIC.reviewCount} patient reviews</span>
          </div>

          <div className="hero__chip" data-scroll data-scroll-speed="0.9">
            <Icon name="pin" size={15} /> Opp. Indian Oil Petrol Bunk
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
