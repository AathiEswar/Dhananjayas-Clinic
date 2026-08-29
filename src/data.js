/* Site content — services, doctors, testimonials, FAQs, stats for Vetri Hospital (Vinayagapuram, Chennai). */

export const SPECIALTIES_TICKER = [
  'General Medicine', 'Pediatrics & Child Care', 'General & Laparoscopic Surgery',
  'Orthopedics', 'Cardiology', 'Dermatology & Skin Care', 'Nephrology',
  'Diabetes & BP Care', 'Fever & Infection Care', '24/7 Emergency Casualty',
];

export const SERVICES = [
  {
    id: 'general-consultation',
    featured: true,
    icon: 'steth',
    title: 'General Physician & Family Care',
    desc: 'Comprehensive consultations for cold, flu, viral fevers, seasonal infections, respiratory issues, and family healthcare by Dr. G. T. Kumaragururajan.',
    chips: ['Dr. G. T. Kumaragururajan', 'Fever & Infection', 'Acute Care', 'Prescriptions'],
    meta: 'Daily OPD Consultations',
  },
  {
    id: 'multispecialty-opd',
    featured: true,
    icon: 'heart',
    title: 'Multispecialty Consultant OPD',
    desc: 'Specialist consultations with visiting experts across Pediatrics, Orthopedics, General Surgery, Dermatology, Cardiology, Nephrology, and Oncology.',
    chips: ['Pediatrics', 'Orthopedics', 'Surgery', 'Dermatology'],
    meta: 'Specialist Panels',
  },
  {
    id: 'pediatric-care',
    featured: false,
    icon: 'sparkle',
    title: 'Pediatrics & Child Health Care',
    desc: 'Dedicated child consultations, pediatric fever management, growth tracking, and routine vaccinations to keep your child healthy.',
    chips: ['Child Specialist', 'Vaccinations', 'Growth Tracking', 'Pediatric Fever'],
    meta: 'Pediatric OPD',
  },
  {
    id: 'chronic-care',
    featured: false,
    icon: 'pulse',
    title: 'Chronic Disease Care',
    desc: 'Long-term management and routine monitoring for Diabetes, High Blood Pressure (Hypertension), Thyroid, and Lipid control.',
    chips: ['Diabetes Care', 'Hypertension / BP', 'Thyroid Screening', 'Lipid Management'],
    meta: 'Routine Tracking',
  },
  {
    id: 'surgery-wound-care',
    featured: false,
    icon: 'flask',
    title: 'General Surgery & Minor Procedures',
    desc: 'General & laparoscopic surgical consultations, minor surgical interventions, wound dressing, and post-op care.',
    chips: ['General Surgery', 'Minor Procedures', 'Wound Dressing', 'Post-Op Care'],
  },
  {
    id: 'emergency-casualty',
    featured: false,
    icon: 'steth',
    title: 'Emergency & Urgent Outpatient Care',
    desc: 'Prompt medical care for acute fever, minor trauma, asthma attacks, dehydration, and urgent health concerns.',
    chips: ['Emergency Care', 'Acute Fever', 'First Aid', 'Sample Collection'],
  },
];

export const DOCTORS = [
  {
    name: 'Dr. G. T. Kumaragururajan',
    dept: 'General Physician & Family Medicine',
    creds: 'MBBS — Senior General Practitioner',
    exp: '15+ yrs exp.',
    slot: 'Today, 10:00 AM & 5:30 PM',
    initials: 'GK',
    hue: 180,
    bio: 'Experienced General Practitioner specializing in comprehensive family healthcare, viral fevers, chronic disease management, and primary diagnostic care in Vinayagapuram.',
  },
  {
    name: 'Dr. S. Aravind Vimal',
    dept: 'General & Laparoscopic Surgery',
    creds: 'MBBS, MS (General Surgery)',
    exp: 'Senior Specialist',
    slot: 'Consultant OPD',
    initials: 'AV',
    hue: 205,
    bio: 'Consultant General & Laparoscopic Surgeon offering surgical opinions, minor procedures, and abdominal surgical consultations.',
  },
  {
    name: 'Dr. Divya Thilak',
    dept: 'Pediatrics & Child Care',
    creds: 'MBBS, DCH (Pediatrics)',
    exp: 'Child Specialist',
    slot: 'Pediatric OPD',
    initials: 'DT',
    hue: 160,
    bio: 'Experienced Pediatrician providing compassionate child health management, infant care, and pediatric fever treatment.',
  },
];

