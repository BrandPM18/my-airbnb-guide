import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/guest/Header';
import { Hero } from '@/components/guest/Hero';
import { QuickInfo } from '@/components/guest/QuickInfo';
import { WiFiCard } from '@/components/guest/WiFiCard';
import { ArrivalInstructions } from '@/components/guest/ArrivalInstructions';
import { HouseRules } from '@/components/guest/HouseRules';
import { Gallery } from '@/components/guest/Gallery';
import { Tutorials } from '@/components/guest/Tutorials';
import { Location } from '@/components/guest/Location';
import { Recommendations } from '@/components/guest/Recommendations';
import { Checkout } from '@/components/guest/Checkout';
import { ProductsBanner } from '@/components/guest/ProductsBanner';
import { WhatsAppButton } from '@/components/guest/WhatsAppButton';
import { Footer } from '@/components/guest/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <QuickInfo />
          <WiFiCard />
          <ArrivalInstructions />
          <HouseRules />
          <Gallery />
          <Tutorials />
          <Location />
          <Recommendations />
          <ProductsBanner />
          <Checkout />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
