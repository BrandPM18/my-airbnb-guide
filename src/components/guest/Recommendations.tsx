import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Utensils, Coffee, Sparkles, Briefcase, MapPin } from 'lucide-react';

const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ', Miraflores, Lima')}`;

export function Recommendations() {
  const { t } = useLanguage();

  const foodPlaces = [
    { name: t('recommendations.laLucha'), desc: t('recommendations.laLuchaDesc'), url: 'https://maps.app.goo.gl/1raB6bSzPaSAcC2K8' },
    { name: t('recommendations.puntoAzul'), desc: t('recommendations.puntoAzulDesc'), url: 'https://maps.app.goo.gl/wWPZfACnBe3w8whR9' },
    { name: t('recommendations.maido'), desc: t('recommendations.maidoDesc'), url: 'https://maps.app.goo.gl/5psz5EFPkwiFjC1fA' },
    { name: t('recommendations.rafael'), desc: t('recommendations.rafaelDesc'), url: 'https://maps.app.goo.gl/4jmqWqFS3gKDixww5' },
    { name: t('recommendations.panchita'), desc: t('recommendations.panchitaDesc'), url: 'https://maps.app.goo.gl/WA88AHCyZjSwYQ6Z8' },
  ];

  const coffeePlaces = [
    { name: t('recommendations.manolo'), desc: t('recommendations.manoloDesc'), url: 'https://maps.app.goo.gl/caVykZcJvhKJdKqq9' },
    { name: t('recommendations.pukuPuku'), desc: t('recommendations.pukuPukuDesc'), url: 'https://maps.app.goo.gl/cS5DGhqP6asLarQr7' },
    { name: t('recommendations.cafeEtChocolat'), desc: t('recommendations.cafeEtChocolatDesc'), url: 'https://maps.app.goo.gl/My4H9KiLVBd8TXny9' },
  ];

  const entertainmentPlaces = [
    { name: t('recommendations.parqueKennedy'), desc: t('recommendations.parqueKennedyDesc'), url: 'https://maps.app.goo.gl/7YRLX3vFjD9xunzT6' },
    { name: t('recommendations.malecon'), desc: t('recommendations.maleconDesc'), url: 'https://maps.app.goo.gl/kTL2kYH5YM4ssdJT6' },
    { name: t('recommendations.larcomar'), desc: t('recommendations.larcomarDesc'), url: 'https://maps.app.goo.gl/oi4n7dg6zChWYk8v6' },
    { name: t('recommendations.nightlife'), desc: t('recommendations.nightlifeDesc'), url: 'https://maps.app.goo.gl/FySNkx7Lqxu715219' },
  ];

  const services = [
    { name: t('recommendations.oxxo'), desc: t('recommendations.oxxoDesc'), url: 'https://maps.app.goo.gl/Uf2bjrENUqDd6ReXA' },
    { name: t('recommendations.metropolitano'), desc: t('recommendations.metropolitanoDesc'), url: 'https://maps.app.goo.gl/Ky8QrNXSesGvdqfXA' },
    { name: t('recommendations.vivanda'), desc: t('recommendations.vivandaDesc'), url: 'https://maps.app.goo.gl/28xK1ethe4pU8VjU8' },
  ];

  const PlacesList = ({ places }: { places: { name: string; desc: string; url?: string; search?: string }[] }) => (
    <div className="space-y-3">
      {places.map((place, index) => (
        <a
          key={index}
          href={place.url || mapsUrl(place.search || place.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="bg-card/50 hover:bg-accent/50 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{place.name}</h4>
                  <p className="text-sm text-muted-foreground">{place.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );

  return (
    <section id="recommendations" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          {t('recommendations.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-8">{t('recommendations.subtitle')}</p>
        
        <Tabs defaultValue="food" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="food" className="flex items-center gap-2">
              <Utensils className="h-4 w-4" />
              <span className="hidden sm:inline">{t('recommendations.food')}</span>
            </TabsTrigger>
            <TabsTrigger value="coffee" className="flex items-center gap-2">
              <Coffee className="h-4 w-4" />
              <span className="hidden sm:inline">{t('recommendations.coffee')}</span>
            </TabsTrigger>
            <TabsTrigger value="entertainment" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">{t('recommendations.entertainment')}</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">{t('recommendations.services')}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="food">
            <PlacesList places={foodPlaces} />
          </TabsContent>
          
          <TabsContent value="coffee">
            <PlacesList places={coffeePlaces} />
          </TabsContent>
          
          <TabsContent value="entertainment">
            <PlacesList places={entertainmentPlaces} />
          </TabsContent>
          
          <TabsContent value="services">
            <PlacesList places={services} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
