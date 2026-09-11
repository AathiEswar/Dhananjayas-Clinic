/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — DR. Dhananjayas Clinic (New Perungalathur, Tambaram, Chennai)
 *  Specialist in Piles, Fistula (Kshara Sutra), and Fissure Care
 *  All CTAs (call / WhatsApp / maps / hours) read from here.
 * ─────────────────────────────────────────────────────────────
 */
export const CLINIC = {
  name: 'DR. Dhananjayas Clinic',
  shortName: 'Dhananjayas Clinic',
  altName: 'Dr. Dhananjayan Piles & Fistula Hospital',
  tagline: 'Advanced Piles, Fistula & Fissure Specialist Clinic · Perungalathur, Tambaram',
  slogan: 'Minimally Invasive, Virtually Painless Anorectal Care With Permanent Relief.',
  motto: '25+ Years of Excellence in Kshara Sutra & Day-Care Proctology.',
  tamilTagline: 'மூலம், பௌத்திரம் மற்றும் ஆசனவாய் வெடிப்புக்கான நவீன மற்றும் க்ஷாரசூத்ரா சிகிச்சை',
  city: 'New Perungalathur · Tambaram, Chennai',

  // Phone shown to users + the tel: link
  phoneDisplay: '+91 73583 61723',
  phoneHref: 'tel:7358361723',
  phoneAltDisplay: '+91 73583 61723',
  phoneAltHref: 'tel:7358361723',

  // WhatsApp number in international format
  whatsapp: '917358361723',

  email: 'v.prashanthi1995@gmail.com',
  website: 'https://fistulaandpiles.com/tambaram/',
  address: 'First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, Alappakkam, New Perungalathur, Chennai, Tamil Nadu - 600063',
  landmark: 'First Floor, G.R. Complex, NGO Nagar Main Road, Near SSM Nagar, New Perungalathur (off Tambaram)',
  mapsUrl: 'https://maps.app.goo.gl/TRP5wVEovJrYQQx97',

  rating: '4.9',
  reviewCount: '34+',

  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 8:30 PM' },
    { days: 'Sunday Consultation', time: '9:30 AM – 2:00 PM (By Appointment)' },
    { days: 'Acute Anorectal Pain Helpline', time: '24/7 Telephone Assistance' },
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I would like to book a confidential consultation for piles / fistula / fissure treatment.`
);
