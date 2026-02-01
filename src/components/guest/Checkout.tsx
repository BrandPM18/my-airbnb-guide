import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, CheckCircle2, Heart } from 'lucide-react';

export function Checkout() {
  const { t } = useLanguage();

  const steps = [
    t('checkout.step1'),
    t('checkout.step2'),
    t('checkout.step3'),
    t('checkout.step4'),
    t('checkout.step5'),
  ];

  return (
    <section id="checkout" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          {t('checkout.title')}
        </h2>
        
        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader className="text-center border-b border-border">
              <div className="inline-flex items-center gap-2 text-primary">
                <Clock className="h-5 w-5" />
                <CardTitle>{t('checkout.time')}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 mb-6">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Heart className="h-4 w-4 text-destructive" />
                <p className="text-sm">{t('checkout.thanks')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
