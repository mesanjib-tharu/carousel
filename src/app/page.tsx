"use client";

import { useEffect } from "react";
import Slider from "../components/Slider";
import useSliderStore from "./store/sliderStore";
import data from "../data/caroselData.json";
import { Poppins, Permanent_Marker } from "next/font/google";

// Import fonts with desired weights and subsets
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});



export default function Home() {
  const { setItemsPerSlide } = useSliderStore();

  useEffect(() => {
    setItemsPerSlide(4); // Set default to 4 items per slide
  }, [setItemsPerSlide]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="flex gap-4">
        <div className="flex flex-col">
        <h1 className={`text-3xl font-semibold mb-4 ${poppins.className} ${permanentMarker.className}`}>Customer</h1>
        <h3 className="text-2xl font-bold mb-4">Testimonials</h3>
        </div>
      </div>

      
      {/* Slider Component */}
      <Slider items={data?.slides} />
    </div>
  );
}
