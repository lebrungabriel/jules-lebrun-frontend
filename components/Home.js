import Head from "next/head";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}

export default Home;
