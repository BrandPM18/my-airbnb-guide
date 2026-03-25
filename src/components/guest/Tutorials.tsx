import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, Thermometer } from 'lucide-react';

export function Tutorials() {
  const { t } = useLanguage();

  return (
    <section id="tutorials" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          {t('tutorials.title')}
        </h2>

        <div className="max-w-md mx-auto flex flex-col gap-4">
          <Card>
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

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Thermometer className="h-8 w-8 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-2">{t('tutorials.hotWater')}</p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{t('tutorials.hotWaterDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

