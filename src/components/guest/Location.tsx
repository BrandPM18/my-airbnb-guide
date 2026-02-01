import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';

const ADDRESS = 'Grimaldo del Solar 202, Miraflores, Lima, Peru';
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const WAZE_URL = `https://waze.com/ul?q=${encodeURIComponent(ADDRESS)}`;
const EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1234567890123!2d-77.02851234567890!3d-12.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI0LjQiUyA3N8KwMDEnNDIuNiJX!5e0!3m2!1sen!2spe!4v1234567890123';

export function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          {t('location.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted">
              <iframe
                src={EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="font-medium text-foreground">{ADDRESS}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4 mr-2" />
                    {t('location.openMaps')}
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={WAZE_URL} target="_blank" rel="noopener noreferrer">
                    <Navigation className="h-4 w-4 mr-2" />
                    {t('location.openWaze')}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
