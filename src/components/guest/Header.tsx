import { useLanguage } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';
import { Home, ShoppingBag } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { key: 'nav.info', href: '#info' },
  { key: 'nav.wifi', href: '#wifi' },
  { key: 'nav.arrival', href: '#arrival' },
  { key: 'nav.rules', href: '#rules' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.location', href: '#location' },
  { key: 'nav.checkout', href: '#checkout' },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={() => navigate('/')} className="flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground hidden sm:inline">Miraflores Home</span>
            </button>
          </div>
          
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
            <button
              onClick={() => navigate('/productos')}
              className="text-sm text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              <ShoppingBag className="h-4 w-4" />
              {t('nav.products')}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <span className={`text-sm ${language === 'es' ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              ES
            </span>
            <Switch
              checked={language === 'en'}
              onCheckedChange={(checked) => setLanguage(checked ? 'en' : 'es')}
            />
            <span className={`text-sm ${language === 'en' ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              EN
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
