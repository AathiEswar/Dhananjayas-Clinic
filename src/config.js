/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — Sai Multispeciality Klinic (Guduvanchery, Chennai)
 *  All CTAs (call / WhatsApp / maps / hours) read from this file.
 * ─────────────────────────────────────────────────────────────
 */
export const CLINIC = {
  name: 'Sai Multispeciality Klinic',
  shortName: 'Sai Multispeciality',
  tagline: 'Advanced Healthcare & Multi-Disciplinary Excellence · Guduvanchery',
  slogan: 'Comprehensive Healthcare For Your Whole Family.',
  motto: 'Dedicated Specialists, Modern Care, Trusted by Generations.',
  tamilTagline: 'உங்கள் குடும்பத்தின் ஆரோக்கியத்திற்கு முழுமையான மருத்துவ சிகிச்சை',
  city: 'Guduvanchery · Chengalpattu / Chennai',

  // Phone shown to users + the tel: link
  phoneDisplay: '+91 89048 72002',
  phoneHref: 'tel:+918904872002',
  phoneAltDisplay: '+91 99411 30300',
  phoneAltHref: 'tel:+919941130300',

  // WhatsApp number in international format (used in wa.me links)
  whatsapp: '918904872002',

  email: 'info@saimultispecialityklinic.com',
  address: 'Survey No. 94/2, 94/9A, Door No. 45/1 (Ground Floor, No. 54), VOC Street, N.G.O. Colony, Srinivasapuram, Guduvanchery, Chengalpattu District, Tamil Nadu - 603202',
  landmark: 'Opposite Chellamani & Co, Near Sri Rani Mahal, off GST Road',
  mapsUrl: 'https://maps.app.goo.gl/9y7hCQ5e9FYwfZcB9',

  rating: '4.7',
  reviewCount: '180+',

  hours: [
    { days: 'Facility & Triage', time: 'Open 24 Hours / 7 Days' },
    { days: 'Morning OPD Slots', time: '9:00 AM – 1:00 PM' },
    { days: 'Evening OPD Slots', time: '5:00 PM – 9:00 PM' },
    { days: 'Sunday Specialty OPD', time: '9:30 AM – 1:30 PM (On Call)' },
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I would like to enquire about doctor consultation slots and book an appointment.`
);
