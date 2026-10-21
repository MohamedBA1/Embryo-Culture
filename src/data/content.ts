import { NavItem, MetricItem, SolutionItem, GrowthStage, ValueItem, ShowcaseImage } from '../types';

import chairmanImg from '../assets/images/النائب 2026-07-09 at 3.52.12 PM.jpeg';

export const COMPANY_DETAILS = {
  nameEn: 'EMBRYO CULTURE',
  nameAr: 'إمبريو كالتشر',
  taglineEn: 'NURTURING LIFE',
  taglineAr: 'رعاية الحياة',
  sloganEn: 'We Know ... We Can',
  sloganAr: 'نعلم ... فنستطيع',
  chairman: {
    nameEn: 'Hon. Sayed Samir',
    nameAr: 'النائب سيد سمير',
    titleEn: 'Chairman & Founder',
    titleAr: 'رئيس مجلس الإدارة والمؤسس',
    image: chairmanImg,
    quoteEn: 'Plant tissue culture is not merely science; it is the fundamental bridge to food sovereignty and environmental resilience.',
    quoteAr: 'إن زراعة الأنسجة النباتية ليست مجرد علم مختبري، بل هي الجسر الحقيقي نحو السيادة الغذائية والاستدامة الزراعية.',
  },
  contact: {
    addressEn: 'First Floor, Centro Mall, Lotus Area, 5th Settlement, New Cairo, Egypt',
    addressAr: 'الدور الأول، سنترو مول، منطقة اللوتس، التجمع الخامس، القاهرة الجديدة، مصر',
    phone: '+20 2538 3277',
    email: 'sayed.samir@embryoculture.com',
    supportEmail: 'contact@embryoculture.com',
    website: 'www.embryoculture.com',
  },
  social: [
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
  ],
};

export const NAV_LINKS: NavItem[] = [
  { id: 'about', label: { en: 'About', ar: 'عن الشركة' }, href: '#about' },
  { id: 'solutions', label: { en: 'Solutions', ar: 'حلولنا' }, href: '#solutions' },
  { id: 'contact', label: { en: 'Contact Us', ar: 'اتصل بنا' }, href: '#contact' },
  { id: 'showcase', label: { en: 'Facilities', ar: 'المرافق' }, href: '#showcase' },
];

export const HERO_CONTENT = {
  badge: {
    en: 'Pioneering Botanical Biotechnology',
    ar: 'رواد التكنولوجيا الحيوية النباتية',
  },
  title1: {
    en: 'Engineering Plant Resilience.',
    ar: 'هندسة المرونة النباتية.',
  },
  title2: {
    en: 'Nurturing Life.',
    ar: 'رعاية الحياة.',
  },
  description: {
    en: 'Embryo Culture leads high-precision in vitro micropropagation, somatic embryogenesis, and elite germplasm preservation — empowering commercial growers with certified pathogen-free, climate-resilient cultivars.',
    ar: 'تقود إمبريو كالتشر تقنيات التكاثر الدقيق المخبري، وتطور الأجنة الجسدية، وحفظ الأصول الوراثية النادرة — لنزود كبرى المزارع والمستثمرين بشتلات معتمدة خالية تماماً من الفيروسات وعالية الإنتاجية.',
  },
  primaryCta: {
    en: 'Discover Our Solutions',
    ar: 'استكشف حلولنا المتطورة',
  },
  secondaryCta: {
    en: 'Interactive Growth Demo',
    ar: 'محاكاة مراحل النمو',
  },
  trustPill: {
    en: 'ISO 17025 Certified In Vitro Laboratory · Cairo Cleanroom Facility',
    ar: 'مختبرات زراعة أنسجة معتمدة آيزو 17025 · منشأة الغرف المعقمة بالقاهرة',
  },
};

