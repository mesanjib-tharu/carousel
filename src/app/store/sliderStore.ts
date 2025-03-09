import { create } from "zustand";



interface SliderState {
  itemsPerSlide: number;
  setItemsPerSlide: (count: number) => void;
  autoPlayInterval: number;
}

const useSliderStore = create<SliderState>((set) => ({
  itemsPerSlide: 4,
  setItemsPerSlide: (count) => set({ itemsPerSlide: count }),
}));

export default useSliderStore;
