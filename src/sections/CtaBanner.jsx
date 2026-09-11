import { useScroll } from '../context/ScrollContext';
import { CLINIC } from '../config';
import { MaskText } from '../lib/anim';
import Button from '../components/Button';

export default function CtaBanner() {
  const { openBooking } = useScroll();

  return (
    <section className="ctab section" data-scroll-section aria-label="Book an appointment">
      <div className="container">
        <div className="ctab__panel">
          <span className="ctab__blob ctab__blob--1" data-scroll data-scroll-speed="0.8" aria-hidden="true" />
          <span className="ctab__blob ctab__blob--2" data-scroll data-scroll-speed="-0.6" aria-hidden="true" />
          <span className="ctab__ring" aria-hidden="true" />

          <p className="eyebrow eyebrow--light" data-reveal>
            <span className="pulse-dot pulse-dot--light" aria-hidden="true" /> Same-day specialist &amp; OPD slots available
          </p>

          <MaskText
            as="h2"
            className="ctab__title"
            segments={[{ t: 'Your family’s health ' }, { t: 'shouldn’t have to wait.', em: true }]}
          />

          <p className="ctab__sub" data-reveal>
            Book a doctor consultation now — it takes 30 seconds, walk-ins are welcomed, and our clinical team confirms your slot promptly.
          </p>

          <div className="ctab__actions" data-reveal>
            <Button variant="light" icon="calendar" magnetic onClick={() => openBooking()}>
              Book an appointment
            </Button>
            <Button variant="outline-light" icon="phone" href={CLINIC.phoneHref}>
              {CLINIC.phoneDisplay}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
