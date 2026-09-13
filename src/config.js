/**
 * ─────────────────────────────────────────────────────────────
 *  CLINIC CONFIG — DR. Dhananjayas Hospitals & Fistula Clinic
 *  Piles, Fistula (Kshara Sutra), and Fissure Specialist Hospital
 *  Branches: New Perungalathur (Tambaram) · Porur · Koyambedu, Chennai
 * ─────────────────────────────────────────────────────────────
 */
export const CLINIC = {
  name: 'Dr. Dhananjayas Hospitals & Clinic',
  shortName: 'Dr. Dhananjayas Clinic',
  altName: 'Dr. Dhananjayan Piles & Fistula Hospital',
  tagline: 'Ayurvedic Piles, Fistula (Kshara Sutra) & Fissure Care · 25+ Years of Excellence',
  slogan: 'Gentle Ayurvedic Care for Piles, Fistula & Fissure Without Major Operations.',
  motto: '25+ Years of Focused Ayurvedic Proctology & Authentic Kshara Sutra Care.',
  tamilTagline: 'மூலம், பௌத்திரம் மற்றும் ஆசனவாய் வெடிப்புக்கான நவீன மற்றும் க்ஷாரசூத்ரா அறுவை சிகிச்சையற்ற தீர்வு',
  city: 'Chennai (Tambaram, New Perungalathur, Porur & Koyambedu)',

  // Primary contacts
  phoneDisplay: '+91 73583 61723',
  phoneHref: 'tel:7358361723',
  phoneAltDisplay: '+91 97907 47350',
  phoneAltHref: 'tel:9790747350',
  phoneLandline: '08048067521',
  phoneLandlineHref: 'tel:08048067521',

  // WhatsApp
  whatsapp: '917358361723',
  whatsappAlt: '919790747350',

  email: 'v.prashanthi1995@gmail.com',
  website: 'https://www.fistulapileshospitalchennai.com',
  secondaryWebsite: 'https://www.thefistula.com',

  // Multi-branch locations
  branches: [
    {
      id: 'tambaram-perungalathur',
      name: 'New Perungalathur / Tambaram Clinic (Main Center)',
      tag: 'Primary Ayurvedic Treatment Center',
      address: 'First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, Alappakkam, New Perungalathur, Chennai, Tamil Nadu – 600063',
      landmark: 'Near SSM Nagar, Off Tambaram / GST Road',
      phone: '+91 73583 61723 / 08048067521',
      phoneHref: 'tel:7358361723',
      mapsUrl: 'https://maps.app.goo.gl/TRP5wVEovJrYQQx97',
      timings: 'Monday – Saturday: 9:00 AM – 8:30 PM · Sunday by Appointment',
    },
    {
      id: 'porur-hospital',
      name: 'Porur Branch (Dr. Dhananjayas Hospitals)',
      tag: 'Hospital & Consultation Facility',
      address: '6, Pillayar Koil St, Astalakshmi Nagar, Lakshmi Nagar, Porur, Chennai, Tamil Nadu – 600116',
      landmark: 'Near Pillayar Koil, Astalakshmi Nagar, Porur',
      phone: '+91 97907 47350 / 08042757322',
      phoneHref: 'tel:9790747350',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=6+Pillayar+Koil+St+Astalakshmi+Nagar+Porur+Chennai+600116',
      timings: 'Daily: 10:00 AM – 7:30 PM',
    },
    {
      id: 'koyambedu-desk',
      name: 'Koyambedu OPD Consultation Desk',
      tag: 'Specialist Consultation Desk',
      address: 'Near Central Bus Terminus, Koyambedu, Chennai, Tamil Nadu – 600107',
      landmark: 'Accessible via Metro and Koyambedu Bus Hub',
      phone: '+91 73583 61723',
      phoneHref: 'tel:7358361723',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Koyambedu+Chennai',
      timings: 'Weekly Special OPD (By Prior Booking)',
    }
  ],

  // Default address (Tambaram / New Perungalathur)
  address: 'First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, Alappakkam, New Perungalathur, Chennai, Tamil Nadu - 600063',
  landmark: 'First Floor, G.R. Complex, NGO Nagar Main Road, Near SSM Nagar, New Perungalathur (off Tambaram)',
  mapsUrl: 'https://maps.app.goo.gl/TRP5wVEovJrYQQx97',

  rating: '4.9',
  reviewCount: '34+',

  hours: [
    { days: 'Monday – Saturday', time: '9:00 AM – 8:30 PM' },
    { days: 'Sunday Consultation', time: '9:30 AM – 2:00 PM (By Appointment)' },
    { days: 'Emergency Anorectal Helpline', time: '24/7 Telephone Assistance' },
  ],
};

/** Builds a prefilled WhatsApp deep link. */
export function waLink(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hi ${CLINIC.name}! I would like to book a confidential consultation for piles / fistula / fissure treatment.`
);
