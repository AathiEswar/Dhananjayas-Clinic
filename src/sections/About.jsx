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
                <textPath href="#circlePath">VETRI HOSPITAL · VINAYAGAPURAM · MULTISPECIALTY ·&nbsp;</textPath>
              </text>
            </svg>
            <span className="about__badge-core"><Icon name="sparkle" size={20} /></span>
          </div>

          <div className="about__exp" data-scroll data-scroll-speed="0.5">
            <strong>15+</strong>
            <span>years of<br />honest medicine</span>
          </div>
        </div>

        <div className="about__content">
          <SectionHeader
            eyebrow="Why Vetri Hospital"
            segments={[
              { t: 'Medicine that respects your time, ' },
              { t: 'your health, and your trust.', em: true },
            ]}
          />
          <p className="about__lead" data-reveal>
            Healthcare in Vinayagapuram should be accessible, transparent, and comforting.
            Vetri Hospital was built around one promise: attentive medical care
            where doctor consultations are never rushed, diagnosis is accurate, and you
            receive genuine, compassionate care for your whole family.
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
            “Every consultation here starts with one principle — listening attentively and giving the honest care we’d want for our own family.”
            <cite>— Dr. G. T. Kumaragururajan (MBBS, General Physician)</cite>
          </blockquote>

          <button className="link-arrow" onClick={() => scrollTo('#doctors')} data-cursor="hover" data-reveal>
            Learn about our doctor <Icon name="arrowR" size={15} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
