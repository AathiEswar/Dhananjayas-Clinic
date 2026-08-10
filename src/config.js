/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — edit everything here before going live.
 *  All CTAs (call / WhatsApp / maps / hours) read from this file.
 * ─────────────────────────────────────────────────────────────
 */
export const CLINIC = {
  name: 'OviAm Clinic',
  tagline: 'For Body & Mind Health · General & Family Care',
  city: 'Guduvanchery · Chengalpattu',

  // Phone shown to users + the tel: link
  phoneDisplay: '+91 81228 84249',
  phoneHref: 'tel:+918122884249',

  // WhatsApp number in international format (used in wa.me links)
  whatsapp: '918122884249',

  email: 'oviamclinic.healthpartner@gmail.com',
  address: '1st Floor, No. 872, Nellikuppam Main Road, Moolakazhani, Guduvanchery - 603202',
  landmark: 'Opposite Indian Oil Petrol Bunk',
  mapsUrl: 'https://maps.app.goo.gl/F4yehhgyHN5E27i86',

  rating: '4.9',
  reviewCount: '150+',
  fee: '₹200',

  hours: [
    { days: 'Mon – Sat (Morning)', time: '9:30 AM – 1:30 PM' },
    { days: 'Mon – Sat (Evening)', time: '5:00 PM – 9:00 PM' },
    { days: 'Sunday', time: 'By Appointment / Closed' },
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I'd like to consult the doctor. Please let me know the available time slots today.`
);

