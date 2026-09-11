/* Site content — services, natural healers, facilities, YouTube video testimonies, FAQs, stats for MOUNAA HEALTH CENTER (Kannivakkam, Guduvanchery). */

export const YOUTUBE_VIDEOS = [
  {
    id: 'XfGf8UB9jU0',
    title: 'L4 and L5 Back Pain Relief - குணமடைந்தோர் பதிவு',
    desc: 'Severe lower back pain & L4-L5 disc compression treated successfully through Classical Acupuncture and natural alignment.',
    category: 'Spine & Disc Care',
    duration: '1:44',
    badge: 'Featured Recovery',
  },
  {
    id: 'VefzfgejFEo',
    title: '3 Years Chronic Leg Pain Relieved - 3 வருட கால் வலி குணம்',
    desc: 'Patient suffering from 3 years of excruciating radiating leg nerve pain and mobility restriction finds complete relief without surgery.',
    category: 'Sciatica & Nerve Pain',
    duration: '2:04',
  },
  {
    id: 'oEyzCRkwmP8',
    title: 'Frozen Shoulder & Arm Mobility - தோள்பட்டை வலி நிவாரணம்',
    desc: 'Complete restoration of shoulder rotation and relief from agonizing night-time shoulder stiffness through targeted cupping and meridian points.',
    category: 'Joint & Shoulder Pain',
    duration: '1:15',
  },
  {
    id: '0LuT5MuGlNc',
    title: 'Irregular Periods & Hormonal Health - மாதவிடாய் கோளாறு குணம்',
    desc: 'Natural healing for menstrual irregularities, severe cramp management, and hormonal restoration through holistic naturopathy.',
    category: "Women's Health",
    duration: '1:22',
  },
  {
    id: 'SIB5BjX2hYY',
    title: 'Chronic Knee & Joint Pain Recovery - மூட்டு வலி சிகிச்சை',
    desc: 'Elderly patient with severe osteoarthritis knee pain regains ease in walking and climbing stairs without knee replacement surgery.',
    category: 'Arthritis & Joints',
    duration: '1:40',
  },
  {
    id: 'ETMpGoiH5r0',
    title: 'Acute Pain Relief via Acupuncture & Electropathy',
    desc: 'Combining classical meridian needle therapy with botanical electro-homeopathy to eliminate systemic inflammation and pain.',
    category: 'Holistic Pain Therapy',
    duration: '1:46',
  },
];

export const SPECIALTIES_TICKER = [
  'Classical Meridian Acupuncture',
  'Hijama & Wet Cupping Therapy',
  'L4-L5 Disc & Back Pain Relief',
  'Cervical Spondylosis & Neck Stiffness',
  'Knee & Joint Mobility Restoration',
  'Electro-Homeopathy Botanical Medicine',
  'Sciatica & Radiating Nerve Care',
  'Migraine & Sinus Headache Relief',
  'Digestive & Gastric Meridian Healing',
  'Deep Stress & Insomnia Relaxation',
  'Women’s Hormonal & Menstrual Care',
  'Kannivakkam, Guduvanchery · 5.0★ Google Rated',
];

export const BROCHURE_IMAGES = [
  {
    id: 'facility-acupuncture',
    title: 'Classical Acupuncture Treatment Suite',
    desc: 'Serene, clean private therapy rooms with sterile, single-use micro-needles and comforting ambiance for deep energetic meridian restoration.',
    src: '/mounaa-acupuncture-hero.jpg',
    tag: 'Acupuncture Suite',
  },
  {
    id: 'facility-cupping',
    title: 'Hijama & Wet / Dry Cupping Chamber',
    desc: 'Clinical-grade hygienic cupping setup for toxic blood detoxification, deep muscle tension release, and back pain recovery.',
    src: '/mounaa-cupping-therapy.jpg',
    tag: 'Cupping & Detox',
  },
  {
    id: 'facility-consultation',
    title: 'Pulse Diagnosis & Holistic Consultation',
    desc: 'Detailed natural diagnosis evaluating organ meridians, tongue examination, pulse balance, and tailored herbal/dietary healing protocols.',
    src: '/clinic-hero-consultation.jpg',
    tag: 'Consultation & Pulse Exam',
  },
];

