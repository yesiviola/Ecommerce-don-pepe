import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";

// Configuración de fuentes
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadatos principales para SEO
export const metadata: Metadata = {
  title: {
    default: "Don Pepe – Insumos Cárnicos y Maquinaria para Carnicerías",
    template: "%s | Don Pepe Insumos Cárnicos"
  },
  description: "Todo para tu carnicería. Máquinas, cuchillos, cuchillas, embalajes y repuestos. Calidad profesional con envíos a todo el país. Precios mayoristas y minoristas.",
  keywords: [
    "carnicería", 
    "insumos cárnicos", 
    "maquinaria para carnicería", 
    "cuchillos profesionales", 
    "cuchillas", 
    "embalaje alimenticio",
    "picadoras de carne",
    "cortadoras de fiambre",
    "repuestos maquinaria",
    "accesorios carnicería",
    "Don Pepe",
    "equipamiento carnicería"
  ],
  metadataBase: new URL("https://www.donpepeinsumos.com.ar"),
  authors: [{ name: "Don Pepe Insumos Cárnicos" }],
  creator: "Don Pepe Insumos Cárnicos",
  publisher: "Don Pepe Insumos Cárnicos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.donpepeinsumos.com.ar",
    siteName: "Don Pepe Insumos Cárnicos",
    title: "Don Pepe – Insumos Cárnicos y Maquinaria para Carnicerías",
    description: "Todo para tu carnicería. Máquinas, cuchillos, cuchillas, embalajes y repuestos. Calidad profesional.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Don Pepe Insumos Cárnicos - Equipamiento profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Don Pepe – Insumos Cárnicos y Maquinaria para Carnicerías",
    description: "Todo para tu carnicería. Calidad profesional con envíos a todo el país.",
    images: ["/images/twitter-image.jpg"],
    creator: "@donpepeinsumos",
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
    yandex: "tu-codigo-de-verificacion-yandex",
  },
  category: "food & beverage",
};

// JSON-LD para schema.org (datos estructurados)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Don Pepe Insumos Cárnicos',
  description: 'Venta de insumos, máquinas y equipamiento para carnicerías',
  url: 'https://www.donpepeinsumos.com.ar',
  telephone: '+54-11-5426-0567',
  email: 'donpepekm30.insumos@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Rivadavia 1234',
    addressLocality: 'Buenos Aires',
    addressRegion: 'CABA',
    postalCode: 'C1405',
    addressCountry: 'AR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-34.6037',
    longitude: '-58.3816'
  },
  openingHours: 'Mo-Fr 08:00-18:00, Sa 08:00-13:00',
  priceRange: "$$",
  sameAs: [
    'https://www.facebook.com/donpepeinsumos',
    'https://www.instagram.com/donpepeinsumos',
    'https://twitter.com/donpepeinsumos'
  ],
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.donpepeinsumos.com.ar/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD para datos estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Favicon y iconos */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="apple-touch-icon" href="/apple-touch-icon?<generated>" type="image/<generated>" sizes="<generated>" />
        
        {/* Preconexiones para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Meta tags adicionales */}
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}