
// ============================================================================
// CUSTOMIZE THESE PRODUCTS FOR YOUR STORE
// ============================================================================
// 
// This is your product data. Replace these products with your own.
//
// STRUCTURE FOR EACH PRODUCT:
// {
//   title: "Product Name",              // What it's called
//   description: "Long description",    // What it does (can be multi-line)
//   price: "$29.99",                    // Price (with $ sign)
//   category: "lingerie",               // Category (e.g., "clothing", "books")
//   image: "https://example.com/img.jpg",  // Image URL (must be https://)
//   imageAlt: "Alt text"                // Description for accessibility
// }
//
// TO ADD YOUR OWN PRODUCTS:
// 1. Replace product title with your product name
// 2. Update description to explain what it is
// 3. Set price with $ sign
// 4. Choose a category
// 5. Find an image URL online and paste it here
// 6. Write a short alt text for the image
//
// EXAMPLE OF YOUR OWN PRODUCT:
// {
//   title: "My Awesome T-Shirt",
//   description: "High quality cotton t-shirt in multiple colors",
//   price: "$24.99",
//   category: "clothing",
//   image: "https://example.com/my-shirt.jpg",
//   imageAlt: "Blue t-shirt on a model"
// }
//
// ============================================================================

const products = [
  {
    title: 'Velvet Vixen Lace Set',
    description: 'Luxurious velvet and lace bralette + panty set — classic romantic vibes with a sultry edge. A playful twist with comic-strip-inspired trims for everyday confidence.',
    price: '$49.99',
    category: 'lingerie',
    image: 'https://images.unsplash.com/photo-1520975910241-5f63b8b6d7b8?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Velvet vixen lace bralette set on display'
  },
  {
    title: 'Silk Slip Nightdress',
    description: 'Silky, flowing slip for bedtime lounging and romantic evenings.',
    price: '$39.99',
    category: 'nightwear',
    image: 'https://images.unsplash.com/photo-1503342452485-86f7b8a9f3a7?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Classic Lace Corset',
    description: 'Structured corset with delicate lace for timeless silhouettes and dramatic curves.',
    price: '$79.99',
    category: 'lingerie',
    image: 'https://images.unsplash.com/photo-1520975910241-5f63b8b6d7b8?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Luxe Bralette Trio',
    description: 'Bralette bundle with three colors for everyday confidence and comfort.',
    price: '$59.99',
    category: 'lingerie',
    image: 'https://images.unsplash.com/photo-1516594918316-4f1c8a0b6e23?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Super Silly Selfies',
    description: 'A 24-page coloring book packed with quirky girls making the silliest faces!',
    pages: 24,
    price: '$12.99',
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=FunnyFace1'
  },
  {
    title: 'Cool Girls on Wheels',
    description: '20 pages of skateboards, rollerblades, and wild hair!',
    pages: 20,
    price: '$12.99',
    image: 'https://api.dicebear.com/7.x/adventurer/svg?seed=CoolSkaterGirl'
  },
  {
    title: 'Coloring Book Example',
    description: 'Placeholder coloring book product.',
    price: '$9.99',
    image: 'https://via.placeholder.com/120?text=Coloring+Book'
  }
];

export default products;