export const METRICS: MetricItem[] = [
  {
    value: '15M+',
    label: { en: 'Micropropagated Plantlets', ar: 'شتلة نسيجية منتجة' },
    subtext: { en: 'Commercial delivery capacity', ar: 'طاقة تسليم وتوريد تجاري' },
  },
  {
    value: '99.4%',
    label: { en: 'True-to-Type Viability', ar: 'نسبة التطابق الوراثي والنجاح' },
    subtext: { en: 'Strict genomic verification', ar: 'فحوصات البصمة الوراثية' },
  },
  {
    value: '40+',
    label: { en: 'Elite Crop Cultivars', ar: 'صنف زراعي عالي القيمة' },
    subtext: { en: 'Date palms, berries, citrus & olives', ar: 'نخيل، فواكه، حمضيات وزيتون' },
  },
  {
    value: '0.0%',
    label: { en: 'Pathogen Tolerance Standard', ar: 'معدل خلو الفيروسات والآفات' },
    subtext: { en: 'Triple ELISA & PCR validated', ar: 'فحوصات الـ PCR المخبرية الثلاثية' },
  },
];

export const ABOUT_CONTENT = {
  kicker: { en: 'About Embryo Culture', ar: 'عن إمبريو كالتشر' },
  heading: {
    en: 'Where Botanical Science Meets Scalable Agricultural Impact',
    ar: 'حيث تلتقي علوم النبات الحيوية مع الإنتاجية الزراعية الواسعة',
  },
  p1: {
    en: 'Founded with a clear commitment to precision biology, Embryo Culture operates at the frontier of agricultural science. Under the visionary leadership of Chairman Hon. Sayed Samir, our Cairo-headquartered biotech facility bridges academic plant embryogenesis with industrial-scale agricultural propagation.',
    ar: 'تأسست إمبريو كالتشر انطلاقاً من التزام راسخ بالدقة البيولوجية والريادة العلمية. وبقيادة رئيس مجلس الإدارة النائب سيد سمير، يجمع مجمعنا التقني في القاهرة الجديدة بين أحدث أبحاث الأجنة النباتية المخبرية والإنتاج الزراعي التجاري فائق الجودة.',
  },
  p2: {
    en: 'By rescuing delicate zygotic embryos, standardizing hormonal morphogenetic pathways, and cultivating in sterile laminar air environments, we eliminate seasonal dependencies and guarantee vigorous, true-to-type planting stock for modern agribusiness.',
    ar: 'من خلال استنقاذ الأجنة النباتية، وضبط مسارات الهرمونات المغذية، والزراعة في بيئات هوائية فائقة التعقيم، نقضي على مشاكل المواسم ونضمن للمزارع مخزوناً متفوقاً متطابقاً وراثياً وذا مناعة استثنائية.',
  },
  pillars: [
    {
      title: { en: 'Somatic Embryogenesis', ar: 'تكوين الأجنة الجسدية' },
      desc: { en: 'Hormonally controlled cellular induction creating vigorous, uniform cloned embryos.', ar: 'تحفيز خلوي دقيق لإنتاج أجنة نباتية متطابقة وعالية الحيوية.' },
    },
    {
      title: { en: 'Cleanroom Quarantine', ar: 'حجر صحي معقم بالكامل' },
      desc: { en: 'HEPA-filtered Class 100 cleanrooms preventing bacterial and viral transmission.', ar: 'غرف معقمة بنظام فلاتر HEPA فائقة الدقة لمنع أي ملوثات حيوية.' },
    },
    {
      title: { en: 'Controlled Acclimatization', ar: 'أقلمة تدريجية ذكية' },
      desc: { en: 'Computer-automated glasshouses preparing fragile in vitro plantlets for harsh desert soils.', ar: 'بيوت زجاجية مؤتمتة تؤهل الشتلات لتحمل البيئات الحقلية القاسية.' },
    },
  ],
};

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'embryo-propagation',
    number: '01',
    title: {
      en: 'In Vitro Embryo Culture & Micropropagation',
      ar: 'زراعة الأجنة والتكاثر النسيجي الدقيق',
    },
    tagline: {
      en: 'Rapid clonal multiplication from elite botanical explants',
      ar: 'إكثار استنساخي فائق السرعة من أمهات نباتية متميزة',
    },
    description: {
      en: 'High-density multiplication using calibrated Murashige & Skoog nutrient protocols. Multiplies single donor plantlets into hundreds of thousands of uniform, vigorous clones annually.',
      ar: 'إنتاج مكثف باستخدام وسائط غذائية معايرة بدقة، مما يضاعف العينة النباتية الواحدة إلى مئات الآلاف من الشتلات المتطابقة والقوية سنوياً.',
    },
    features: {
      en: ['Zero seasonal dormancy constraints', 'True-to-type genetic fidelity guaranteed', 'Triple pathogen screening protocol'],
      ar: ['تخطي فترات السكون والتقلبات الموسمية', 'ضمان التطابق الوراثي الكامل مع الصنف الأم', 'فحص ثلاثي صارم لخلو الأمراض'],
    },
    impactMetric: { en: 'Up to 25x faster multiplication', ar: 'تكاثر أسرع بمعدل 25 ضعفاً' },
    icon: 'Sparkles',
    badge: { en: 'Core Discipline', ar: 'التخصص الأساسي' },
  },
  {
    id: 'cryo-germplasm',
    number: '02',
    title: {
      en: 'Elite Germplasm Banking & Cryobanking',
      ar: 'بنك الأصول الوراثية والحفظ التجميدي',
    },
    tagline: {
      en: 'Securing irreplaceable biodiversity and elite parent lines',
      ar: 'تأمين وحماية التنوع الوراثي والسلالات النباتية النادرة',
    },
    description: {
      en: 'Ultra-low temperature storage (-196°C) for plant shoot tips, embryonic axes, and vegetative meristems, preserving generational agricultural assets indefinitely without genetic drift.',
      ar: 'حفظ فائق التبريد في النيتروجين السائل (-196°م) للقمم النامية والأجنة النباتية، لحماية الأصول الزراعية لعقود دون أي تغيرات جينية.',
    },
    features: {
      en: ['Liquid nitrogen cryo-preservation', 'DNA fingerprinted accession registers', 'Rapid revival protocols on demand'],
      ar: ['حفظ بالنيتروجين السائل فائق الأمان', 'توثيق البصمة الوراثية لكل مدخل نسيجي', 'بروتوكولات إنعاش سريعة عند الطلب'],
    },
    impactMetric: { en: 'Decades of genetic preservation', ar: 'حفظ وراثي يمتد لعقود' },
    icon: 'ShieldCheck',
    badge: { en: 'Strategic Asset', ar: 'أصل استراتيجي' },
  },
  {
    id: 'climate-resilience',
    number: '03',
    title: {
      en: 'Climate & Salinity Resilient Cultivars',
      ar: 'أصناف متكيفة مع الجفاف والملوحة',
    },
    tagline: {
      en: 'Selecting rootstocks optimized for arid and saline soils',
      ar: 'انتخاب أصول نباتية متفوقة للأراضي الصحراوية والمالحة',
    },
    description: {
      en: 'Custom in vitro selection under controlled osmotic and saline stress to identify resilient somaclones capable of thriving in high-salinity water and extreme temperature shifts.',
      ar: 'انتخاب نسيجي تحت ضغوط أسموزية وملحية مدروسة لانتقاء سلالات تمتلك قدرة فطرية على الازدهار في المياه المالحة ودرجات الحرارة القاسية.',
    },
    features: {
      en: ['Tolerant up to 6,000+ ppm salinity', 'Accelerated root biomass branching', 'Optimized for Middle East & North Africa soils'],
      ar: ['تحمل ملوحة تفوق 6,000 جزء في المليون', 'شبكة جذور متفرقة تضاعف امتصاص المياه', 'مصممة لبيئات الشرق الأوسط وشمال أفريقيا'],
    },
    impactMetric: { en: '+38% water efficiency', ar: '+38% كفاءة في استهلاك المياه' },
    icon: 'SunMedium',
    badge: { en: 'Environmental Impact', ar: 'أثر بيئي مباشر' },
  },
  {
    id: 'phytosanitary-diagnostics',
    number: '04',
    title: {
      en: 'Advanced Molecular Phytosanitary Diagnostics',
      ar: 'التشخيص الجزيئي وفحوصات السلامة النباتية',
    },
    tagline: {
      en: 'Real-time PCR & serological virus indexing',
      ar: 'فحص ميكروبيولوجي وجزيئي دقيق ضد الفيروسات',
    },
    description: {
      en: 'Comprehensive diagnostic screening covering viroids, phytoplasmas, latent systemic bacteria, and nematodes before certified material leaves our laboratory.',
      ar: 'فحص جزيئي شامل يشمل الفيرودات، الفايتوبلازما، والبكتيريا الكامنة قبل خروج أي دفعة شتلات من المختبر، مصحوبة بشهادة صحية معتمدة.',
    },
    features: {
      en: ['Quantitative Real-Time PCR testing', 'Double-antibody sandwich ELISA panels', 'Official phytosanitary certificate export readiness'],
      ar: ['اختبارات Real-Time PCR الكمية', 'فحوصات ELISA المناعية الدقيقة', 'شهادات صحة نباتية معتمدة للتصدير الدولي'],
    },
    impactMetric: { en: '100% Virus-Indexed Stock', ar: '100% خلو موثق من الفيروسات' },
    icon: 'Microscope',
    badge: { en: 'Laboratory Standard', ar: 'معيار مختبري' },
  },
  {
    id: 'biostimulants',
    number: '05',
    title: {
      en: 'Precision Micro-Nutrition & Phyto-stimulants',
      ar: 'التغذية الدقيقة والمحفزات الحيوية المتخصصة',
    },
    tagline: {
      en: 'Endogenous metabolic boosters for critical growth stages',
      ar: 'مركبات حيوية لتعزيز التمثيل الغذائي وبناء المناعة',
    },
    description: {
      en: 'Tailored organic hormonal and amino-acid formulations designed to accelerate cellular division, strengthen xylem walls, and reduce transplant shock during field planting.',
      ar: 'تركيبات حيوية متطورة من الأحماض الأمينية ومنظمات النمو العضوية لتسريع الانقسام الخلوي وتدعيم الأوعية الخشبية وتقليل صدمة النقل للحقل.',
    },
    features: {
      en: ['Custom root architecture enhancers', 'Organic biological inoculants', 'Reduced chemical fertilizer dependency'],
      ar: ['محفزات بناء شبكة الجذور الثانوية', 'لقاحات حيوية نافعة تعزز امتصاص العناصر', 'تقليل الاعتماد على الأسمدة الكيميائية'],
    },
    impactMetric: { en: '-45% transplant shock rate', ar: '-45% خفض صدمة النقل للحقل' },
    icon: 'Leaf',
    badge: { en: 'Plant Nutrition', ar: 'تغذية نباتية' },
  },
  {
    id: 'commercial-nursery',
    number: '06',
    title: {
      en: 'Turnkey Commercial Nursery Acclimatization',
      ar: 'الأقلمة التجارية الشاملة وتجهيز المزارع',
    },
    tagline: {
      en: 'From sterile culture tube to open field success',
      ar: 'من أنبوب الاختبار المعقم إلى الحصاد الحقلي الوفير',
    },
    description: {
      en: 'State-of-the-art hardening greenhouses with automated fogging, microclimate regulation, and mycorrhizal inoculation ensuring highest survival rates upon field planting.',
      ar: 'بيوت أقلمة فائقة الحداثة بنظم الضباب الآلي والتحكم الذكي في الرطوبة والضوء، مع إضافة الفطريات الجذرية النافعة لضمان أعلى معدلات النجاح الحقلي.',
    },
    features: {
      en: ['Automated climate-controlled bays', 'Hardened root systems ready for field', 'On-site agronomic advisory & delivery'],
      ar: ['أقسام أقلمة بمناخ مبرمج حاسوبياً', 'مجموع جذري قوي جاهز للغرس الفوري', 'إشراف زراعي ميداني حتى استقرار الشتلات'],
    },
    impactMetric: { en: '>98% field survival index', ar: '>98% نسبة نجاح الغرس الحقلي' },
    icon: 'Sprout',
    badge: { en: 'Field Integration', ar: 'تكامل ميداني' },
  },
];

