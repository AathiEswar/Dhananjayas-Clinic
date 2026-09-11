/* Site content — services, doctors, facilities, testimonials, FAQs, stats for Sai Multispeciality Klinic (Guduvanchery, Chennai). */

export const SPECIALTIES_TICKER = [
  'General Medicine & Family Health', 'Dermatology & Cosmetology',
  'Obstetrics & Gynaecology', 'Orthopaedics & Joint Care',
  'Pulmonology & Chest Medicine', 'Psychiatry & Mind Wellness',
  'Paediatrics & Child Health', 'ENT Specialist Care',
  'Diabetology & Lifestyle Care', 'Minor Emergency & Nursing',
  'Diagnostic & Blood Laboratory', 'Guduvanchery · Open 24/7 Intake',
];

export const BROCHURE_IMAGES = [
  {
    id: 'facility-reception',
    title: 'Outpatient Reception & Patient Lounge',
    desc: 'Spacious, hygienic waiting lounge with dedicated registration and pharmacy assistance.',
    src: '/clinic-reception.jpg',
    tag: 'Clinic Reception',
  },
  {
    id: 'facility-consultation',
    title: 'Specialist Consultation Chambers',
    desc: 'Private, well-equipped doctor chambers for detailed clinical examination and confidential care.',
    src: '/clinic-hero-consultation.jpg',
    tag: 'Consultation Room',
  },
  {
    id: 'facility-diagnostics',
    title: 'Diagnostic Lab & Sample Testing',
    desc: 'Prompt blood tests, diabetic screening, and rapid diagnostic services with certified reporting.',
    src: '/clinic-diagnostics.jpg',
    tag: 'Laboratory & Vitals',
  },
];

