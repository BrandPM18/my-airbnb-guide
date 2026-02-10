import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import coworkingImage from '@/assets/area-coworking.jpg';
import gymImage from '@/assets/area-gym.jpg';
import lobbyImage from '@/assets/area-lobby.jpg';
import laundryImage from '@/assets/area-laundry.jpg';

export function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const areas = [
    { src: coworkingImage, name: t('gallery.coworking'), desc: t('gallery.coworkingDesc') },
    { src: gymImage, name: t('gallery.gym'), desc: t('gallery.gymDesc') },
    { src: lobbyImage, name: t('gallery.lobby'), desc: t('gallery.lobbyDesc') },
    { src: laundryImage, name: t('gallery.laundry'), desc: t('gallery.laundryDesc') },
  ];

  return (
    <section id="gallery" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          {t('gallery.title')}
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-border bg-card shadow-sm"
            >
              <div
                className="relative aspect-[4/3] cursor-pointer group"
                onClick={() => setSelectedImage(area.src)}
              >
                <img
                  src={area.src}
                  alt={area.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-foreground text-sm mb-1">{area.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Area"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
