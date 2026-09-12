/* Site content — services, doctors, procedures, testimonials, gallery, medical articles, FAQs, and navigation for Dr. Dhananjayas Hospitals & Clinic. */

export const SPECIALTIES_TICKER = [
  'Laser Piles Treatment (Hemorrhoids)',
  'Authentic Kshara Sutra Medicated Seton',
  'Anal Fistula Tract Sealing & Drainage',
  'Chronic Anal Fissure Spasm Relief',
  'Pilonidal Sinus Minimally Invasive Care',
  'Perianal Abscess & Blood Tumour (Katti) Relief',
  '30-Minute Day-Care Walk-Home Procedures',
  'Zero Sphincter Muscle Damage (100% Continence)',
  'Near-Zero Recurrence Rate (<1.5%)',
  'New Perungalathur · Tambaram · Porur · Koyambedu',
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About & Doctors', path: '/about-us' },
  { label: 'Treatments', path: '/treatments' },
  { label: 'Photo Gallery', path: '/gallery' },
  { label: 'Patient Reviews', path: '/testimonials' },
  { label: 'Branches & Visit', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'piles-care',
    featured: true,
    icon: 'pulse',
    title: 'Advanced Piles Care (Hemorrhoids Treatment)',
    tamilTitle: 'மூல நோய் நவீன சிகிச்சை (அறுவை சிகிச்சையின்றி)',
    desc: 'Expert diagnosis and treatment for Grade 1 to Grade 4 internal and external hemorrhoids, bleeding piles, and prolapsed tissue. Utilizing advanced laser ablation and rubber band ligation that seal hemorrhoidal vessels with virtually no pain and zero downtime.',
    chips: ['Grade 1–4 Piles', 'Bleeding Piles Relief', 'Same-Day Discharge', 'No Painful Cuts'],
    meta: 'Dr. Dhananjaya (25+ Years Experience)',
    longDesc: 'Hemorrhoids or Piles affect approximately 70% of the population at some point in their lives. They are distended, swollen veins in the lower rectum and anal canal caused by prolonged sitting, chronic constipation, straining, or hereditary factors. We provide non-surgical and day-care laser ablation that preserves delicate rectal mucosal tissues with same-day discharge.',
  },
  {
    id: 'kshara-sutra',
    featured: true,
    icon: 'sparkle',
    title: 'Authentic Kshara Sutra Therapy (Anal Fistula)',
    tamilTitle: 'க்ஷாரசூத்ரா ஆயுர்வேத சிகிச்சை (பௌத்திரம்)',
    desc: 'The globally acclaimed gold-standard Ayurvedic medicated seton procedure for simple, high, and complex recurrent anal fistulas. Medicated herbal threads gently cut and heal the infected tract simultaneously with near-zero recurrence and complete sphincter muscle preservation.',
    chips: ['Gold-Standard Seton', 'Zero Recurrence Rate', 'Sphincter Preserving', 'Complex Fistula'],
    meta: 'Ayurvedic Surgical Pioneer',
    longDesc: 'Unlike conventional surgical cutting (fistulotomy/fistulectomy) which risks cutting anal sphincter muscles and causing permanent fecal incontinence, authentic Kshara Sutra gradually debrides and epithelializes the tract without damaging muscular continence.',
  },
  {
    id: 'anal-fissure',
    featured: true,
    icon: 'heart',
    title: 'Anal Fissure (Parikartika) Spasm Relief',
    tamilTitle: 'ஆசனவாய் வெடிப்பு & கடுமையான வலி நிவாரணம்',
    desc: 'Immediate relief from excruciating burning pain, tearing sensations, and bleeding during bowel movements. Non-surgical spasm relaxation and mucosal healing therapy that repairs chronic tears permanently without incontinence.',
    chips: ['Instant Pain Relief', 'Sphincter Spasm Relief', 'Chronic Tear Repair', 'Non-Surgical'],
    meta: 'Immediate Spasm Control',
    longDesc: 'An anal fissure is a tear or split in the sensitive skin lining of the anal canal. The primary driver of chronic non-healing is internal anal sphincter muscle spasm. Our specialized protocols relax the muscular spasm, restore blood flow, and heal tears permanently.',
  },
  {
    id: 'blood-tumour-katti',
    featured: false,
    icon: 'pulse',
    title: 'Blood Tumour (Katti) & Perianal Abscess Drainage',
    tamilTitle: 'இரத்தக் கட்டி & ஆசனவாய் சீழ் கட்டி அவசர சிகிச்சை',
    desc: 'Prompt, hygienic local drainage and aseptic healing for painful swelling, boils, and blood tumours (katti) around the perianal area. Relieves severe throbbing agony immediately and prevents the infection from burrowing into a complex fistula.',
    chips: ['Immediate Relief', 'Local Anesthesia', 'Infection Control', 'Prevents Fistula'],
    meta: 'Emergency Daycare Intake',
    longDesc: 'Perianal abscesses or localized blood tumors (hematomas/katti) develop from blocked anal glands or ruptured subcutaneous veins. Immediate aseptic drainage under local anesthesia stops the infection before it transforms into a chronic fistula tunnel.',
  },
  {
    id: 'pilonidal-sinus',
    featured: false,
    icon: 'steth',
    title: 'Pilonidal Sinus (Nadivrana) Management',
    tamilTitle: 'வால் எலும்பு சீழ் கட்டி & தடம் சிகிச்சை',
    desc: 'Minimally invasive debridement and medicated track therapy for recurrent pilonidal sinus at the natal cleft. Eliminates hair nests and infected tunnels with minimal scarring and quick return to work.',
    chips: ['Minimal Scarring', 'Fast Wound Healing', 'Hair Nest Removal', 'Low Recurrence'],
    meta: 'Minimally Invasive Track Care',
    longDesc: 'Pilonidal sinus is a chronic tunnel in the tailbone crease containing ingrown hairs and debris. Medicated track application cleanses and seals the cavity without extensive excision or disfiguring scars.',
  },
  {
    id: 'colon-constipation-diet',
    featured: false,
    icon: 'sparkle',
    title: 'Digestive, Colon & Anti-Constipation Care',
    tamilTitle: 'மலச்சிக்கல் தடுப்பு & குடல் ஆரோக்கிய உணவு முறை',
    desc: 'Targeted medical and nutritional protocols to correct chronic constipation, hard stools, and straining — the root trigger of piles and fissures — restoring effortless daily bowel movement.',
    chips: ['Chronic Constipation', 'High-Fiber Protocols', 'Root-Cause Prevention', 'Digestive Health'],
    meta: 'Dietary & Lifestyle Counseling',
    longDesc: 'Preventing recurrence of all anorectal conditions begins with healthy colonic motility. We provide customized digestive counseling and dietary guidelines to ensure effortless, soft stools without straining.',
  },
];