export const SERVICES = [
  {
    id: 'general-medicine',
    featured: true,
    icon: 'steth',
    title: 'General Medicine & Diabetology',
    tamilTitle: 'பொது மருத்துவம் & சர்க்கரை நோய் சிகிச்சை',
    desc: 'Comprehensive outpatient diagnosis and treatment for viral fevers, diabetes, hypertension, gastrointestinal illnesses, and preventive health checkups.',
    chips: ['Fever Clinic', 'Diabetes Management', 'Hypertension', 'Preventive Care'],
    meta: 'Dr. Kavin Kumar / Dr. Rajashanmugam / Dr. P. Malar',
  },
  {
    id: 'dermatology',
    featured: true,
    icon: 'sparkle',
    title: 'Dermatology & Cosmetology',
    tamilTitle: 'தோல் & அழகு பராமரிப்பு சிகிச்சை',
    desc: 'Expert clinical skin care by senior dermatologists for acne, fungal infections, eczema, psoriasis, hair fall, dandruff, and aesthetic skin rejuvenation.',
    chips: ['Acne & Scars', 'Hair Loss Therapy', 'Eczema & Allergy', 'Skin Rejuvenation'],
    meta: 'Dr. Sathyamoorthy K. R. & Dr. Siva Karthikeyan',
  },
  {
    id: 'gynaecology',
    featured: false,
    icon: 'heart',
    title: 'Obstetrics & Gynaecology',
    tamilTitle: 'மகப்பேறு மற்றும் மகளிர் நலம்',
    desc: 'Dedicated women’s healthcare covering pre-pregnancy counseling, antenatal checkups, menstrual irregularities, PCOD/PCOS management, and menopause care.',
    chips: ['Antenatal Care', 'PCOD / PCOS', 'Infertility Guidance', 'Women’s Wellness'],
    meta: 'Dr. Sushmitha & Dr. Harini S.',
  },
  {
    id: 'orthopaedics',
    featured: false,
    icon: 'pulse',
    title: 'Orthopaedics & Joint Care',
    tamilTitle: 'எலும்பு மற்றும் மூட்டு சிகிச்சை',
    desc: 'Specialized evaluation and management of arthritis, back pain, neck stiffness, knee pain, fractures, ligament sprains, and joint mobility rehabilitation.',
    chips: ['Joint Pain', 'Back & Neck Pain', 'Fracture Care', 'Arthritis Therapy'],
    meta: 'Dr. Mohan (Orthopaedic Surgeon)',
  },
  {
    id: 'pulmonology',
    featured: false,
    icon: 'pulse',
    title: 'Pulmonology & Chest Medicine',
    tamilTitle: 'நுரையீரல் & சுவாச சிகிச்சை',
    desc: 'In-depth respiratory care for chronic cough, asthma, bronchitis, COPD, environmental allergies, chest infections, and post-viral breathing support.',
    chips: ['Asthma & Allergy', 'Chronic Cough', 'Nebulization', 'COPD Care'],
    meta: 'Dr. Moniish V. (Chest Specialist)',
  },
  {
    id: 'psychiatry',
    featured: false,
    icon: 'heart',
    title: 'Psychiatry & Mind Care',
    tamilTitle: 'மனநலம் & ஆலோசனை சிகிச்சை',
    desc: 'Compassionate, confidential mental health evaluations, counseling, and medical management for stress, anxiety, depression, sleep disorders, and emotional wellness.',
    chips: ['Anxiety & Stress', 'Depression Care', 'Sleep Disorders', 'Counseling'],
    meta: 'Dr. K. Vignesh (Psychiatrist)',
  },
  {
    id: 'paediatrics',
    featured: false,
    icon: 'sparkle',
    title: 'Paediatrics & Child Health',
    tamilTitle: 'குழந்தைகள் நல மருத்துவம்',
    desc: 'Warm and gentle care for infants and children including common seasonal illnesses, vaccinations, nutrition advice, and developmental growth tracking.',
    chips: ['Childhood Fever', 'Vaccinations', 'Growth Tracking', 'Pediatric Nutrition'],
    meta: 'Child Health Clinic',
  },
  {
    id: 'ent',
    featured: false,
    icon: 'steth',
    title: 'ENT (Ear, Nose & Throat)',
    tamilTitle: 'காது, மூக்கு, தொண்டை சிகிச்சை',
    desc: 'Precise diagnosis for sinus congestion, tonsillitis, ear infections, throat pain, voice hoarseness, and allergy-induced nasal blockage.',
    chips: ['Sinusitis Relief', 'Ear Infections', 'Throat Pain', 'Allergy Management'],
    meta: 'ENT Clinic',
  },
  {
    id: 'minor-ot-nursing',
    featured: false,
    icon: 'pulse',
    title: 'Minor Procedures & Emergency Nursing',
    tamilTitle: 'அவசர சிகிச்சை & நர்சிங் சேவைகள்',
    desc: 'Clean outpatient procedure room for wound dressing, suturing, tetanus injections, IV fluids, nebulization, and immediate first-aid medical triage.',
    chips: ['Wound Dressing', 'Sutures & Removal', 'IV Fluids / Injections', 'First Aid'],
    meta: '24/7 Daycare Intake',
  },
];

export const ADDITIONAL_PROGRAMS = [
  {
    title: 'Comprehensive Health Checkup Packages',
    tamilTitle: 'முழு உடல் பரிசோதனை திட்டங்கள்',
    desc: 'Preventive health screening packages covering blood glucose, lipid profile, liver & kidney parameters, CBC, and doctor consultation.',
  },
  {
    title: 'Diagnostic Laboratory & Sample Collection',
    tamilTitle: 'மருத்துவ பரிசோதனை கூடம்',
    desc: 'Hygienic, rapid diagnostic testing on-site with partnered imaging scan referral support for ultrasound, X-ray, and CT scans.',
  },
];

