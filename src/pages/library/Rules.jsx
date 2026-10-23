import {
  UserCheck, IndianRupee, ClipboardList, Library, Archive, Clock,
  CreditCard, TriangleAlert, Ban, Scale, ShieldCheck, Info,
} from "lucide-react";

import { Link } from 'react-router-dom';

const BRAND = "#E2691E";

/* Content is kept exactly as supplied (including the original section numbering). */
const SECTIONS = [
  {
    num: "1", title: "Eligibility", icon: UserCheck,
    blocks: [
      { t: "p", text: "Membership shall be granted to the following categories:" },
      {
        t: "grid",
        items: [
          { label: "Students:", text: "UG/PG, diploma or equivalent students studying Archaeology, History, Ancient/Medieval Indian History, Museology, Conservation, Architecture, Heritage Management, Epigraphy, Numismatics, Anthropology, Sanskrit, Cultural Studies, Tourism/Heritage Studies and allied subjects." },
          { label: "Research Scholars:", text: "Ph.D., M.Phil., Post-doctoral researchers and other bona fide research scholars in relevant fields." },
          { label: "Faculty & Academicians:", text: "Faculty members, teachers and academicians of recognized universities, colleges and research institutions." },
          { label: "Independent Researchers:", text: "Authors, scholars and independent researchers whose work is relevant to CAL collections, subject to approval." },
        ],
      },
      { t: "p", text: "Applicants should ordinarily be 18 years of age or above. Exceptions may be considered in appropriate cases with specific approval." },
    ],
  },
  {
    num: "2", title: "Membership Fee", icon: IndianRupee,
    blocks: [
      { t: "fee", label: "Annual Membership Fee:", value: "₹500/-" },
      {
        t: "ul", items: [
          "The fee is non-refundable.",
          "Membership is valid for one year from the date of activation.",
          "Renewal is subject to payment of the prescribed fee and satisfactory compliance with CAL rules.",
          "Membership does not confer any right over any particular book, journal, manuscript, database or other Library resource.",
        ]
      },
    ],
  },
  {
    num: "3", title: "How to Apply", icon: ClipboardList,
    blocks: [
      {
        t: "steps", items: [
          { title: "Step 1 – Application", text: "Complete the prescribed CAL Non-Departmental Membership Application Form." },
          {
            title: "Step 2 – Documents", text: "Submit the required documents, as applicable:", list: [
              "Valid identity proof", "Address proof", "Student/Institutional ID",
              "Bonafide/Research Scholar Certificate",
              "Recommendation/forwarding letter from the concerned institution",
              "2 - Recent passport-size photograph",
            ]
          },
          { title: "Step 3 – Verification", text: "The Library Section will scrutinize and verify the application and supporting documents." },
          { title: "Step 4 – Approval", text: "The application will be placed before the designated Library Officer/Competent Authority, wherever required." },
          { title: "Step 5 – Payment", text: "After acceptance of the application, the prescribed annual membership fee of ₹500/- shall be deposited through the approved payment mechanism." },
          { title: "Step 6 – Membership Card", text: "After completion of registration, a CAL Membership Card will be issued to the approved member." },
        ]
      },
      { t: "p", text: "Initially, the membership process will be conducted through offline/manual registration. Online registration and payment facilities may be introduced subsequently, subject to approval and availability of infrastructure." },
    ],
  },
  {
    num: "4", title: "Facilities Available to Members", icon: Library,
    blocks: [
      { t: "p", text: "Subject to applicable rules and availability, members may:" },
      {
        t: "ul", items: [
          "Access the designated CAL Reading Room/Library area during prescribed working hours.",
          "Consult books, journals, periodicals, catalogues and other permissible resources.",
          "Use reference resources within the Library.",
          "Access digital/e-resources wherever legally and technically permissible.",
          "Seek assistance from Library staff in locating relevant resources.",
          "Avail permitted reprographic services for bona fide academic/research purposes.",
        ]
      },
      { t: "callout", title: "Important", text: "The membership is ordinarily Reference/Reading Room Membership. Books and Library resources shall not be issued for taking outside the Reading Room of the Library premises. Membership does not automatically permit access to restricted collections, rare books, manuscripts, archival/confidential material or other specially protected resources." },
    ],
  },
  {
    num: "5", title: "Rare Books, Manuscripts & Special Collections", icon: Archive,
    blocks: [
      { t: "p", text: "Rare books, manuscripts, archival materials, fragile publications and special collections may be consulted only with prior permission and under the supervision of Library staff." },
      { t: "p", text: "Photography, scanning or reproduction of such material requires specific permission." },
      { t: "p", text: "CAL reserves the right to restrict access to any material where required for preservation, security, copyright or other legitimate Library considerations." },
    ],
  },
  {
    num: "6", title: "Working Hours & Entry", icon: Clock,
    blocks: [
      { t: "p", text: "Non-departmental members may access the Library during the officially prescribed working hours:" },
      { t: "hours", text: "10:00 AM to 5:00 PM (Monday to Friday)" },
      { t: "p", text: "The Library will be closed on holidays, maintenance days, official events or whenever required for administrative, security or other legitimate reasons. Members may be required to record their visit in the prescribed Visitor/Access Register or attendance system and produce their Membership Card and valid identity document." },
    ],
  },
  {
    num: "9", title: "Membership Card", icon: CreditCard,
    blocks: [
      { t: "p", text: "The CAL Membership Card is:" },
      {
        t: "ul", items: [
          "Personal and non-transferable.",
          "Valid only for the period specified on the card.",
          "Required to be produced whenever demanded by Library/security staff.",
          "In case of loss, the member must immediately inform CAL. A duplicate card shall be issued subject to the prescribed replacement charge, of Rs 100 /- along with FIR copy.",
        ]
      },
    ],
  },
  {
    num: "10", title: "Loss or Damage to Library Material", icon: TriangleAlert,
    blocks: [
      { t: "p", text: "A member shall be liable for loss, damage, mutilation or defacement of Library material attributable to the member, in accordance with applicable Library rules.CAL may suspend or cancel membership pending settlement of any such matter." },
    ],
  },
  {
    num: "11", title: "Suspension or Cancellation of Membership", icon: Ban,
    blocks: [
      { t: "p", text: "Membership may be suspended or cancelled in cases of:" },
      {
        t: "ul", items: [
          "Violation of Library rules.", "Misuse of Library facilities.", "Damage to Library property.",
          "Unauthorized removal or attempted removal of Library material.", "Misconduct.",
          "Submission of false information or documents.", "Misuse of membership card.",
          "Violation of security or access restrictions.",
        ]
      },
      { t: "p", text: "No refund of the annual membership fee shall ordinarily be admissible in case of suspension/cancellation due to violation of rules." },
    ],
  },
  {
    num: "12", title: "Copyright & Responsible Use", icon: Scale,
    blocks: [
      { t: "p", text: "Library resources shall be used only for bona fide academic and research purposes. Any reproduction, publication, digital copying, photography or quotation from protected, rare or special material shall be subject to:" },
      {
        t: "ul", items: [
          "Applicable copyright provisions.", "Intellectual property rights.", "ASI rules.",
          "Library permission.", "Conditions prescribed by the competent authority.",
        ]
      },
    ],
  },
  {
    num: "13", title: "Regulation of Access", icon: ShieldCheck,
    blocks: [
      { t: "p", text: "CAL reserves the right to regulate, restrict or temporarily suspend access to any Library resource or facility in the interest of:" },
      {
        t: "ul", items: [
          "Preservation and conservation.", "Security.", "Maintenance.", "Administrative requirements.",
          "Official use.", "Copyright/licensing restrictions.", "Any other legitimate Library requirement.",
        ]
      },
      { t: "p", text: "Membership does not guarantee availability of every requested book, journal, database, manuscript or other resource." },
    ],
  },
];

