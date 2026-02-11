import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProductsBanner() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 text-center space-y-4">
          <ShoppingBag className="h-8 w-8 text-primary mx-auto" />
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            {t('products.title')}
          </h2>
          <p className="text-muted-foreground text-sm">
            {t('products.subtitle')}
          </p>
          <Button onClick={() => navigate('/productos')} className="gap-2">
            {t('nav.products')}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