export const DOCTORS = [
  {
    name: 'Dr. Sathyamoorthy K. R.',
    dept: 'Dermatologist & Cosmetologist',
    creds: 'MD / DNB (Dermatology, Venereology & Leprosy)',
    exp: 'Senior Specialist',
    slot: 'Mon – Sat, 6:00 PM – 9:00 PM',
    initials: 'SK',
    hue: 195,
    bio: 'Renowned skin and hair specialist in Guduvanchery trusted for treating acne, chronic allergies, psoriasis, hair thinning, and cosmetic skin care.',
  },
  {
    name: 'Dr. Mohan',
    dept: 'Orthopaedic Surgeon',
    creds: 'MS (Orthopaedics) · Bone & Joint Specialist',
    exp: 'Consultant Surgeon',
    slot: 'Tue / Thu / Sat, 6:30 PM – 8:30 PM',
    initials: 'DM',
    hue: 215,
    bio: 'Experienced in joint preservation, arthritis care, spinal pain management, fracture treatment, and mobility restoration.',
  },
  {
    name: 'Dr. Sushmitha',
    dept: 'Obstetrician & Gynaecologist',
    creds: 'MS (OBG) · Women’s Health Specialist',
    exp: 'Consultant Gynaecologist',
    slot: 'Mon – Fri, 5:30 PM – 8:00 PM',
    initials: 'DS',
    hue: 340,
    bio: 'Compassionate maternal and women’s health expert providing antenatal care, menstrual health, and fertility guidance.',
  },
  {
    name: 'Dr. Moniish V.',
    dept: 'Pulmonologist & Chest Specialist',
    creds: 'MD (Pulmonary Medicine) · DTCD',
    exp: 'Chest Physician',
    slot: 'Mon / Wed / Fri, 7:00 PM – 9:00 PM',
    initials: 'MV',
    hue: 170,
    bio: 'Specialist in respiratory illnesses, bronchial asthma, chronic cough, COPD, and environmental allergy management.',
  },
  {
    name: 'Dr. K. Vignesh',
    dept: 'Consultant Psychiatrist',
    creds: 'MD (Psychiatry) · Mind & Behavioral Wellness',
    exp: 'Consultant',
    slot: 'By Appointment, 6:00 PM – 8:30 PM',
    initials: 'KV',
    hue: 260,
    bio: 'Empathetic psychiatric clinician specialized in anxiety, mood disorders, insomnia, and stress counseling.',
  },
  {
    name: 'Dr. Harini S.',
    dept: 'Consultant Gynaecologist',
    creds: 'DGO, DNB (OBG) · Adolescent & Maternal Health',
    exp: 'Consultant',
    slot: 'Alternate Days, 10:00 AM – 1:00 PM',
    initials: 'HS',
    hue: 320,
    bio: 'Dedicated to PCOD management, adolescent health, cervical screening, and preventive gynecological care.',
  },
  {
    name: 'Dr. P. Malar',
    dept: 'Family Physician & Diabetologist',
    creds: 'MBBS, PGDHM · Diabetes & Family Health',
    exp: 'Senior Family Physician',
    slot: 'Daily, 9:00 AM – 1:00 PM',
    initials: 'PM',
    hue: 145,
    bio: 'Trusted family practitioner focusing on comprehensive diabetes control, hypertension monitoring, and elder care.',
  },
  {
    name: 'Dr. Kavin Kumar',
    dept: 'General Physician',
    creds: 'MBBS · Acute & General Medical Care',
    exp: 'Medical Officer',
    slot: 'Daily, Morning & Evening Slots',
    initials: 'KK',
    hue: 200,
    bio: 'Attentive general physician managing fevers, seasonal infections, gastric complaints, and triage care.',
  },
];

export const STATS = [
  { value: 8, suffix: '+', label: 'Years of community trust (Est. 2017)' },
  { value: 15, suffix: '+', label: 'Experienced specialist doctors' },
  { value: 10, suffix: '+', label: 'Medical departments & OPD' },
  { value: 4.7, suffix: '★', label: 'Patient satisfaction (180+ reviews)', decimals: 1 },
];

export const WHY_US = [
  'Multi-speciality doctors under one roof — Dermatology, Gynaecology, Orthopaedics, Pulmonology & more',
  'Convenient location right off GST Road, Guduvanchery (Opposite Chellamani & Co)',
  'Affordable OPD consultation fees with zero compromise on quality and patient attention',
  'In-house nursing support for wound care, IV fluids, injections, and nebulization',
  'Hygienic, welcoming facility open 24/7 for intake and emergency triage',
  'Prompt diagnostic blood testing and swift appointment scheduling with minimal wait times',
];

