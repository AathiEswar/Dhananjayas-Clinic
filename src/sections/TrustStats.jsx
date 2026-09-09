import { STATS } from '../data';
import { Counter } from '../lib/anim';

export default function TrustStats() {
  return (
    <section className="stats" data-scroll-section aria-label="Clinic statistics">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s) => (
            <div className="stats__item" key={s.label} data-reveal>
              <Counter to={s.value} suffix={s.suffix} decimals={s.decimals || 0} className="stats__value" />
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="stats__caption" data-reveal>
          Trusted by parents across Thiruverkadu & Chennai for pediatric therapy, speech, occupational & behavior development.
        </p>
      </div>
    </section>
  );
}
