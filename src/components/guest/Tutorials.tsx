import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function Tutorials() {
  const { t } = useLanguage();

  return (
    <section id="tutorials" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          {t('tutorials.title')}
        </h2>
        
        <Card className="max-w-md mx-auto">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{t('tutorials.sofaBed')}</CardTitle>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={9 / 16}>
              <iframe
                src="https://www.youtube.com/embed/SiZwIs_9xbg"
                title={t('tutorials.sofaBed')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
              />
            </AspectRatio>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
