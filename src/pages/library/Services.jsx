import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Copy, Printer, ScanLine, BookOpenCheck, ShieldCheck, Ban, Lock, Scale, Info } from "lucide-react";

const BRAND = "#E2691E";

const RATES = [
  { icon: Copy, name: "Photocopy", detail: "Black & white", price: 1, tone: "bw" },
  { icon: Copy, name: "Photocopy", detail: "Colour", price: 10, tone: "colour" },
  { icon: ScanLine, name: "Scanning / digital copy", detail: "Per page scanned", price: 5, tone: "bw" },
  { icon: Printer, name: "Printing", detail: "Black & white", price: 2, tone: "bw" },
  { icon: Printer, name: "Printing", detail: "Colour", price: 10, tone: "colour" },
];

const CONDITIONS = [
  { icon: BookOpenCheck, text: "Services are ordinarily provided for private study, research and academic purposes." },
  { icon: Lock, text: "Rare books, manuscripts, fragile or damaged material, maps, photographs and specially protected collections need specific permission to reproduce." },
  { icon: Scale, text: "All reproduction is subject to applicable copyright and intellectual property provisions." },
  { icon: Ban, text: "Reprographic services cannot be used for commercial purposes." },
];

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-6 rounded-full shrink-0 bg-[#E2691E]" />
      <h2 className="text-[17px] font-bold text-gray-800">{children}</h2>
    </div>
  );
}

function ColourChip({ tone }) {
  if (tone === "colour") {
    return (
      <span className="flex -space-x-1.5 shrink-0" aria-label="Colour">
        <span className="w-3.5 h-3.5 rounded-full bg-cyan-500 ring-2 ring-white" />
        <span className="w-3.5 h-3.5 rounded-full bg-fuchsia-500 ring-2 ring-white" />
        <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 ring-2 ring-white" />
      </span>
    );
  }
  return (
    <span className="flex -space-x-1.5 shrink-0" aria-label="Black and white">
      <span className="w-3.5 h-3.5 rounded-full bg-gray-800 ring-2 ring-white" />
      <span className="w-3.5 h-3.5 rounded-full bg-gray-300 ring-2 ring-white" />
    </span>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
const Services = () => {
  return (
    <div className="font-[Poppins,sans-serif]" style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* ── Page Banner ── */}
      <div
        className="relative bg-[#0F2044] py-16 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)',
        }}
      >
        {/* decorative rings */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/5" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-[#E2691E]/10" />

        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          {/* breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-5">
            <Link to="/libraryhome" className="hover:text-[#E2691E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Library</span>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Library <span className="text-[#F5A973]">Services</span>
          </h1>
        </div>
      </div>
      {/* ── Services ── */}
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-14">
          {/* ── Charges ── */}
          <section>
            <SectionHeading>Reprographic Services &amp; Charges</SectionHeading>
            <p className="text-[14px] text-gray-600 leading-relaxed max-w-3xl">
              Reprographic services are provided subject to availability of the facility, permission of the
              Library authority, copyright provisions and preservation requirements.
            </p>

            <div className="mt-8 grid lg:grid-cols-5 gap-8 items-start">
              {/* Rate card */}
              <div className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-b border-gray-200 text-[12px] font-semibold text-gray-500">
                  <span>Service</span>
                  <span>Charge</span>
                </div>

                <ul className="divide-y divide-gray-100">
                  {RATES.map(({ icon: Icon, name, detail, price, tone }) => (
                    <li key={name + detail} className="flex items-center gap-4 px-6 py-4">
                      <span
                        className="grid place-items-center w-10 h-10 rounded-xl shrink-0"
                        style={{ background: `${BRAND}12`, color: BRAND }}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </span>

                      <div className="min-w-0">
                        <p className="text-[14px] font-semibold text-gray-800 leading-tight">{name}</p>
                        <p className="mt-1 flex items-center gap-2 text-[12.5px] text-gray-500">
                          <ColourChip tone={tone} />
                          {detail}
                        </p>
                      </div>

                      {/* dotted leader, like a printed price list */}
                      <span className="flex-1 border-b-2 border-dotted border-gray-200 translate-y-1 hidden sm:block" />

                      <p className="ml-auto sm:ml-0 text-right shrink-0">
                        <span className="text-[22px] font-bold text-gray-900 tabular-nums">₹{price}</span>
                        <span className="text-[12px] text-gray-500 ml-1">/ page</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Periodicals note */}
              <aside className="lg:col-span-2 rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
                <div className="flex items-center gap-2 text-amber-800">
                  <Info size={18} />
                  <h3 className="text-[14px] font-bold">Periodicals</h3>
                </div>
                <p className="mt-3 text-[14px] text-amber-900/80 leading-relaxed">
                  From a periodical, you can copy no more than the whole or part of one article at a time.
                </p>
              </aside>
            </div>
          </section>

          {/* ── Conditions ── */}
          <section>
            <SectionHeading>Reprographic Conditions</SectionHeading>

            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <ul className="lg:col-span-3 space-y-4">
                {CONDITIONS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex gap-4">
                    <span className="mt-0.5 grid place-items-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 shrink-0">
                      <Icon size={16} />
                    </span>
                    <p className="text-[14px] text-gray-600 leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>

              {/* The 20% rule — the one condition people most often hit */}
              <div
                className="lg:col-span-2 rounded-2xl p-6 text-white"
                style={{ background: `linear-gradient(135deg, #F07B30, #B8581E)` }}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} />
                  <h3 className="text-[14px] font-bold">Copying limit</h3>
                </div>

                <p className="mt-4 text-[44px] leading-none font-bold tabular-nums">20%</p>
                <p className="mt-2 text-[14px] text-white/85 leading-relaxed">
                  Reproducing more than 20% of the total pages of any book or publication is not permitted,
                  subject to applicable copyright provisions.
                </p>

                <div className="mt-5" role="img" aria-label="20 percent of pages allowed">
                  <div className="h-2 rounded-full bg-white/25 overflow-hidden">
                    <div className="h-full w-1/5 rounded-full bg-white" />
                  </div>
                  <div className="mt-2 flex justify-between text-[11.5px] text-white/75">
                    <span>Allowed</span>
                    <span>Whole book</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>





    </div>
  );
};

export default Services;