export const MEDICAL_ARTICLES = [
  {
    id: 'fistula-kshar-sutra-advantages',
    title: 'Kshara Sutra Advantages Over Conventional Surgery',
    subtitle: 'Why medicos and clinical trials endorse Kshara Sutra as the safest cure for anal fistula',
    summary: 'Conventional surgery for fistula involves cutting anal tissues, which poses a severe 20%–40% risk of anal sphincter damage, leading to lifelong gas or stool leakage (fecal incontinence). In contrast, authentic Kshara Sutra uses a medicated seton thread coated with alkaline medicinal herbs (Snuhi, Apamarga Kshara, and Haridra) that cuts the tunnel micro-millimeter by micro-millimeter while simultaneously promoting healthy granulation tissue behind it. This guarantees 100% sphincter muscle preservation, negligible recurrence (<1.5%), zero hospital stay, and immediate walk-home recovery.',
    points: [
      'No cut to sphincter muscles — complete preservation of bowel continence',
      'Minimal pain performed under gentle local anesthesia',
      'Zero general anesthesia risks and no 3–5 day hospital confinement',
      'Clinical trial proven recurrence rate of less than 1.5% vs 20%–40% in surgery',
      'Resume desk work and normal routines within 24 to 48 hours',
    ],
  },
  {
    id: 'fistula-vs-piles-vs-fissure',
    title: 'Fistula vs Piles vs Fissure: How to Identify Your Symptoms',
    subtitle: 'A clinical diagnostic guide to understand your symptoms before consultation',
    summary: 'Many patients confuse these three conditions, delaying the right care. Piles (Hemorrhoids) are swollen vascular cushions that typically cause painless, bright red bleeding or lump protrusion. An Anal Fissure is a fresh tear in the mucosa characterized by sharp, razor-blade burning pain during and after defecation. Anal Fistula is an infected tunnel between the rectum and skin causing persistent pus discharge, stained undergarments, and recurring painful boils. Knowing the difference ensures timely, targeted intervention.',
    comparison: [
      { condition: 'Piles (Hemorrhoids)', symptoms: 'Painless bright red bleeding, painless swelling/lump prolapse, fullness in rectum' },
      { condition: 'Anal Fissure', symptoms: 'Severe sharp burning pain during stool, streaks of blood on paper, tight anal spasm' },
      { condition: 'Anal Fistula', symptoms: 'Foul-smelling pus/blood discharge, small opening near anus, recurrent painful boil' },
      { condition: 'Perianal Abscess / Katti', symptoms: 'Acute throbbing pain, tender feverish red swelling beside the anal verge' },
    ],
  },
  {
    id: 'blood-tumour-katti',
    title: 'Blood Tumour (Katti) & Perianal Abscess Care',
    subtitle: 'Emergency care for painful boils and blood clots around the anus',
    summary: 'A sudden, agonizing lump that appears near the anus is often a thrombosed external hemorrhoid (blood tumour / katti) or an acute perianal abscess. Attempting to squeeze or ignore it can force bacterial infection inward through the intersphincteric space, developing into a complex fistula. Immediate, gentle local evacuation of the blood clot or aseptic abscess drainage relieves excruciating throbbing pain within minutes.',
    points: [
      'Instant decompression of throbbing pain within 15 minutes of local drainage',
      'Prevents deep glandular infection from spreading into a high fistula tract',
      'Hygienic day-care treatment with no general hospital stay required',
      'Post-procedure antiseptic dressing and healing follow-up',
    ],
  },
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    src: '/clinic-assets/gallery-20.jpg',
    title: 'Day-Care Minor OT Suite',
    category: 'Day-Care OT',
    desc: 'Sterile surgical suite equipped for minimally invasive Kshara Sutra seton placement and laser piles ablation.',
  },
  {
    id: 'gal-2',
    src: '/clinic-assets/gallery-22.jpg',
    title: 'Sterilization & Anorectal Treatment Unit',
    category: 'Day-Care OT',
    desc: 'Hospital-grade autoclaving and aseptic preparation area ensuring zero infection risk.',
  },
  {
    id: 'gal-3',
    src: '/clinic-assets/gallery-24.jpg',
    title: 'Specialist Consultation Chamber',
    category: 'Chambers',
    desc: 'Private, dignified consultation chamber providing compassionate, confidential patient evaluation.',
  },
  {
    id: 'gal-4',
    src: '/clinic-assets/gallery-26.jpg',
    title: 'Diagnostic Examination Chamber',
    category: 'Diagnostics',
    desc: 'Comprehensive anorectal grading and digital assessment suite ensuring precision diagnosis.',
  },
  {
    id: 'gal-5',
    src: '/clinic-assets/gallery-28.jpg',
    title: 'Day-Care Patient Recovery Lounge',
    category: 'Facilities',
    desc: 'Comfortable post-procedure recovery room where patients rest comfortably before walking home the same day.',
  },
  {
    id: 'gal-6',
    src: '/clinic-assets/gallery-6.jpg',
    title: 'Clinic Reception & Welcome Desk',
    category: 'Facilities',
    desc: 'Welcoming reception desk facilitating swift check-in, priority scheduling, and minimal waiting times.',
  },
  {
    id: 'gal-7',
    src: '/clinic-assets/gallery-8.jpg',
    title: 'Confidential Patient Counseling Room',
    category: 'Chambers',
    desc: 'Dedicated space for empathetic doctor-patient counseling, dietary planning, and procedure walkthroughs.',
  },
  {
    id: 'gal-8',
    src: '/clinic-assets/gallery-10.jpg',
    title: 'Clinical Observation Suite',
    category: 'Facilities',
    desc: 'Hygienic observation suite for immediate post-procedure monitoring under dedicated nursing care.',
  },
  {
    id: 'gal-9',
    src: '/clinic-assets/gallery-12.jpg',
    title: 'Porur Hospital Consultation Area',
    category: 'Facilities',
    desc: 'Consultation facility at 6, Pillayar Koil St, Astalakshmi Nagar, Porur, Chennai.',
  },
  {
    id: 'gal-10',
    src: '/clinic-assets/gallery-14.jpg',
    title: 'G.R. Complex Main Center Exterior',
    category: 'Facilities',
    desc: 'First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, New Perungalathur.',
  },
  {
    id: 'gal-11',
    src: '/clinic-assets/doctor-photo-40.jpg',
    title: 'Dr. Venkhatesan In Clinical Chamber',
    category: 'Chambers',
    desc: 'Consultant proctologist with 25 years of specialized experience in fistula and piles management.',
  },
  {
    id: 'gal-12',
    src: '/dr-dhananjaya-portrait.jpg',
    title: 'Dr. Dhananjaya Senior Surgeon Desk',
    category: 'Chambers',
    desc: 'Founder and chief Ayurvedic surgeon with 25+ years of pioneering Kshara Sutra practice in Chennai.',
  },
];