export const SERVICES = [
  {
    id: 'classical-acupuncture',
    featured: true,
    icon: 'sparkle',
    title: 'Classical Acupuncture & Acupressure',
    tamilTitle: 'பாரம்பரிய அக்குபஞ்சர் சிகிச்சை',
    desc: 'Time-tested meridian needle therapy that dissolves Qi energy blocks, reduces nerve inflammation, relieves chronic agony, and activates self-healing mechanisms without chemicals or surgery.',
    chips: ['L4-L5 Disc Bulge', 'Nerve Compression', 'Sciatica Relief', 'Migraine & Headaches'],
    meta: 'Healer Vinithraj (Lead Acupuncturist)',
  },
  {
    id: 'hijama-cupping',
    featured: true,
    icon: 'pulse',
    title: 'Hijama & Cupping Therapy (Wet & Dry)',
    tamilTitle: 'ஹிஜாமா & கப்பிங் சிகிச்சை',
    desc: 'Ancient medical suction and micro-detoxification that draws out stagnant toxified blood, alleviates severe myofascial muscle knots, accelerates cellular oxygenation, and resets body energy.',
    chips: ['Deep Tissue Detox', 'Back & Neck Stiffness', 'Blood Circulation', 'Zero Chemicals'],
    meta: 'Certified Hijama Specialists',
  },
  {
    id: 'spine-disc-care',
    featured: true,
    icon: 'pulse',
    title: 'L4-L5 Spine, Sciatica & Disc Care',
    tamilTitle: 'முதுகுத்தண்டு & இடுப்பு வலி சிகிச்சை',
    desc: 'Specialized non-invasive treatment for lumbar disc herniation, disc dehydration, shooting nerve pain down legs, and spinal stiffness without surgical complications.',
    chips: ['L4-L5 Disc Bulge', 'Sciatica Pain', 'Lumbar Spondylosis', 'Posture Alignment'],
    meta: 'Non-Surgical Spine Relief',
  },
  {
    id: 'joint-mobility',
    featured: false,
    icon: 'steth',
    title: 'Knee, Shoulder & Joint Mobility',
    tamilTitle: 'மூட்டு மற்றும் தோள்பட்டை வலி நிவாரணம்',
    desc: 'Natural regenerative therapy for knee osteo-arthritis, frozen shoulder, tennis elbow, calcaneal heel spurs, and athletic sprains to restore flexible, pain-free mobility.',
    chips: ['Knee Osteo-Arthritis', 'Frozen Shoulder', 'Heel Spur', 'Cartilage Rejuvenation'],
    meta: 'Joint & Mobility Therapy',
  },
  {
    id: 'homeopathy-electropathy',
    featured: false,
    icon: 'heart',
    title: 'Homeopathy & Electro-Homeopathy',
    tamilTitle: 'ஹோமியோபதி & எலக்ட்ரோபதி இயற்கை மருத்துவம்',
    desc: 'Gentle, 100% side-effect-free botanical extracts and electro-homeopathic formulations that treat chronic digestive complaints, allergic asthma, sinusitis, and skin ailments from the root.',
    chips: ['Natural Remedies', 'Side-Effect Free', 'Digestive Balance', 'Immunity Boost'],
    meta: 'Healer Varalakshmi',
  },
  {
    id: 'womens-wellness',
    featured: false,
    icon: 'heart',
    title: 'Women’s Hormonal & Menstrual Wellness',
    tamilTitle: 'மாதவிடாய் & மகளிர் இயற்கை நலம்',
    desc: 'Holistic natural balance for irregular menstrual cycles, painful dysmenorrhea, PCOD/PCOS symptoms, thyroid support, post-partum recovery, and emotional harmony.',
    chips: ['Irregular Periods', 'PCOD / PCOS Care', 'Cramp Relief', 'Hormonal Balance'],
    meta: 'Healer Gayathri (Naturopath)',
  },
  {
    id: 'naturopathy-diet',
    featured: false,
    icon: 'sparkle',
    title: 'Naturopathy & Dietary Detox',
    tamilTitle: 'இயற்கை உணவு முறை & நச்சு நீக்கம்',
    desc: 'Personalized food-as-medicine programs, alkaline detox regimens, therapeutic fasting guidance, and circadian adjustments to eliminate chronic systemic toxemia.',
    chips: ['Food as Medicine', 'Herbal Cleanses', 'Gut Microbiome', 'Vitality Reset'],
    meta: 'Natural Lifestyle Counsel',
  },
  {
    id: 'stress-insomnia',
    featured: false,
    icon: 'heart',
    title: 'Mind Calm, Sleep & Neurological Balance',
    tamilTitle: 'மன அமைதி & ஆழ்ந்த தூக்கம் சிகிச்சை',
    desc: 'Targeting vagus nerve acupuncture points, cranial relaxation techniques, and mindful breathing to conquer chronic insomnia, panic, stress, and nervous fatigue.',
    chips: ['Deep Sleep Restoration', 'Anxiety & Tension', 'Cranial Relaxation', 'Temple of Silence Care'],
    meta: 'The Temple of Silence',
  },
];

