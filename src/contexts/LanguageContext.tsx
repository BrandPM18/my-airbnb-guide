import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Header
    'nav.welcome': 'Bienvenida',
    'nav.info': 'Información',
    'nav.wifi': 'WiFi',
    'nav.arrival': 'Llegada',
    'nav.rules': 'Reglas',
    'nav.gallery': 'Galería',
    'nav.location': 'Ubicación',
    'nav.checkout': 'Checkout',
    
    // Hero
    'hero.welcome': 'Bienvenido a tu hogar en Miraflores',
    'hero.subtitle': 'Tu espacio acogedor en el corazón de Lima',
    'hero.address': 'Grimaldo del Solar 202, Dpto 1108',
    
    // Quick Info
    'info.checkin': 'Check-in',
    'info.checkout': 'Check-out',
    'info.guests': 'Huéspedes',
    'info.beds': 'Camas',
    'info.floor': 'Piso',
    'info.upTo': 'Hasta',
    'info.bedsDetail': '2 Queen + 1 Sofá-cama',
    
    // WiFi
    'wifi.title': 'WiFi',
    'wifi.network': 'Red',
    'wifi.password': 'Contraseña',
    'wifi.copy': 'Copiar',
    'wifi.copied': '¡Copiado!',
    
    // Arrival
    'arrival.title': 'Instrucciones de Llegada',
    'arrival.step1.title': 'Recepción',
    'arrival.step1.desc': 'Regístrate en la recepción del edificio mostrando tu documento de identidad.',
    'arrival.step2.title': 'Ascensor',
    'arrival.step2.desc': 'Sube al piso 11, departamento 1108',
    'arrival.step3.title': 'Cerradura Inteligente',
    'arrival.step3.desc': 'Presiona suavemente la pantalla con un dedo para encenderla. Ingresa tu código (con el # al final). Escucharás un sonido de confirmación. Jala la manija hacia abajo para entrar.',
    'arrival.codeNote': '📱 El código de acceso se enviará antes de tu llegada',
    
    // Rules
    'rules.title': 'Reglas de la Casa',
    'rules.noSmoking': 'No fumar',
    'rules.noSmokingDesc': 'Prohibido fumar dentro del departamento',
    'rules.noParties': 'No fiestas',
    'rules.noPartiesDesc': 'No se permiten fiestas ni reuniones',
    'rules.quiet': 'Horario de silencio',
    'rules.quietDesc': 'Respetar las horas de descanso, especialmente en la noche',
    'rules.bathroom': 'Baño',
    'rules.bathroomDesc': 'No arrojar papel ni objetos al inodoro. Usar los tachos disponibles',
    'rules.guests': 'Huéspedes',
    'rules.guestsDesc': 'Solo personas registradas. Visitantes deben notificarse para registro',
    
    // Gallery
    'gallery.title': 'Conoce el Departamento',
    'gallery.living': 'Sala - Comedor',
    'gallery.bedroom': 'Dormitorio',
    
    // Tutorials
    'tutorials.title': 'Tutoriales',
    'tutorials.placeholder': 'Próximamente: videos de cómo usar los electrodomésticos',
    
    // Location
    'location.title': 'Ubicación',
    'location.openMaps': 'Abrir en Google Maps',
    'location.openWaze': 'Abrir en Waze',
    
    // Recommendations
    'recommendations.title': 'Recomendaciones Locales',
    'recommendations.comingSoon': 'Próximamente agregaremos restaurantes, cafés y atracciones cercanas',
    'recommendations.food': 'Comida',
    'recommendations.coffee': 'Café',
    'recommendations.entertainment': 'Entretenimiento',
    'recommendations.services': 'Servicios',
    
    // Checkout
    'checkout.title': 'Antes de Irte',
    'checkout.time': 'Hora de salida: 11:00 AM',
    'checkout.step1': 'Apaga las luces y equipos electrónicos',
    'checkout.step2': 'Cierra todas las ventanas',
    'checkout.step3': 'Recuerda botar la basura',
    'checkout.step4': 'Asegúrate de no dejar pertenencias',
    'checkout.step5': 'Cierra bien la puerta al salir',
    'checkout.thanks': '¡Gracias por tu estadía! Esperamos que hayas disfrutado.',
    
    // Contact
    'contact.whatsapp': 'Contactar por WhatsApp',
    'contact.message': 'Hola, soy huésped del departamento en Miraflores...',
    
    // Footer
    'footer.thanks': 'Gracias por elegir nuestro hogar',
    'footer.contact': 'Contacto',
  },
  en: {
    // Header
    'nav.welcome': 'Welcome',
    'nav.info': 'Info',
    'nav.wifi': 'WiFi',
    'nav.arrival': 'Arrival',
    'nav.rules': 'Rules',
    'nav.gallery': 'Gallery',
    'nav.location': 'Location',
    'nav.checkout': 'Checkout',
    
    // Hero
    'hero.welcome': 'Welcome to your home in Miraflores',
    'hero.subtitle': 'Your cozy space in the heart of Lima',
    'hero.address': 'Grimaldo del Solar 202, Apt 1108',
    
    // Quick Info
    'info.checkin': 'Check-in',
    'info.checkout': 'Check-out',
    'info.guests': 'Guests',
    'info.beds': 'Beds',
    'info.floor': 'Floor',
    'info.upTo': 'Up to',
    'info.bedsDetail': '2 Queen + 1 Sofa bed',
    
    // WiFi
    'wifi.title': 'WiFi',
    'wifi.network': 'Network',
    'wifi.password': 'Password',
    'wifi.copy': 'Copy',
    'wifi.copied': 'Copied!',
    
    // Arrival
    'arrival.title': 'Arrival Instructions',
    'arrival.step1.title': 'Reception',
    'arrival.step1.desc': 'Check in at the building reception showing your ID.',
    'arrival.step2.title': 'Elevator',
    'arrival.step2.desc': 'Go up to floor 11, apartment 1108',
    'arrival.step3.title': 'Smart Lock',
    'arrival.step3.desc': 'Gently touch the screen with your finger to turn it on. Enter your code (with # at the end). You will hear a confirmation sound. Pull the handle down to enter.',
    'arrival.codeNote': '📱 The access code will be sent before your arrival',
    
    // Rules
    'rules.title': 'House Rules',
    'rules.noSmoking': 'No smoking',
    'rules.noSmokingDesc': 'Smoking is not allowed inside the apartment',
    'rules.noParties': 'No parties',
    'rules.noPartiesDesc': 'Parties and gatherings are not allowed',
    'rules.quiet': 'Quiet hours',
    'rules.quietDesc': 'Respect rest hours, especially at night',
    'rules.bathroom': 'Bathroom',
    'rules.bathroomDesc': 'Do not flush paper or objects down the toilet. Use the bins provided',
    'rules.guests': 'Guests',
    'rules.guestsDesc': 'Only registered guests. Visitors must be notified for registration',
    
    // Gallery
    'gallery.title': 'Explore the Apartment',
    'gallery.living': 'Living - Dining Room',
    'gallery.bedroom': 'Bedroom',
    
    // Tutorials
    'tutorials.title': 'Tutorials',
    'tutorials.placeholder': 'Coming soon: videos on how to use appliances',
    
    // Location
    'location.title': 'Location',
    'location.openMaps': 'Open in Google Maps',
    'location.openWaze': 'Open in Waze',
    
    // Recommendations
    'recommendations.title': 'Local Recommendations',
    'recommendations.comingSoon': 'Coming soon: restaurants, cafes and nearby attractions',
    'recommendations.food': 'Food',
    'recommendations.coffee': 'Coffee',
    'recommendations.entertainment': 'Entertainment',
    'recommendations.services': 'Services',
    
    // Checkout
    'checkout.title': 'Before You Leave',
    'checkout.time': 'Check-out time: 11:00 AM',
    'checkout.step1': 'Turn off lights and electronic devices',
    'checkout.step2': 'Close all windows',
    'checkout.step3': 'Leave the keys on the table (if applicable)',
    'checkout.step4': 'Make sure you don\'t leave any belongings',
    'checkout.step5': 'Close the door properly when leaving',
    'checkout.thanks': 'Thank you for your stay! We hope you enjoyed it.',
    
    // Contact
    'contact.whatsapp': 'Contact via WhatsApp',
    'contact.message': 'Hello, I am a guest at the Miraflores apartment...',
    
    // Footer
    'footer.thanks': 'Thank you for choosing our home',
    'footer.contact': 'Contact',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
