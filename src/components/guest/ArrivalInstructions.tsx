import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardList, Building2, KeyRound, Info } from 'lucide-react';

export function ArrivalInstructions() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: ClipboardList,
      title: t('arrival.step1.title'),
      description: t('arrival.step1.desc'),
      number: 1,
    },
    {
      icon: Building2,
      title: t('arrival.step2.title'),
      description: t('arrival.step2.desc'),
      number: 2,
    },
    {
      icon: KeyRound,
      title: t('arrival.step3.title'),
      description: t('arrival.step3.desc'),
      number: 3,
    },
  ];

  return (
    <section id="arrival" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          {t('arrival.title')}
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-4">
          {steps.map((step) => (
            <Card key={step.number} className="relative overflow-hidden">
              <CardContent className="flex gap-4 p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="bg-accent border-accent">
            <CardContent className="flex items-center gap-3 p-4">
              <Info className="h-5 w-5 text-accent-foreground flex-shrink-0" />
              <p className="text-accent-foreground text-sm">{t('arrival.codeNote')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
