import { useState } from "react";
import hatudLogo from "../assets/img/hatud_logo.png"


export default function Legalities() {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col justify-between">
      {/* Header Section */}
      <header className="bg-linear-to-r from-[#00994C] to-[#007A3D] text-white py-12 px-4 shadow-md">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 bg-white rounded-2xl shadow-xl mb-4">
            <img
              src={hatudLogo}
              alt="Hatud Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Hatud Legal Center
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base mt-2">
            Effective Date:{" "}
            <span className="font-semibold text-white">November 10, 2025</span>
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 w-full grow">
        {/* Navigation Tabs */}
        <div className="sticky top-4 z-40 bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-md border border-slate-200 mb-8 max-w-3xl mx-auto">
          <nav className="flex flex-wrap sm:flex-nowrap justify-center gap-2">
            <button
              onClick={() => setActiveTab("terms")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "terms"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <i className="fa-solid fa-file-contract mr-2"></i>Terms &
              Conditions
            </button>

            <button
              onClick={() => setActiveTab("privacy")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "privacy"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <i className="fa-solid fa-user-shield mr-2"></i>Privacy Policy
            </button>

            <button
              onClick={() => setActiveTab("refund")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === "refund"
                  ? "bg-emerald-600 text-white shadow"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <i className="fa-solid fa-rotate-left mr-2"></i>Refund Policy
            </button>
          </nav>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80">
          {/* ================= TERMS AND CONDITIONS ================= */}
          {activeTab === "terms" && (
            <section className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Terms and Conditions
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Please read these terms carefully before using our platform.
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Welcome to <strong className="text-slate-900">Hatud</strong>, a
                platform operated by Hatud (“we,” “our,” or “us”). By accessing
                or using the Hatud mobile application or website, you agree to
                comply with and be bound by these Terms and Conditions
                (“Terms”). If you do not agree, please discontinue use of the
                platform immediately.
              </p>

              <div className="space-y-6 pt-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    1. Use of the Service
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Hatud acts as an intermediary platform connecting users with
                    partner merchants, restaurants, and riders. We facilitate
                    ordering, dispatching, and payments, but do not directly
                    prepare or handle store items. You agree to use the service
                    only for lawful and authorized purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    2. User Accounts
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    To place orders, you must register for an account. You are
                    solely responsible for maintaining the confidentiality of
                    your login details and all transactions under your account.
                    We reserve the right to suspend or terminate accounts
                    suspected of fraudulent activity or policy violations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    3. Orders and Payments
                  </h3>
                  <ul className="space-y-2 text-slate-600 list-none pl-0">
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Orders are confirmed through the app upon successful
                      placement.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Prices listed include applicable platform charges and
                      taxes unless specified otherwise.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Payments may be settled via Cash, Card, or recognized
                      Digital Wallets.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Cancellations are accepted only prior to order preparation
                      by the partner merchant.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    4. Delivery
                  </h3>
                  <ul className="space-y-2 text-slate-600 list-none pl-0">
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Delivery times are estimates and subject to weather,
                      traffic, and local conditions.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Unreachable customers following multiple contact attempts
                      by the rider may forfeit their order without refund
                      eligibility.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-circle-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Item quality and safety remain the primary responsibility
                      of the merchant.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    5. User Conduct
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    Users agree strictly NOT to:
                  </p>
                  <ul className="space-y-2 text-slate-600 list-none pl-0">
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-sm"></i>{" "}
                      Engage in fraudulent, misleading, or illegal transactions.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-sm"></i>{" "}
                      Interfere with platform security, app infrastructure, or
                      API endpoints.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-sm"></i>{" "}
                      Harass, abuse, or mistreat partner riders, merchants, or
                      customer support personnel.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    6. Intellectual Property
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    All content, logos, designs, graphics, and trademarks are
                    owned by Hatud or its licensors. Reproduction or misuse
                    without prior express written permission is strictly
                    prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    7. Limitation of Liability
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Hatud is not liable for indirect losses, merchant
                    operational errors, or delivery delays outside our
                    reasonable control. Total liability for any verified claim
                    shall not exceed the value paid for the respective order.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    8. Governing Law & Jurisdiction
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    These terms are governed and construed under the laws of the
                    Republic of the Philippines. Any legal disputes shall be
                    handled within the competent courts of the Philippines.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* ================= PRIVACY POLICY ================= */}
          {activeTab === "privacy" && (
            <section className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Privacy Policy
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Compliant with the Data Privacy Act of 2012 (RA 10173).
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Hatud values your privacy. This policy outlines how we collect,
                store, process, and safeguard your personal data when using our
                platform services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center">
                    <i className="fa-solid fa-id-card text-emerald-600 mr-2"></i>{" "}
                    Personal Data
                  </h4>
                  <p className="text-sm text-slate-600">
                    Full name, phone number, email address, physical delivery
                    location, and transaction logs.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center">
                    <i className="fa-solid fa-location-crosshairs text-emerald-600 mr-2"></i>{" "}
                    Location Data
                  </h4>
                  <p className="text-sm text-slate-600">
                    Precise location access to facilitate accurate local
                    merchant recommendations and real-time delivery tracking.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center">
                    <i className="fa-solid fa-mobile-screen text-emerald-600 mr-2"></i>{" "}
                    Technical Logs
                  </h4>
                  <p className="text-sm text-slate-600">
                    Device model, OS version, unique identifiers, IP address,
                    and application diagnostic reports.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center">
                    <i className="fa-solid fa-cookie text-emerald-600 mr-2"></i>{" "}
                    Cookies & Storage
                  </h4>
                  <p className="text-sm text-slate-600">
                    Used for session persistent login, preference caching, and
                    service performance optimization.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    How We Use Your Information
                  </h3>
                  <ul className="space-y-2 text-slate-600 list-disc pl-5">
                    <li>
                      Process orders, facilitate payments, and coordinate
                      deliveries with riders.
                    </li>
                    <li>
                      Provide customer care support and respond to service
                      requests.
                    </li>
                    <li>
                      Optimize platform security, detect fraud, and maintain
                      network stability.
                    </li>
                    <li>
                      Send essential transactional updates, receipts, and
                      optional promotions.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Data Sharing & Third Parties
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We share necessary operational details strictly with active
                    merchants, assigned delivery riders, and authorized payment
                    gateways.{" "}
                    <strong className="text-slate-900">
                      We do not sell, rent, or trade your personal information
                      to third-party marketers.
                    </strong>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Your Privacy Rights
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    Under RA 10173, you maintain rights to:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-medium border border-emerald-100">
                      Access Personal Data
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-medium border border-emerald-100">
                      Request Data Correction
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-medium border border-emerald-100">
                      Request Data Erasure
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-medium border border-emerald-100">
                      Withdraw Consent
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ================= REFUND POLICY ================= */}
          {activeTab === "refund" && (
            <section className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Refund & Cancellation Policy
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Clear guidelines on order adjustments, cancellations, and
                  claims.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                  <h4 className="font-bold mb-1 flex items-center">
                    <i className="fa-solid fa-triangle-exclamation mr-2 text-amber-600"></i>{" "}
                    Cancellation Deadline
                  </h4>
                  <p className="text-sm">
                    Orders may only be canceled prior to the merchant confirming
                    preparation. Once store preparation commences, cancellation
                    guarantees and full refunds are voided.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Merchant & Platform Cancellations
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    If an item is out of stock, or a merchant/rider becomes
                    unavailable, the system will cancel the transaction
                    automatically and issue a 100% refund.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Eligible Refund Scenarios
                  </h3>
                  <ul className="space-y-2 text-slate-600 list-none pl-0">
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Duplicate transaction charging error.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Non-delivery directly caused by rider or merchant faults.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-emerald-500 mt-1 mr-3 text-sm"></i>{" "}
                      Missing or wrong items verified with photo evidence by
                      Support.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Non-Refundable Cases
                  </h3>
                  <ul className="space-y-2 text-slate-600 list-none pl-0">
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-sm"></i>{" "}
                      Delays resulting from severe weather conditions, force
                      majeure, or traffic blockades.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-sm"></i>{" "}
                      Customer failing to answer the phone or receive items at
                      the specified address.
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-rose-500 mt-1 mr-3 text-sm"></i>{" "}
                      Issues or claims submitted past 24 hours from the delivery
                      time.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Processing Time
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Approved refunds are dispatched back to your original
                    payment channel within{" "}
                    <strong>3 to 10 business days</strong> depending on your
                    bank or wallet provider.
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Contact Support Card */}
        <div className="mt-8 bg-emerald-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">
              Have questions or legal concerns?
            </h3>
            <p className="text-emerald-200 text-sm mt-1">
              Contact our compliance and support team anytime.
            </p>
          </div>
          <a
            href="mailto:hatudincorporated@gmail.com"
            className="bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3 rounded-full text-sm transition-all whitespace-nowrap shadow-md"
          >
            <i className="fa-solid fa-envelope mr-2"></i>Contact Legal Team
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#31A429] text-slate-400 py-8 px-4 text-center text-sm border-t border-slate-800">
        <div className="max-w-5xl mx-auto space-y-2">
          <p className="flex items-center justify-center gap-2 text-white">
            <i className="fa-solid fa-location-dot text-white"></i>
            Socorro, Bucas Grande Islands, Surigao Del Norte
          </p>
          <p className="text-white">
            &copy; {new Date().getFullYear()} Hatud Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