export const BROCHURE_IMAGES = [
  {
    id: 'piles-grading-care',
    title: 'Piles Care & Anorectal Grading Diagnostic Suite',
    desc: 'Comprehensive clinical evaluation determining the exact grade of internal or external hemorrhoids to recommend targeted, non-surgical or minimally invasive treatment.',
    src: '/piles-treatment-banner.png',
    tag: 'Clinical Diagnosis',
  },
  {
    id: 'consultation-chamber',
    title: 'Dr. Dhananjaya Consultation Chambers',
    desc: 'Private, confidential consultation room ensuring utmost patient dignity, empathetic counseling, and clear explanation of treatment options.',
    src: '/dr-dhananjaya-portrait.jpg',
    tag: 'Doctor Chamber',
  },
  {
    id: 'procedure-recovery',
    title: 'Day-Care Minor OT & Patient Recovery Lounge',
    desc: 'Sterile, hygienic day-care procedure suite equipped for painless 30-minute laser and Kshara Sutra procedures with same-day discharge.',
    src: '/clinic-assets/gallery-20.jpg',
    tag: 'Day-Care Procedure Unit',
  },
];

export const ADDITIONAL_PROGRAMS = [
  {
    title: 'Comprehensive Anorectal Digital Evaluation',
    tamilTitle: 'முழுமையான ஆசனவாய் மருத்துவ பரிசோதனை',
    desc: 'Precise grading of hemorrhoids and high-resolution fistula tract assessment in a completely private, dignified clinical setting.',
  },
  {
    title: 'Permanent Recurrence-Free Follow-Up Protocol',
    tamilTitle: 'மீண்டும் வராமல் தடுக்கும் தொடர் கண்காணிப்பு',
    desc: 'Structured post-procedure wound inspection, healing confirmation, and lifestyle adjustments to guarantee permanent comfort.',
  },
];

