import { Copyright, ShieldCheck, Quote, TriangleAlert } from "lucide-react";

const BRAND = "#E2691E";

/* Text is the supplied paragraph, split only at sentence boundaries. */
const POINTS = [
  {
    icon: Copyright,
    text: "Material featured on this site are belongs to the CAL and the same may be reproduced free of charge in any format or media without requiring specific permission.",
  },
  {
    icon: ShieldCheck,
    text: "This is subject to the material being reproduced accurately and not being used in a derogatory manner or in a misleading context.",
  },
  {
    icon: Quote,
    text: "Wherever the material is being published or issued to others, the source must be prominently acknowledged.",
  },
];

const THIRD_PARTY =
  "However, the permission to reproduce this material does not extend to any material on this site, which is explicitly identified as being the copyright of a third party. Authorisation to reproduce such material would be obtained from the copyright holders concerned.";

export default function CopyrightPolicy() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-7 rounded-full shrink-0 bg-[#E2691E]"/>
        <h1 className="text-[24px] sm:text-[28px] font-bold text-gray-800 leading-tight">Copyright Policy</h1>
      </div>

      {/* Main statement */}
      <div
        className="relative overflow-hidden rounded-2xl p-6 sm:p-8 text-white shadow-lg"
        style={{ background: `linear-gradient(135deg, #E2691E, #B8581E)` }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full border-[30px] border-white/10"
        />
        <div className="relative flex gap-4">
          <span className="grid place-items-center w-11 h-11 rounded-xl bg-white/15 ring-1 ring-white/25 shrink-0">
            <Copyright size={22} />
          </span>
          <p className="text-[16px] sm:text-[17px] leading-relaxed font-medium pt-0.5">{POINTS[0].text}</p>
        </div>
      </div>

      {/* Conditions */}
      <ul className="mt-5 grid sm:grid-cols-2 gap-5">
        {POINTS.slice(1).map(({ icon: Icon, text }) => (
          <li key={text} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <span
              className="grid place-items-center w-10 h-10 rounded-xl shrink-0"
              style={{ background: `${BRAND}12`, color: BRAND }}
            >
              <Icon size={18} />
            </span>
            <p className="text-[14px] text-gray-600 leading-relaxed">{text}</p>
          </li>
        ))}
      </ul>

      {/* Third-party exception */}
      <aside className="mt-5 flex gap-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
        <TriangleAlert size={20} className="text-amber-700 shrink-0 mt-0.5" />
        <p className="text-[14px] text-amber-900/85 leading-relaxed">{THIRD_PARTY}</p>
      </aside>
    </div>
  );
}