import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, Copy, Check } from 'lucide-react';

const WIFI_NETWORK = 'schell1108';
const WIFI_PASSWORD = '20251229';

export function WiFiCard() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(WIFI_PASSWORD);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="wifi" className="py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto bg-primary text-primary-foreground">
          <CardHeader className="text-center">
            <Wifi className="h-10 w-10 mx-auto mb-2" />
            <CardTitle className="text-2xl">{t('wifi.title')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <p className="text-sm opacity-80">{t('wifi.network')}</p>
              <p className="text-xl font-bold">{WIFI_NETWORK}</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <p className="text-sm opacity-80">{t('wifi.password')}</p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold font-mono tracking-wider">{WIFI_PASSWORD}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyPassword}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-1" />
                      {t('wifi.copied')}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" />
                      {t('wifi.copy')}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