export const TECH_INNOVATION = {
  kicker: { en: 'Biotechnology & Innovation', ar: 'التكنولوجيا الحيوية والابتكار' },
  heading: {
    en: 'The Science of Accelerated Plant Embryo Culture',
    ar: 'علم وهندسة استنبات الأجنة النباتية المتسارع',
  },
  subheading: {
    en: 'Nature + Science + Technology + Growth: An integrated ecosystem ensuring uncompromised genetic vigor.',
    ar: 'الطبيعة + العلم + التكنولوجيا + النمو: منظومة متكاملة تضمن حيوية جينية فائقة وإنتاجية استثنائية.',
  },
  metrics: [
    { label: { en: 'PAR Light Spectrum', ar: 'طيف الإضاءة التخليقية' }, value: '450–660nm', note: { en: 'Targeted chlorophyll absorption', ar: 'امتصاص مثالي للكلوروفيل' } },
    { label: { en: 'Sucrose & Macronutrients', ar: 'السكروز والمغذيات الدقيقة' }, value: 'MS Formula', note: { en: 'Micron-calibrated bio-availability', ar: 'معايرة ميكرونية دقيقة' } },
    { label: { en: 'Air Sterility Index', ar: 'مؤشر نقاء الهواء' }, value: 'ISO Class 5', note: { en: 'Continuous positive pressure', ar: 'ضغط هواء موجب مستمر' } },
    { label: { en: 'Explants per Batch', ar: 'عينة نسيجية لكل دفعة' }, value: '50,000+', note: { en: 'Continuous bio-reactor throughput', ar: 'سعة المفاعلات الحيوية' } },
  ],
};

