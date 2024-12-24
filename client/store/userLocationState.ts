import { create } from "zustand";

interface locationData {
    clientLocation: object;
    setClientLocation: (clientLocation: object) => void;
}

export const userLocationStore = create<locationData>()((set) =>({
   clientLocation: {},
    setClientLocation: (clientLocation) => set((state) => ({...state,clientLocation })),
}))