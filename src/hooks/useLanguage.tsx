import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface LanguageContextType {
  language: "en" | "ar";
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.activities": "Activities",
    "nav.safety": "Safety",
    "nav.quality": "Quality",
    "nav.sustainability": "Sustainability",
    "nav.contact": "Contact Us",
    "nav.faq": "FAQ",
    "nav.cta": "Get Quote",
    "nav.corporateGovernance": "Corporate Governance",
    // Hero Section
    "hero.title": "Emdad Mubasher",
    "hero.company": "for transporting crude oil and petroleum derivatives LLC",
    "hero.subtitle": "Driven by Expertise, Powered by Reliability",
    "hero.cta": "Learn More",

    // Cards Section
    "cards.quality.title": "Quality Standards",
    "cards.quality.description":
      "We adhere to the highest quality standards to ensure efficient and safe oil product transportation.",
    "cards.faq.title": "Frequently Asked Questions",
    "cards.faq.description":
      "Find answers to common questions about our services, safety protocols, and transportation solutions.",
    "cards.contact.title": "Contact Us",
    "cards.contact.description":
      "Get in touch with our expert team for inquiries, quotes, or support regarding our transportation services.",
    "cards.learnMore": "Learn More",
    "cards.viewFaqs": "View FAQs",
    "cards.contactUs": "Contact Us Now",

    // Interactive Slider
    "slider.ambition": "Our Vision",
    "slider.ambition.description":
      "Leading the future of oil transportation with innovative solutions and unwavering commitment to excellence.",
    "slider.safety": "Safety Excellence",
    "slider.safety.description":
      "Implementing the highest safety standards and protocols to ensure secure transportation of petroleum products.",
    "slider.numbers": "Our Achievements",
    "slider.numbers.description":
      "Achieving remarkable milestones with over 800,000 km covered and 218,000 m³ transported in 2024.",
    "slider.partnerships": "Strategic Partnerships",
    "slider.partnerships.description":
      "Building strategic partnerships and fostering collaborative relationships across the industry.",

    // About Section
    "about.title": "About Emdad Mubasher",
    "about.description":
      "Emdad Mubasher, founded in 2019, specializes in oil transport in Syria, committed to providing safe and efficient transportation solutions meeting market and customer needs.",
    "about.cta": "Learn More About Us",

    // What We Represent
    "represent.title": "What We Represent",
    "represent.quality.title": "Quality",
    "represent.quality.description":
      "We pride ourselves on being one of the fastest-growing companies in Syria's oil products transportation sector.",
    "represent.vision.title": "Vision",
    "represent.vision.description":
      "We aim for leadership in fuel and oil product transport.",
    "represent.support.title": "Support",
    "represent.support.description":
      "We commit to safe and efficient logistical solutions while building strategic partnerships.",

    // Numbers Section
    "numbers.title": "Emdad Mubasher in Numbers",
    "numbers.description":
      "Emdad Mubasher's vehicles covered approximately 800,000 km and transported 218,000 m³ in 2024. Equivalent to 20 trips around the Earth, demonstrating our commitment to efficient, reliable transport.",

    // Updated Why Choose Emdad Section
    "whyEmdad.title": "Why Emdad Mubasher?",
    "whyEmdad.safety.title": "Safety Excellence",
    "whyEmdad.safety.description":
      "We operate our terminals in compliance with the highest and safest standards in the industry.",
    "whyEmdad.expertise.title": "Operational Expertise",
    "whyEmdad.expertise.description":
      "We align our people, processes, and technology to meet operational goals.",
    "whyEmdad.neutral.title": "Neutral Position in Sector",
    "whyEmdad.neutral.description":
      "Our services are provided on a fair, reasonable, and non-discriminatory basis.",
    "whyEmdad.government.title": "Solid Governmental Network",
    "whyEmdad.government.description":
      "We provide support and facilitate business by leveraging on our well-established governmental ties.",
    "whyEmdad.innovation.title": "Innovation & Technology",
    "whyEmdad.innovation.description":
      "we apply the latest fit-for-purpose technologies to create added value in our core transportation operations.",
    "whyEmdad.customer.title": "Customer Oriented",
    "whyEmdad.customer.description":
      "We understand our customers, fulfill their needs, and build lasting relationships with them.",

    // About Page
    "aboutPage.hero.title": "About Emdad Mubasher",
    "aboutPage.hero.subtitle":
      "Leading the future of oil transportation in Syria",
    "aboutPage.company.title": "Our Company",
    "aboutPage.company.description":
      "Emdad Mubasher Petroleum Transport and Storage Company, founded in 2019, is committed to delivering premium oil transport services focused on safety, efficiency, and strategic growth in Syria and the surrounding region.",
    "aboutPage.foundation.title": "Foundation",
    "aboutPage.foundation.description":
      "Founded in 2019 with a clear strategy and an experienced team, Emdad Mubasher quickly grew into one of Syria's key players in the oil transport industry.",
    "aboutPage.vision.title": "Vision",
    "aboutPage.vision.description":
      "We aim to become Syria's leading fuel transport company by 2025 through innovation, safety, and exceptional service.",
    "aboutPage.partnerships.title": "Partnerships Timeline",
    "aboutPage.partnerships.ebla.title": "Ebla Project",
    "aboutPage.partnerships.ebla.2020":
      "Beginning of the partnership with the Ebla project for fuel transportation. The agreement was signed and transportation operations began during this year.",
    "aboutPage.partnerships.ebla.2022":
      "Expansion of the services provided to the Ebla project. The expansion included increasing the number of trucks and covering additional geographical areas.",
    "aboutPage.partnerships.ebla.2025":
      "Successful completion of the partnership with the Ebla project. The strategic goals of the partnership were achieved.",
    "aboutPage.partnerships.syriatel":
      "Syriatel –We provide integrated fuel transport services at Syriatel depots with strict adherence to global safety standards. We have an exemplary record in managing sensitive fuel transport operations, with a 99% on-time delivery accuracy rate.",
    "aboutPage.partnerships.mtn":
      "MTN –Strategic partner for MTN in specialized fuel transport services. We provide integrated solutions including: advanced temporary storage system, real-time tracking with the latest technologies 24/7.",
    "aboutPage.partnerships.mahroukat":
      "Mahroukat – We work as a key partner for Fuel Company in the distribution of petroleum products. We ensure the continuity of our company through a modern fleet of tankers and a specialized team of professional drivers. We comply with all environmental and safety standards in our transport operations.",
    "aboutPage.ambition.title": "Ambition for Regional Leadership",
    "aboutPage.ambition.network.title": "Network Expansion",
    "aboutPage.ambition.network.description":
      "We aim to expand our service network to cover more geographical areas, with a focus on major cities and industrial regions. We plan to increase our vehicle fleet by 50% over the next three years.",
    "aboutPage.ambition.service.title": "Service Improvement",
    "aboutPage.ambition.service.description":
      "We are investing in the latest technologies and fleet management systems to provide more efficient and reliable services. We focus on developing innovative solutions to meet the growing needs of our customers.",
    "aboutPage.ambition.efficiency.title": "Efficiency",
    "aboutPage.ambition.efficiency.description":
      "We are working to improve the efficiency of our operations by applying the best global practices in transportation and logistics services. We aim to reduce operating costs while maintaining the highest quality standards.",
    "aboutPage.ambition.leadership.title": "Leadership",
    "aboutPage.ambition.leadership.description":
      "We aspire to enhance our position as a leading company in the region by building strategic partnerships and providing exceptional services that exceed our customers expectations.",

    // Corporate Governance
    "corporateGovernance.hero.title": "Corporate Governance",
    "corporateGovernance.hero.subtitle":
      "Exceptional Standards .. Exceptional Performance.",
    "corporateGovernance.ethics.title": "Ethics and Governance",
    "corporateGovernance.ethics.description":
      "The company upholds the highest business standards by adhering to the highest personal and professional principles.",
    "corporateGovernance.values.title": "Our Values",
    "corporateGovernance.values.description":
      "Aramco's conduct — as a company, as employees, and as citizens — is what sets it apart.",

    // Footer
    "footer.home": "Home",
    "footer.about": "About",
    "footer.services": "Services",
    "footer.activities": "Activities",
    "footer.safety": "Safety",
    "footer.quality": "Quality",
    "footer.sustainability": "Sustainability",
    "footer.contact": "Contact Us",
    "footer.faq": "FAQ",
    "footer.copyright": "© 2025 Emdad Mubasher. All rights reserved.",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Info",
    "footer.description":
      "Leading oil transportation solutions provider in Syria, committed to excellence, safety, and sustainability.",

    // Contact Page
    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle":
      "Get in touch with our team for any inquiries or support",
    "contact.form.title": "Send us a Message",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.mobile": "+963 938882888",
    "contact.info.landline": "+96311 6926666",
    "contact.info.email": "info@emdad.com.sy",
    "contact.info.fax1": "+963 116990919",
    "contact.info.fax2": "+963 116916561",
    "contact.map.title": "Alabid fuel station",
    "contact.map.viewLarger": "View larger map",
    "contact.hours.title": "Business Hours",
    "contact.hours.weekdays": "Sunday - Thursday: 8:00 AM - 5:00 PM",
    "contact.hours.friday": "Friday: 8:00 AM - 12:00 PM",
    "contact.hours.saturday": "Saturday: Closed",
    "contact.location.title": "location",

    // FAQ Page
    "faq.hero.title": "Frequently Asked Questions",
    "faq.hero.subtitle": "Find answers to common questions about our services",
    "faq.question1": "What services does Emdad Mubasher provide?",
    "faq.answer1":
      "Emdad Mubasher specializes in petroleum product transportation, providing safe and efficient logistics solutions for fuel distribution across Syria. We offer comprehensive transport services with modern fleet management and safety protocols.",
    "faq.question2": "How do you ensure transport safety?",
    "faq.answer2":
      "We maintain the highest safety standards through regular vehicle maintenance, certified driver training, GPS tracking systems, and compliance with international safety regulations for hazardous material transportation.",
    "faq.question3": "What areas do you cover?",
    "faq.answer3":
      "Our transportation network covers all major cities and regions across Syria, with strategic partnerships that enable us to provide comprehensive coverage and reliable service delivery.",
    "faq.question4": "How can I request your services?",
    "faq.answer4":
      "You can contact us through our website contact form, call our customer service hotline, or visit our offices. Our team will assess your requirements and provide customized transportation solutions.",
    "faq.question5": "What makes Emdad Mubasher different from competitors?",
    "faq.answer5":
      "Emdad Mubasher stands out through our commitment to safety, reliability, and efficiency. We combine modern technology with experienced professionals to deliver superior service quality and maintain long-term partnerships with our clients.",
    "faq.question6": "Do you provide emergency transportation services?",
    "faq.answer6":
      "Yes, we offer emergency and urgent transportation services for critical fuel supply needs. Our 24/7 operations center can coordinate rapid response for emergency situations.",
    "faq.stillQuestions": "Still have questions?",
    "faq.contactUs":
      "Our team is ready to help you with any additional questions you may have.",
    "faq.contactButton": "Contact Us",

    // Quality Page
    "quality.hero.title": "Trusted Quality Standards",
    "quality.hero.subtitle":
      "At Emdad, we set higher standards in logistics, ensuring reliable quality and efficiency.",

    "quality.efficiency.title": "Efficiency: The Core of Smart Operations",
    "quality.efficiency.subtitle":
      "Efficiency isn't just speed—it's strategic intelligence.",
    "quality.efficiency.point1":
      "We use advanced systems to analyze logistics data in real time.",
    "quality.efficiency.point2":
      "Reduce downtime through dynamic route and loading optimization.",
    "quality.efficiency.point3":
      "A dedicated team works daily to improve our operational flows.",
    "quality.efficiency.point4":
      "We adapt quickly and flexibly to market changes.",
    "quality.efficiency.footer":
      "⚙️ Every operation is designed to be more efficient than the last.",

    "quality.quality.title": "Quality Starts With Details",
    "quality.quality.subtitle":
      "We believe real quality starts with the small things.",
    "quality.quality.point1": "Internal monitoring with defined KPIs.",
    "quality.quality.point2":
      "Thorough inspection before, during, and after delivery.",
    "quality.quality.point3":
      "Documentation at every step of the transport chain.",
    "quality.quality.point4":
      "Collecting and analyzing customer feedback for continuous improvement.",
    "quality.quality.footer":
      "🎯 Quality isn't a checkbox—it's a daily mindset.",

    "quality.professionalism.title": "Professionalism in Every Interaction",
    "quality.professionalism.point1":
      "Our teams are trained in communication protocols and issue resolution.",
    "quality.professionalism.point2":
      "Immediate response to requests and changes.",
    "quality.professionalism.point3":
      "Strict adherence to deadlines and time commitments.",
    "quality.professionalism.point4":
      "Ethical conduct under all circumstances.",
    "quality.professionalism.footer":
      "🧠 We don't just offer service—we build long-term relationships.",

    "quality.policy.title": "Quality, Environment & Safety Policy",
    "quality.policy.quality.title": "Quality:",
    "quality.policy.quality.description":
      "We implement best-in-class quality management systems with continuous improvement loops. We measure, correct, and act fast.",
    "quality.policy.environment.title": "Environment:",
    "quality.policy.environment.description":
      'Our eco-friendly fleet reduces emissions. We promote a "zero waste" culture and use recyclable packaging materials.',
    "quality.policy.safety.title": "Safety:",
    "quality.policy.safety.point1": "Monthly drills for emergency scenarios.",
    "quality.policy.safety.point2": "Regular updates of emergency plans.",
    "quality.policy.safety.point3":
      "Weekly safety reports and monthly training calendar.",

    "quality.certifications.title": "Certified to World-Class Standards",
    "quality.certifications.subtitle":
      "We don't just say we're committed to quality—we prove it:",
    "quality.certifications.iso9001": "ISO 9001: Excellence in management.",
    "quality.certifications.iso29001":
      "ISO 29001: Specialization in the energy sector.",
    "quality.certifications.footer":
      "Our certifications are audited and renewed regularly to ensure global compliance.",

    "quality.safety.title": "How Do We Ensure Safety & Efficiency?",
    "quality.safety.training.title": "Intensive Training",
    "quality.safety.training.description":
      "Qualifying drivers and technicians in the latest safety and defensive driving techniques. Continuous training programs covering hazardous materials handling and emergency procedures.",
    "quality.safety.maintenance.title": "Comprehensive Periodic Maintenance",
    "quality.safety.maintenance.description":
      "Regular inspection and maintenance of all vehicles and equipment according to a defined schedule. Implementing an advanced preventive maintenance system to ensure fleet readiness around the clock.",
    "quality.safety.technology.title":
      "Reliance on the Latest Logistics Technologies",
    "quality.safety.technology.description":
      "Monitoring transportation movements through a GPS tracking system with continuous analysis of trip data and route optimization. Real-time monitoring of vehicle conditions and driver behavior.",
    "quality.safety.risk.title": "Risk Management System",
    "quality.safety.risk.description":
      "Continuous risk assessment and development of proactive plans to address them. Implementing strict procedures to prevent accidents and ensure operational safety.",
    "quality.safety.compliance.title": "Quality Assurance and Compliance",
    "quality.safety.compliance.description":
      "Applying rigorous quality standards aligned with global best practices. Periodic review and updating of procedures according to international best practices.",

    'quality.numbers.title': 'Numbers You Can Trust',
'quality.numbers.description': 'Verified numbers reflecting our commitment to excellence and quality in logistics - 2024 data',
'quality.numbers.distance': 'km driven',
'quality.numbers.volume': 'm³ transported',
'quality.numbers.earth': 'times around the Earth',
'quality.numbers.delay': 'Delay rate',
'quality.numbers.satisfaction': 'Client satisfaction',
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "حول الشركة",
    "nav.services": "الخدمات",
    "nav.activities": "الأنشطة",
    "nav.safety": "السلامة",
    "nav.quality": "الجودة",
    "nav.sustainability": "الاستدامة",
    "nav.contact": "اتصل بنا",
    "nav.faq": "الأسئلة الشائعة",
    "nav.cta": "احصل على عرض سعر",
    "nav.corporateGovernance": "حوكمة الشركة",
    // Hero Section
    "hero.title": "إمداد مباشر",
    "hero.company": "لنقل النفط الخام والمشتقات النفطية محدودة المسؤولية",
    "hero.subtitle": " خبرة الطريق... قوة الإمداد",
    "hero.cta": "اعرف المزيد",

    // Cards Section
    "cards.quality.title": "معايير الجودة",
    "cards.quality.description":
      "نلتزم بأعلى معايير الجودة لضمان النقل الآمن والفعال للمنتجات النفطية.",
    "cards.faq.title": "الأسئلة الشائعة",
    "cards.faq.description":
      "اعثر على إجابات للأسئلة الشائعة حول خدماتنا وبروتوكولات السلامة وحلول النقل.",
    "cards.contact.title": "اتصل بنا",
    "cards.contact.description":
      "تواصل مع فريق الخبراء لدينا للاستفسارات أو الحصول على عروض أسعار أو الدعم المتعلق بخدمات النقل.",
    "cards.learnMore": "اعرف المزيد",
    "cards.viewFaqs": "عرض الأسئلة الشائعة",
    "cards.contactUs": "اتصل بنا الآن",

    // Interactive Slider
    "slider.ambition": "رؤيتنا",
    "slider.ambition.description":
      "قيادة مستقبل نقل النفط بحلول مبتكرة والتزام ثابت بالتميز.",
    "slider.safety": "التميز في السلامة",
    "slider.safety.description":
      "تطبيق أعلى معايير السلامة والبروتوكولات لضمان النقل الآمن للمنتجات النفطية.",
    "slider.numbers": "إنجازاتنا",
    "slider.numbers.description":
      "تحقيق إنجازات رائعة بأكثر من 800,000 كم مقطوعة و 218,000 متر مكعب منقولة في 2024.",
    "slider.partnerships": "الشراكات الاستراتيجية",
    "slider.partnerships.description":
      "بناء شراكات استراتيجية وتعزيز العلاقات التعاونية عبر الصناعة.",

    // About Section
    "about.title": "حول إمداد مباشر",
    "about.description":
      "تأسست إمداد مباشر في عام 2019، وتتخصص في نقل النفط في سوريا، ملتزمة بتقديم حلول نقل آمنة وفعالة تلبي احتياجات السوق والعملاء.",
    "about.cta": "اعرف المزيد عنا",

    // What We Represent
    "represent.title": "ما نمثله",
    "represent.quality.title": "الجودة",
    "represent.quality.description":
      "نفخر بكوننا إحدى الشركات الأسرع نمواً في قطاع نقل المنتجات النفطية في سوريا.",
    "represent.vision.title": "الرؤية",
    "represent.vision.description":
      "نهدف للريادة في نقل الوقود والمنتجات النفطية.",
    "represent.support.title": "الدعم",
    "represent.support.description":
      "نلتزم بالحلول اللوجستية الآمنة والفعالة مع بناء شراكات استراتيجية.",

    // Numbers Section
    "numbers.title": "إمداد مباشر بالأرقام",
    "numbers.description":
      "قطعت مركبات إمداد مباشر حوالي 800,000 كم ونقلت 218,000 متر مكعب في عام 2024. ما يعادل 20 رحلة حول الأرض، مما يدل على التزامنا بالنقل الفعال والموثوق.",

    // Updated Why Choose Emdad Section with Arabic translations
    "whyEmdad.title": "لماذا إمداد مباشر؟",
    "whyEmdad.safety.title": "التميز في السلامة",
    "whyEmdad.safety.description":
      "نشغّل محطاتنا وفق أعلى المعايير وأكثرها أماناً في القطاع.",
    "whyEmdad.expertise.title": "خبرة تشغيلية",
    "whyEmdad.expertise.description":
      "ننسق بين كوادرنا وعملياتنا وتقنياتنا لتحقيق الأهداف التشغيلية.",
    "whyEmdad.neutral.title": "حيادية في القطاع",
    "whyEmdad.neutral.description":
      "نقدم خدماتنا بطريقة عادلة ومعقولة وغير تمييزية.",
    "whyEmdad.government.title": "شبكة حكومية قوية",
    "whyEmdad.government.description":
      "نقدم الدعم ونسهّل الأعمال من خلال علاقاتنا الحكومية الراسخة.",
    "whyEmdad.innovation.title": "الابتكار والتقنية",
    "whyEmdad.innovation.description":
      "نطبق أحدث التقنيات الملائمة لخلق قيمة مضافة لأعمال النقل الأساسية.",
    "whyEmdad.customer.title": "التركيز على العميل",
    "whyEmdad.customer.description":
      "نفهم احتياجات عملائنا، ونلبيها، ونبني علاقات طويلة الأمد معهم.",

    // About Page
    "aboutPage.hero.title": "حول إمداد مباشر",
    "aboutPage.hero.subtitle": "قيادة مستقبل نقل النفط في سوريا",
    "aboutPage.company.title": "شركتنا",
    "aboutPage.company.description":
      "شركة إمداد مباشر لنقل وتخزين المنتجات النفطية، تأسست في عام 2019، ملتزمة بتقديم خدمات نقل النفط المتميزة مع التركيز على السلامة والكفاءة والنمو الاستراتيجي في سوريا والمنطقة المحيطة.",
    "aboutPage.foundation.title": "التأسيس",
    "aboutPage.foundation.description":
      "تأسست في عام 2019 باستراتيجية واضحة وفريق ذو خبرة، نمت إمداد مباشر بسرعة لتصبح إحدى الشركات الرئيسية في صناعة نقل النفط في سوريا.",
    "aboutPage.vision.title": "الرؤية",
    "aboutPage.vision.description":
      "نهدف لأن نصبح شركة نقل الوقود الرائدة في سوريا بحلول عام 2025 من خلال الابتكار والسلامة والخدمة الاستثنائية.",
    "aboutPage.partnerships.title": "الجدول الزمني للشراكات",
    "aboutPage.partnerships.ebla.title": "مشروع إيبلا",
    "aboutPage.partnerships.ebla.2020":
      "بداية الشراكة مع مشروع إيبلا لنقل الوقود. تم توقيع الاتفاقية وبدأت عمليات النقل في هذا العام.",
    "aboutPage.partnerships.ebla.2022":
      "توسيع الخدمات المقدمة لمشروع إيبلا. شمل التوسع زيادة عدد الشاحنات وتغطية مناطق جغرافية إضافية.",
    "aboutPage.partnerships.ebla.2025":
      "إتمام الشراكة مع مشروع إيبلا بنجاح. تم تحقيق الأهداف الاستراتيجية للشراكة.",
    "aboutPage.partnerships.syriatel":
      "سيرياتيل - نحن نقدم خدمات نقل الوقود المتكاملة في مستودعات سيرياتل مع الالتزام الصارم بمعايير السلامة العالمية. لدينا سجل نموذجي في إدارة عمليات نقل الوقود الحساسة، مع دقة في تسليم الشحنات بنسبة 99% في الوقت المحدد ",
    "aboutPage.partnerships.mtn":
      "ام تي ان -  شريك استراتيجي لشركة أم تي ان في خدمات نقل الوقود المتخصصة. نحن نقدم حلولًا متكاملة تشمل: نظام تخزين مؤقت متقدم، تتبع لحظي باستخدام أحدث التقنيات على مدار الساعة طوال أيام الأسبوع",
    "aboutPage.partnerships.mahroukat":
      "شركة محروقات -  نعمل كشريك رئيسي لشركة الوقود في توزيع منتجات النفط. نضمن استمرارية شركتنا من خلال أسطول حديث من الشاحنات وفريق متخصص من السائقين المحترفين. نلتزم بكافة المعايير البيئية ومعايير السلامة في عمليات النقل لدينا",
    "aboutPage.ambition.title": "طموح للريادة الإقليمية",
    "aboutPage.ambition.network.title": "توسع الشبكة",
    "aboutPage.ambition.network.description":
      "نهدف إلى توسيع شبكة خدماتنا لتغطية المزيد من المناطق الجغرافية، مع التركيز على المدن الكبرى والمناطق الصناعية. نخطط لزيادة أسطول المركبات بنسبة 50% خلال السنوات الثلاث القادمة.",
    "aboutPage.ambition.service.title": "تحسين الخدمة",
    "aboutPage.ambition.service.description":
      "نستثمر في أحدث التقنيات وأنظمة إدارة الأسطول لتوفير خدمات أكثر كفاءة وموثوقية. نركز على تطوير حلول مبتكرة لتلبية احتياجات عملائنا المتزايدة.",
    "aboutPage.ambition.efficiency.title": "الكفاءة",
    "aboutPage.ambition.efficiency.description":
      "نعمل على تحسين كفاءة عملياتنا من خلال تطبيق أفضل الممارسات العالمية في خدمات النقل واللوجستيات. نهدف إلى تقليل التكاليف التشغيلية مع الحفاظ على أعلى معايير الجودة.",
    "aboutPage.ambition.leadership.title": "القيادة",
    "aboutPage.ambition.leadership.description":
      "نطمح إلى تعزيز مكانتنا كشركة رائدة في المنطقة من خلال بناء شراكات استراتيجية وتقديم خدمات استثنائية تتجاوز توقعات عملائنا.",

    // Corporate Governance Arabic
    "corporateGovernance.hero.title": "الحوكمة المؤسسية",
    "corporateGovernance.hero.subtitle": "معايير استثنائية .. أداء استثنائي",
    "corporateGovernance.ethics.title": "الأخلاق والحوكمة",
    "corporateGovernance.ethics.description":
      "تلتزم الشركة بأعلى معايير الأعمال من خلال الالتزام بأعلى المبادئ الشخصية والمهنية.",
    "corporateGovernance.values.title": "قيمنا",
    "corporateGovernance.values.description":
      "سلوك أرامكو - كشركة وكموظفين وكمواطنين - هو ما يميزها.",

    // Footer
    "footer.home": "الرئيسية",
    "footer.about": "حول الشركة",
    "footer.services": "الخدمات",
    "footer.activities": "الأنشطة",
    "footer.safety": "السلامة",
    "footer.quality": "الجودة",
    "footer.sustainability": "الاستدامة",
    "footer.contact": "اتصل بنا",
    "footer.faq": "الأسئلة الشائعة",
    "footer.copyright": "© 2025 إمداد مباشر. جميع الحقوق محفوظة.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactInfo": "معلومات الاتصال",
    "footer.description":
      "مزود رائد لحلول نقل النفط في سوريا، ملتزم بالتميز والسلامة والاستدامة.",

    // Contact Page
    "contact.hero.title": "اتصل بنا",
    "contact.hero.subtitle": "تواصل مع فريقنا لأي استفسارات أو دعم",
    "contact.form.title": "أرسل لنا رسالة",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "عنوان البريد الإلكتروني",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.subject": "الموضوع",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال الرسالة",
    "contact.info.title": "معلومات الاتصال",
    "contact.info.mobile": "+963 938882888",
    "contact.info.landline": "+96311 6926666",
    "contact.info.email": "info@emdad.com.sy",
    "contact.info.fax1": "+963 116990919",
    "contact.info.fax2": "+963 116916561",
    "contact.map.title": "محطة وقود العابد",
    "contact.map.viewLarger": "عرض خريطة أكبر",
    "contact.hours.title": "ساعات العمل",
    "contact.hours.weekdays": "الأحد - الخميس: 8:00 ص - 5:00 م",
    "contact.hours.friday": "الجمعة: 8:00 ص - 12:00 م",
    "contact.hours.saturday": "السبت: مغلق",
    "contact.location.title": "موقعنا",

    // FAQ Page
    "faq.hero.title": "الأسئلة الشائعة",
    "faq.hero.subtitle": "اعثر على إجابات للأسئلة الشائعة حول خدماتنا",
    "faq.question1": "ما هي الخدمات التي تقدمها إمداد مباشر؟",
    "faq.answer1":
      ".تتخصص إمداد مباشر في نقل المنتجات النفطية، وتقدم حلول لوجستية آمنة وفعالة لتوزيع الوقود في جميع أنحاء سوريا. نقدم خدمات نقل شاملة مع إدارة حديثة للأسطول والالتزام ببروتوكولات السلامة",
    "faq.question2": "كيف تضمنون سلامة النقل؟",
    "faq.answer2":
      "نحافظ على أعلى معايير السلامة من خلال الصيانة المنتظمة للمركبات، وتدريب السائقين المعتمدين، وأنظمة التتبع GPS، والامتثال للوائح السلامة الدولية لنقل المواد الخطرة.",
    "faq.question3": "ما هي المناطق التي تغطونها؟",
    "faq.answer3":
      "تغطي شبكة النقل لدينا جميع المدن والمناطق الرئيسية في سوريا، مع الشراكات الاستراتيجية التي تمكننا من توفير تغطية شاملة وتقديم خدمة موثوقة.",
    "faq.question4": "كيف يمكنني طلب خدماتكم؟",
    "faq.answer4":
      "يمكنك الاتصال بنا من خلال نموذج الاتصال على موقعنا الإلكتروني، أو الاتصال بخط خدمة العملاء، أو زيارة مكاتبنا. سيقوم فريقنا بتقييم متطلباتك وتقديم حلول نقل مخصصة.",
    "faq.question5": "ما الذي يميز إمداد مباشر عن المنافسين؟",
    "faq.answer5":
      "تتميز إمداد مباشر من خلال التزامنا بالسلامة والموثوقية والكفاءة. نجمع بين التكنولوجيا الحديثة والمهنيين ذوي الخبرة لتقديم جودة خدمة فائقة والحفاظ على شراكات طويلة الأمد مع عملائنا.",
    "faq.question6": "هل تقدمون خدمات النقل الطارئة؟",
    "faq.answer6":
      "نعم، نقدم خدمات النقل الطارئة والعاجلة لاحتياجات توريد الوقود الحرجة. يمكن لمركز العمليات على مدار 24/7 تنسيق الاستجابة السريعة للحالات الطارئة.",
    "faq.stillQuestions": "لا تزال لديك أسئلة؟",
    "faq.contactUs": "فريقنا جاهز لمساعدتك في أي أسئلة إضافية قد تكون لديك.",
    "faq.contactButton": "اتصل بنا",

    // Quality Page Arabic
    "quality.hero.title": "معايير جودة موثوقة",
    "quality.hero.subtitle":
      "في إمداد مباشر نضع معايير أعلى للنقل، ونضمن جودة موثوقة وكفاءة عالية.",
    "quality.efficiency.title": "الكفاءة: محور عملياتنا الذكية",
    "quality.efficiency.subtitle":
      "نُؤمن أن الكفاءة ليست فقط في السرعة، بل في الذكاء التنظيمي.",
    "quality.efficiency.point1":
      "نستخدم أنظمة متقدمة لتحليل بيانات الشحن وتتبع الأداء لحظة بلحظة.",
    "quality.efficiency.point2":
      "نخفض أوقات الانتظار من خلال إدارة ديناميكية للمسارات وعمليات التحميل.",
    "quality.efficiency.point3":
      "لدينا فريق متخصص لتحسين العمليات التشغيلية بشكل يومي.",
    "quality.efficiency.point4": "التكيف مع متغيرات السوق بسرعة ومرونة.",
    "quality.efficiency.footer":
      "⚙️ كل عملية لدينا مصممة لتكون أكثر كفاءة من المرة السابقة.",

    "quality.quality.title": "الجودة تبدأ من التفاصيل",
    "quality.quality.subtitle":
      "نحن نؤمن أن الجودة الحقيقية تبدأ من التفاصيل الصغيرة.",
    "quality.quality.point1": "اعتماد نظام رقابي داخلي بمؤشرات أداء رئيسية.",
    "quality.quality.point2": "فحص دقيق لكل شحنة قبل وأثناء وبعد عملية النقل.",
    "quality.quality.point3": "عمليات توثيق دقيقة لكل مرحلة في سلسلة النقل.",
    "quality.quality.point4": "جمع ملاحظات العملاء وتحليلها لتحسين الخدمة.",
    "quality.quality.footer":
      "🎯 الجودة لدينا ليست مجرد التزام، بل ثقافة يومية.",

    "quality.professionalism.title": "الاحترافية في كل تفاعل",
    "quality.professionalism.point1":
      "فرقنا مدربة على بروتوكولات التواصل المهني وحل المشكلات.",
    "quality.professionalism.point2": "استجابة فورية للطلبات والتغيرات.",
    "quality.professionalism.point3": "التزام صارم بالمواعيد واحترام الوقت.",
    "quality.professionalism.point4":
      "التعامل بأخلاق مهنية عالية، مهما كانت الظروف.",
    "quality.professionalism.footer":
      "🧠 نحن لا نقدم خدمة فقط، بل نبني علاقات طويلة الأمد.",

    "quality.policy.title": "سياسة الجودة والبيئة والسلامة",
    "quality.policy.quality.title": "الجودة:",
    "quality.policy.quality.description":
      "نلتزم بتطبيق أفضل أنظمة إدارة الجودة وتحسين الإجراءات باستمرار. نقيس الأداء، نُصحح الانحرافات، ونتفاعل بسرعة مع أي تحديات.",
    "quality.policy.environment.title": "البيئة:",
    "quality.policy.environment.description":
      'نقلل الانبعاثات عبر أسطول صديق للبيئة. نُشجّع ثقافة "صفر نفايات"، ونستخدم مواد تعبئة قابلة لإعادة التدوير.',
    "quality.policy.safety.title": "السلامة:",
    "quality.policy.safety.point1": "تدريب شهري مخصص للمواقف الطارئة.",
    "quality.policy.safety.point2": "تحديث دوري لخطط الاستجابة للطوارئ.",
    "quality.policy.safety.point3":
      "تقارير سلامة أسبوعية وتقويم شهري للتدريبات.",

    "quality.certifications.title": "نلتزم بمعايير عالمية",
    "quality.certifications.subtitle":
      "لدينا شهادات تؤكد أننا لا نكتفي بالكفاءة الداخلية، بل نثبت التزامنا للعالم الخارجي:",
    "quality.certifications.iso9001": "ISO 9001: الجودة في الإدارة.",
    "quality.certifications.iso29001": "ISO 29001: الاحترافية في قطاع الطاقة.",
    "quality.certifications.footer":
      "شهاداتنا تُراجع بانتظام وتُجدد باستمرار لتواكب التطورات.",

    "quality.safety.title": "كيف نضمن السلامة والكفاءة؟",
    "quality.safety.training.title": "التدريب المكثف",
    "quality.safety.training.description":
      "تأهيل السائقين والفنيين على أحدث تقنيات السلامة والقيادة الدفاعية. برامج تدريب مستمرة تشمل التعامل مع المواد الخطرة وإجراءات الطوارئ.",
    "quality.safety.maintenance.title": "الصيانة الدورية الشاملة",
    "quality.safety.maintenance.description":
      "فحص وصيانة جميع المركبات والمعدات بانتظام وفق جدول زمني محدد. تطبيق نظام متقدم للصيانة الوقائية لضمان جاهزية الأسطول على مدار الساعة.",
    "quality.safety.technology.title": "الاعتماد على أحدث تقنيات اللوجستيات",
    "quality.safety.technology.description":
      "مراقبة تحركات النقل من خلال نظام تتبع GPS مع تحليل مستمر لبيانات الرحلات وتحسين المسارات. مراقبة حالة المركبات وسلوك السائقين في الوقت الفعلي.",
    "quality.safety.risk.title": "نظام إدارة المخاطر",
    "quality.safety.risk.description":
      "تقييم المخاطر بشكل مستمر وتطوير خطط استباقية لمواجهتها. تطبيق إجراءات صارمة لمنع الحوادث وضمان السلامة التشغيلية.",
    "quality.safety.compliance.title": "ضمان الجودة والامتثال",
    "quality.safety.compliance.description":
      "تطبيق معايير جودة صارمة تتماشى مع أفضل الممارسات العالمية. مراجعة وتحديث الإجراءات بشكل دوري وفقاً لأفضل المعايير الدولية.",

    "quality.numbers.title": "أرقام تستحق الثقة",
    "quality.numbers.description":
      "أرقام موثقة تعكس التزامنا بالتميز والجودة في قطاع النقل والخدمات اللوجستية - البيانات للعام 2024",
    "quality.numbers.distance": "كم مقطوعة",
    "quality.numbers.volume": "م³ مواد منقولة",
    "quality.numbers.earth": "مرة حول الأرض",
    "quality.numbers.delay": "معدل تأخير",
    "quality.numbers.satisfaction": "رضا العملاء",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "ar">(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem("emdad-language");
    return (savedLanguage as "en" | "ar") || "en";
  });

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);

    // Save language preference to localStorage
    localStorage.setItem("emdad-language", newLanguage);

    // Apply RTL/LTR changes to document
    document.documentElement.setAttribute(
      "dir",
      newLanguage === "ar" ? "rtl" : "ltr"
    );
    document.documentElement.setAttribute("lang", newLanguage);
  };

  // Set initial document attributes
  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      language === "ar" ? "rtl" : "ltr"
    );
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