export const ADDITIONAL_PROGRAMS = [
  {
    title: 'Full-Body Meridian & Pulse Assessment',
    tamilTitle: 'முழு உடல் நாடி மற்றும் ஆற்றல் பரிசோதனை',
    desc: 'Comprehensive holistic assessment identifying organ meridian energy deficits, spinal misalignments, and lifestyle triggers before starting acupuncture.',
  },
  {
    title: 'Natural Chronic Condition Reversal Protocol',
    tamilTitle: 'நாள்பட்ட நோய்களுக்கான இயற்கை தீர்வு',
    desc: 'Multi-session holistic plan integrating Classical Acupuncture, Hijama Cupping, and Electro-Homeopathic botanical medicine for permanent relief.',
  },
];

export const DOCTORS = [
  {
    name: 'Healer Vinithraj',
    dept: 'Classical Acupuncture & Hijama Cupping',
    creds: 'MD (Acu) · Certified Hijama Practitioner',
    exp: 'Lead Healer · 8+ Years Experience',
    slot: 'Mon – Sat, 9:00 AM – 8:30 PM',
    initials: 'VR',
    hue: 160,
    bio: 'Renowned classical acupuncturist in Kannivakkam / Guduvanchery with an exceptional track record of treating chronic L4-L5 disc compression, sciatica, and severe headaches without surgery.',
  },
  {
    name: 'Healer Gayathri',
    dept: 'Consultant Naturopath & Women’s Health',
    creds: 'BNYS / Dip. Naturopathy & Acupressure',
    exp: 'Naturopath · 6+ Years Experience',
    slot: 'Daily, 10:00 AM – 5:00 PM',
    initials: 'GH',
    hue: 42,
    bio: 'Specialist in women’s hormonal balance, natural fertility preparation, menstrual cycle regulation, herbal detox nutrition, and gentle lifestyle counseling.',
  },
  {
    name: 'Healer Varalakshmi',
    dept: 'Homeopathy & Electro-Homeopathy',
    creds: 'DHMS / Electro-Homeopathy Consultant',
    exp: 'Botanical Consultant · 7+ Years Experience',
    slot: 'Tue / Thu / Sat, 4:00 PM – 8:00 PM',
    initials: 'VL',
    hue: 190,
    bio: 'Expert in non-toxic homeopathic and botanical electro-homeopathic formulas for chronic allergic rhinitis, digestive ailments, chronic eczema, and systemic inflammation.',
  },
];

export const STATS = [
  { value: 5.0, suffix: '★', label: '100% 5-Star Rating (Google Verified)', decimals: 1 },
  { value: 1200, suffix: '+', label: 'Patients relieved naturally without surgery' },
  { value: 100, suffix: '%', label: 'Side-effect-free, drugless therapies' },
  { value: 8, suffix: '+', label: 'Holistic therapies & meridian modalities' },
];

export const WHY_US = [
  '100% 5.0 Star Google Rating with verified patient testimonials and YouTube recovery videos',
  'Zero surgical intervention & zero pharmaceutical side effects — root-cause meridian healing',
  'Specialized clinical expertise in chronic L4-L5 disc compression, sciatica, and frozen shoulder',
  'Authentic Hijama cupping performed with single-use sterile disposable equipment and maximum hygiene',
  'Convenient location right at Kannivakkam Bus Stop, Guduvanchery – Arungal Road',
  'Direct recovery video library on YouTube (@MOUNAA369) documenting real patient transformations',
];

