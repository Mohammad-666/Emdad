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
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const storageFeatures = [
    {
      icon: Video,
      title: '24/7 Surveillance',
      description: 'Continuous monitoring with advanced security cameras throughout all facilities.'
    },
    {
      icon: ThermometerSun,
      title: 'Climate-Controlled',
      description: 'Temperature and humidity-controlled units to preserve your belongings.'
    },
    {
      icon: Shield,
      title: 'Insurance Options',
      description: 'Comprehensive coverage plans for added peace of mind and protection.'
    },
    {
      icon: Lock,
      title: 'Secure Access',
      description: 'Advanced alarm systems and controlled entry for maximum security.'
    }
  ];

  const convenienceFeatures = [
    {
      icon: MapPin,
      title: 'Extensive Network',
      description: 'Over 500 locations across North America for convenient access wherever you are.',
      detail: 'We have over 500 locations in North America to help you find a facility close to where you live. You work with a personal coordinator who can help organize your move, utilizing our nationwide resources for your benefit.'
    },
    {
      icon: Eye,
      title: 'Easy Access',
      description: 'Flexible access to your storage units and portable containers anytime you need.',
      detail: 'With our portable storage containers and local storage units, you can easily access these options anytime to store items or remove them when needed.'
    },
    {
      icon: Clock,
      title: 'Short-Term Storage',
      description: 'Perfect for temporary needs during relocation or home renovations.',
      detail: 'Use our short-term storage solutions when you\'re in the midst of relocation and don\'t have a new residence yet. We provide storage options close to where you live for quick and easy transport.'
    },
    {
      icon: Calendar,
      title: 'Long-Term Storage',
      description: 'Secure permanent storage solutions for items that won\'t fit in your home.',
      detail: 'If you need space to store special items that won\'t fit in your home, you can rely on MoveLine for long-term storage. We offer climate-controlled units in facilities with 24-hour surveillance.'
    }
  ];

  const moveTypes = [
    {
      icon: Home,
      title: 'Household Moves',
      description: 'Often involve short-term storage for a smooth transition between homes'
    },
    {
      icon: Globe,
      title: 'Cross Country Moves',
      description: 'Secure, climate-controlled, and accessible long-term storage for belongings in transit'
    },
    {
      icon: Truck,
      title: 'Long-Distance Moves',
      description: 'Require reliable storage for items until the new home is ready'
    },
    {
      icon: Package,
      title: 'International Moves',
      description: 'Secure storage solutions while navigating customs and transport logistics'
    },
    {
      icon: Building2,
      title: 'Commercial Moves',
      description: 'Storage for office furniture and equipment during business setup'
    }
  ];

  const faqs = [
    {
      question: 'How long will it take to move my belongings?',
      answer: 'With MoveLine portable storage containers, you have the flexibility to take as much time as you need. As part of our moving and storage service, we\'ll help you determine how much time you need for your move and how long transport will take.'
    },
    {
      question: 'What happens if something is damaged during the move?',
      answer: 'Our professional movers are trained and experienced in moving households and commercial businesses. We carefully pack and store your items under 24-hour surveillance to prevent accidents and damage. MoveLine is licensed and bonded and offers insurance to cover losses if the unexpected happens during a move.'
    },
    {
      question: 'How do I access my belongings in storage?',
      answer: 'We can find a storage solution near you, giving you convenient access to your belongings anytime. Our storage facilities have 24-hour surveillance cameras to help you feel safe visiting your storage unit anytime, day or night. You will know where your belongings are at all times.'
    },
    {
      question: 'What is your security protocol for storage facilities?',
      answer: 'We provide 24-hour surveillance cameras in the storage facilities to monitor activities within the facility. We also have alarm systems set up to prevent unauthorized access in our climate-controlled facilities for complete peace of mind.'
    },
    {
      question: 'What happens if I need to extend my storage period?',
      answer: 'We offer flexibility in our storage options, allowing you to extend the amount of time you use our moving and storage services. You can keep your items in our short-term storage units for up to 90 days. If you need longer-term storage, we provide permanent storage solutions for as long as necessary.'
    }
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D5F3F]/95 via-[#3A7D54]/85 to-[#2D5F3F]/75" />
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="golden-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="#D4AF37" opacity="0.3"/>
                  <path d="M50 30 L70 50 L50 70 L30 50 Z" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#golden-pattern)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="animate-fade-in-up text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Your Trusted Company for <br />
              <span className="text-[#D4AF37] font-extrabold">Moving and Storage Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
              <span className="font-semibold text-[#D4AF37]">MoveLine</span> — Safe, Smart, and Secure Relocation & Storage Solutions
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed drop-shadow-lg max-w-4xl mx-auto">
              When you need a moving and storage company that provides a full range of services to help you stay organized and reduce the stress of relocation, you can rely on MoveLine. We provide complete moving and storage services for residential, commercial, and international needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" className="text-lg px-10 py-7 bg-[#2D5F3F] text-white hover:bg-[#3A7D54] shadow-glow-strong transition-all duration-500 hover:scale-105">
                  Get a Quote
                  <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#2D5F3F] transition-all duration-500"
                >
                  Contact Us
                  <Phone className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
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
                Complete Moving & Storage Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We offer assistance with household moves, corporate relocation, and international moves, including packing and unpacking, loading and unloading, and transport.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We also provide storage solutions with our portable storage containers that allow you to pack on your own schedule. Our movers are experienced and trained in the moving process for safe and secure transportation.
              </p>
              <Link to="/quote">
                <Button size="lg" className="mt-4 bg-[#2D5F3F] text-white hover:bg-[#3A7D54]">
                  Get a Quote
                  <ArrowRight className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Residential Storage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We alleviate the stress that comes from moving on a strict timeline by providing various moving and storage solutions. MoveLine offers portable storage containers if you need more time to pack up your home before your move.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We also provide temporary and long-term storage to protect your belongings until you're settled in your new space. Use our permanent storage if your new home doesn't have the space for everything.
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
                Commercial Storage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Moving an office, retail store, or another business can be daunting as you coordinate dates and organize tasks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As your professional moving and storage company, we alleviate many of the challenges of a commercial move by providing temporary and permanent storage in secure facilities for your property on a national and international level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Looking for Local Storage Solutions Near You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Choose a moving service you can trust with more than 500 locations in North America. You can find a location near you for convenient access to moving supplies and storage options.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
              You'll work with a moving coordinator who can help you with planning and implementing the move as you determine how much storage you need and for what length of time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Security and Protection Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Rest easy knowing your belongings are protected by modern safety and security features. Our team will help you decide what kind of storage solutions work best for you.
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
              Convenience and Accessibility
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              MoveLine's global network makes storage options convenient and accessible to where you live now or your new location.
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
              Why You Need Storage
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Storage solutions are designed to fit your needs, whether you have a gap between moving dates or need a place to store items until you find a new home.
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
              Trust MoveLine when you need a place to store belongings during renovation, when showing your home for sale, or when downsizing into a smaller space.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Different Types of Moves and Storage Needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We offer storage options, such as portable storage containers, short-term storage and long-term facilities to keep your belongings safe to provide a smooth transition to a new home or office.
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
              Moving & Storage FAQs
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
              Ready to Simplify Your Move?
            </h2>
            <p className="text-xl text-white/95 mb-8 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
              Get started with MoveLine today and experience stress-free moving and storage solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button
                  size="lg"
                  className="text-lg px-12 py-7 bg-[#D4AF37] text-white hover:bg-[#C4A030] shadow-glow-strong hover:shadow-elegant transition-all duration-500 hover:scale-105"
                >
                  Get Your Free Quote
                  <CheckCircle2 className={`${isRTL ? 'mr-2' : 'ml-2'} h-5 w-5`} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-12 py-7 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#2D5F3F] transition-all duration-500"
                >
                  Contact Us Today
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
