import { useState } from "react";
import hatudLogo from "../assets/img/hatud_logo.png";
import bgsoc from "../assets/video/BGSOC.mp4";
import man from "../assets/img/MAN.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faLocationDot,
  faEnvelope,
  faPhone,
  faBolt,
  faStore,
  faTruckFast,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGooglePlay,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

export default function LandingPage() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#51B838] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#12369b]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="bg-white px-3 py-1.5 rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105">
                <img src={hatudLogo} alt="Hatud Logo" className="h-9 w-auto" />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              <ul className="flex items-center gap-8 text-white/90 text-sm font-semibold tracking-wide">
                <li>
                  <a
                    href="#Home"
                    className="hover:text-[#51B838] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#51B838] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-[#51B838] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#51B838] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <a
                href="#contact"
                className="bg-[#51B838] hover:bg-[#439c2e] text-white font-bold text-sm rounded-full px-6 py-2.5 transition-all shadow-lg shadow-green-600/20 hover:shadow-green-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              type="button"
              className="lg:hidden text-white hover:text-[#51B838] focus:outline-none p-2 rounded-lg bg-white/5"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon
                icon={navbarOpen ? faXmark : faBars}
                className="text-xl"
              />
            </button>
          </div>

          {/* Mobile Collapsible Navigation */}
          {navbarOpen && (
            <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
              <ul className="flex flex-col gap-3 text-white font-medium mb-4">
                <li>
                  <a
                    href="#Home"
                    onClick={() => setNavbarOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#51B838] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setNavbarOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#51B838] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={() => setNavbarOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#51B838] transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setNavbarOpen(false)}
                    className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#51B838] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <a
                href="#contact"
                onClick={() => setNavbarOpen(false)}
                className="block w-full text-center bg-[#51B838] hover:bg-[#439c2e] text-white font-bold rounded-full px-6 py-3 transition-all shadow-md"
              >
                Get in Touch
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="Home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={bgsoc} type="video/mp4" />
        </video>

        {/* Video Gradient Overlay with Brand Blue Tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-[#0B1E51]/80 to-[#12369b]/85 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#51B838]/20 backdrop-blur-md border border-[#51B838]/40 text-[#60d344] text-sm font-semibold mb-6">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Socorro, Bucas Grande Island</span>
          </div>

          <div className="flex justify-center mb-4">
            <img
              src={man}
              alt="Hatud Mascot"
              className="h-28 sm:h-36 w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight">
            Your Island Life,{" "}
            <span className="bg-gradient-to-r from-[#60d344] via-[#51B838] to-blue-300 bg-clip-text text-transparent">
              Delivered.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            Food, groceries, hotel bookings, and island tours — everything you
            need in one trusted app tailored for Bucas Grande, Siargao & beyond.
          </p>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 px-6 py-3.5 rounded-2xl font-bold shadow-xl transition-all hover:-translate-y-0.5"
            >
              <FontAwesomeIcon
                icon={faGooglePlay}
                className="text-2xl text-[#1B49C4]"
              />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                  Get it on
                </div>
                <div className="text-sm font-extrabold leading-none">
                  Google Play
                </div>
              </div>
            </a>

            <a
              href="#"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#51B838] text-white hover:bg-[#439c2e] px-6 py-3.5 rounded-2xl font-bold shadow-xl transition-all hover:-translate-y-0.5"
            >
              <FontAwesomeIcon icon={faApple} className="text-2xl text-white" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-green-100">
                  Download on the
                </div>
                <div className="text-sm font-extrabold leading-none">
                  App Store
                </div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 text-slate-300 text-sm">
            <span>Connect with us:</span>
            <a
              href="https://www.facebook.com/profile.php?id=61581241071782"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#51B838] hover:text-white flex items-center justify-center transition-all text-white backdrop-blur-sm"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="mailto:hatudincorporated@gmail.com"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#51B838] hover:text-white flex items-center justify-center transition-all text-white backdrop-blur-sm"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </section>

      {/* About & Services Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column Text */}
            <div className="space-y-6">
              <span className="text-[#1B49C4] font-bold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Why Choose Hatud
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Siargao’s premier all-in-one island delivery.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Hatud is built specifically for island community living. We
                bridge the gap between local businesses, tourists, and residents
                with smooth, reliable delivery and instant service bookings.
              </p>

              <div
                id="services"
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
              >
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#1B49C4]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1B49C4] flex items-center justify-center mb-3">
                    <FontAwesomeIcon icon={faStore} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    Local Focus
                  </h3>
                  <p className="text-xs text-slate-500">
                    Supporting vendors & merchants across the island.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#51B838]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-[#51B838] flex items-center justify-center mb-3">
                    <FontAwesomeIcon icon={faTruckFast} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    Fast Delivery
                  </h3>
                  <p className="text-xs text-slate-500">
                    Quick dispatch for groceries, meals, and essentials.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#1B49C4]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1B49C4] flex items-center justify-center mb-3">
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    Easy Bookings
                  </h3>
                  <p className="text-xs text-slate-500">
                    Book stays and island tours effortlessly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Image Feature */}
            <div className="relative">
              <div className="relative mx-auto max-w-md bg-gradient-to-tr from-[#1B49C4] via-[#2a5bd8] to-[#51B838] rounded-3xl p-1 shadow-2xl">
                <img
                  src={man}
                  alt="About Hatud"
                  className="w-full h-auto rounded-[22px] bg-slate-900 object-cover"
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:-right-6 sm:max-w-xs bg-[#12369b] text-white p-5 rounded-2xl shadow-xl border border-blue-400/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#51B838] text-white flex items-center justify-center flex-shrink-0 text-xl shadow-lg shadow-green-600/30">
                  <FontAwesomeIcon icon={faBolt} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    Always Fast & Reliable
                  </h4>
                  <p className="text-xs text-blue-100">
                    Trusted local partners delivering right to your door.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#1B49C4] font-bold tracking-wider uppercase text-sm bg-blue-100/60 px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Visit Us or Reach Out
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Located in the heart of Socorro. Drop by or contact us anytime.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/60 p-2">
            <div className="w-full h-96 sm:h-[450px] rounded-2xl overflow-hidden">
              <iframe
                title="Hatud Location Map"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.1910929231799!2d125.9634438!3d9.6183081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3303e3b6cf5b7459%3A0x3133a4b82b2e9b26!2sSocorro%20Municipal%20Hall!5e0!3m2!1sen!2sph!4v1727739000000!5m2!1sen!2sph"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1E51] text-slate-300 border-t border-blue-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-900/60">
            <div className="flex items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded-xl">
                <img src={hatudLogo} alt="Hatud Logo" className="h-8 w-auto" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-200">
              <a
                href="tel:+639703581194"
                className="flex items-center gap-2 hover:text-[#51B838] transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="text-[#51B838]" />
                +63 970 358 1194
              </a>
              <a
                href="mailto:hatudincorporated@gmail.com"
                className="flex items-center gap-2 hover:text-[#51B838] transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-[#51B838]" />
                hatudincorporated@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#51B838]"
                />
                Socorro, Bucas Grande Island
              </span>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Hatud Incorporated. All rights
              reserved.
            </p>
            <p className="text-slate-400">Built with care for island life.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
