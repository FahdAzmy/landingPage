import Head from "next/head";
import HeroSection from "./components/hero/Hero.Section";
import Header from "./components/hero/Header";
import ContactForm from "./components/ContactForm";
import Combines from "./components/Combines";
import DetialsSection from "./components/DetialsSection";
import CardsSection from "./components/CardsSection";
import StatsSection from "./components/StatsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Compines Section  */}
      <section className="py-10 px-10">
        {/* Services Section */}
        <Combines />
        {/* Details Section  */}
        <DetialsSection />
        <CardsSection />
      </section>

      {/* Stats Section */}
      <section className=" lg:py-16 lg:px-16">
        <StatsSection />
      </section>

      {/* Contact Section */}

      <ContactSection />
    </div>
  );
}
