import { useScroll } from '../context/ScrollContext';
import { WHY_US } from '../data';
import SectionHeader from '../components/SectionHeader';
import Icon from '../lib/Icons';

export default function About() {
  const { scrollTo } = useScroll();

  return (
    <section className="about section" data-scroll-section id="about">
      <div className="container about__grid">
        <div className="about__visual" data-reveal>
          <div className="about__arch" data-scroll data-scroll-speed="-0.4">
            <span className="about__arch-sun" />
            <span className="about__arch-arc about__arch-arc--1" />
            <span className="about__arch-arc about__arch-arc--2" />
            <span className="about__arch-arc about__arch-arc--3" />
          </div>

          {/* rotating badge — pure CSS spin */}
          <div className="about__badge" aria-hidden="true">
            <svg viewBox="0 0 120 120" className="about__badge-ring">
              <defs>
                <path id="circlePath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text>
                <textPath href="#circlePath">MOUNAA HEALTH CENTER · KANNIVAKKAM · 5.0 RATED ·&nbsp;</textPath>
              </text>
            </svg>
            <span className="about__badge-core"><Icon name="sparkle" size={20} /></span>
          </div>

          <div className="about__exp" data-scroll data-scroll-speed="0.5">
            <strong>5.0★</strong>
            <span>Google<br />Verified</span>
          </div>
        </div>

        <div className="about__content">
          <SectionHeader
            eyebrow="Why Choose MOUNAA HEALTH CENTER"
            segments={[
              { t: 'Natural healing that restores your wellness, ' },
              { t: 'vitality, and peaceful living.', em: true },
            ]}
          />
          <p className="about__lead" data-reveal>
            Root-cause healing in Kannivakkam, Guduvanchery should be natural, compassionate, and side-effect-free.
            MOUNAA HEALTH CENTER (The Temple of Silence) integrates Classical Acupuncture, clinical Hijama cupping,
            and gentle natural medicine under one serene sanctuary to alleviate chronic pain and restore balance.
          </p>

          <ul className="about__list">
            {WHY_US.map((w) => (
              <li key={w} data-reveal>
                <span className="about__check"><Icon name="check" size={14} strokeWidth={2.6} /></span>
                {w}
              </li>
            ))}
          </ul>

          <blockquote className="about__sign" data-reveal>
            “Our mission is to activate your body’s innate self-healing intelligence without aggressive chemicals or surgeries.”
            <cite>— Healer Vinithraj &amp; Team, MOUNAA HEALTH CENTER</cite>
          </blockquote>

          <button className="link-arrow" onClick={() => scrollTo('#doctors')} data-cursor="hover" data-reveal>
            Meet our specialists <Icon name="arrowR" size={15} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
