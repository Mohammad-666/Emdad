import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function KeyAchievements() {
  const { language } = useLanguage();

  const keyAchievements = [
    {
      titleEn: "Regional expansion to Lebanon, Jordan, Iraq, and Turkey",
      titleAr: "التوسع الإقليمي ليشمل لبنان، الأردن، العراق، وتركيا",
    },
    {
      titleEn:
        "Strategic partnerships with over 50 petroleum companies and service providers",
      titleAr: "شراكات استراتيجية مع أكثر من 50 شركة نفطية ومزود خدمة",
    },
    {
      titleEn:
        "Specialized transport services for hazardous petroleum cargo in compliance with top environmental and technical safety standards",
      titleAr:
        "تقديم خدمات نقل مخصصة للبضائع الخطرة وفقًا لأعلى معايير السلامة البيئية والتقنية",
    },
  ];

  return (
    <section className="py-20 bg-emdad-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-section font-bold text-emdad-gold mb-6">
              {language === "ar" ? "من أبرز إنجازاتنا" : "Key Achievements"}
            </h2>
            <div className="w-24 h-1 bg-emdad-gold mx-auto"></div>
          </div>
          <div className="space-y-6">
            {keyAchievements.map((achievement, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 rtl:space-x-reverse animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-emdad-gold rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-white body-paragraph leading-relaxed">
                  {language === "ar"
                    ? achievement.titleAr
                    : achievement.titleEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
