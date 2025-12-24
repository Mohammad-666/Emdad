import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Clock, Boxes, Globe, Wallet, MapPin, Handshake, PackageOpen, TruckIcon, PackageMinus, Wrench, Warehouse, ArrowRight, ClipboardCheck, Home, Smile, Phone, Mail, Calendar, MapPinned, Package } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

import heroHighway from '@/assets/hero-truck-city.jpg';
import packingImage from '@/assets/home-moving-packing.jpg';
import transportImage from '@/assets/home-moving-transport.jpg';
import loadingImage from '@/assets/home-moving-loading.jpg';

const IntercityMoving = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    movingFrom: '',
    movingTo: '',
    moveDate: '',
    volume: '',
    packing: false,
    storage: false,
    dismantling: false,
  });

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

  const timelineSteps = [
    { icon: ClipboardCheck, titleKey: 'interstateMoving.timeline.step1.title', descKey: 'interstateMoving.timeline.step1.description' },
    { icon: Package, titleKey: 'interstateMoving.timeline.step2.title', descKey: 'interstateMoving.timeline.step2.description' },
    { icon: Truck, titleKey: 'interstateMoving.timeline.step3.title', descKey: 'interstateMoving.timeline.step3.description' },
    { icon: Home, titleKey: 'interstateMoving.timeline.step4.title', descKey: 'interstateMoving.timeline.step4.description' },
    { icon: Smile, titleKey: 'interstateMoving.timeline.step5.title', descKey: 'interstateMoving.timeline.step5.description' },
  ];

  const faqs = [
    { q: 'interstateMoving.faq.q1', a: 'interstateMoving.faq.a1' },
    { q: 'interstateMoving.faq.q2', a: 'interstateMoving.faq.a2' },
    { q: 'interstateMoving.faq.q3', a: 'interstateMoving.faq.a3' },
    { q: 'interstateMoving.faq.q4', a: 'interstateMoving.faq.a4' },
    { q: 'interstateMoving.faq.q5', a: 'interstateMoving.faq.a5' },
    { q: 'interstateMoving.faq.q6', a: 'interstateMoving.faq.a6' },
    { q: 'interstateMoving.faq.q7', a: 'interstateMoving.faq.a7' },
    { q: 'interstateMoving.faq.q8', a: 'interstateMoving.faq.a8' },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
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
                <Button size="lg" className="text-lg px-10 py-7 shadow-glow-strong hover:shadow-elegant transition-all duration-500 hover:scale-105">
                  {t('interstateMoving.hero.ctaPrimary')}
                  <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground transition-all duration-500"
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

      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="timeline-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#timeline-grid)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('interstateMoving.timeline.title')}
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#006241] to-transparent transform -translate-y-1/2" />

            <div className="grid md:grid-cols-5 gap-6">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Card className="bg-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 h-full group hover:scale-105">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#006241]/20 to-[#D4AF37]/20 flex items-center justify-center relative group-hover:from-[#006241]/30 group-hover:to-[#D4AF37]/30 transition-all duration-500">
                          <div className="absolute inset-0 rounded-full bg-[#006241]/20 animate-ping" />
                          <Icon className="w-8 h-8 text-[#006241] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="text-sm font-bold text-[#D4AF37] mb-2">
                          {t('interstateMoving.timeline.stepLabel')} {index + 1}
                        </div>
                        <CardTitle className="text-lg text-[#006241] mb-3">{t(step.titleKey)}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {t(step.descKey)}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                    {index < timelineSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ArrowRight className={`h-6 w-6 text-[#006241] ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('interstateMoving.faq.title')}
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
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-[#006241] py-6">
                  {t(faq.q)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {t(faq.a)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-12 bg-gradient-to-br from-[#006241]/5 to-[#D4AF37]/5 border-[#006241]/20 shadow-glow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-[#006241] mb-2">
                {t('interstateMoving.faq.contactTitle')}
              </CardTitle>
              <CardDescription className="text-base">
                {t('interstateMoving.faq.contactSubtitle')}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#006241] text-white hover:bg-[#00796B]">
                  {t('interstateMoving.faq.contactButton')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#006241] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('interstateMoving.quoteForm.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('interstateMoving.quoteForm.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={packingImage}
                alt="Customer Support"
                className="rounded-2xl shadow-glow"
              />
            </div>

            <Card className="bg-card border-border/50 shadow-glow">
              <CardContent className="p-8">
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground font-medium">
                        {t('interstateMoving.quoteForm.fullName')}
                      </Label>
                      <Input
                        id="fullName"
                        placeholder={t('interstateMoving.quoteForm.fullNamePlaceholder')}
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">
                          {t('interstateMoving.quoteForm.email')}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t('interstateMoving.quoteForm.emailPlaceholder')}
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">
                          {t('interstateMoving.quoteForm.phone')}
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder={t('interstateMoving.quoteForm.phonePlaceholder')}
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="movingFrom" className="text-foreground font-medium">
                          {t('interstateMoving.quoteForm.movingFrom')}
                        </Label>
                        <Input
                          id="movingFrom"
                          placeholder={t('interstateMoving.quoteForm.movingFromPlaceholder')}
                          value={formData.movingFrom}
                          onChange={(e) => handleInputChange('movingFrom', e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="movingTo" className="text-foreground font-medium">
                          {t('interstateMoving.quoteForm.movingTo')}
                        </Label>
                        <Input
                          id="movingTo"
                          placeholder={t('interstateMoving.quoteForm.movingToPlaceholder')}
                          value={formData.movingTo}
                          onChange={(e) => handleInputChange('movingTo', e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="moveDate" className="text-foreground font-medium">
                          {t('interstateMoving.quoteForm.moveDate')}
                        </Label>
                        <Input
                          id="moveDate"
                          type="date"
                          value={formData.moveDate}
                          onChange={(e) => handleInputChange('moveDate', e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="volume" className="text-foreground font-medium">
                          {t('interstateMoving.quoteForm.volume')}
                        </Label>
                        <Select value={formData.volume} onValueChange={(value) => handleInputChange('volume', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder={t('interstateMoving.quoteForm.volumePlaceholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="studio">Studio/1BR</SelectItem>
                            <SelectItem value="2br">2 Bedrooms</SelectItem>
                            <SelectItem value="3br">3 Bedrooms</SelectItem>
                            <SelectItem value="4br">4+ Bedrooms</SelectItem>
                            <SelectItem value="office">Office/Commercial</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-foreground font-medium">
                        {t('interstateMoving.quoteForm.services')}
                      </Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="packing"
                            checked={formData.packing}
                            onCheckedChange={(checked) => handleInputChange('packing', checked as boolean)}
                          />
                          <label htmlFor="packing" className="text-sm cursor-pointer">
                            {t('interstateMoving.quoteForm.packing')}
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="storage"
                            checked={formData.storage}
                            onCheckedChange={(checked) => handleInputChange('storage', checked as boolean)}
                          />
                          <label htmlFor="storage" className="text-sm cursor-pointer">
                            {t('interstateMoving.quoteForm.storage')}
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="dismantling"
                            checked={formData.dismantling}
                            onCheckedChange={(checked) => handleInputChange('dismantling', checked as boolean)}
                          />
                          <label htmlFor="dismantling" className="text-sm cursor-pointer">
                            {t('interstateMoving.quoteForm.dismantling')}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        className="flex-1 h-12 bg-[#D4AF37] text-white hover:bg-[#C4A030] shadow-glow transition-all duration-300"
                      >
                        {t('interstateMoving.quoteForm.submit')}
                        <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="h-12 border-[#006241] text-[#006241] hover:bg-[#006241] hover:text-white"
                        asChild
                      >
                        <a href="tel:+963999999999">
                          <Phone className={`${isRTL ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                          {t('interstateMoving.quoteForm.call')}
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-center gap-6 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="w-5 h-5 text-[#006241]" />
                        <span>{t('interstateMoving.quoteForm.insurance')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="w-5 h-5 text-[#006241]" />
                        <span>{t('interstateMoving.quoteForm.coverage')}</span>
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Smile className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {t('interstateMoving.quoteForm.successTitle')}
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      {t('interstateMoving.quoteForm.successMessage')}
                    </p>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      variant="outline"
                      className="border-[#006241] text-[#006241] hover:bg-[#006241] hover:text-white"
                    >
                      {t('interstateMoving.quoteForm.submitAnother')}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntercityMoving;