export const GROWTH_PROCESS: GrowthStage[] = [
  {
    step: '01',
    title: { en: 'Explant Selection & Sterilization', ar: 'انتقاء الأنسجة الأم والتعقيم الفائق' },
    description: {
      en: 'Screening superior mother plants with verified yield genetics, isolating apical meristem tissues under ultra-clean micro-filtration hoods.',
      ar: 'فحص دقيق للأشجار والأمهات المنتخبة ذات الإنتاجية الأعلى، وعزل القمم النامية في غرف تعقيم خاصة.',
    },
    scientificParam: { en: '0.1% NaOCl + Tween-20 sterilization protocol', ar: 'بروتوكول تعقيم نسيجي كيميائي دقيق 0.1%' },
    duration: { en: 'Days 1–7', ar: 'الأيام 1–7' },
    viability: '99.8%',
  },
  {
    step: '02',
    title: { en: 'In Vitro Induction & Culture', ar: 'الحث النسيجي والزراعة المغذية' },
    description: {
      en: 'Placing pristine tissues into customized nutrient agar enriched with calibrated auxin and cytokinin ratios to initiate cell division.',
      ar: 'غرس الأنسجة المعقمة في وسائط أجار هلامية غنية بالأكسينات والسيتوكينينات لتحفيز انقسام الخلايا.',
    },
    scientificParam: { en: 'Murashige & Skoog (MS) modified medium', ar: 'وسط موراشيج وسكوج المغذي المعدل' },
    duration: { en: 'Weeks 2–6', ar: 'الأسابيع 2–6' },
    viability: '99.5%',
  },
  {
    step: '03',
    title: { en: 'Somatic Embryogenesis & Multiplication', ar: 'تكوين الأجنة وتضاعف البراعم' },
    description: {
      en: 'Stimulating embryonic structures to produce robust adventitious shoots, exponentially multiplying certified disease-free clones.',
      ar: 'تحفيز البنى الجنينية لإنتاج براعم خضرية متعددة ومضاعفة السلالات الخالية من الأمراض بشكل متسارع.',
    },
    scientificParam: { en: 'Controlled 16h photoperiod @ 24°C ± 1°C', ar: 'دورة إضاءة 16 ساعة مع حرارة 24°م ± 1°م' },
    duration: { en: 'Weeks 7–12', ar: 'الأسابيع 7–12' },
    viability: '99.2%',
  },
  {
    step: '04',
    title: { en: 'Root Induction & Vascular Hardening', ar: 'حث الجذور وتصلب الأوعية الناقلة' },
    description: {
      en: 'Transferring to specialized rooting media promoting vigorous taproot and secondary root systems before atmospheric transition.',
      ar: 'النقل لوسائط تحفيز الجذور لتكوين شبكة جذرية كثيفة قادرة على الاعتماد الذاتي قبل نقلها للهواء الطبيعي.',
    },
    scientificParam: { en: 'IBA & NAA root-activation synergy', ar: 'تنشيط هرموني متوازن لتكوين الجذور' },
    duration: { en: 'Weeks 13–16', ar: 'الأسابيع 13–16' },
    viability: '98.9%',
  },
  {
    step: '05',
    title: { en: 'Acclimatization & Sustainable Field Delivery', ar: 'الأقلمة البيئية والتسليم الحقلي' },
    description: {
      en: 'Gradual humidity reduction in smart automated greenhouses, conditioning the plants for immediate high-survival field plantation.',
      ar: 'خفض الرطوبة تدريجياً داخل بيوت الأقلمة الذكية لتأهيل الشتلة للتكيف مع التربة الحقلية والشمس المباشرة بنجاح تام.',
    },
    scientificParam: { en: 'Computerized fogging & mycorrhizal inoculation', ar: 'ضباب إلكتروني دقيق ولقاحات فطرية حيوية' },
    duration: { en: 'Weeks 17–20', ar: 'الأسابيع 17–20' },
    viability: '98.5%',
  },
];

