import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

export function Tutorials() {
  const { t } = useLanguage();

  return (
    <section id="tutorials" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          {t('tutorials.title')}
        </h2>
        
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <PlayCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">{t('tutorials.placeholder')}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
