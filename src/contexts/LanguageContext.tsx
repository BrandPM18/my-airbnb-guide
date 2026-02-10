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
    'gallery.title': 'Conoce las Áreas Comunes',
    'gallery.coworking': 'Coworking',
    'gallery.coworkingDesc': 'Zona apta para trabajar, cuenta con Wifi y aire acondicionado. Puedes solicitar la clave y el control de aire acondicionado en recepción. Cuenta con una TV para presentaciones.',
    'gallery.gym': 'Gimnasio',
    'gallery.gymDesc': 'Ambiente para ejercitar, cuenta con aire acondicionado. Solicita la entrada por medio del chat con el anfitrión. Ingreso únicamente con zapatillas.',
    'gallery.lobby': 'Lobby',
    'gallery.lobbyDesc': 'Cuenta con sofás donde podrás esperar en caso se requiera, también tiene un baño. Se puede solicitar guardar hasta 2 equipajes.',
    'gallery.laundry': 'Lavandería',
    'gallery.laundryDesc': 'Zona común del edificio, hay máquinas lavadoras y secadoras. El costo por uso es de 12 soles peruanos.',
    
    // Tutorials
    'tutorials.title': 'Tutoriales',
    'tutorials.sofaBed': 'Tutorial de cómo armar el sofá cama',
    
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
    
    // Food recommendations
    'recommendations.laLucha': 'La Lucha Sanguchería Criolla',
    'recommendations.laLuchaDesc': 'Famosos sánguches peruanos clásicos.',
    'recommendations.puntoAzul': 'Punto Azul',
    'recommendations.puntoAzulDesc': 'Mariscos abundantes y bien valorados.',
    'recommendations.maido': 'Maido',
    'recommendations.maidoDesc': 'Alta Cocina nikkei, uno de los mejores restaurantes del mundo.',
    'recommendations.rafael': 'Rafael',
    'recommendations.rafaelDesc': 'Cocina contemporánea peruana, elegante y sofisticada.',
    'recommendations.panchita': 'Panchita',
    'recommendations.panchitaDesc': 'Platos criollos peruanos en ambiente acogedor.',
    
    // Coffee recommendations
    'recommendations.manolo': 'Manolo',
    'recommendations.manoloDesc': 'Cafetería tradicional, ideal para desayunos o antojos nocturnos.',
    'recommendations.pukuPuku': 'Puku Puku Café',
    'recommendations.pukuPukuDesc': 'Café de especialidad y brunch.',
    'recommendations.cafeEtChocolat': 'Café Et Chocolat',
    'recommendations.cafeEtChocolatDesc': 'Café acogedor con opciones dulces, a 3 minutos caminando.',
    
    // Entertainment recommendations
    'recommendations.parqueKennedy': 'Parque Kennedy',
    'recommendations.parqueKennedyDesc': 'Centro turístico de Miraflores, cafés, ferias y vida local.',
    'recommendations.malecon': 'Malecón de Miraflores',
    'recommendations.maleconDesc': 'Caminatas, bicicletas y vistas al mar.',
    'recommendations.larcomar': 'Larcomar',
    'recommendations.larcomarDesc': 'Centro comercial con vista al mar, restaurantes y cine.',
    'recommendations.nightlife': 'Bares y pubs (zona Parque Kennedy / Calle Berlín)',
    'recommendations.nightlifeDesc': 'Vida nocturna variada.',
    
    // Services recommendations
    'recommendations.oxxo': 'Tienda OXXO 24/7',
    'recommendations.oxxoDesc': 'Al costado del edificio. Snacks, comida y artículos de primera necesidad.',
    'recommendations.metropolitano': 'Estación Metropolitano',
    'recommendations.metropolitanoDesc': '"Benavides" (más cercana) y "Ricardo Palma" a minutos. Conecta con Centro, Barranco, San Isidro.',
    'recommendations.vivanda': 'Supermercado Vivanda',
    'recommendations.vivandaDesc': 'A 3 minutos caminando, supermercado con productos de calidad.',
    
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
    'gallery.title': 'Common Areas',
    'gallery.coworking': 'Coworking',
    'gallery.coworkingDesc': 'Work-friendly area with WiFi and air conditioning. You can request the password and AC remote at reception. Includes a TV for presentations.',
    'gallery.gym': 'Gym',
    'gallery.gymDesc': 'Exercise area with air conditioning. Request access through the host chat. Sneakers required.',
    'gallery.lobby': 'Lobby',
    'gallery.lobbyDesc': 'Features sofas for waiting and a restroom. You can request to store up to 2 pieces of luggage.',
    'gallery.laundry': 'Laundry',
    'gallery.laundryDesc': 'Shared building area with washing machines and dryers. Cost per use is 12 Peruvian soles.',
    
    // Tutorials
    'tutorials.title': 'Tutorials',
    'tutorials.sofaBed': 'How to set up the sofa bed',
    
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
    
    // Food recommendations
    'recommendations.laLucha': 'La Lucha Sanguchería Criolla',
    'recommendations.laLuchaDesc': 'Famous classic Peruvian sandwiches.',
    'recommendations.puntoAzul': 'Punto Azul',
    'recommendations.puntoAzulDesc': 'Generous and well-rated seafood.',
    'recommendations.maido': 'Maido',
    'recommendations.maidoDesc': 'High-end Nikkei cuisine, one of the best restaurants in the world.',
    'recommendations.rafael': 'Rafael',
    'recommendations.rafaelDesc': 'Contemporary Peruvian cuisine, elegant and sophisticated.',
    'recommendations.panchita': 'Panchita',
    'recommendations.panchitaDesc': 'Creole Peruvian dishes in a cozy atmosphere.',
    
    // Coffee recommendations
    'recommendations.manolo': 'Manolo',
    'recommendations.manoloDesc': 'Traditional café, ideal for breakfasts or late-night cravings.',
    'recommendations.pukuPuku': 'Puku Puku Café',
    'recommendations.pukuPukuDesc': 'Specialty coffee and brunch.',
    'recommendations.cafeEtChocolat': 'Café Et Chocolat',
    'recommendations.cafeEtChocolatDesc': 'Cozy café with sweet options, 3 minutes walking.',
    
    // Entertainment recommendations
    'recommendations.parqueKennedy': 'Parque Kennedy',
    'recommendations.parqueKennedyDesc': 'Tourist center of Miraflores, cafes, fairs and local life.',
    'recommendations.malecon': 'Malecón de Miraflores',
    'recommendations.maleconDesc': 'Walking, biking and ocean views.',
    'recommendations.larcomar': 'Larcomar',
    'recommendations.larcomarDesc': 'Ocean-view shopping center, restaurants and cinema.',
    'recommendations.nightlife': 'Bars and pubs (Parque Kennedy / Calle Berlín area)',
    'recommendations.nightlifeDesc': 'Varied nightlife.',
    
    // Services recommendations
    'recommendations.oxxo': 'OXXO Store 24/7',
    'recommendations.oxxoDesc': 'Next to the building. Snacks, food and basic necessities.',
    'recommendations.metropolitano': 'Metropolitano Station',
    'recommendations.metropolitanoDesc': '"Benavides" (closest) and "Ricardo Palma" minutes away. Connects to Centro, Barranco, San Isidro.',
    'recommendations.wong': 'Wong Supermarket',
    'recommendations.wongDesc': 'Full grocery shopping.',
    
    // Checkout
    'checkout.title': 'Before You Leave',
    'checkout.time': 'Check-out time: 11:00 AM',
    'checkout.step1': 'Turn off lights and electronic devices',
    'checkout.step2': 'Close all windows',
    'checkout.step3': 'Remember to take out the trash',
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
