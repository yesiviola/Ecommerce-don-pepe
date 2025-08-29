import ProductStructuredData from '@/components/seo/ProductStructuredData';

export default function ProductPage({ params }: { params: { slug: string } }) {
  // ... lógica para obtener el producto
  
  return (
    <>
      <ProductStructuredData product={product} />

    </>
  );
}