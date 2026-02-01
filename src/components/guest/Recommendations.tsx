import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Utensils, Coffee, Sparkles, Briefcase } from 'lucide-react';

export function Recommendations() {
  const { t } = useLanguage();

  const categories = [
    { icon: Utensils, label: t('recommendations.food') },
    { icon: Coffee, label: t('recommendations.coffee') },
    { icon: Sparkles, label: t('recommendations.entertainment') },
    { icon: Briefcase, label: t('recommendations.services') },
  ];

  return (
    <section id="recommendations" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          {t('recommendations.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {categories.map((cat, index) => (
              <Card key={index} className="text-center opacity-60">
                <CardContent className="p-4">
                  <cat.icon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">{cat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm">
            {t('recommendations.comingSoon')}
          </p>
        </div>
      </div>
    </section>
  );
}