export const PROCESS = [
  {
    step: '01',
    title: 'Easy Appointment or Walk-in',
    desc: 'Call +91 89048 72002 or WhatsApp to book your preferred specialist slot, or walk directly into our clinic on VOC Street.',
  },
  {
    step: '02',
    title: 'Comprehensive Doctor Consultation',
    desc: 'Meet your specialist for a thorough clinical evaluation, symptom review, vitals check, and diagnostic screening if needed.',
  },
  {
    step: '03',
    title: 'Prescription, Treatment & Follow-up',
    desc: 'Receive transparent treatment advice, nursing procedures if required, lifestyle guidance, and proactive follow-up care.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Dr. Sathyamoorthy is one of the best dermatologists in the Guduvanchery area. He listened patiently to my skin allergy problem and prescribed very effective medicines. Within one week my itching and redness disappeared.',
    name: 'G. Vignesh',
    context: 'Guduvanchery resident · Skin Consultation',
  },
  {
    quote: 'Visited Sai Multispeciality Klinic for severe knee pain. Dr. Mohan explained the issue clearly and suggested simple exercises and medication. Very polite staff and clean clinic setup near Chellamani & Co.',
    name: 'S. Balamurugan',
    context: 'Urapakkam resident · Orthopaedic Care',
  },
  {
    quote: 'Consulted for pregnancy checkup with Dr. Sushmitha. She was extremely gentle, reassuring, and addressed all our questions with warmth. Convenient location right off GST Road without having to travel into Chennai city.',
    name: 'K. Priya & Ramesh',
    context: 'Chengalpattu · Gynaecology Care',
  },
  {
    quote: 'Had high viral fever and body aches. The duty doctor and nursing staff immediately took my vitals, gave medication, and provided clear dietary guidance. Very affordable consultation fee and zero unnecessary tests.',
    name: 'A. Sathish',
    context: 'Srinivasapuram · General Medicine',
  },
];

export const FAQS = [
  {
    q: 'Where is Sai Multispeciality Klinic located?',
    a: 'We are situated at Survey No: 94/2, 94/9A, Door No. 45/1 (Ground Floor, No. 54), VOC Street, N.G.O. Colony, Srinivasapuram, Guduvanchery, Chengalpattu - 603202, right opposite to Chellamani & Co and near Sri Rani Mahal off GST Road.',
  },
  {
    q: 'What are the clinic OPD consultation hours?',
    a: 'Our clinic is open 24/7 for patient intake and daycare nursing. Specialist doctor OPD consultations run in two primary slots: Morning (9:00 AM – 1:00 PM) and Evening (5:00 PM – 9:00 PM). Specific specialist timings can be confirmed by phone.',
  },
  {
    q: 'How do I schedule an appointment with a specialist?',
    a: 'You can book by calling +91 89048 72002 / +91 99411 30300, sending a WhatsApp message, or using the booking form on this website. Walk-ins are also warmly accommodated.',
  },
  {
    q: 'Which medical specialties are available at the clinic?',
    a: 'We have consulting doctors in Dermatology & Cosmetology, Obstetrics & Gynaecology, Orthopaedics & Joint Care, Pulmonology & Respiratory Medicine, Psychiatry & Mental Wellness, General Medicine, Paediatrics, and ENT.',
  },
  {
    q: 'Are diagnostic tests and nursing procedures done at the clinic?',
    a: 'Yes, we provide routine blood and urine testing, blood sugar screening, wound dressing, sutures, injections, IV fluid administration, and nebulization. Advanced imaging scans are facilitated with partnered diagnostic centers nearby on GST Road.',
  },
];

export const NAV_LINKS = [
  { label: 'Specialties', target: '#services' },
  { label: 'Facilities', target: '#facilities' },
  { label: 'Doctors', target: '#doctors' },
  { label: 'Patient Reviews', target: '#stories' },
  { label: 'Visit Clinic', target: '#visit' },
];

export const TIME_SLOTS = [
  '9:30 AM', '11:00 AM', '12:30 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '8:30 PM',
];
