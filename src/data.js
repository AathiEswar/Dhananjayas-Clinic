/* Site content — services, therapists, testimonials, FAQs, stats for Healing Hands Child Development Centre (Thiruverkadu, Chennai). */

export const SPECIALTIES_TICKER = [
  'Occupational Therapy', 'Speech & Language Therapy', 'Physiotherapy',
  'Behaviour Therapy', 'Sensory Integration', 'Play & Learning Activities',
  'Early Intervention Programs', 'Parent Guidance & Counselling',
  'Nurturing Abilities · Empowering Futures',
];

export const BROCHURE_IMAGES = [
  {
    id: 'brochure-en',
    title: 'English Clinical Brochure',
    desc: 'Services, therapy approach, timing, and center details.',
    src: '/brochure-overview.jpg',
    tag: 'English Overview',
  },
  {
    id: 'brochure-ta',
    title: 'தமிழ் கையேடு (Tamil Brochure)',
    desc: 'எங்கள் சேவைகள், நேரம் மற்றும் தொடர்பு விவரங்கள்.',
    src: '/brochure-tamil.jpg',
    tag: 'தமிழ் பதிப்பு',
  },
];

export const SERVICES = [
  {
    id: 'speech-therapy',
    featured: true,
    icon: 'steth',
    title: 'Speech Therapy',
    tamilTitle: 'பேச்சு மற்றும் மொழி சிகிச்சை',
    desc: 'Helping children communicate better and express themselves. Tailored for speech delays, articulation, stuttering, and language development.',
    chips: ['Expressive Speech', 'Language Delay', 'Articulation', 'Communication'],
    meta: 'Speech & Language',
  },
  {
    id: 'occupational-therapy',
    featured: true,
    icon: 'sparkle',
    title: 'Occupational Therapy',
    tamilTitle: 'தொழில்சார் சிகிச்சை',
    desc: 'Enabling children to develop essential life skills for daily independence, sensory processing, fine motor coordination, and focus.',
    chips: ['Life Skills', 'Sensory Integration', 'Fine Motor', 'Independence'],
    meta: 'Core OT Program',
  },
  {
    id: 'physiotherapy',
    featured: true,
    icon: 'pulse',
    title: 'Physiotherapy',
    tamilTitle: 'உடற் சிகிச்சை',
    desc: 'Improving movement, strength, posture, balance, and physical functioning through gentle pediatric physical rehabilitation.',
    chips: ['Movement & Balance', 'Posture Correction', 'Strength Building', 'Mobility'],
    meta: 'Physical Rehabilitation',
  },
  {
    id: 'behaviour-therapy',
    featured: false,
    icon: 'heart',
    title: 'Behaviour Therapy',
    tamilTitle: 'நடத்தை சிகிச்சை',
    desc: 'Supporting positive behaviour, emotional regulation, and social well-being with clinically proven strategies for ADHD and social interaction.',
    chips: ['Positive Behaviour', 'ADHD Support', 'Emotional Regulation', 'Social Skills'],
    meta: 'Behavioural Wellness',
  },
  {
    id: 'sensory-integration',
    featured: false,
    icon: 'sparkle',
    title: 'Sensory Integration',
    tamilTitle: 'உணர்வு ஒருங்கிணைப்பு சிகிச்சை',
    desc: 'Helping children process sensory information effectively, calm overstimulation, and respond better to their surrounding environment.',
    chips: ['Sensory Processing', 'Focus & Calming', 'Vestibular Balance', 'Tactile Input'],
    meta: 'Sensory Therapy',
  },
  {
    id: 'play-learning',
    featured: false,
    icon: 'heart',
    title: 'Play & Learning Activities',
    tamilTitle: 'விளையாட்டு மற்றும் கற்றல் செயல்பாடுகள்',
    desc: 'Fun-based interactive learning designed to build cognitive agility, hand-eye coordination, motor skills, and essential social life skills.',
    chips: ['Fun Based Learning', 'Cognitive Skills', 'Motor Activities', 'Social Play'],
    meta: 'Developmental Play',
  },
];

export const ADDITIONAL_PROGRAMS = [
  {
    title: 'Early Intervention Programs',
    tamilTitle: 'ஆரம்பகால தலையீட்டு திட்டங்கள்',
    desc: 'Structured early assessment and proactive stimulation programs to support foundational developmental milestones.',
  },
  {
    title: 'Parent Guidance & Counselling',
    tamilTitle: 'பெற்றோர் வழிகாட்டுதல் மற்றும் ஆலோசனை',
    desc: 'Empowering parents with tailored home practice techniques, psychological guidance, and developmental milestone tracking.',
  },
];

