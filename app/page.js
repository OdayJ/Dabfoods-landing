import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Categories from "./components/Categories";
import LogoScroller from "./components/LogoScroller";
import Careem from "./components/Careem";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className="w-full grid place-items-center">
      <div className="grid w-full place-items-center max-w-7xl px-4 gap-36 pt-32">
        <Hero />
        <AboutUs />
        <Categories />
        <LogoScroller />
        <Careem />
        <Contact />
      </div>
    </main>
  );
}
