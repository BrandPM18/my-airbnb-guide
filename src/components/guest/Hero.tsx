import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin } from 'lucide-react';
import heroImage from '@/assets/building-exterior.jpg';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10 text-center px-4 py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t('hero.welcome')}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6">
          {t('hero.subtitle')}
        </p>
        <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-foreground font-medium">{t('hero.address')}</span>
        </div>
      </div>
    </section>
  );
}