export const DOCTORS = [
  {
    name: 'K. Preethi, MOT',
    dept: 'Lead Occupational Therapist & Child Development Specialist',
    creds: 'MOT (Master of Occupational Therapy) — Mental Health',
    exp: '3+ yrs clinical experience',
    slot: 'Mon – Fri, 9:00 AM – 7:00 PM',
    initials: 'KP',
    hue: 270,
    bio: 'Experienced Occupational Therapist specializing in child mental health, sensory integration, speech, behavioral, and developmental therapies in Thiruverkadu, Chennai.',
  },
];

export const STATS = [
  { value: 3, suffix: '+', label: 'Years dedicated service' },
  { value: 6, suffix: '+', label: 'Specialized therapy programs' },
  { value: 100, suffix: '%', label: 'Individualized child care' },
  { value: 4.9, suffix: '★', label: 'Parent trust rating', decimals: 1 },
];

export const WHY_US = [
  'Experienced and Qualified Therapists dedicated to pediatric mental and physical health',
  'Individualized Therapy Plans created specifically for every child’s unique pace',
  'Child-Friendly and Safe, stimulating environment equipped with modern therapy sensory equipment',
  'Evidence-Based Interventions with structured progress tracking and regular parent feedback',
  'Family-Centered Care and Support with practical home-program coaching',
  'Child Centric Approach · Compassionate Care · Goal Oriented Therapy · Building Skills for Life',
];

export const PROCESS = [
  {
    step: '01',
    title: 'Initial Consultation & Booking',
    desc: 'Call +91 70108 85386 or WhatsApp +91 75989 07494 to schedule an initial consultation and center tour.',
  },
  {
    step: '02',
    title: 'Comprehensive Child Assessment',
    desc: 'Detailed assessment of sensory, motor, speech, and behavioral milestones conducted by Lead Therapist K. Preethi, MOT.',
  },
  {
    step: '03',
    title: 'Personalized Therapy & Growth',
    desc: 'Engaging, goal-oriented sessions with regular parent reviews to celebrate milestones and build skills for life.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Healing Hands Child Development Centre has shown wonderful improvement in my son’s speech and motor skills. K. Preethi is extremely patient and caring with children.',
    name: 'S. Anitha',
    context: 'Thiruverkadu parent',
  },
  {
    quote: 'Excellent center for Occupational and Behaviour Therapy in Thiruverkadu. Highly structured sessions and regular feedback to parents after every session.',
    name: 'M. Karthik',
    context: 'Chennai parent',
  },
  {
    quote: 'Brought my daughter for speech delay. Within a few months, we see huge progress in her vocabulary and confidence. Very clean and supportive setup in RPS Complex.',
    name: 'Deepa R.',
    context: 'Poonamallee parent',
  },
  {
    quote: 'Professional therapists who understand child psychology deeply. Convenient location right opposite to Udhavum Karangal School on Therodum Veedhi.',
    name: 'V. Saravanan',
    context: 'Thiruverkadu resident',
  },
];

export const FAQS = [
  {
    q: 'Where is Healing Hands Child Development Centre located?',
    a: 'We are located at No. 34A, RPS Complex, Therodum Veedhi, Thiruverkadu, Chennai - 600077, directly opposite to Udhavum Karangal School.',
  },
  {
    q: 'What are the center working hours?',
    a: 'Monday to Friday: 9:00 AM – 7:00 PM | Saturday: 9:00 AM – 1:00 PM | Sunday: Closed.',
  },
  {
    q: 'What therapy programs are available?',
    a: 'We provide Speech Therapy, Occupational Therapy, Physiotherapy, Behaviour Therapy, Sensory Integration, Play & Learning Activities, Early Intervention, and Parent Guidance.',
  },
  {
    q: 'Who leads the clinical therapy at Healing Hands CDC?',
    a: 'Therapy sessions are designed and supervised by K. Preethi, MOT (Master of Occupational Therapy, Mental Health), with 3+ years of clinical specialization in child development.',
  },
  {
    q: 'How do I book an assessment for my child?',
    a: 'You can call us directly at +91 70108 85386 or message us on WhatsApp at +91 75989 07494 to schedule an evaluation.',
  },
];

export const NAV_LINKS = [
  { label: 'Therapies', target: '#services' },
  { label: 'Brochure', target: '#brochures' },
  { label: 'About Therapist', target: '#doctors' },
  { label: 'Parent Reviews', target: '#stories' },
  { label: 'Visit', target: '#visit' },
];

export const TIME_SLOTS = [
  '9:00 AM', '10:30 AM', '12:00 PM', '2:30 PM', '4:00 PM', '5:30 PM', '6:30 PM',
];
