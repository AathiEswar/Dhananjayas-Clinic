import { useScroll } from '../context/ScrollContext';
import { SERVICES } from '../data';
import SectionHeader from '../components/SectionHeader';
import Icon from '../lib/Icons';

export default function Services() {
  const { openBooking, scrollTo } = useScroll();

  return (
    <section className="services section" data-scroll-section id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Holistic Healing &amp; Natural Pain Therapies"
          segments={[{ t: 'Ancient meridian therapies, ' }, { t: 'side-effect-free recovery.', em: true }]}
          side={
            <>
              <p>
                Natural healing modalities targeting root energy blockages — from chronic L4-L5 spine disc compression
                and sciatica to frozen shoulder, migraine, and hormonal imbalances.
              </p>
              <button className="link-arrow" onClick={() => scrollTo('#videos')} data-cursor="hover">
                Watch recovery videos <Icon name="arrowR" size={15} strokeWidth={2.2} />
              </button>
            </>
          }
        />

        <div className="services__grid">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className={`svc-card ${s.featured ? 'svc-card--featured' : ''}`}
              onClick={() => openBooking(s.title)}
              data-cursor="hover"
              data-reveal
              tabIndex={0}
              role="button"
              aria-label={`Book appointment for ${s.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openBooking(s.title);
                }
              }}
            >
              <div className="svc-card__top">
                <span className="svc-card__icon"><Icon name={s.icon} size={26} strokeWidth={2} /></span>
                {s.featured && <span className="svc-card__badge">Priority OPD</span>}
              </div>

              <h3 className="svc-card__title">{s.title}</h3>
              {s.tamilTitle && <p className="svc-card__tamil">{s.tamilTitle}</p>}
              <p className="svc-card__desc">{s.desc}</p>

              <div className="svc-card__chips">
                {s.chips.map((c) => (
                  <span className="chip" key={c}>{c}</span>
                ))}
              </div>

              {s.meta && <p className="svc-card__meta">{s.meta}</p>}

              <div className="svc-card__cta">
                <span>Book consultation</span>
                <span className="svc-card__arrow"><Icon name="arrowR" size={15} strokeWidth={2.2} /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
