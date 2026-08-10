/* Site content — services, doctors, testimonials, FAQs, stats. Edit freely. */

export const SPECIALTIES_TICKER = [
  'General Medicine', 'Cardiology', 'Pediatrics', 'Orthopedics', 'Dermatology',
  'Gynecology', 'Neurology', 'Diagnostics', 'Physiotherapy', 'ENT', 'Dental',
];

export const SERVICES = [
  {
    id: 'health-checks',
    featured: true,
    icon: 'pulse',
    title: 'Full-Body Health Checks',
    desc: 'Doctor-designed preventive packages with same-day reports from our NABL-accredited in-house lab.',
    chips: ['Executive panel', 'Diabetes screen', 'Cardiac risk', 'Women’s health'],
    meta: 'From ₹1,999 · Reports in 6 hrs',
  },
  {
    id: 'general-medicine',
    icon: 'steth',
    title: 'General Medicine',
    desc: 'Fevers, infections, chronic-care management and honest second opinions.',
    chips: ['Diabetes', 'Hypertension', 'Thyroid'],
  },
  {
    id: 'cardiology',
    icon: 'heart',
    title: 'Cardiology',
    desc: 'ECG, ECHO and TMT in-house, with prevention-first cardiac care.',
    chips: ['ECG / ECHO', 'Chest pain clinic'],
  },
  {
    id: 'pediatrics',
    icon: 'baby',
    title: 'Pediatrics',
    desc: 'Gentle care for newborns to teens — vaccinations, growth and nutrition.',
    chips: ['Vaccination', 'Growth tracking'],
  },
  {
    id: 'orthopedics',
    icon: 'bone',
    title: 'Orthopedics',
    desc: 'Joint, spine and sports-injury care with physiotherapy under the same roof.',
    chips: ['Joint pain', 'Sports injury'],
  },
  {
    id: 'dermatology',
    icon: 'sparkle',
    title: 'Dermatology',
    desc: 'Clinical skin & hair treatments that are evidence-based, never oversold.',
    chips: ['Acne & scars', 'Hair fall'],
  },
  {
    id: 'gynecology',
    icon: 'flower',
    title: 'Gynecology',
    desc: 'Compassionate women’s health — PCOS, pregnancy care and menopause support.',
    chips: ['PCOS clinic', 'Antenatal care'],
  },
  {
    id: 'diagnostics',
    icon: 'flask',
    title: 'Diagnostics & Labs',
    desc: 'NABL-accredited lab, digital X-ray and ultrasound with home sample pickup.',
    chips: ['Home collection', '6-hr reports'],
  },
];

export const DOCTORS = [
  { name: 'Dr. Meera Krishnan', dept: 'Internal Medicine', creds: 'MBBS, MD (Gen. Medicine)', exp: '18 yrs', slot: 'Today, 4:30 PM', initials: 'MK', hue: 168 },
  { name: 'Dr. Arjun Nair', dept: 'Cardiology', creds: 'MBBS, MD, DM (Cardio)', exp: '15 yrs', slot: 'Today, 6:00 PM', initials: 'AN', hue: 196 },
  { name: 'Dr. Sana Iqbal', dept: 'Pediatrics', creds: 'MBBS, MD (Pediatrics)', exp: '12 yrs', slot: 'Tomorrow, 10:15 AM', initials: 'SI', hue: 22 },
  { name: 'Dr. Vikram Rao', dept: 'Orthopedics', creds: 'MBBS, MS (Ortho)', exp: '20 yrs', slot: 'Today, 7:30 PM', initials: 'VR', hue: 262 },
  { name: 'Dr. Ananya Menon', dept: 'Dermatology', creds: 'MBBS, MD (DVL)', exp: '10 yrs', slot: 'Tomorrow, 11:00 AM', initials: 'AM', hue: 340 },
  { name: 'Dr. Rahul Verma', dept: 'Neurology', creds: 'MBBS, MD, DM (Neuro)', exp: '14 yrs', slot: 'Tomorrow, 5:45 PM', initials: 'RV', hue: 92 },
];

export const STATS = [
  { value: 25, suffix: '+', label: 'Years of care' },
  { value: 40, suffix: 'k+', label: 'Patients treated' },
  { value: 30, suffix: '+', label: 'Specialists' },
  { value: 4.9, suffix: '★', label: 'Google rating', decimals: 1 },
];

