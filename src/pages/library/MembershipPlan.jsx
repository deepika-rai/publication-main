import {
  Users, IndianRupee, CalendarClock, BookOpen, ClipboardList,
  CreditCard, Library, Printer, Archive, Clock, Info, FileText, ScrollText, ListChecks, CircleHelp, Download
} from "lucide-react";
import { libassets } from "../../assets/libraryassets";
import { Link } from 'react-router-dom';


const BRAND = "#E2691E";

const FEATURES = [
  { icon: Users, label: "Eligibility", text: "Students, research scholars, faculty/academicians and eligible independent researchers." },
  { icon: IndianRupee, label: "Annual Membership Fee", text: "₹500/- per annum (non-refundable).", highlight: true },
  { icon: CalendarClock, label: "Validity", text: "One year from the date of activation of membership." },
  { icon: BookOpen, label: "Type of Membership", text: "Reference/Reading Room membership." },
  { icon: ClipboardList, label: "Registration", text: "Initially through an offline/manual application and verification process." },
  { icon: CreditCard, label: "Membership Card", text: "Issued to approved members and strictly non-transferable." },
  { icon: Library, label: "Library Access", text: "Consultation of permissible books, journals, periodicals, reference resources and legally accessible digital resources within the designated Library/ Area/ Reading Room." },
  { icon: Printer, label: "Reprographic Services", text: "Photocopying, scanning and printing facilities may be provided subject to applicable charges, copyright provisions and preservation requirements." },
  { icon: Archive, label: "Special Collections", text: "Access to rare books, manuscripts and other special collections shall be subject to prior permission and applicable restrictions." },
  { icon: Clock, label: "Working Hours", text: "10:00 AM to 5:00 PM, Monday to Friday, subject to holidays and administrative/security requirements." },
];

const PURPOSES = [
  "Promote wider academic and research utilization of CAL resources.",
  "Facilitate access to specialized resources for students and research scholars.",
  "Strengthen academic and institutional outreach with universities, colleges and research institutions.",
  "Encourage research in Archaeology and allied disciplines.",
  "Ensure controlled, responsible and secure use of the Library's valuable collections.",
];

const DOWNLOADS = [
  { icon: FileText, label: "Download Application Form",  href: `${import.meta.env.BASE_URL}docs/form.pdf`, target: '_blank'  },
  { icon: ScrollText, label: "Download Rules & Regulations", href: `${import.meta.env.BASE_URL}docs/Libraray Rules.pdf`, target: '_blank' },
  { icon: ListChecks, label: "Download Documents Checklist",href: `${import.meta.env.BASE_URL}docs/Document.pdf`, target: '_blank' },
  { icon: IndianRupee, label: "Download Reprographic Charges",href: `${import.meta.env.BASE_URL}docs/Reprographic Services.pdf`, target: '_blank' },
  { icon: CircleHelp, label: "Download FAQs", href: `${import.meta.env.BASE_URL}docs/FAQ.pdf`, target: '_blank' },
];

