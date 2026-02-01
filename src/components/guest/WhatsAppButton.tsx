import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '51961774643';

export function WhatsAppButton() {
  const { t } = useLanguage();
  const message = encodeURIComponent(t('contact.message'));
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-background px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105"
      aria-label={t('contact.whatsapp')}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline font-medium">{t('contact.whatsapp')}</span>
    </a>
  );
}
