import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    // <div className="p-4">
    //   <Image src="/diestaLogo.svg" alt="hero" width={800} height={900} className="m-auto" />
    //   <div>
    //     
    //   </div>
    // </div>
    <div className="min-h-screen bg-gray-900 text-gray-100">
      
      <main>
        <Hero />
        <About />
      </main>
      </div>
  );
}
