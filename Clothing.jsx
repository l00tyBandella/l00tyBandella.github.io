import React from 'react';
import products from './productsData';
import Products from './Products';

export default function Clothing(){
  const clothing = products.filter(p => p.category === 'lingerie' || p.category === 'nightwear');
  return <Products products={clothing} />;
}
