/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — MOUNAA HEALTH CENTER (Kannivakkam, Guduvanchery)
 *  Acupuncture, Hijama Cupping, Spine & Natural Healing
 *  All CTAs (call / WhatsApp / YouTube / maps / hours) read from here.
 * ─────────────────────────────────────────────────────────────
 */
export const CLINIC = {
  name: 'MOUNAA HEALTH CENTER',
  shortName: 'Mounaa Health',
  altName: 'Mounalaya Health Center · The Temple of Silence',
  tagline: 'Classical Acupuncture, Hijama Cupping & Holistic Spine Care · Kannivakkam',
  slogan: 'Natural Pain Relief & Holistic Wellness Without Side Effects.',
  motto: 'Root-Cause Healing through Acupuncture, Cupping & Natural Medicine.',
  tamilTagline: 'பக்கவிளைவுகளற்ற பாரம்பரிய அக்குபஞ்சர் மற்றும் இயற்கை மருத்துவ சிகிச்சை',
  city: 'Kannivakkam · Guduvanchery, Chengalpattu / Chennai',

  // Phone shown to users + the tel: link
  phoneDisplay: '+91 93456 64749',
  phoneHref: 'tel:+919345664749',
  phoneAltDisplay: '+91 93456 64749',
  phoneAltHref: 'tel:+919345664749',

  // WhatsApp number in international format
  whatsapp: '919345664749',

  // YouTube Channel & Featured Video
  youtube: 'https://www.youtube.com/@MOUNAA369',
  youtubeHandle: '@MOUNAA369',
  featuredVideoId: 'XfGf8UB9jU0',
  featuredVideoUrl: 'https://www.youtube.com/watch?v=XfGf8UB9jU0',

  email: 'mounaahealthcenter@gmail.com',
  address: 'First Floor, Kannivakkam Bus Stop, Guduvanchery, Chengalpattu District, Tamil Nadu - 603202',
  landmark: 'First Floor, Above Shops at Kannivakkam Bus Stop, Guduvanchery – Arungal Road',
  mapsUrl: 'https://maps.app.goo.gl/qGjnwPSkBSdWXnhR6',

  rating: '5.0',
  reviewCount: '20+',

  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 8:30 PM' },
    { days: 'Sunday Clinic', time: '9:30 AM – 2:00 PM (By Appointment)' },
    { days: 'Acute Pain Relief', time: 'Helpline & Consultation Available' },
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I would like to enquire about acupuncture / cupping therapy consultation slots and book an appointment.`
);