export const STATS = [
  { value: 15, suffix: '+', label: 'Years serving Vinayagapuram' },
  { value: 35, suffix: 'k+', label: 'Patients treated' },
  { value: 100, suffix: '%', label: 'Patient dedication' },
  { value: 4.8, suffix: '★', label: 'Google Maps rating', decimals: 1 },
];

export const WHY_US = [
  'Attentive doctor care by Dr. G. T. Kumaragururajan & specialist consultant panel',
  'Honest & evidence-based medical treatments without excessive medication',
  'Prime location on Surapet Main Road, SBOA Teachers Nagar, Vinayagapuram',
  'Clean, hygienic hospital environment with emergency casualty support',
  'Easy phone (+91 89033 31234) & WhatsApp booking or walk-in consultations',
  'Comprehensive general healthcare and multispecialty OPD under one roof',
];

export const PROCESS = [
  {
    step: '01',
    title: 'Walk in or Book online',
    desc: 'Walk straight into the hospital on Surapet Main Road or message us on WhatsApp for a quick consultation slot.',
  },
  {
    step: '02',
    title: 'Attentive Doctor Consultation',
    desc: 'Dr. G. T. Kumaragururajan and our specialists spend dedicated time understanding your symptoms and health history.',
  },
  {
    step: '03',
    title: 'Clear Diagnosis & Care Plan',
    desc: 'Receive digital prescriptions, practical health guidance, and genuine treatment recommendations.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Dr. G. T. Kumaragururajan is extremely calm and soft-spoken. He explains the root cause of fever clearly without prescribing unnecessary heavy medicines. Highly recommended family hospital in Vinayagapuram.',
    name: 'Rajesh Kumar',
    context: 'Vinayagapuram resident',
  },
  {
    quote: 'Very reliable clinic and hospital on Surapet Main Road. The pediatric consultation for my child and general physician care for my father were handled with great care.',
    name: 'Priya Dharshini',
    context: 'Family care patient',
  },
  {
    quote: 'Convenient location near SBOA Teachers Nagar, Vinayagapuram. Minimal waiting time and polite doctor staff. Clean and comfortable clinic.',
    name: 'Anand V.',
    context: 'Surapet resident',
  },
  {
    quote: 'Brought my mother for BP and blood sugar checkup. The doctor listened patiently and gave very practical diet advice in Tamil. Great healthcare center for Kolathur area.',
    name: 'Murugan S.',
    context: 'Kolathur patient',
  },
];

export const FAQS = [
  {
    q: 'Where is Vetri Hospital located?',
    a: 'Vetri Hospital is located at No. C1B, Surapet Main Road, SBOA Teachers Nagar, Vinayagapuram, Kolathur, Chennai - 600099 (directly on Surapet Main Road).',
  },
  {
    q: 'What are the consultation timings at Vetri Hospital?',
    a: 'Outpatient consultation hours are Monday to Sunday: Morning (9:00 AM – 1:30 PM) and Evening (5:00 PM – 9:00 PM). Emergency casualty care is available 24/7.',
  },
  {
    q: 'Do I need an appointment, or can I walk in directly?',
    a: 'Walk-ins are always welcome during OPD hours. For minimal waiting time, you can call us at +91 89033 31234 or message on WhatsApp to reserve your slot.',
  },
  {
    q: 'Which doctors and specialties are available at Vetri Hospital?',
    a: 'Our facility features Dr. G. T. Kumaragururajan (General Physician) along with consultant specialists in General Surgery, Pediatrics, Orthopedics, Cardiology, Dermatology, Nephrology, and Oncology.',
  },
  {
    q: 'How do I contact Vetri Hospital for inquiries?',
    a: 'You can call us directly at +91 89033 31234 or email vetrihospital.vinayagapuram@gmail.com for appointment assistance or directions.',
  },
];

export const NAV_LINKS = [
  { label: 'Services', target: '#services' },
  { label: 'Doctors', target: '#doctors' },
  { label: 'Reviews', target: '#stories' },
  { label: 'Location', target: '#visit' },
];

export const TIME_SLOTS = [
  '9:00 AM', '10:30 AM', '11:30 AM', '5:00 PM', '6:30 PM', '7:30 PM', '8:30 PM',
];