export const DOCTORS = [
  {
    name: 'Dr. Dhananjaya',
    dept: 'Chief Proctologist & Kshara Sutra Pioneer',
    creds: 'BAMS / MS (Ayu-Surgery) · Senior Anorectal Specialist',
    exp: '25+ Years Experience · 10,000+ Treated',
    slot: 'Mon – Sat, 9:00 AM – 8:30 PM',
    initials: 'DD',
    hue: 195,
    image: '/dr-dhananjaya-portrait.jpg',
    bio: 'Renowned pioneer in anorectal surgery and authentic Kshara Sutra therapy in Chennai. Over 25 years of specialized surgical excellence treating thousands of high, complex, and recurrent piles, fistula, and fissure patients with near-zero recurrence and complete sphincter muscle preservation.',
  },
  {
    name: 'Dr. Venkhatesan',
    dept: 'Consultant Proctologist & Anorectal Specialist',
    creds: 'DNYAS · 25 Years Specialized Experience',
    exp: 'Senior Specialist · Fistula & Piles Doctor',
    slot: 'Daily, 10:00 AM – 7:30 PM',
    initials: 'DV',
    hue: 160,
    image: '/clinic-assets/doctor-photo-40.jpg',
    bio: 'Senior proctology specialist with 25 years of focused clinical expertise in Kshara Sutra seton therapy, acute fissure spasm relaxation, day-care piles management, and holistic patient recovery across New Perungalathur and Porur branches.',
  },
];

