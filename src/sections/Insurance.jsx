import { INSURERS } from '../data';
import { waLink } from '../config';
import Marquee from '../components/Marquee';
import Icon from '../lib/Icons';

export default function Insurance() {
  return (
    <section className="insurance section" data-scroll-section aria-label="Insurance partners">
      <div className="container insurance__head">
        <p className="eyebrow" data-reveal>
          <span className="eyebrow__dot" aria-hidden="true" /> Insurance &amp; TPA desk
        </p>
        <h2 className="h3" data-reveal>
          Cashless with 25+ insurers — <em>we handle the paperwork.</em>
        </h2>
      </div>

      <div className="insurance__marquees" data-reveal>
        <Marquee duration={30}>
          {INSURERS.map((n) => <span className="ins-pill" key={n}><Icon name="shield" size={14} /> {n}</span>)}
        </Marquee>
        <Marquee duration={36} reverse>
          {[...INSURERS].reverse().map((n) => <span className="ins-pill ins-pill--ghost" key={n}>{n}</span>)}
        </Marquee>
      </div>

      <div className="container">
        <a
          className="link-arrow"
          data-reveal
          href={waLink('Hi Solace Health! Could you check if my insurance policy is covered for cashless treatment?')}
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
        >
          Check your coverage on WhatsApp <Icon name="whatsapp" size={15} strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
