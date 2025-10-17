import { Product } from '@/types/product';

export const products: Product[] = [
  // HOODIES
  {
    id: 'hoodie-1',
    name: 'CubePay Tech Hoodie',
    slug: 'cubepay-tech-hoodie',
    description: 'Premium quality hoodie featuring embroidered AR Cube Pay logo. Perfect for crypto enthusiasts and tech innovators. 80% cotton, 20% polyester blend. Unisex fit.',
    price: 100.00,
    category: 'hoodies',
    colors: [
      { name: 'Navy Blue', value: '#1E3A8A' },
      { name: 'Black', value: '#000000' },
      { name: 'Heather Gray', value: '#9CA3AF' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    featured: true,
    stock: 'in-stock',
    details: {
      materials: '80% cotton, 20% polyester blend. Soft fleece interior.',
      care: 'Machine wash cold. Tumble dry low. Do not iron decoration.',
      shipping: 'Ships within 2-3 business days. Free shipping on orders over $100.'
    }
  },
  
  // T-SHIRTS
  {
    id: 'tshirt-1',
    name: 'CubePay Classic Tee',
    slug: 'cubepay-classic-tee',
    description: 'Soft, comfortable t-shirt with high-quality AR Cube Pay logo print. 100% premium cotton. Modern fit. Show your support for the payment revolution.',
    price: 50.00,
    category: 'tshirts',
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Navy Blue', value: '#1E3A8A' },
      { name: 'Heather Gray', value: '#9CA3AF' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    featured: true,
    stock: 'in-stock',
    details: {
      materials: '100% premium cotton. Pre-shrunk fabric.',
      care: 'Machine wash cold with like colors. Tumble dry low.',
      shipping: 'Ships within 2-3 business days. Free shipping on orders over $100.'
    }
  },
  
  // CAPS
  {
    id: 'cap-1',
    name: 'CubePay Snapback Cap',
    slug: 'cubepay-snapback-cap',
    description: 'Classic 6-panel snapback with embroidered 3D AR Cube Pay logo. Premium cotton twill. Adjustable snapback closure. Perfect for any occasion.',
    price: 35.00,
    category: 'caps',
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Navy Blue', value: '#1E3A8A' }
    ],
    sizes: ['One Size'],
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    featured: true,
    stock: 'in-stock',
    details: {
      materials: 'Premium cotton twill. Structured 6-panel design.',
      care: 'Spot clean only. Do not machine wash.',
      shipping: 'Ships within 2-3 business days. Free shipping on orders over $100.'
    }
  },
  
  // SNEAKERS
  {
    id: 'sneaker-1',
    name: 'CubePay Air Tech Sneakers',
    slug: 'cubepay-air-tech-sneakers',
    description: 'Limited edition tech-inspired sneakers featuring AR Cube Pay branding. Mesh and synthetic upper, cushioned sole, modern silhouette. For innovators who move fast.',
    price: 150.00,
    category: 'sneakers',
    colors: [
      { name: 'Black/Blue', value: '#1E3A8A' },
      { name: 'White/Purple', value: '#A855F7' },
      { name: 'Navy/Silver', value: '#334155' }
    ],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    featured: true,
    stock: 'limited',
    details: {
      materials: 'Mesh and synthetic upper. Rubber sole with air cushioning.',
      care: 'Wipe clean with damp cloth. Air dry only.',
      shipping: 'Ships within 3-5 business days. Free shipping on orders over $100.'
    }
  }
];

export const categories = [
  { id: 'hoodies', name: 'Hoodies', slug: 'hoodies' },
  { id: 'tshirts', name: 'T-Shirts', slug: 'tshirts' },
  { id: 'caps', name: 'Caps', slug: 'caps' },
  { id: 'sneakers', name: 'Sneakers', slug: 'sneakers' }
];