export const VALUES_LIST: ValueItem[] = [
  {
    title: { en: 'Rigorous Scientific Protocol', ar: 'دقة المنهج العلمي الصارم' },
    description: {
      en: 'Every propagation cycle is calibrated to peer-reviewed biological methodologies and strict genomic validation.',
      ar: 'تخضع كل دورة إنتاج لبروتوكولات علمية محكمة واختبارات معملية مطابقة لأعلى المعايير العالمية.',
    },
    iconName: 'Atom',
  },
  {
    title: { en: 'Zero-Pathogen Commitment', ar: 'التزام مطلق بخلو الأمراض' },
    description: {
      en: 'Our sterile cleanroom boundaries ensure that delivered plantlets are 100% free of viruses, bacteria, and soil nematodes.',
      ar: 'تضمن بيئة العمل المعقمة تسليم شتلات نقية 100% خالية من كافة الفيروسات والبكتيريا ونيماتودا التربة.',
    },
    iconName: 'Shield',
  },
  {
    title: { en: 'Climate-Adapted Genetics', ar: 'أصناف مؤهلة لتحديات المناخ' },
    description: {
      en: 'We actively engineer and select cultivars that consume less water while producing higher commercial yields in warm climates.',
      ar: 'نعمل على انتخاب أصناف تتميز بكفاءة عالية في استخدام المياه وتحمل ملوحة التربة والحرارة المرتفعة.',
    },
    iconName: 'Sun',
  },
  {
    title: { en: 'Commercial Scalability', ar: 'طاقة إنتاجية تجارية هائلة' },
    description: {
      en: 'Capable of supplying millions of uniform seedlings per season with seamless delivery and technical field follow-up.',
      ar: 'قدرة استيعابية لتوريد ملايين الشتلات المتطابقة في الموسم الواحد مع دعم فني وإشراف ميداني مستمر.',
    },
    iconName: 'TrendingUp',
  },
  {
    title: { en: 'Agronomic Partnership', ar: 'شراكة زراعية متكاملة' },
    description: {
      en: 'We do not just ship seedlings; our specialized agronomists support farm operators through planting, nutrition, and harvest.',
      ar: 'لا نكتفي ببيع الشتلات، بل يقف خبراؤنا الزراعيون جنباً إلى جنب مع المزارعين من الغرس حتى الحصاد.',
    },
    iconName: 'Users',
  },
  {
    title: { en: 'Environmental Stewardship', ar: 'المسؤولية البيئية والاستدامة' },
    description: {
      en: 'Micropropagation preserves rare natural species and prevents wild harvesting, protecting natural ecosystems for future generations.',
      ar: 'يساهم الإكثار النسيجي في صون الأنواع النباتية المهددة وحماية التنوع الحيوي والطبيعي للأجيال القادمة.',
    },
    iconName: 'Globe',
  },
];

