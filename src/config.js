/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — Care and Cure Homoeopathic Clinic
 *  All CTAs (call / WhatsApp / maps / hours) read from this file.
 * ─────────────────────────────────────────────────────────────
 */
export const CLINIC = {
  name: 'Care and Cure Homoeopathic Clinic',
  tagline: 'Natural Homeopathic Healing & Holistic Care · Guduvanchery',
  city: 'Nandivaram · Guduvanchery',

  // Phone shown to users + the tel: link
  phoneDisplay: '+91 97899 20400',
  phoneHref: 'tel:+919789920400',

  // WhatsApp number in international format (used in wa.me links)
  whatsapp: '919789920400',

  email: 'careandcure.homeopathy@gmail.com',
  address: 'Plot No. 102, Rajaji Nagar Main Road, Thangappapuram, Perumattunallur Village, Nandivaram, Guduvanchery - 603202',
  landmark: 'Rajaji Nagar Main Road, Thangappapuram, Nandivaram',
  mapsUrl: 'https://maps.app.goo.gl/Ggg9BiPjneMbDPTF6',

  rating: '4.9',
  reviewCount: '180+',

  hours: [
    { days: 'Mon – Sun (Morning)', time: '10:00 AM – 2:00 PM' },
    { days: 'Mon – Sun (Evening)', time: '5:00 PM – 10:00 PM' },
    { days: 'Sunday OPD', time: '10:00 AM – 10:00 PM' },
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I'd like to consult the doctor for a homeopathic consultation. Please let me know available slots.`
);
