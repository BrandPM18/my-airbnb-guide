import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/guest/Header';
import { Footer } from '@/components/guest/Footer';
import { WhatsAppButton } from '@/components/guest/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sun, SprayCan, UtensilsCrossed, ImageIcon } from 'lucide-react';

const products = [
  {
    nameKey: 'products.sunscreen',
    descKey: 'products.sunscreenDesc',
    priceSoles: 80,
    priceUsd: 25,
    icon: Sun,
  },
  {
    nameKey: 'products.cleaning',
    descKey: 'products.cleaningDesc',
    priceSoles: 80,
    priceUsd: 25,
    icon: SprayCan,
  },
  {
    nameKey: 'products.foodTour',
    descKey: 'products.foodTourDesc',
    priceSoles: 100,
    priceUsd: 30,
    icon: UtensilsCrossed,
  },
];

const Products = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2 mt-8">
            {t('products.title')}
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            {t('products.subtitle')}
          </p>

          <div className="grid gap-6 max-w-3xl mx-auto">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      {/* Image placeholder */}
                      <div className="sm:w-48 h-48 sm:h-auto bg-muted flex items-center justify-center flex-shrink-0">
                        <ImageIcon className="h-12 w-12 text-muted-foreground/40" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold text-foreground">
                              {t(product.nameKey)}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            {t(product.descKey)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-sm font-semibold">
                            S/{product.priceSoles}
                          </Badge>
                          <Badge variant="outline" className="text-sm">
                            ${product.priceUsd} USD
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            {t('products.contact')}
          </p>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
