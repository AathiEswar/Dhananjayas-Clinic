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
            Classical acupuncture &amp; natural pain relief <em>without side effects.</em>
          </h1>

          <p className="hero__sub">
            Root-cause meridian healing in <strong className="hero__sub-highlight">Kannivakkam</strong>, Guduvanchery. Specialized non-surgical relief for chronic L4-L5 spine disc pain, sciatica, frozen shoulder, migraine, and women’s health.
          </p>

          <div className="hero__ctas">
            <Button magnetic icon="calendar" onClick={() => openBooking()} aria-label="Book a consultation">
              Book healer consultation
            </Button>
            <Button variant="ghost" icon="phone" href={CLINIC.phoneHref}>
              Call {CLINIC.phoneDisplay}
            </Button>
          </div>

          <a
            className="hero__yt-badge"
            href={CLINIC.youtube}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: '700',
              color: '#CC0000',
              background: 'rgba(204, 0, 0, 0.08)',
              padding: '7px 14px',
              borderRadius: '999px',
              marginTop: '4px',
              width: 'fit-content',
              maxWidth: '100%',
              boxSizing: 'border-box',
              textDecoration: 'none',
              border: '1px solid rgba(204, 0, 0, 0.15)',
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Watch patient recoveries on YouTube @MOUNAA369</span>
            <Icon name="arrowR" size={13} strokeWidth={2.2} />
          </a>

          <div className="hero__proof">
            <span className="hero__proof-item">
              <Stars />
              <strong>{CLINIC.rating}</strong> · {CLINIC.reviewCount} reviews
            </span>
            <span className="hero__proof-sep" aria-hidden="true" />
            <span className="hero__proof-item"><strong>1,200+</strong> Relieved</span>
            <span className="hero__proof-sep" aria-hidden="true" />
            <span className="hero__proof-item"><strong>100%</strong> Drugless &amp; Natural</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="false">
          {/* Main Hero Visual: Classical Acupuncture Therapy */}
          <div className="hero__main-card" data-scroll data-scroll-speed="-0.3">
            <div className="hero__img-frame">
              <img
                src="/mounaa-acupuncture-hero.jpg"
                alt="Classical acupuncture and pain relief therapy at MOUNAA HEALTH CENTER Kannivakkam"
                className="hero__main-img"
              />
              <div className="hero__img-badge">
                <span className="hero__img-badge-dot" />
                <span>Classical Acupuncture &amp; Hijama</span>
              </div>
              <div className="hero__img-caption">
                <p className="hero__img-quote">“Natural Pain Relief &amp; Holistic Wellness Without Side Effects.”</p>
                <span className="hero__img-sub">First Floor, Kannivakkam Bus Stop, Guduvanchery – Arungal Road</span>
              </div>
            </div>
            <span className="hero__floating-heart" title="Holistic Acupuncture &amp; Natural Healing">
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
            <span>{CLINIC.reviewCount} verified 5-star reviews</span>
          </div>

          <div className="hero__chip" data-scroll data-scroll-speed="0.9">
            <Icon name="pin" size={15} /> Kannivakkam Bus Stop, Guduvanchery
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
