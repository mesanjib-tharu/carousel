import { create } from "zustand";

interface SliderState {
  itemsPerSlide: number;
  setItemsPerSlide: (count: number) => void;
  autoPlayInterval: number; // Ensure this is included
}

const useSliderStore = create<SliderState>((set) => ({
  itemsPerSlide: 4,
  setItemsPerSlide: (count) => set({ itemsPerSlide: count }),
  autoPlayInterval: 3000, // Add a default value for autoPlayInterval
}));

export default useSliderStore;