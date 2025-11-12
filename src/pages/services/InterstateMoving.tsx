import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Clock, Boxes, Globe, Wallet, MapPin, Handshake, PackageOpen, TruckIcon, PackageMinus, Wrench, Warehouse, ArrowRight } from 'lucide-react';

import heroHighway from '@/assets/hero-truck-city.jpg';
import packingImage from '@/assets/home-moving-packing.jpg';
import transportImage from '@/assets/home-moving-transport.jpg';
import loadingImage from '@/assets/home-moving-loading.jpg';

const InterstateMoving = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const whyChooseCards = [
    { icon: Truck, titleKey: 'interstateMoving.whyChoose.card1.title', descKey: 'interstateMoving.whyChoose.card1.description' },
    { icon: Boxes, titleKey: 'interstateMoving.whyChoose.card2.title', descKey: 'interstateMoving.whyChoose.card2.description' },
    { icon: ShieldCheck, titleKey: 'interstateMoving.whyChoose.card3.title', descKey: 'interstateMoving.whyChoose.card3.description' },
    { icon: Clock, titleKey: 'interstateMoving.whyChoose.card4.title', descKey: 'interstateMoving.whyChoose.card4.description' },
    { icon: Warehouse, titleKey: 'interstateMoving.whyChoose.card5.title', descKey: 'interstateMoving.whyChoose.card5.description' },
    { icon: Wallet, titleKey: 'interstateMoving.whyChoose.card6.title', descKey: 'interstateMoving.whyChoose.card6.description' },
    { icon: Globe, titleKey: 'interstateMoving.whyChoose.card7.title', descKey: 'interstateMoving.whyChoose.card7.description' },
    { icon: Handshake, titleKey: 'interstateMoving.whyChoose.card8.title', descKey: 'interstateMoving.whyChoose.card8.description' },
  ];

  const services = [
    { icon: PackageOpen, titleKey: 'interstateMoving.services.packing.title', descKey: 'interstateMoving.services.packing.description', image: packingImage },
    { icon: TruckIcon, titleKey: 'interstateMoving.services.loading.title', descKey: 'interstateMoving.services.loading.description', image: loadingImage },
    { icon: Truck, titleKey: 'interstateMoving.services.moving.title', descKey: 'interstateMoving.services.moving.description', image: transportImage },
    { icon: PackageMinus, titleKey: 'interstateMoving.services.unloading.title', descKey: 'interstateMoving.services.unloading.description', image: loadingImage },
    { icon: Boxes, titleKey: 'interstateMoving.services.unpacking.title', descKey: 'interstateMoving.services.unpacking.description', image: packingImage },
    { icon: Warehouse, titleKey: 'interstateMoving.services.storage.title', descKey: 'interstateMoving.services.storage.description', image: transportImage },
    { icon: Wrench, titleKey: 'interstateMoving.services.assembly.title', descKey: 'interstateMoving.services.assembly.description', image: loadingImage },
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroHighway}
            alt="Interstate Moving Highway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#006241]/90 via-[#006241]/70 to-[#006241]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="text-[#D4AF37]">
            <polygon points="50,15 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="text-[#D4AF37]">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 50 50)"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              {t('interstateMoving.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-3xl">
              {t('interstateMoving.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button size="lg" className="text-lg px-10 py-7 bg-[#D4AF37] text-white hover:bg-[#C4A030] shadow-glow-strong transition-all duration-500 hover:scale-105">
                  {t('interstateMoving.hero.ctaPrimary')}
                  <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#006241] transition-all duration-500"
              >
                {t('interstateMoving.hero.ctaSecondary')}
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('interstateMoving.intro.title')}
              </h2>
              <p className="text-lg text-[#006241] font-semibold mb-4">
                {t('interstateMoving.intro.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('interstateMoving.intro.paragraph1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('interstateMoving.intro.paragraph2')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('interstateMoving.intro.paragraph3')}
              </p>
            </div>
            <div className="animate-fade-in">
              <img
                src={packingImage}
                alt="Professional Interstate Moving"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#006241] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('interstateMoving.whyChoose.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#006241]/20 to-[#D4AF37]/20 flex items-center justify-center group-hover:from-[#006241]/30 group-hover:to-[#D4AF37]/30 transition-all duration-500">
                      <Icon className="w-8 h-8 text-[#006241] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <CardTitle className="text-lg text-foreground mb-2 group-hover:text-[#006241] transition-colors duration-300">
                      {t(card.titleKey)}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {t(card.descKey)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('interstateMoving.services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('interstateMoving.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 cursor-pointer animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/90 flex items-center justify-center mb-2">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-[#006241] mb-2">{t(service.titleKey)}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {t(service.descKey)}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroHighway}
            alt="Interstate Moving CTA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#006241]/90 via-[#006241]/80 to-[#006241]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.2),transparent_50%)]" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {t('interstateMoving.cta.title')}
            </h2>
            <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
              {t('interstateMoving.cta.subtitle')}
            </p>
            <Link to="/quote">
              <Button
                size="lg"
                className="text-lg px-12 py-7 bg-[#D4AF37] text-white hover:bg-[#C4A030] shadow-glow-strong hover:shadow-elegant transition-all duration-500 hover:scale-105"
              >
                {t('interstateMoving.cta.button')}
                <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InterstateMoving;
