/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — Vetri Hospital (Vinayagapuram, Chennai)
 *  All CTAs (call / WhatsApp / maps / hours) read from this file.
 * ─────────────────────────────────────────────────────────────
 */
export const CLINIC = {
  name: 'Vetri Hospital',
  tagline: 'Multispecialty Care & General Healthcare · Vinayagapuram',
  city: 'Vinayagapuram · Kolathur, Chennai',

  // Phone shown to users + the tel: link
  phoneDisplay: '+91 89033 31234',
  phoneHref: 'tel:+918903331234',

  // WhatsApp number in international format (used in wa.me links)
  whatsapp: '918903331234',

  email: 'vetrihospital.vinayagapuram@gmail.com',
  address: 'No. C1B, Surapet Main Road, SBOA Teachers Nagar, Vinayagapuram, Kolathur, Chennai - 600099',
  landmark: 'Surapet Main Road, Near SBOA Teachers Nagar',
  mapsUrl: 'https://www.google.com/maps/place/Vetri+Hospital/@13.1401903,80.2005086,17z/data=!3m1!4b1!4m6!3m5!1s0x3a526599d72e6f91:0xbc619aae16a18765!8m2!3d13.1401851!4d80.2030835',

  rating: '4.8',
  reviewCount: '250+',

  hours: [
    { days: 'Mon – Sun (Morning)', time: '9:00 AM – 1:30 PM' },
    { days: 'Mon – Sun (Evening)', time: '5:00 PM – 9:00 PM' },
    { days: 'Casualty & OPD', time: '24/7 Emergency Care' },
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I'd like to consult the doctor. Please let me know the available time slots today.`
);