export const STATS = [
  { value: 25, suffix: '+', label: 'Years of proctology excellence' },
  { value: 10000, suffix: '+', label: 'Happy patients cured permanently' },
  { value: 100, suffix: '%', label: 'Sphincter muscle & continence preserved' },
  { value: 4.9, suffix: '★', label: 'Patient satisfaction rating (34+ reviews)', decimals: 1 },
];

export const WHY_US = [
  'Minimally invasive, virtually painless procedures performed under gentle local anesthesia',
  '30-minute day-care procedure with same-day walk-home discharge and zero hospital stay',
  'Zero sphincter muscle damage — 100% natural bowel control and continence guaranteed',
  'Authentic Kshara Sutra therapy with proven international track record of near-zero recurrence (<1.5%)',
  'Empathetic, confidential, and dignified care for sensitive anorectal conditions',
  'Multiple accessible centers: New Perungalathur (Tambaram) and Porur (Astalakshmi Nagar)',
];

export const PROCESS = [
  {
    step: '01',
    title: 'Confidential Consultation & Accurate Grading',
    desc: 'Private, empathetic clinical examination to accurately determine the condition grade (Piles Grade 1–4, Fistula tract type, or Fissure depth).',
  },
  {
    step: '02',
    title: '30-Minute Minimally Invasive Procedure',
    desc: 'Quick, gentle procedure (Kshara Sutra medicated seton or laser ablation) under local anesthesia with zero painful cuts and zero sphincter injury.',
  },
  {
    step: '03',
    title: 'Same-Day Discharge & Permanent Relief',
    desc: 'Walk home comfortably the same day, resume routine desk activities in 24–48 hours, and enjoy permanent, recurrence-free healing.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'I got piles for the past 20 years. Already we done surgery elsewhere but it did not cure. Finally I know about Dr. Dhananjayas clinic through my friend and came here. Within a week of treatment I got cured! Now I feel best. Doctor is very kind and compassionate.',
    name: 'Pushpa Nagaraj',
    context: 'Chennai · 20-Year Chronic Piles Relieved',
  },
  {
    quote: 'My name is Basha. I was suffering from piles complaint for a long time. I came to Dr. Dhananjaya’s hospital Porur clinic. Now I am much better, doctor is very kind and I have complete satisfaction. Thank you doctor!',
    name: 'Magbool Basha',
    context: 'Porur Branch, Chennai · Piles Treatment',
  },
  {
    quote: 'Finding a clinic that treats sensitive issues with such high levels of dignity and clinical expertise is rare. The diagnosis was precise, the explanation was clear, and the follow-up care was exceptional. Truly a life-changing experience.',
    name: 'Priya Ramachandran',
    context: 'Maduravoyal, Chennai · Fissure Care',
  },
  {
    quote: 'I was suffering for months and dreading cutting surgery, but Dr. Dhananjaya and Dr. Venkhatesan made the entire process comfortable and completely stress-free. The Kshara Sutra procedure worked wonders, and I am finally pain-free with no loss of control.',
    name: 'Venkatesh S.',
    context: 'Central Chennai · Complex Fistula Recovery',
  },
  {
    quote: 'Professional, clean, and extremely empathetic. The staff put my anxiety at ease. The day-care procedure took 30 minutes, I walked home immediately, and recovery was completely smooth. Highly recommended.',
    name: 'Suresh Kumar',
    context: 'Ramapuram, Chennai · Grade 3 Piles Relief',
  },
  {
    quote: 'Kshara Sutra treatment here cured my recurrent fistula that two previous surgeries failed to resolve. No incontinence, no hospital stay, and zero recurrence after 2 years.',
    name: 'Jayaprakash Kasinathan',
    context: 'Tambaram, Chennai · Recurrent Fistula Cure',
  },
];

