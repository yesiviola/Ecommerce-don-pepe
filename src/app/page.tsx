import TopBanner from "@/components/layout/TopBanner/TopBanner";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ProductCarousel from "@/components/products/ProductCarousel/ProductCarousel";
import ProductGrid from "@/components/products/ProductGrid/ProductGrid";
import PaymentSection from "@/components/sections/Payment/PaymentSection";
import { featured } from "@/data/featured";
import CategoryTiles from "@/components/sections/Categories/CategoryTiles";
import InfoSplit from "@/components/sections/InfoCTA/InfoSplit";

const messages = [
  "6 cuotas sin interés • Bancos adheridos",
  "Envíos a todo el país • Despacho en 24/48h",
  "Atención mayorista y personalizada",
];

export default function HomePage() {
  return (
    <main>
      <TopBanner messages={messages} tone="blueGradient" />
      <Header />

      <section className="container py-6" aria-label="Destacados">
        <ProductCarousel slides={featured.slides} />
      </section>

      <PaymentSection />
          <CategoryTiles />

      <section className="container py-10" aria-labelledby="best-sellers">
        <h2 id="best-sellers" className="mb-4 text-xl font-semibold">Más vendidos</h2>
        <ProductGrid products={featured.products as any} />
          <InfoSplit />
      </section>

      <Footer />
    </main>
  );
}
