import { useState } from "react";
import hatudLogo from "../assets/img/hatud_logo.png";

import bgsoc from "../assets/video/BGSOC.mp4";
import man from "../assets/img/MAN.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LandingPage() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 shadow-sm bg-linear-to-r from-[#00994C] to-[#007A3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 border border-gray-300 shadow-lg rounded-full px-3 py-1 bg-white"
            >
              <img src={hatudLogo} alt="Hatud Logo" className="h-10 w-auto" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              type="button"
              className="lg:hidden text-white hover:text-gray-200 focus:outline-none p-2"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon="fa-solid fa-bars text-2xl" />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              <ul className="flex gap-6 text-white font-semibold">
                <li>
                  <a
                    href="#Home"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#section_2"
                    className="hover:text-amber-300 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-amber-300 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <a
                href="#contact"
                className="bg-amber-400 text-gray-900 hover:bg-amber-500 font-bold rounded-full px-6 py-2 transition-all shadow"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Mobile Collapsible Navigation Links */}
          {navbarOpen && (
            <div className="lg:hidden py-4 border-t border-emerald-600/40">
              <ul className="flex flex-col gap-3 text-white font-semibold mb-4">
                <li>
                  <a
                    href="#Home"
                    onClick={() => setNavbarOpen(false)}
                    className="block hover:text-amber-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#section_2"
                    onClick={() => setNavbarOpen(false)}
                    className="block hover:text-amber-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setNavbarOpen(false)}
                    className="block hover:text-amber-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <a
                href="#contact"
                onClick={() => setNavbarOpen(false)}
                className="inline-block w-full text-center bg-amber-400 text-gray-900 hover:bg-amber-500 font-bold rounded-full px-6 py-2 transition-all shadow"
              >
                Get in Touch
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={bgsoc} type="video/mp4" />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-3 mt-4">
            <img
              src={man}
              alt="Hatud Mascot"
              className="h-28 w-auto drop-shadow-lg object-contain"
            />
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 mt-6 leading-tight">
            Your Island Life, Delivered
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl mx-auto font-light">
            Food, groceries, hotel bookings, tours — all in one trusted app for
            Siargao & beyond.
          </p>

          <div className="mt-2 flex flex-col md:flex-row justify-center items-center gap-3 text-emerald-300 font-medium">
            <h6 className="m-0 flex items-center text-lg">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              Socorro, Surigao del Norte
            </h6>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <span className="mr-2 text-sm text-gray-300">Follow us:</span>
            <a
              href="https://www.facebook.com/profile.php?id=61581241071782"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            >
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
            </a>
            <a
              href="mailto:hatudincorporated@gmail.com"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            >
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            >
              <FontAwesomeIcon icon="fa-brands fa-google-play" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
            >
              <FontAwesomeIcon icon="fa-brands fa-apple" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="section_2" className="py-16 bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4">
                About Hatud
              </h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Hatud is Siargao’s first all-in-one delivery and service
                platform built for convenience, speed, and community connection.
                From food to groceries, hotels, and tours — everything you need
                is just a tap away.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-center text-gray-700 font-medium">
                  <FontAwesomeIcon
                    icon="fa-solid fa-check"
                    className="text-emerald-600 mr-3 text-lg"
                  />
                  Support local businesses
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <i className="fa-solid fa-check text-emerald-600 mr-3 text-lg"></i>
                  Fast and reliable delivery
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <i className="fa-solid fa-check text-emerald-600 mr-3 text-lg"></i>
                  Seamless booking experience
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={man}
                  alt="About Hatud"
                  className="w-full max-w-md mx-auto h-auto rounded-3xl shadow-xl object-cover"
                />
                <div className="absolute -bottom-6 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-6 bg-emerald-600 text-white p-4 rounded-2xl shadow-lg flex items-center gap-3 min-w-65">
                  <i className="fa-solid fa-bolt text-2xl text-amber-300"></i>
                  <p className="m-0 text-sm font-semibold text-left">
                    Your trusted local delivery partner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-600">
              Find Us
            </h2>
            <p className="text-gray-600 mt-2">
              We’d love to hear from you! Visit us or send us a message.
            </p>
          </div>

          <div className="shadow-lg border-0 rounded-3xl overflow-hidden">
            <iframe
              className="w-full h-112.5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805.1910929231799!2d125.9634438!3d9.6183081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3303e3b6cf5b7459%3A0x3133a4b82b2e9b26!2sSocorro%20Municipal%20Hall!5e0!3m2!1sen!2sph!4v1727739000000!5m2!1sen!2sph"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#007A3D] text-white text-center py-8 px-4">
        <p className="mb-2 font-semibold">
          📞 +63 970 358 1194 | ✉️ hatudincorporated@gmail.com
        </p>
        <p className="mb-2">📍 Socorro, Bucas Grande Island, Philippines</p>
        <small className="text-emerald-200">
          &copy; 2026 Hatud. All rights reserved.
        </small>
      </footer>
    </>
  );
}