import labImg from '../assets/images/lab_tissue_culture_1790777598056.jpg';
import greenhouseImg from '../assets/images/smart_greenhouse_1790777609366.jpg';
import seedlingImg from '../assets/images/seedling_growth_1790777619463.jpg';
import fieldImg from '../assets/images/agronomist_field_1790777643902.jpg';

export const SHOWCASE_IMAGES: ShowcaseImage[] = [
  {
    id: 'lab',
    title: { en: 'Cleanroom In Vitro Culture Suites', ar: 'أجنحة زراعة الأنسجة المعقمة' },
    category: { en: 'Laboratory Facility', ar: 'المرفق المخبري' },
    description: {
      en: 'Laminar air-flow hoods maintaining sterile conditions for embryonic explant micropropagation.',
      ar: 'كبائن تدفق هواء معقم تحافظ على بيئة نقية تماماً لنمو الأجنة والشتلات النسيجية.',
    },
    src: labImg,
    stats: { en: 'Class 100 HEPA Filtration', ar: 'فلاتر هيبا فئة 100' },
  },
  {
    id: 'greenhouse',
    title: { en: 'Automated Acclimatization Glasshouses', ar: 'صوب الأقلمة الذكية المؤتمتة' },
    category: { en: 'Hardening Facility', ar: 'مرافق الأقلمة' },
    description: {
      en: 'Computerized climate regulation, automated ultrasonic misting, and calibrated PAR lighting.',
      ar: 'تحكم مناخي حاسوبي بالكامل مع أنظمة رذاذ بالموجات فوق الصوتية وإضاءة نباتية محسوبة.',
    },
    src: greenhouseImg,
    stats: { en: '98.5% Acclimatization Rate', ar: '98.5% نسبة نجاح الأقلمة' },
  },
  {
    id: 'seedling',
    title: { en: 'Vigorous Botanical Embryo Sprouting', ar: 'نمو الأجنة وتفرع الجذور الميكرونية' },
    category: { en: 'Biological Excellence', ar: 'الجودة البيولوجية' },
    description: {
      en: 'Macro view of developing juvenile plantlet displaying healthy vascular xylem and dense root hairs.',
      ar: 'لقطة مقربة لشتلة في مرحلة النمو الأولي تُظهر سلامة الأنسجة الوعائية وشعيرات الجذور الكثيفة.',
    },
    src: seedlingImg,
    stats: { en: 'Triple Root Mass Density', ar: 'كثافة مجموع جذري مضاعفة 3x' },
  },
  {
    id: 'field',
    title: { en: 'Field Performance & Agronomic Inspections', ar: 'المتابعة الميدانية والنتائج الحقلية' },
    category: { en: 'Commercial Harvest', ar: 'الإنتاج الحقلي' },
    description: {
      en: 'Dedicated agricultural scientists conducting regular root viability and disease-free audits.',
      ar: 'مهندسون وخبراء زراعيون يجرون فحوصات دورية لحيوية المحاصيل والتأكد من أعلى درجات الإنتاجية.',
    },
    src: fieldImg,
    stats: { en: 'Ongoing Agronomic Support', ar: 'إشراف ومتابعة حقلية مستمرة' },
  },
];
