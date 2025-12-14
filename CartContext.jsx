import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState(() => {
    try{ const raw = localStorage.getItem('cart'); return raw ? JSON.parse(raw) : []; }catch(e){ return []; }
  });

  useEffect(()=>{ try{ localStorage.setItem('cart', JSON.stringify(cart)); }catch(e){} }, [cart]);

  function addItem(product, qty = 1){
    setCart(c => {
      const found = c.find(x => x.title === product.title);
      if(found){ return c.map(x => x.title===product.title ? { ...x, qty: x.qty + qty } : x); }
      return [{ title: product.title, price: product.price, image: product.image, qty }, ...c];
    });
  }

  function removeItem(title){ setCart(c => c.filter(x => x.title !== title)); }

  function updateQty(title, qty){ setCart(c => c.map(x => x.title===title?{...x, qty: Math.max(0, qty)}:x)); }

  function clearCart(){ setCart([]); }

  const totalCount = cart.reduce((s, i) => s + (i.qty||0), 0);
  const totalPrice = cart.reduce((s, i) => {
    const n = Number(String(i.price||'').replace(/[^0-9.-]+/g, '')) || 0; return s + n * (i.qty||0);
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQty, clearCart, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){ return useContext(CartContext); }

export default CartContext;
