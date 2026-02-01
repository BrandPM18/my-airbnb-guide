import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Heart } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'nav.wifi', href: '#wifi' },
    { key: 'nav.arrival', href: '#arrival' },
    { key: 'nav.rules', href: '#rules' },
    { key: 'nav.checkout', href: '#checkout' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="h-6 w-6" />
              <span className="font-bold text-lg">Miraflores Home</span>
            </div>
            <p className="text-primary-foreground/80">
              Grimaldo del Solar 202, Dpto 1108
              <br />
              Miraflores, Lima, Perú
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <p className="text-primary-foreground/80">
              WhatsApp: +51 961 774 643
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
            <Heart className="h-4 w-4" />
            <p>{t('footer.thanks')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
