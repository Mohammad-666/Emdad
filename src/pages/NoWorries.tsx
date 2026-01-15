import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Check, 
  Package, 
  PackageOpen, 
  Warehouse, 
  Car, 
  Trash2, 
  Piano, 
  Box, 
  Monitor,
  FileText,
  Video,
  CheckSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

// Data
/* Data arrays are defined inside the component so they can use `t()` for localization */

const NoWorries = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const includedItems = [
    t('noworries.included.item1'),
    t('noworries.included.item2'),
    t('noworries.included.item3'),
    t('noworries.included.item4'),
    t('noworries.included.item5'),
    t('noworries.included.item6'),
  ];

  const services = [
    {
      title: t('noworries.services.s1.title'),
      description: t('noworries.services.s1.description'),
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      icon: Package,
      hasImage: true,
    },
    {
      title: t('noworries.services.s2.title'),
      description: t('noworries.services.s2.description'),
      icon: Warehouse,
      hasImage: false,
    },
    {
      title: t('noworries.services.s3.title'),
      description: t('noworries.services.s3.description'),
      icon: Car,
      hasImage: false,
    },
    {
      title: t('noworries.services.s4.title'),
      description: t('noworries.services.s4.description'),
      icon: Trash2,
      hasImage: false,
    },
  ];

  const serviceIcons = [
    { icon: Package, label: t('noworries.icons.packing') },
    { icon: PackageOpen, label: t('noworries.icons.unpacking') },
    { icon: Trash2, label: t('noworries.icons.debris') },
    { icon: Warehouse, label: t('noworries.icons.storage') },
    { icon: Car, label: t('noworries.icons.vehicle') },
    { icon: Piano, label: t('noworries.icons.special') },
    { icon: Box, label: t('noworries.icons.materials') },
    { icon: Monitor, label: t('noworries.icons.electronics') },
  ];

  const locations = [
    { id: 'damascus', top: '20%', left: '70%' },
    { id: 'homs', top: '35%', left: '45%' },
    { id: 'hama', top: '55%', left: '15%' },
    { id: 'aleppo', top: '75%', left: '35%' },
    { id: 'rural_damascus', top: '60%', left: '65%' },
    { id: 'lattakia', top: '15%', left: '10%' },
  ];

  const tips = [
    { icon: FileText, label: t('noworries.tips.weekly') },
    { icon: Video, label: t('noworries.tips.video') },
    { icon: CheckSquare, label: t('noworries.tips.checklist') },
  ];

  const benefits = [
    t('noworries.benefits.b1'),
    t('noworries.benefits.b2'),
    t('noworries.benefits.b3'),
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <main>
        {/* Hero Section (OfficeMoving style) */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="No Worries Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.06),transparent_50%)]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl animate-fade-in-up text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                {t('noworries.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-3xl">
                {t('noworries.hero.subtitle')}
              </p>
              <div className="flex justify-center">
                <Link to="/quote" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-7 shadow-glow-strong hover:shadow-elegant transition-all duration-500 hover:scale-105">
                    {t('noworries.hero.cta')}
                    <ChevronRight className={`ml-2 h-5 w-5`} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/70 rounded-full" />
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-slide-in-left">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">{t('noworries.whatsIncluded.label')}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">{t('noworries.whatsIncluded.h2')}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t('noworries.whatsIncluded.p1')}</p>
                  <p>{t('noworries.whatsIncluded.p2')}</p>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-foreground mb-5">{t('noworries.included.title')}</h3>
                  <ul className="space-y-3">
                    {includedItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground/90">
                        <span className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-3" />
                <img
                  src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional mover unloading boxes from a moving truck"
                  loading="lazy"
                  className="relative rounded-2xl shadow-card w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards Section */}
        <section className="py-20 md:py-28 bg-section-alt">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">{t('noworries.services.label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{t('noworries.services.h2')}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={service.title}
                  className="group bg-card border-border/50 overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.hasImage && service.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <service.icon className="w-20 h-20 text-primary/60 transition-transform duration-300 group-hover:scale-110" strokeWidth={1} />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">{t('noworries.additional.label')}</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">{t('noworries.additional.h2')}</h2>
              <p className="text-muted-foreground leading-relaxed">{t('noworries.additional.p')}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
              {serviceIcons.map((service, index) => (
                <div 
                  key={service.label}
                  className="group flex flex-col items-center p-6 bg-secondary/50 rounded-xl border border-border/30 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">{service.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-section-alt rounded-2xl p-8 md:p-10 text-center max-w-3xl mx-auto border border-border/30">
              <h3 className="text-xl font-semibold text-foreground mb-3">{t('noworries.protection.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('noworries.protection.p')}</p>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                {t('noworries.protection.button')}
              </Button>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 md:py-28 bg-section-alt overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">{t('noworries.locations.label')}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">{t('noworries.locations.h2')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{t('noworries.locations.p1')}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{t('noworries.locations.p2')}</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" asChild>
                  <Link to="/quote">{t('quote.button')}</Link>
                </Button>
              </div>

              <div className="relative">
                <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12">
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      {[...Array(10)].map((_, i) => (
                        <line key={`h-${i}`} x1="0" y1={i * 30} x2="400" y2={i * 30} stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                      ))}
                      {[...Array(14)].map((_, i) => (
                        <line key={`v-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="300" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                      ))}
                    </svg>
                  </div>

                  <div className="relative grid grid-cols-3 gap-8 md:gap-12">
                    {locations.map((location, index) => (
                      <div key={location.city} className="flex flex-col items-center text-center group" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-2 transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                          <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{t(`noworries.cities.${location.id}`)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Moving Tips Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl rotate-2" />
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Move Line moving truck on highway with mountains in background"
                  loading="lazy"
                  className="relative rounded-2xl shadow-card w-full object-cover aspect-video"
                />
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-card p-4 border border-border/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t('noworries.resources.free')}</p>
                      <p className="text-xs text-muted-foreground">{t('noworries.resources.tipsLabel')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">{t('noworries.resources.label')}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">{t('noworries.resources.h2')}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{t('noworries.resources.p')}</p>

                <div className="space-y-4 mb-10">
                  {tips.map((tip) => (
                    <div key={tip.label} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border/30 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <tip.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{tip.label}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
                    </div>
                  ))}
                </div>

                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                  {t('noworries.tips.viewAll')}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

          <div className="container relative px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                {t('noworries.final.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{t('noworries.final.p')}</p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 shadow-soft">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" asChild>
                <a href="https://example.com/quote" target="_blank" rel="noopener noreferrer">{t('noworries.final.cta')}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NoWorries;