function Bullets({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] text-gray-600 leading-relaxed">
          <span className="mt-[9px] w-1.5 h-1.5 rounded-full shrink-0 bg-[#E2691E]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Block({ b }) {
  switch (b.t) {
    case "p":
      return <p className="text-[14px] text-gray-600 leading-relaxed">{b.text}</p>;
    case "ul":
      return <Bullets items={b.items} />;
    case "grid":
      return (
        <div className="grid sm:grid-cols-2 gap-3">
          {b.items.map((it) => (
            <div key={it.label} className="rounded-xl border border-gray-200 bg-gray-50/60 p-4">
              <p className="text-[14px] font-bold text-gray-800">{it.label}</p>
              <p className="mt-1.5 text-[13.5px] text-gray-600 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      );
    case "fee":
      return (
        <div
          className="flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-xl px-5 py-4 text-white"
          style={{ background: `linear-gradient(135deg, #E2691E, #B8581E)` }}
        >
          <span className="text-[14px] font-semibold text-white/90">{b.label}</span>
          <span className="text-[30px] font-bold leading-none tabular-nums">{b.value}</span>
        </div>
      );
    case "steps":
      return (
        <ol className="relative ml-4 border-l-2 border-gray-200 space-y-6">
          {b.items.map((s) => (
            <li key={s.title} className="relative pl-7">
              <span
                className="absolute -left-[9px] top-1 w-4 h-4 rounded-full ring-4 ring-white bg-[#E2691E]"/>
              <h4 className="text-[14.5px] font-bold text-gray-800">{s.title}</h4>
              <p className="mt-1 text-[14px] text-gray-600 leading-relaxed">{s.text}</p>
              {s.list && (
                <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50/60 p-4">
                  <Bullets items={s.list} />
                </div>
              )}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div className="flex gap-4 rounded-xl border border-amber-200 bg-amber-50/70 p-5">
          <Info size={20} className="text-amber-700 shrink-0 mt-0.5" />
          <div>
            <p className="text-[14px] font-bold text-amber-900">{b.title}</p>
            <p className="mt-1 text-[13.5px] text-amber-900/85 leading-relaxed">{b.text}</p>
          </div>
        </div>
      );
    case "hours":
      return (
        <div className="inline-flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm">
          <Clock size={18} style={{ color: BRAND }} />
          <span className="text-[16px] font-bold text-gray-900">{b.text}</span>
        </div>
      );
    default:
      return null;
  }
}

export default function Rules() {
  return (
    <>
      <div
        className="relative overflow-hidden py-14"
        style={{ background: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)' }}
      >
        {/* decorative rings */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/[0.05] pointer-events-none" />
        <div className="absolute top-8 -left-12 w-48 h-48 rounded-full border border-[#E2691E]/10 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4">
          {/* breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-gray-500 mb-4">
            <Link to="/libraryhome" className="hover:text-[#F5A973] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Library</span>
            <span>/</span>
            <span className="text-white"></span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Rules &amp; Regulations <span className="text-[#F5A973]">for Non-Departmental Users</span>
          </h1>


        </div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-16">        

        <div className="grid lg:grid-cols-[260px_1fr] gap-10 items-start">
          {/* Section index */}
          <nav className="hidden lg:block sticky top-6 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
            <ul className="space-y-0.5">
              {SECTIONS.map((s) => (
                <li key={s.num}>
                  <a
                    href={`#rules-${s.num}`}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-[#E2691E] transition-colors"
                  >
                    <span className="w-6 text-right font-bold tabular-nums text-gray-400">{s.num}.</span>
                    <span className="leading-snug">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="space-y-6 min-w-0">
            {SECTIONS.map(({ num, title, icon: Icon, blocks }) => (
              <section
                key={num}
                id={`rules-${num}`}
                className="scroll-mt-12 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8"
              >
                <header className="flex items-center gap-4 mb-5">
                  <span
                    className="grid place-items-center w-11 h-11 rounded-xl shrink-0"
                    style={{ background: `${BRAND}12`, color: BRAND }}
                  >
                    <Icon size={20} />
                  </span>
                  <h2 className="text-[17px] font-bold text-gray-800 leading-snug">
                    <span className="text-gray-400 tabular-nums mr-1.5">{num}.</span>
                    {title}
                  </h2>
                </header>

                <div className="space-y-5">
                  {blocks.map((b, i) => (
                    <Block key={i} b={b} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}