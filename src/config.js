/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — edit everything here before going live.
 *  All CTAs (call / WhatsApp / maps / hours) read from this file.
 * ─────────────────────────────────────────────────────────────
 */
export const CLINIC = {
  name: 'Solace Health',
  tagline: 'Multi-Specialty Clinic',
  city: 'Adyar · Chennai',

  // Phone shown to users + the tel: link (digits only after +)
  phoneDisplay: '+91 44 4000 1234',
  phoneHref: 'tel:+914440001234',

  // WhatsApp number in international format, digits only (used in wa.me links)
  whatsapp: '919876543210',

  email: 'care@solacehealth.in',
  address: '12, Lakeview Avenue, Adyar, Chennai 600020',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Solace+Health+Clinic+Adyar+Chennai',

  rating: '4.9',
  reviewCount: '2,400+',

  hours: [
    { days: 'Mon – Sat', time: '8:00 AM – 9:00 PM' },
    { days: 'Sunday', time: '9:00 AM – 1:00 PM' },
    { days: 'Diagnostics & Lab', time: 'From 6:30 AM daily' },
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I'd like to book an appointment. Please share the next available slots.`
);
