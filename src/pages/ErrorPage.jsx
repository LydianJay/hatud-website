import hatudLogo from "../assets/img/hatud_logo.png";
import man from "../assets/img/MAN.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowLeft,
  faExclamationTriangle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#51B838] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#12369b]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-white px-3 py-1.5 rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105">
                <img src={hatudLogo} alt="Hatud Logo" className="h-9 w-auto" />
              </div>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="/"
                className="hidden sm:flex items-center gap-2 text-white/90 hover:text-[#51B838] transition-colors text-sm font-semibold"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back to Home
              </a>
              <a
                href="/"
                className="bg-[#51B838] hover:bg-[#439c2e] text-white font-bold text-sm rounded-full px-6 py-2.5 transition-all shadow-lg shadow-green-600/20 hover:shadow-green-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faHome} />
                  Home
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient with Brand Blue Tone */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-[#0B1E51]/80 to-[#12369b]/85 z-10"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#51B838]/20 blur-3xl z-10"></div>
        <div className="absolute bottom-32 right-10 w-40 h-40 rounded-full bg-[#1B49C4]/30 blur-3xl z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#51B838]/20 backdrop-blur-md border border-[#51B838]/40 text-[#60d344] text-sm font-semibold mb-6">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <span>Something Went Wrong</span>
          </div>

          <div className="flex justify-center mb-4">
            <img
              src={man}
              alt="Hatud Mascot"
              className="h-28 sm:h-36 w-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight">
            Error Occured
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            There was an error loading this page. Sorry for the inconvenience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-slate-100 px-6 py-3.5 rounded-2xl font-bold shadow-xl transition-all hover:-translate-y-0.5"
            >
              <FontAwesomeIcon icon={faHome} className="text-2xl text-[#1B49C4]" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                  Back to
                </div>
                <div className="text-sm font-extrabold leading-none">
                  Homepage
                </div>
              </div>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#51B838] text-white hover:bg-[#439c2e] px-6 py-3.5 rounded-2xl font-bold shadow-xl transition-all hover:-translate-y-0.5"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-white" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-green-100">
                  Need Help?
                </div>
                <div className="text-sm font-extrabold leading-none">
                  Contact Us
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}