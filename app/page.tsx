import Download from "@/components/sections/download";
import Faq from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Pricing from "@/components/sections/pricing";
import Reviews from "@/components/sections/reviews";

export default function Home() {
  return (
    <div className="w-full m-auto max-w-[1024px]">
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Reviews/>
      <Download/>
      <Footer/>
    </div>
  );
}
