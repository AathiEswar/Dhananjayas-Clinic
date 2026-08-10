/* Site content — services, doctors, testimonials, FAQs, stats. Edit freely. */

/* Site content — services, doctor, testimonials, FAQs, stats for OviAm Clinic. */

export const SPECIALTIES_TICKER = [
  'General Medicine', 'Family Healthcare', 'Fever & Infection Care', 'Diabetes Management',
  'Hypertension & BP', 'Thyroid Care', 'Preventive Health Checks', 'Adult & Child Vaccinations',
  'Teleconsultations', 'Home Sample Collection',
];

export const SERVICES = [
  {
    id: 'general-consultation',
    featured: true,
    icon: 'steth',
    title: 'General Physician Consultation',
    desc: 'Comprehensive diagnosis and treatment for cold, flu, viral fevers, seasonal infections, respiratory issues, and everyday health concerns.',
    chips: ['Cold & Fever', 'Infections', 'Acute Illness', 'Prescriptions'],
    meta: 'Consultation Fee: ₹200',
  },
  {
    id: 'chronic-care',
    featured: false,
    icon: 'pulse',
    title: 'Chronic Disease Care',
    desc: 'Long-term management and personalized routine monitoring for Diabetes, High Blood Pressure (Hypertension), Thyroid, and Cholesterol.',
    chips: ['Diabetes Care', 'Hypertension / BP', 'Thyroid Screen', 'Lipid Control'],
    meta: 'Regular tracking & advice',
  },
  {
    id: 'preventive-health',
    featured: false,
    icon: 'heart',
    title: 'Preventive Health Checks',
    desc: 'Routine physical examinations, blood pressure checks, and preventive blood workups to catch potential health issues early.',
    chips: ['Routine Check-up', 'Blood Pressure', 'Blood Sugar Test', 'Wellness Advice'],
  },
  {
    id: 'vaccinations',
    featured: false,
    icon: 'sparkle',
    title: 'Vaccinations & Immunization',
    desc: 'Essential routine vaccinations for adults and children to protect against preventable infectious diseases.',
    chips: ['Adult Immunization', 'Pediatric Shots', 'Flu Vaccines'],
  },
  {
    id: 'teleconsultation',
    featured: false,
    icon: 'flask',
    title: 'Teleconsultations & Home Visits',
    desc: 'Virtual appointments for prescription renewals & follow-ups, plus in-home doctor consultation or sample collection for elderly patients.',
    chips: ['Home Visits', 'Tele-health', 'Senior Care', 'Sample Collection'],
  },
];

export const DOCTORS = [
  {
    name: 'Dr. Oviam',
    dept: 'General Physician & Family Specialist',
    creds: 'MBBS (Madras Medical College, 2006), DNB (Family Medicine, 2024)',
    exp: '18+ yrs exp.',
    slot: 'Today, 5:30 PM',
    initials: 'DO',
    hue: 168,
    bio: 'Alumnus of prestigious Madras Medical College (MMC) with 18+ years of dedicated clinical practice. Specialized in General Medicine and Family Medicine with a patient-first approach.',
  },
];

export const STATS = [
  { value: 18, suffix: '+', label: 'Years of medical care' },
  { value: 20, suffix: 'k+', label: 'Patients treated' },
  { value: 200, prefix: '₹', suffix: '', label: 'Consultation fee' },
  { value: 4.9, suffix: '★', label: 'Google rating', decimals: 1 },
];

export const WHY_US = [
  'Affordable consultation fee (₹200) with top-tier medical guidance',
  'Patient-first care — doctor listens attentively without rushing you',
  'Honest & evidence-based medicine — no unnecessary retests or over-prescribed drugs',
  'Convenient location right on Nellikuppam Main Road, opp. Indian Oil Petrol Bunk',
  'Clean, hygienic, and comforting clinic environment',
  'Quick WhatsApp & phone booking or direct walk-ins welcome',
];

export const PROCESS = [
  {
    step: '01',
    title: 'Walk in or Book online',
    desc: 'Walk straight into the clinic or message us on WhatsApp for a quick slot. No complicated procedure.',
  },
  {
    step: '02',
    title: 'Attentive Doctor Consultation',
    desc: 'Dr. Oviam spends dedicated time listening to your history, conducting a precise examination without rush.',
  },
  {
    step: '03',
    title: 'Clear Diagnosis & Care Plan',
    desc: 'Receive digital prescriptions, clear dietary/lifestyle advice, and honest treatment recommendations.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Dr. Oviam is extremely polite and patient. He takes time to understand the root cause of the fever instead of just prescribing heavy antibiotics right away. Highly recommended for family care in Guduvanchery.',
    name: 'Saravanan K.',
    context: 'Guduvanchery resident',
  },
  {
    quote: 'The consultation fee is just ₹200, but the care and attention you receive is better than expensive corporate hospitals. Very clean clinic right opposite the Indian Oil petrol bunk.',
    name: 'Meenakshi Sundaram',
    context: 'Diabetes care patient',
  },
  {
    quote: 'Brought my mother for BP and thyroid check-up. The doctor explained everything clearly in Tamil and gave very practical advice. Very minimal wait time as well.',
    name: 'Venkatesh R.',
    context: 'Family health consultation',
  },
  {
    quote: 'Great neighborhood clinic! Clean ambiance, friendly consultation, and easy to reach on Nellikuppam main road.',
    name: 'Anitha P.',
    context: 'General medicine patient',
  },
];

export const FAQS = [
  {
    q: 'Where is OviAm Clinic located?',
    a: 'OviAm Clinic is located on the 1st Floor, No. 872, Nellikuppam Main Road, Moolakazhani, Guduvanchery, Chengalpattu (603202) — directly opposite the Indian Oil Petrol Bunk.',
  },
  {
    q: 'What are the clinic timings?',
    a: 'We are open Monday through Saturday in two slots: Morning (9:30 AM – 1:30 PM) and Evening (5:00 PM – 9:00 PM). Sunday visits are by prior appointment or emergency call.',
  },
  {
    q: 'What is the consultation fee?',
    a: 'Routine General Physician consultation fee is ₹200.',
  },
  {
    q: 'Do I need an appointment, or can I walk in directly?',
    a: 'Walk-ins are always welcome! However, if you prefer minimal waiting, you can message us on WhatsApp or call ahead to confirm doctor availability.',
  },
  {
    q: 'What are the doctor’s qualifications and experience?',
    a: 'Dr. Oviam completed MBBS from Madras Medical College (MMC) in 2006 and holds a DNB in Family Medicine, with over 18 years of clinical experience in General Medicine.',
  },
  {
    q: 'Do you offer home visits or teleconsultations?',
    a: 'Yes, teleconsultations are available for follow-ups and prescription renewals. For elderly patients unable to visit the clinic, home consultations and blood sample collection can be scheduled.',
  },
];

export const NAV_LINKS = [
  { label: 'Services', target: '#services' },
  { label: 'About Doctor', target: '#doctors' },
  { label: 'Why Us', target: '#about' },
  { label: 'Reviews', target: '#stories' },
  { label: 'Visit', target: '#visit' },
];

export const TIME_SLOTS = [
  '9:30 AM', '10:30 AM', '11:30 AM', '5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM',
];

