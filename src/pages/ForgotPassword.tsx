import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, KeyRound, CheckCircle2 } from 'lucide-react';

const ForgotPassword = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError(t('auth.errors.emailRequired'));
      return;
    }

    if (!validateEmail(email)) {
      setError(t('auth.errors.emailInvalid'));
      return;
    }

    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  return (
    <div className="min-h-screen flex" dir={isRTL ? 'rtl' : 'ltr'}>
      <div
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-[#00796B]/85" />
        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <Link to="/" className="mb-12">
            <div className="text-4xl font-bold">
              <span className="text-white">Move</span>
              <span className="text-[#D4AF37]">Line</span>
            </div>
          </Link>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            {t('auth.forgotPassword.heroTitle')}
          </h1>
          <p className="text-xl leading-relaxed text-white/90">
            {t('auth.forgotPassword.heroSubtitle')}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <Card className="w-full max-w-md border-border/50 shadow-elegant">
          {!isSubmitted ? (
            <>
              <CardHeader className="space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <KeyRound className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground">
                  {t('auth.forgotPassword.title')}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {t('auth.forgotPassword.subtitle')}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      {t('auth.forgotPassword.emailLabel')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('auth.forgotPassword.emailPlaceholder')}
                      value={email}
                      onChange={handleChange}
                      className={`h-12 ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    />
                    {error && (
                      <p className="text-sm text-red-500 mt-1 animate-fade-in">{error}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium text-lg shadow-card hover:shadow-glow transition-all duration-300"
                  >
                    {t('auth.forgotPassword.submitButton')}
                    <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <Link
                    to="/login"
                    className="text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    {t('auth.forgotPassword.backToLogin')}
                  </Link>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/">
                    <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                      {t('auth.forgotPassword.backToHome')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </>
          ) : (
            <>
              <CardHeader className="space-y-4 text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground">
                  {t('auth.forgotPassword.successTitle')}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {t('auth.forgotPassword.successMessage')}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {t('auth.forgotPassword.emailSentTo')}
                  </p>
                  <p className="font-semibold text-foreground">{email}</p>
                </div>

                <div className="text-center space-y-4">
                  <Link to="/login">
                    <Button
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium text-lg shadow-card hover:shadow-glow transition-all duration-300"
                    >
                      {t('auth.forgotPassword.backToLogin')}
                      <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                    </Button>
                  </Link>

                  <p className="text-sm text-muted-foreground">
                    {t('auth.forgotPassword.didntReceive')}{' '}
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      {t('auth.forgotPassword.resend')}
                    </button>
                  </p>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
