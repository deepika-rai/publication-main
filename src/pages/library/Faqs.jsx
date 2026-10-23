import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ShieldCheck, FileCheck2, RefreshCw, ExternalLink } from "lucide-react";

const BRAND = "#E2691E";

const NOTICES = [
  {
    icon: FileCheck2,
    text: "Grant of membership is subject to the Rules & Regulations of the Central Archaeological Library, Archaeological Survey of India, and approval of the competent authority wherever applicable.",
  },
  {
    icon: RefreshCw,
    text: "The Library reserves the right to amend, modify, restrict or update the membership rules, facilities, charges and access conditions from time to time.",
  },
];

const faq = [
  { q: 'Q1. Who can apply for CAL non-departmental membership?', a: 'Students, research scholars, faculty/academicians and eligible independent researchers working in Archaeology and allied disciplines may apply, subject to the prescribed eligibility and approval requirements.' },
  { q: 'Q2. What is the membership fee?', a: 'The  annual membership fee is ₹500/-, which is non-refundable.' },
  { q: 'Q3. How long is the membership valid?', a: 'Membership is valid for one year from the date of activation and may be renewed annually subject to the applicable rules.' },
  { q: 'Q4. Can I borrow books and take them home?', a: 'No. The  membership is ordinarily Reference/Reading Room Membership. Library books and resources cannot be taken outside the Library premises without specific authorization.' },
  { q: 'Q5. What documents are required?', a: 'Applicants may be required to submit identity proof, address proof, institutional/student ID, bonafide/research certificate, recommendation letter and  2 photograph, as applicable.' },
  { q: 'Q6. Can I access rare books and manuscripts?', a: 'Access to rare books, manuscripts, archival material and other special collections is subject to prior permission, preservation requirements and supervision by Library staff.' },
  { q: 'Q7. Can I photocopy Library books?', a: 'Permitted material may be photocopied subject to Library rules, availability, copyright restrictions and the prescribed charges. More than 20% of the total pages of any book/publication shall not be reproduced.' },
  { q: 'Q8. Can I photograph or scan Library material?', a: 'Photography/scanning is subject to permission and applicable copyright, preservation and security requirements. Rare and specially protected material may have additional restrictions.' },
  { q: 'Q9. Can I transfer my membership to someone else?', a: 'No. Membership is personal and strictly non-transferable.' },
  { q: 'Q10. What are the Library working hours for non-departmental members?', a: 'The  working hours are 10:00 AM to 5:00 PM, Monday to Friday, Library will be closed on  holidays, official events, maintenance and administrative/security requirements.' },
  { q: 'Q11. Can my membership be cancelled?', a: 'Yes. Membership may be suspended or cancelled for violation of Library rules, misuse of facilities, damage/loss of Library material, misconduct, false documentation or violation of security/access restrictions.' },
  { q: 'Q12. Does membership guarantee access to every Library resource?', a: 'No. Access depends on availability, physical condition, preservation requirements, copyright/licensing restrictions, security considerations and applicable permissions.' },

];


const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 text-sm pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-[#E2691E] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 bg-white">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

/* ─── Main Page ─────────────────────────────────────────────── */
const Faqs = () => {
  const [selected, setSelected] = useState('yearly');

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
            <span className="text-white">Faq</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Frequently Asked <span className="text-[#F5A973]">Questions</span>
          </h1>

        </div>
      </div>



      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        {/* <div className="max-w-[760px] mx-auto px-4">
          <div className="space-y-3">
            {faq.map((item) => <FaqItem key={item.q} {...item} />)}
          </div>
        </div> */}
        <div className="max-w-5xl mx-auto px-4 space-y-14">

          {/* ── Faq + Notice ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Faq — 3 cols */}
            <div className="lg:col-span-3">
              <div className="space-y-3">
                {faq.map((item) => <FaqItem key={item.q} {...item} />)}
              </div>
            </div>

            {/* Notice — 2 cols */}
              <div className="lg:col-span-2 space-y-5">
                <div
                  className="relative overflow-hidden rounded-2xl text-white shadow-lg"
                  style={{ background: `linear-gradient(135deg, #E2691E, #B8581E)` }}
                >
                  {/* soft decorative ring */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full border-[28px] border-white/10"
                  />

                  {/* Header */}
                  <div className="relative flex items-center gap-3 px-6 pt-6">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/15 ring-1 ring-white/25">
                      <ShieldCheck size={20} />
                    </span>
                    <h3 className="text-[19px] font-bold leading-tight">Important Notice</h3>
                  </div>

                  {/* Notices */}
                  <ul className="relative px-6 mt-5 space-y-4">
                    {NOTICES.map(({ icon: Icon, title, text }) => (
                      <li key={title} className="flex gap-3">
                        <Icon size={16} className="mt-1 shrink-0 text-white/80" />
                        <div>
                          <p className="mt-1 text-[13.5px] text-white/85 leading-relaxed">{text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Apply block */}
                  <div className="relative mt-6 bg-black/20 px-6 py-5 border-t border-white/15">
                    <p className="text-[14px] font-semibold">For application and further information</p>
                    <p className="mt-1.5 text-[13.5px] text-white/85 leading-relaxed">
                      Please refer to the prescribed CAL Non-Departmental Membership Application Portal and follow the instructions issued by the Central Archaeological Library.
                    </p>                   
                  </div>
                </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Faqs;