export const PROCESS = [
  {
    step: '01',
    title: 'Consultation & Pulse Assessment',
    desc: 'Detailed evaluation of your symptoms, pulse diagnosis, and posture/spine assessment to pinpoint the root meridian blockages.',
  },
  {
    step: '02',
    title: 'Targeted Acupuncture & Cupping Session',
    desc: 'Gentle, relaxing application of sterile single-use micro-needles and/or therapeutic cupping to stimulate blood flow and pain relief.',
  },
  {
    step: '03',
    title: 'Natural Prescription & Recovery Plan',
    desc: 'Receive side-effect-free botanical remedies, postural guidance, dietary advice, and progressive follow-up for lasting health.',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Healer Vinithraj is an extraordinary acupuncturist. I suffered from severe L4-L5 lower back pain for over a year and could hardly sit for 20 minutes. After 4 sessions of acupuncture and cupping, my pain dropped by 90% and I can walk comfortably again without painkillers.',
    name: 'R. Saravanan',
    context: 'Guduvanchery resident · L4-L5 Back Pain Relief',
  },
  {
    quote: 'Visited Mounaa Health Center for chronic migraine and neck stiffness. The treatment was extremely calm and gentle. Within three sessions, my morning headaches stopped completely. Highly recommended clinic in Kannivakkam!',
    name: 'K. Subhashini',
    context: 'Kannivakkam resident · Migraine Treatment',
  },
  {
    quote: 'I had severe frozen shoulder and couldn’t lift my arm above chest height. Healer Vinithraj and team treated with acupuncture and cupping. Now my arm has full mobility! They explained everything clearly. True temple of silence and healing.',
    name: 'M. Venkatesh',
    context: 'Chengalpattu · Shoulder Mobility Recovery',
  },
  {
    quote: 'Very neat and hygienic clinic atmosphere. Consulted for irregular menstrual cycle and fatigue. The natural herbal advice and acupuncture gave wonderful results in 2 months. Watch their YouTube videos to see how many people have recovered!',
    name: 'D. Bhuvana',
    context: 'Arungal · Natural Women’s Health',
  },
];

export const FAQS = [
  {
    q: 'Where is MOUNAA HEALTH CENTER located?',
    a: 'We are situated on the First Floor, right at Kannivakkam Bus Stop, Guduvanchery, Chengalpattu District - 603202 (on the Guduvanchery – Arungal Road). It is very easy to access by bus or private vehicle with parking available.',
  },
  {
    q: 'Does acupuncture hurt? Is it safe?',
    a: 'Acupuncture uses hair-thin, sterile, single-use disposable micro-needles. Most patients feel only a slight tingling sensation or gentle warmth as energy meridians open, followed by deep bodily relaxation. It is completely safe and free from chemicals.',
  },
  {
    q: 'What conditions are treated with Hijama (Cupping Therapy)?',
    a: 'Hijama is exceptionally effective for chronic back pain, cervical neck stiffness, migraine, muscle spasms, athletic fatigue, poor blood circulation, and toxic stagnation. We adhere to clinical-grade sterilization with single-use sterile cups and blades.',
  },
  {
    q: 'Can L4-L5 disc pain and sciatica be relieved without surgery?',
    a: 'Yes! Hundreds of patients at Mounaa Health Center have avoided surgery for L4-L5 disc bulges, lumbar spondylosis, and sciatic nerve pain through our combined protocol of Classical Acupuncture, localized cupping, and meridian alignment. Watch our recovery videos on YouTube (@MOUNAA369) to see real results.',
  },
  {
    q: 'How many sessions are typically required?',
    a: 'Acute pain often experiences noticeable relief in 1 to 3 sessions. Chronic complaints such as long-term disc pain or severe joint stiffness usually require 5 to 10 sessions for lasting structural healing and tissue restoration.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can book by calling +91 93456 64749, sending a WhatsApp message, or using the booking form on this website. While walk-ins are accepted during clinic hours, booking in advance ensures minimal waiting time.',
  },
];

export const NAV_LINKS = [
  { label: 'Treatments', target: '#services' },
  { label: 'Facilities', target: '#facilities' },
  { label: 'Videos', target: '#videos' },
  { label: 'Healers', target: '#doctors' },
  { label: 'Reviews', target: '#stories' },
  { label: 'Visit', target: '#visit' },
];

export const TIME_SLOTS = [
  '9:30 AM', '11:00 AM', '12:30 PM', '4:30 PM', '5:30 PM', '6:30 PM', '7:30 PM', '8:00 PM',
];
