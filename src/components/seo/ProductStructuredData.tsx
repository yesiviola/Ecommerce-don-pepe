import { Product } from '@/types/product';

interface ProductStructuredDataProps {
  product: Product;
}

export default function ProductStructuredData({ product }: ProductStructuredDataProps) {
  const productStructuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: product.images.filter(img => img.isPrimary).map(img => img.url),
    description: product.shortDescription,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.donpepeinsumos.com.ar/product/${product.slug}`,
      priceCurrency: 'ARS',
      price: product.price,
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.stock > 0 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Don Pepe Insumos Cárnicos'
      }
    },
    ...(product.specifications.material && {
      material: product.specifications.material
    }),
    ...(product.specifications.potencia && {
      additionalProperty: {
        '@type': 'PropertyValue',
        name: 'Potencia',
        value: product.specifications.potencia
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
    />
  );
}