export const WHY_US = [
  'Same-day appointments — most slots within 4 hours',
  'Every specialty under one calm roof',
  'NABL-accredited in-house labs, reports in 6 hours',
  'Cashless insurance desk for 25+ providers',
  'Digital records, e-prescriptions & reminders',
  'On-time promise — we respect your schedule',
];

export const PROCESS = [
  {
    step: '01',
    title: 'Book in 30 seconds',
    desc: 'Pick a doctor and a time online, on WhatsApp, or over one quick call. No queues, no hold music.',
  },
  {
    step: '02',
    title: 'Walk in, be seen on time',
    desc: 'Your slot is honoured. Consultations start within 10 minutes of arrival — that’s our promise.',
  },
  {
    step: '03',
    title: 'Leave with a clear plan',
    desc: 'Digital prescription, lab work under the same roof, and follow-up reminders so nothing slips.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'My father’s cardiac scare was handled with such calm urgency — ECG, specialist and treatment plan within 90 minutes. I’ve never seen a clinic move like this.',
    name: 'Priyanka R.',
    context: 'Daughter of a cardiac patient',
  },
  {
    quote: 'Booked at 9 AM on WhatsApp, saw the pediatrician at 11, had lab reports by evening. As a working parent, this clinic gives me hours of my life back.',
    name: 'Karthik S.',
    context: 'Parent, pediatric care',
  },
  {
    quote: 'The first doctor in years who sat down and actually listened. No rushed two-minute consult, no unnecessary tests. Just honest medicine.',
    name: 'Fathima N.',
    context: 'Internal medicine patient',
  },
  {
    quote: 'The insurance desk handled my entire cashless claim while I had my coffee. I did precisely nothing. Remarkable.',
    name: 'Suresh V.',
    context: 'Orthopedic day procedure',
  },
  {
    quote: 'Annual health check felt like a spa visit — calm space, zero waiting, and a doctor who walked me through every single report line by line.',
    name: 'Divya M.',
    context: 'Executive health check',
  },
];

export const INSURERS = [
  'Star Health', 'HDFC ERGO', 'ICICI Lombard', 'Niva Bupa', 'Care Health',
  'Aditya Birla', 'Bajaj Allianz', 'New India Assurance', 'Tata AIG',
];

export const FAQS = [
  {
    q: 'Do you accept walk-ins, or only appointments?',
    a: 'Walk-ins are always welcome, but booked patients are seen first. Booking takes 30 seconds online or on WhatsApp and guarantees your slot — most same-day slots are gone by noon.',
  },
  {
    q: 'Is cashless insurance available?',
    a: 'Yes — we have a dedicated insurance desk supporting cashless claims with 25+ providers including Star Health, HDFC ERGO, ICICI Lombard and Niva Bupa. Bring your policy card; we handle the paperwork.',
  },
  {
    q: 'How fast do I get my lab reports?',
    a: 'Most reports from our NABL-accredited in-house lab are delivered digitally within 6 hours. You’ll get them on WhatsApp and email, and your doctor reviews them the same day where needed.',
  },
  {
    q: 'What are the consultation fees?',
    a: 'General medicine consultations start at ₹500 and specialist consultations at ₹800. Health-check packages start at ₹1,999. Follow-ups within 7 days are free.',
  },
  {
    q: 'Do you offer home sample collection?',
    a: 'Yes — book before 7 PM and our phlebotomist visits your home the next morning, anywhere within 8 km of the clinic. Reports are delivered digitally the same day.',
  },
  {
    q: 'What about emergencies outside clinic hours?',
    a: 'Our helpline is answered 24/7. For life-threatening emergencies please call 108 immediately; for urgent advice our on-call doctor will guide you and arrange priority care the next morning.',
  },
];

export const NAV_LINKS = [
  { label: 'Services', target: '#services' },
  { label: 'Doctors', target: '#doctors' },
  { label: 'Why Us', target: '#about' },
  { label: 'Stories', target: '#stories' },
  { label: 'Visit', target: '#visit' },
];

export const TIME_SLOTS = [
  '9:00 AM', '10:30 AM', '12:00 PM', '2:30 PM', '4:30 PM', '6:00 PM', '7:30 PM',
];
