import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Truck, Users, Package, Globe, Lock, Building2, CheckCircle2, ArrowRight, ClipboardCheck, Boxes, PackageOpen, TruckIcon, PackageMinus, Wrench, Warehouse, HeadphonesIcon, MapPin, Award, Star, Zap } from 'lucide-react';
import heroOffice from '@/assets/service-office.jpg';
import officeTeam from '@/assets/hero-truck-city.jpg';
import heroCity from '@/assets/hero-city-night.jpg';

const OfficeMoving = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const whyChooseCards = [
    {
      icon: Award,
      title: t('officeMoving.whyChoose.card1.title'),
      description: t('officeMoving.whyChoose.card1.description'),
    },
    {
      icon: Globe,
      title: t('officeMoving.whyChoose.card2.title'),
      description: t('officeMoving.whyChoose.card2.description'),
    },
    {
      icon: Lock,
      title: t('officeMoving.whyChoose.card3.title'),
      description: t('officeMoving.whyChoose.card3.description'),
    },
    {
      icon: Building2,
      title: t('officeMoving.whyChoose.card4.title'),
      description: t('officeMoving.whyChoose.card4.description'),
    },
    {
      icon: Zap,
      title: t('officeMoving.whyChoose.card5.title'),
      description: t('officeMoving.whyChoose.card5.description'),
    },
    {
      icon: MapPin,
      title: t('officeMoving.whyChoose.card6.title'),
      description: t('officeMoving.whyChoose.card6.description'),
    },
    {
      icon: Star,
      title: t('officeMoving.whyChoose.card7.title'),
      description: t('officeMoving.whyChoose.card7.description'),
    },
    {
      icon: Shield,
      title: t('officeMoving.whyChoose.card8.title'),
      description: t('officeMoving.whyChoose.card8.description'),
    },
  ];

  const processSteps = [
    {
      icon: ClipboardCheck,
      title: t('officeMoving.process.step1.title'),
      description: t('officeMoving.process.step1.description'),
    },
    {
      icon: Package,
      title: t('officeMoving.process.step2.title'),
      description: t('officeMoving.process.step2.description'),
    },
    {
      icon: Truck,
      title: t('officeMoving.process.step3.title'),
      description: t('officeMoving.process.step3.description'),
    },
    {
      icon: PackageMinus,
      title: t('officeMoving.process.step4.title'),
      description: t('officeMoving.process.step4.description'),
    },
    {
      icon: CheckCircle2,
      title: t('officeMoving.process.step5.title'),
      description: t('officeMoving.process.step5.description'),
    },
  ];

  const specializedServices = [
    { icon: PackageOpen, title: t('officeMoving.services.packing.title'), description: t('officeMoving.services.packing.description') },
    { icon: TruckIcon, title: t('officeMoving.services.loading.title'), description: t('officeMoving.services.loading.description') },
    { icon: Truck, title: t('officeMoving.services.moving.title'), description: t('officeMoving.services.moving.description') },
    { icon: PackageMinus, title: t('officeMoving.services.unloading.title'), description: t('officeMoving.services.unloading.description') },
    { icon: Boxes, title: t('officeMoving.services.unpacking.title'), description: t('officeMoving.services.unpacking.description') },
    { icon: Warehouse, title: t('officeMoving.services.storage.title'), description: t('officeMoving.services.storage.description') },
    { icon: Wrench, title: t('officeMoving.services.dismantling.title'), description: t('officeMoving.services.dismantling.description') },
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroOffice}
            alt="MoveLine Office Moving"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              {t('officeMoving.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-3xl">
              {t('officeMoving.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote">
                <Button size="lg" className="text-lg px-10 py-7 shadow-glow-strong hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  {t('officeMoving.hero.ctaPrimary')}
                  <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground transition-all duration-500"
              >
                {t('officeMoving.hero.ctaSecondary')}
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

      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('officeMoving.whyChoose.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('officeMoving.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whyChooseCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-[#D4AF37]/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-[#D4AF37]/30 transition-all duration-500">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <CardTitle className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center animate-fade-in">
            <p className="text-lg text-foreground font-semibold max-w-4xl mx-auto leading-relaxed">
              {t('officeMoving.whyChoose.closing')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('officeMoving.process.title')}
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-y-1/2" />

            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Card className="bg-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 h-full group hover:scale-105">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-[#D4AF37]/20 flex items-center justify-center relative group-hover:from-primary/30 group-hover:to-[#D4AF37]/30 transition-all duration-500">
                          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                          <Icon className="w-8 h-8 text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="text-sm font-bold text-[#D4AF37] mb-2">
                          {t('officeMoving.process.stepLabel')} {index + 1}
                        </div>
                        <CardTitle className="text-lg text-primary mb-3">{step.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('officeMoving.services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('officeMoving.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {specializedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-card to-card/50 border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                      <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <CardTitle className="text-lg text-primary mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
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
            src={heroCity}
            alt="Office Moving CTA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.15),transparent_50%)]" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={officeTeam}
                alt="Customer Service"
                className="rounded-2xl shadow-glow-strong"
              />
            </div>

            <div className="animate-fade-in-up text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                {t('officeMoving.cta.title')}
              </h2>
              <p className="text-xl mb-8 leading-relaxed drop-shadow-lg text-white/95">
                {t('officeMoving.cta.subtitle')}
              </p>
              <Link to="/quote">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 shadow-glow-strong hover:shadow-elegant transition-all duration-500 hover:scale-105"
                >
                  {t('officeMoving.cta.button')}
                  <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfficeMoving;
