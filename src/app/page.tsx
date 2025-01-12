import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
