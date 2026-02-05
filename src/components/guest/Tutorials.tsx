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
        
        <Card className="max-w-md mx-auto">
          <CardContent className="p-4">
            <a
              href="https://youtube.com/shorts/SiZwIs_9xbg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <PlayCircle className="h-8 w-8 text-primary flex-shrink-0" />
              <span className="font-medium">{t('tutorials.sofaBed')}</span>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
