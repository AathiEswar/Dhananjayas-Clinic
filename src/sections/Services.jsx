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
          eyebrow="Departments"
          segments={[{ t: 'Every specialty, ' }, { t: 'one calm roof.', em: true }]}
          side={
            <>
              <p>
                No bouncing between hospitals for scans, specialists and labs.
                Walk in with a worry; walk out with a plan.
              </p>
              <button className="link-arrow" onClick={() => scrollTo('#visit')} data-cursor="hover">
                Plan your visit <Icon name="arrowR" size={15} strokeWidth={2.2} />
              </button>
            </>
          }
        />

        <div className="services__grid">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className={`svc-card ${s.featured ? 'svc-card--featured' : ''}`}
              data-reveal
            >
              <div className="svc-card__top">
                <span className="svc-card__icon"><Icon name={s.icon} size={26} /></span>
                {s.featured && <span className="svc-card__badge">Most booked</span>}
              </div>

              <h3 className="svc-card__title">{s.title}</h3>
              <p className="svc-card__desc">{s.desc}</p>

              <div className="svc-card__chips">
                {s.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
              </div>

              {s.meta && <p className="svc-card__meta">{s.meta}</p>}

              <button
                className="svc-card__cta"
                onClick={() => openBooking(s.title)}
                data-cursor="hover"
                aria-label={`Book ${s.title}`}
              >
                <span>{s.featured ? 'Book a health check' : 'Book now'}</span>
                <span className="svc-card__arrow"><Icon name="arrowR" size={15} strokeWidth={2.2} /></span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