function SectionHeading({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-6 rounded-full shrink-0 bg-[#E2691E]" />
      <h2 className="text-[17px] font-bold text-gray-800">{children}</h2>
    </div>
  );
}

export default function MembershipPlan() {
  return (
    <>{/* ── Page Banner ── */}
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
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-4">
            <Link to="/libraryhome" className="hover:text-[#E2691E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Library</span>
            <span>/</span>
            <span className="text-white">Membership</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            Library <span className="text-[#F5A973]">Membership Plan</span>
          </h1>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-14">
          {/* ── Intro ── */}
          <section>
            <SectionHeading>Membership Plan</SectionHeading>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                {/* Left: Text content */}
                <div className="p-6 sm:p-8 space-y-4 order-2 md:order-1">
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    The Central Archaeological Library (CAL), Archaeological Survey of India, has structured membership facility for eligible non-departmental users to facilitate access to its specialized library resources for academic, research and scholarly purposes.
                  </p>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    The Membership Plan is intended to provide students, research scholars, faculty/academicians and eligible independent researchers an opportunity to consult CAL's resources in the fields of Archaeology, Ancient Indian History, Art, Architecture, Conservation, Museology, Epigraphy, Numismatics, Cultural Heritage and allied subjects, subject to the prescribed rules and availability of resources.
                  </p>
                </div>

                {/* Right: Image placeholder */}
                <div className="order-1 md:order-2 min-h-[220px] md:min-h-full bg-gray-100 flex items-center justify-center border-b md:border-b-0 md:border-l border-gray-200">
                  <div className="flex flex-col items-center gap-2 text-gray-400">
                    
                    <img
                      src={libassets.gal4}
                      alt="Library"
                      loading="lazy"
                      className="w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── Key features ── */}
          <section>
            <SectionHeading>Key Features of the Membership Plan</SectionHeading>
            <ul className="grid sm:grid-cols-2 gap-4">
              {FEATURES.map(({ icon: Icon, label, text, highlight }) => (
                <li
                  key={label}
                  className={`flex gap-4 rounded-2xl border p-5 transition-shadow hover:shadow-md ${highlight ? "border-transparent text-white" : "border-gray-200 bg-white"
                    }`}
                  style={highlight ? { background: `linear-gradient(135deg, ${BRAND}, #B8581E)` } : undefined}
                >
                  <span
                    className={`grid place-items-center w-10 h-10 rounded-xl shrink-0 ${highlight ? "bg-white/15 ring-1 ring-white/25" : ""}`}
                    style={highlight ? undefined : { background: `${BRAND}12`, color: BRAND }}
                  >
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className={`text-[14px] font-bold ${highlight ? "" : "text-gray-800"}`}>{label}</h3>
                    <p className={`mt-1 text-[13.5px] leading-relaxed ${highlight ? "text-white/90" : "text-gray-600"}`}>
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Purpose ── */}
          {/* <section>
            <SectionHeading>Purpose of the Membership Plan</SectionHeading>
            <p className="text-[14px] text-gray-600 mb-5">The Membership Plan seeks to:</p>
            <ol className="space-y-3">
              {PURPOSES.map((text, i) => (
                <li key={text} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4">
                  <span
                    className="grid place-items-center w-8 h-8 rounded-full text-[13px] font-bold text-white shrink-0 bg-[#E2691E]"                   
                  >
                    {i + 1}
                  </span>
                  <p className="text-[14px] text-gray-700 leading-relaxed pt-1">{text}</p>
                </li>
              ))}
            </ol>
          </section> */}

          {/* ── Note ── */}
          <aside className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
            <Info size={20} className="text-amber-700 shrink-0 mt-0.5" />
            <p className="text-[14px] text-amber-900/85 leading-relaxed">
              <span className="font-bold text-amber-900">Note: </span>
              Membership is subject to the Rules &amp; Regulations of the Central Archaeological Library and approval of the Competent Authority, wherever applicable. Membership does not confer any right to borrow or remove Library material from the premises.
            </p>
          </aside>
        </div>

        {/* Downloads */}
        {/* <section>
          <div className="flex items-center gap-3 mb-5 mt-16">
            <div className="w-1 h-6 rounded-full shrink-0 bg-[#E2691E]" />
            <h2 className="text-[17px] font-bold text-gray-800">Downloads</h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <p className="text-[14px] text-gray-600 leading-relaxed max-w-3xl">
                Applicants may download the relevant form, complete all required fields and submit it along with the prescribed supporting documents as per the membership procedure.
              </p>

              <h3 className="mt-8 mb-4 text-[14px] font-bold text-gray-800">Download Options:</h3>

              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {DOWNLOADS.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      download
                      className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition-all hover:border-[#d2042d]/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d2042d]"
                    >
                      <span
                        className="grid place-items-center w-10 h-10 rounded-lg shrink-0 transition-colors group-hover:bg-[#E2691E] group-hover:text-white"
                        style={{ background: `${BRAND}12`, color: BRAND }}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="flex-1 text-[13.5px] font-semibold text-gray-800 leading-snug">{label}</span>
                      <Download size={16} className="shrink-0 text-gray-400 transition-colors group-hover:text-[#d2042d]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 border-t border-amber-200 bg-amber-50/70 px-6 sm:px-8 py-5">
              <Info size={20} className="text-amber-700 shrink-0 mt-0.5" />
              <p className="text-[13.5px] text-amber-900/85 leading-relaxed">
                <span className="font-bold text-amber-900">Note: </span>
                All membership applications and supporting documents are subject to scrutiny and approval by the competent authority/authorised Library officer. Membership and access to Library resources shall be governed by the Rules &amp; Regulations of the Central Archaeological Library.
              </p>
            </div>
          </div>
        </section> */}

      </div>


    </>
  );
}