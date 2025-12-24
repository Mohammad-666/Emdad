import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import {
  Warehouse, Shield, Clock, MapPin, Building2, Home, Globe,
  Lock, ThermometerSun, Video, CheckCircle2, ArrowRight,
  Package, Truck, Box, Calendar, Eye, Award, Star, Users,
  FileCheck, Boxes, TrendingUp, Phone
} from 'lucide-react';

import heroStorage from '@/assets/service-storage.jpg';
import storageWarehouse from '@/assets/feature-storage.jpg';
import movingTruck from '@/assets/hero-truck-city.jpg';
import packingService from '@/assets/home-moving-packing.jpg';
import cityNight from '@/assets/hero-city-night.jpg';

const Storage = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const storageFeatures = [
    {
      icon: Video,
      title: t('storage.feature.surveillance.title'),
      description: t('storage.feature.surveillance.description'),
    },
    {
      icon: ThermometerSun,
      title: t('storage.feature.climate.title'),
      description: t('storage.feature.climate.description'),
    },
    {
      icon: Shield,
      title: t('storage.feature.insurance.title'),
      description: t('storage.feature.insurance.description'),
    },
    {
      icon: Lock,
      title: t('storage.feature.access.title'),
      description: t('storage.feature.access.description'),
    },
  ];

  const convenienceFeatures = [
    {
      icon: MapPin,
      title: t('storage.convenience.network.title'),
      description: t('storage.convenience.network.description'),
      detail: t('storage.convenience.network.detail'),
    },
    {
      icon: Eye,
      title: t('storage.convenience.access.title'),
      description: t('storage.convenience.access.description'),
      detail: t('storage.convenience.access.detail'),
    },
    {
      icon: Clock,
      title: t('storage.convenience.shortTerm.title'),
      description: t('storage.convenience.shortTerm.description'),
      detail: t('storage.convenience.shortTerm.detail'),
    },
    {
      icon: Calendar,
      title: t('storage.convenience.longTerm.title'),
      description: t('storage.convenience.longTerm.description'),
      detail: t('storage.convenience.longTerm.detail'),
    },
  ];

  const moveTypes = [
    {
      icon: Home,
      title: t('storage.move.household.title'),
      description: t('storage.move.household.description'),
    },
    {
      icon: Globe,
      title: t('storage.move.crossCountry.title'),
      description: t('storage.move.crossCountry.description'),
    },
    {
      icon: Truck,
      title: t('storage.move.longDistance.title'),
      description: t('storage.move.longDistance.description'),
    },
    {
      icon: Package,
      title: t('storage.move.international.title'),
      description: t('storage.move.international.description'),
    },
    {
      icon: Building2,
      title: t('storage.move.commercial.title'),
      description: t('storage.move.commercial.description'),
    },
  ];

  const faqs = [
    {
      question: t('storage.faq.q1'),
      answer: t('storage.faq.a1'),
    },
    {
      question: t('storage.faq.q2'),
      answer: t('storage.faq.a2'),
    },
    {
      question: t('storage.faq.q3'),
      answer: t('storage.faq.a3'),
    },
    {
      question: t('storage.faq.q4'),
      answer: t('storage.faq.a4'),
    },
    {
      question: t('storage.faq.q5'),
      answer: t('storage.faq.a5'),
    },
  ];

  return (
    <div className="min-h-screen bg-background" dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />

      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroStorage}
            alt="MoveLine Moving and Storage Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl animate-fade-in-up text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              {t('storage.hero.titlePrefix')} <br />
              <span className="text-[#D4AF37] font-extrabold">{t('storage.hero.titleEmphasis')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
              {t('storage.hero.subtitle')}
            </p>
            <div className="flex justify-center">
              <Link to="/quote" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-7 shadow-glow-strong hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  {t('storage.cta.quote')}
                  <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
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

      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#2D5F3F] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in order-2 md:order-1">
              <img
                src={storageWarehouse}
                alt="MoveLine Employee with Customer"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('storage.section.complete.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('storage.section.complete.p1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('storage.section.complete.p2')}
              </p>
              <Link to="/quote">
                <Button size="lg" className="mt-4 bg-[#2D5F3F] text-white hover:bg-[#3A7D54]">
                  {t('storage.cta.quote')}
                  <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('storage.section.residential.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('storage.section.residential.p1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('storage.section.residential.p2')}
              </p>
            </div>
            <div className="animate-fade-in">
              <img
                src={packingService}
                alt="MoveLine Mover with Boxes"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={movingTruck}
                alt="MoveLine Moving Truck"
                className="rounded-2xl shadow-glow w-full h-auto"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t('storage.section.commercial.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t('storage.section.commercial.p1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('storage.section.commercial.p2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('storage.section.local.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('storage.section.local.p1')}
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
              {t('storage.section.local.p2')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('storage.section.security.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('storage.section.security.p')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storageFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#2D5F3F]/20 to-[#D4AF37]/20 flex items-center justify-center group-hover:from-[#2D5F3F]/30 group-hover:to-[#D4AF37]/30 transition-all duration-500">
                      <Icon className="w-8 h-8 text-[#2D5F3F] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <CardTitle className="text-lg text-foreground mb-3 group-hover:text-[#2D5F3F] transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="convenience-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#2D5F3F" opacity="0.4"/>
              <path d="M30 15 L45 30 L30 45 L15 30 Z" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#convenience-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'ar' ? 'الراحة وسهولة الوصول' : 'Convenience and Accessibility'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {language === 'ar' ? 'شبكة موف لاين تجعل خيارات التخزين مريحة وقابلة للوصول حيثما تكون الآن أو في موقعك الجديد.' : "MoveLine's global network makes storage options convenient and accessible to where you live now or your new location."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {convenienceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group bg-gradient-to-br from-card to-card/50 border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-[#2D5F3F]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D5F3F]/20 transition-all duration-500">
                        <Icon className="w-8 h-8 text-[#2D5F3F] group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-[#2D5F3F] mb-3">{feature.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {feature.description}
                        </CardDescription>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'ar' ? 'لماذا تحتاج إلى التخزين' : 'Why You Need Storage'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {language === 'ar' ? 'تم تصميم حلول التخزين لتناسب احتياجاتك، سواء كان لديك فجوة بين تواريخ الانتقال أو تحتاج إلى مكان لتخزين الأغراض حتى تجد منزلاً جديدًا.' : 'Storage solutions are designed to fit your needs, whether you have a gap between moving dates or need a place to store items until you find a new home.'}
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
              {language === 'ar' ? 'ثق في موف لاين عندما تحتاج مكانًا لتخزين المتعلقات أثناء التجديد، أو عند عرض منزلك للبيع، أو عند الانتقال لمساحة أصغر.' : 'Trust MoveLine when you need a place to store belongings during renovation, when showing your home for sale, or when downsizing into a smaller space.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'ar' ? 'أنواع النقل وحاجات التخزين المختلفة' : 'Different Types of Moves and Storage Needs'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {language === 'ar' ? 'نقدم خيارات تخزين مثل الحاويات المحمولة، التخزين قصير الأجل والمرافق طويلة الأجل لحماية متعلقاتك وتسهيل الانتقال إلى منزل أو مكتب جديد.' : 'We offer storage options, such as portable storage containers, short-term storage and long-term facilities to keep your belongings safe to provide a smooth transition to a new home or office.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moveTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#2D5F3F]/20 to-[#D4AF37]/20 flex items-center justify-center group-hover:from-[#2D5F3F]/30 group-hover:to-[#D4AF37]/30 transition-all duration-500">
                      <Icon className="w-7 h-7 text-[#2D5F3F] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <CardTitle className="text-xl text-[#2D5F3F] mb-3 text-center">{type.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-center">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {language === 'ar' ? 'الأسئلة الشائعة حول النقل والتخزين' : 'Moving & Storage FAQs'}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-[#2D5F3F] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cityNight}
            alt="MoveLine Storage CTA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D5F3F]/90 via-[#2D5F3F]/80 to-[#2D5F3F]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.2),transparent_50%)]" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              {language === 'ar' ? 'هل أنت جاهز لتبسيط عملية الانتقال؟' : 'Ready to Simplify Your Move?'}
            </h2>
            <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
              {language === 'ar' ? 'ابدأ مع موف لاين اليوم واستمتع بحلول نقل وتخزين خالية من التوتر ومصممة حسب احتياجاتك.' : 'Get started with MoveLine today and experience stress-free moving and storage solutions tailored to your needs.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 bg-[#D4AF37] text-white hover:bg-[#C4A030] shadow-glow-strong hover:shadow-elegant transition-all duration-500 hover:scale-105"
                >
                  {language === 'ar' ? 'احصل على عرض سعر مجاني' : 'Get Your Free Quote'}
                  <CheckCircle2 className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-7 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#2D5F3F] transition-all duration-500"
                >
                  {language === 'ar' ? 'تواصل معنا اليوم' : 'Contact Us Today'}
                  <Phone className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
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

export default Storage;
