import React from "react";
import { useState } from "react";
import Background from "./Background";
import Hero from "./Hero";
import { useEffect } from "react";
import Product from "../Pages/Product";
import Title from "./Title";
import OurPolicy from "./OurPolicy";
import NewLetterBox from "./NewLetterBox";
import Footer from "./Footer";

const Home = () => {
  const [heroCount, setHeroCount] = useState(0);
  useEffect(() => {
    setInterval(
      () =>
        setHeroCount((prev) => {
          return prev === 3 ? 0 : prev + 1;
        }),
      3000
    );
  }, []);
  let heroData = [
    { text1: "30% Off Limited Offer", text2: "Style that" },
    { text1: "Discover the Best of Bold Fashion", text2: "!Shop Now" },
    { text1: "Choose your perfect Fashion Fit", text2: "Now on Sale!" },
    { text1: "Explore out Best Collections ", text2: "Shop Now!" },
  ];
  return (
    <div className="lg:h-[100vh] w-[99vw] md:h-[50vh] sm:h-[40vh] mt-[70px]   bg-gradient-to-l from-[#141414] to-[#0c2025]">
      <Background heroCount={heroCount} />
      <Hero
        heroCount={heroCount}
        heroData={heroData[heroCount]}
        setHeroCount={setHeroCount}
      />
      <Product></Product>
      <OurPolicy />
      <NewLetterBox />
      <Footer />
    </div>
  );
};

export default Home;
