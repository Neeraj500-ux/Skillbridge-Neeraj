import { createContext, useContext, useMemo, useState } from 'react';
import { cartCourseIds, wishlistCourseIds } from '../data/users';
import { getCourseById } from '../data/courses';

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cartIds, setCartIds] = useState(cartCourseIds);
  const [wishlistIds, setWishlistIds] = useState(wishlistCourseIds);
  const [toast, setToast] = useState(null);

  const showToast = (message, tone = 'success') => {
    setToast({ message, tone, id: Date.now() });
    setTimeout(() => setToast(null), 3000);
  };

  const addToCart = (id) => {
    setCartIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    showToast('Added to cart');
  };
  const removeFromCart = (id) => {
    setCartIds((prev) => prev.filter((c) => c !== id));
    showToast('Removed from cart', 'info');
  };
  const toggleWishlist = (id) => {
    setWishlistIds((prev) => {
      const exists = prev.includes(id);
      showToast(exists ? 'Removed from wishlist' : 'Added to wishlist', exists ? 'info' : 'success');
      return exists ? prev.filter((w) => w !== id) : [...prev, id];
    });
  };

  const cartCourses = useMemo(() => cartIds.map(getCourseById).filter(Boolean), [cartIds]);
  const wishlistCourses = useMemo(() => wishlistIds.map(getCourseById).filter(Boolean), [wishlistIds]);

  const cartTotal = cartCourses.reduce((sum, c) => sum + c.salePrice, 0);
  const cartOriginalTotal = cartCourses.reduce((sum, c) => sum + c.price, 0);

  const value = {
    cartIds, wishlistIds, cartCourses, wishlistCourses, cartTotal, cartOriginalTotal,
    addToCart, removeFromCart, toggleWishlist, showToast, toast,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
