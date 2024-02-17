import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {MasonryGridGallery} from "@/components/products/MasonryGridGallery";
import Hero from "../ui/hero";
import InfoCard from "@/components/info-card";
import Layout from "@/components/layout";


export default function Campaign() {
  return (
 
      <div>
       <Navbar />
       <Layout />
       <Hero />
       <MasonryGridGallery />
       <Footer />
       </div>
  );
}
