import { useEffect, useState } from 'react';
import { useScroll } from '../context/ScrollContext';
import { CLINIC, WA_DEFAULT } from '../config';
import Icon from '../lib/Icons';
import { Magnetic } from '../lib/anim';

/**
 * Conversion safety net:
 *  - mobile: sticky bottom dock (Call · WhatsApp · Book) after the hero
 *  - desktop: floating magnetic "Book" pill, bottom-right
 */
export default function FloatingDock() {
  const { onScroll, openBooking, booking } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => onScroll((y) => setVisible(y > 520)), [onScroll]);

  const shown = visible && !booking.open;

  return (
    <>
      {/* Desktop pill */}
      <div className={`fab ${shown ? 'is-in' : ''}`}>
        <Magnetic strength={0.4}>
          <button className="fab__btn" onClick={() => openBooking()} data-cursor="hover" aria-label="Book an appointment">
            <span className="fab__ring" aria-hidden="true" />
            <Icon name="calendar" size={18} strokeWidth={2} />
            <span>Book now</span>
          </button>
        </Magnetic>
      </div>

      {/* Mobile dock */}
      <nav className={`dock ${shown ? 'is-in' : ''}`} aria-label="Quick actions">
        <a className="dock__item" href={CLINIC.phoneHref}>
          <Icon name="phone" size={19} />
          <span>Call</span>
        </a>
        <a className="dock__item" href={WA_DEFAULT} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={19} />
          <span>WhatsApp</span>
        </a>
        <button className="dock__item dock__item--main" onClick={() => openBooking()}>
          <Icon name="calendar" size={19} strokeWidth={2} />
          <span>Book now</span>
        </button>
      </nav>
    </>
  );
}