export const FAQS = [
  {
    q: 'Are the procedures at Dr. Dhananjayas Clinic painful?',
    a: 'Most of our modern, minimally invasive procedures involve minimal discomfort and are performed under gentle local anesthesia. Our clinical focus is on ensuring your experience is virtually painless with a smooth, rapid recovery.',
  },
  {
    q: 'Will my piles or fistula return after treatment?',
    a: 'Our advanced treatments and authentic Kshara Sutra therapy offer permanent solutions by addressing the root cause of the condition. Unlike conventional surgery which has high recurrence (20%–40%) in fistula, Kshara Sutra has a clinically documented recurrence rate of less than 1.5%. Maintaining a high-fiber diet and hydration ensures lifelong comfort.',
  },
  {
    q: 'Is hospital admission required for Kshara Sutra or laser piles care?',
    a: 'No! All our treatments are performed as comfortable 30-minute day-care procedures. You can walk home comfortably on the same day without needing lengthy hospital stays or bed confinement.',
  },
  {
    q: 'Why is Kshara Sutra superior to conventional cutting surgery for fistula?',
    a: 'Conventional cutting surgery (fistulotomy) risks damaging the anal sphincter muscles, which can cause partial or total bowel incontinence (loss of control over gas and stools). Kshara Sutra uses a medicated linen thread coated with alkaline herbs that gradually cuts and heals the tract simultaneously over several weeks, preserving 100% of sphincter muscles and bowel control.',
  },
  {
    q: 'How soon can I return to normal work after the procedure?',
    a: 'Because our procedures are minimally invasive with no large surgical incisions, most patients resume routine office, desk work, and daily activities within 24 to 48 hours.',
  },
  {
    q: 'Where are your clinics located in Chennai?',
    a: 'We operate multiple accessible centers: (1) Main Center: First Floor, No. 3, G.R. Complex, NGO Nagar Main Road, SSM Nagar, New Perungalathur (near Tambaram); (2) Porur Hospital: 6, Pillayar Koil St, Astalakshmi Nagar, Porur; and (3) Koyambedu OPD Consultation Desk.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'You can book your appointment instantly by calling +91 73583 61723 or +91 97907 47350, chatting with us on WhatsApp, or submitting the online booking form on this website.',
  },
];

export const TIME_SLOTS = [
  '9:30 AM', '11:00 AM', '12:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:00 PM',
];

