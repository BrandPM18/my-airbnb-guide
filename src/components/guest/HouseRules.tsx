import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Ban, PartyPopper, VolumeX, Bath, Users } from 'lucide-react';

export function HouseRules() {
  const { t } = useLanguage();

  const rules = [
    {
      icon: Ban,
      title: t('rules.noSmoking'),
      description: t('rules.noSmokingDesc'),
    },
    {
      icon: PartyPopper,
      title: t('rules.noParties'),
      description: t('rules.noPartiesDesc'),
    },
    {
      icon: VolumeX,
      title: t('rules.quiet'),
      description: t('rules.quietDesc'),
    },
    {
      icon: Bath,
      title: t('rules.bathroom'),
      description: t('rules.bathroomDesc'),
    },
    {
      icon: Users,
      title: t('rules.guests'),
      description: t('rules.guestsDesc'),
    },
  ];

  return (
    <section id="rules" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          {t('rules.title')}
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {rules.map((rule, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <rule.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
