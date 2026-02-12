import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Bed } from 'lucide-react';

export function QuickInfo() {
  const { t } = useLanguage();

  const infoCards = [
    {
      icon: Clock,
      label: t('info.checkin'),
      value: '15:00',
      sublabel: t('info.checkout'),
      subvalue: '11:00',
    },
    {
      icon: Bed,
      label: t('info.beds'),
      value: '3',
      sublabel: t('info.bedsDetail'),
    },
  ];

  return (
    <section id="info" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {infoCards.map((card, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <card.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-sm text-muted-foreground">{card.label}</p>
                <p className="text-2xl font-bold text-foreground">{card.value}</p>
                {card.sublabel && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {card.subvalue ? `${card.sublabel}: ${card.subvalue}` : card.sublabel}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
