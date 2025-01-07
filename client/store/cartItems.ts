import { create } from "zustand";

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cartCardsDatas");
  return storedCart ? JSON.parse(storedCart) : [];
};

const setCartToLocalStorage = (cart: string[]) => {
  const localIds = getCartFromLocalStorage();
  if (!localIds.includes(cart)) {
    localStorage.setItem("cartCardsDatas", JSON.stringify(cart));
  }
};

interface cartData {
  cartCardsDatas: string[];
  addCartItem: (id: string) => void;
  removeCartItem: (id: string) => void;
  clearCart: () => void;
}

export const userCartItemsStore = create<cartData>()((set) => ({
  cartCardsDatas: getCartFromLocalStorage(),
  addCartItem: (id) =>
    set((state) => {
      const updatedCart = [...state.cartCardsDatas, id];
      setCartToLocalStorage(updatedCart);
      return { cartCardsDatas: updatedCart };
    }),
  removeCartItem: (id) =>
    set((state) => {
      const updatedCart = state.cartCardsDatas.filter(
        (itemId) => itemId !== id
      );
      setCartToLocalStorage(updatedCart);
      return { cartCardsDatas: updatedCart };
    }),
  clearCart: () =>
    set(() => {
      setCartToLocalStorage([]);
      return { cartCardsDatas: [] };
    }),
}));
