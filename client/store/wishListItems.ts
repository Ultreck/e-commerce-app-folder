import { create } from "zustand";

const getWishListFromLocalStorage = () => {
  const storeWishList = localStorage.getItem("wishListCardsDatas");
  return storeWishList ? JSON.parse(storeWishList) : [];
};

const setCartToLocalStorage = (wishList: string[]) => {
  const localIds = getWishListFromLocalStorage();
  if (!localIds.includes(wishList)) {
    localStorage.setItem("wishListCardsDatas", JSON.stringify(wishList));
  }
};

interface wishListData {
  wishListCardsDatas: string[];
  addWishListItem: (id: string) => void;
  removeWishListItem: (id: string) => void;
  clearWhisList: () => void;
}

export const userWishListItemsStore = create<wishListData>()((set) => ({
  wishListCardsDatas: getWishListFromLocalStorage(),
  addWishListItem: (id) =>
    set((state) => {
      const updatedWishList = [...state.wishListCardsDatas, id];
      setCartToLocalStorage(updatedWishList);
      return { wishListCardsDatas: updatedWishList };
    }),
  removeWishListItem: (id) =>
    set((state) => {
      const updatedWishList = state.wishListCardsDatas.filter(
        (itemId) => itemId !== id
      );
      setCartToLocalStorage(updatedWishList);
      return { wishListCardsDatas: updatedWishList };
    }),
  clearWhisList: () =>
    set(() => {
      setCartToLocalStorage([]);
      return { wishListCardsDatas: [] };
    }),
}));
