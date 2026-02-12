import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/guest/Header';
import { Footer } from '@/components/guest/Footer';
import { WhatsAppButton } from '@/components/guest/WhatsAppButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import parkingImg from '@/assets/product-parking.webp';
import cleaningImg from '@/assets/product-cleaning.jpg';
import sunscreenImg from '@/assets/product-sunscreen.jpg';
import transferImg from '@/assets/product-transfer.png';

const products = [
  {
    nameKey: 'products.parking',
    descKey: 'products.parkingDesc',
    priceSoles: 25,
    priceUsd: 8,
    image: parkingImg,
  },
  {
    nameKey: 'products.cleaning',
    descKey: 'products.cleaningDesc',
    priceSoles: 80,
    priceUsd: 25,
    image: cleaningImg,
  },
  {
    nameKey: 'products.sunscreen',
    descKey: 'products.sunscreenDesc',
    priceSoles: 80,
    priceUsd: 25,
    image: sunscreenImg,
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
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={t(product.nameKey)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {t(product.nameKey)}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
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
            ))}
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
