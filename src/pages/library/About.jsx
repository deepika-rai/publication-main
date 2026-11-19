import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CollectionPanel from './CollectionPanel';
import StaffPanel from './Staff';

/* ─── Tab data ────────────────────────────────────────────────── */
const TABS = [
  { id: 'about', label: 'About Library', icon: '🏛️' },
  { id: 'vision', label: 'Vision, Mission & Objectives', icon: '🎯' },
  { id: 'staff', label: 'Who Is Who', icon: '👥' },
  { id: 'collection', label: 'Collection', icon: '📚' },
];

/* ─── Reusable section heading ────────────────────────────────── */
const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-1 h-6 bg-[#E2691E] rounded-full shrink-0" />
    <h2 className="text-[17px] font-bold text-gray-800">{children}</h2>
  </div>
);

/* ─── Stat card ───────────────────────────────────────────────── */
const StatCard = ({ value, label, icon }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
    <div className="text-3xl mb-1">{icon}</div>
    <div className="text-2xl font-extrabold text-[#E2691E] leading-tight">{value}</div>
    <div className="text-[12px] text-gray-500 font-medium mt-1">{label}</div>
  </div>
);

/* ─── Feature card ────────────────────────────────────────────── */
const FeatureCard = ({ title, desc, icon }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-[#E2691E]/20 hover:-translate-y-0.5 transition-all duration-200">
    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-xl mb-3 shrink-0">
      {icon}
    </div>
    <h4 className="font-bold text-gray-800 text-[14px] mb-1.5">{title}</h4>
    <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

/* ═══════════════════════════════════════════════════════════════ */
/*  TAB PANELS                                                     */
/* ═══════════════════════════════════════════════════════════════ */

const AboutPanel = () => (
  <div className="space-y-10">

    {/* Intro */}
    <div>
      <SectionHeading>History</SectionHeading>
      <p className="text-[14px] text-gray-600 leading-relaxed sm:text-justify">
        The Central Archaeological Library (CAL) was established in <b>1902 at Shimla</b>. Since its inception, Sir John Marshall, the then Director-General of the Archaeological Survey of India, emphasized the importance of establishing a dedicated library to support the research and scholarly activities of the Survey. Accordingly, a provision of ₹4,000 was made for this purpose in 1903–04.
      </p>
      <p className="text-[14px] text-gray-600 leading-relaxed sm:text-justify">Over the years, the Central Archaeological Library has evolved into a specialised library of national importance, housing a rich and diverse collection of books and periodicals on archaeology, history, art, culture, architecture, Indology, and allied disciplines relating to India and other parts of the world. Its extensive collections and research resources continue to support the academic and scholarly pursuits of researchers, historians, archaeologists, and other users, while evolving to meet their changing research and information needs.
      </p>
      <p className="text-[14px] text-gray-600 leading-relaxed sm:text-justify">The significance of the Library was acknowledged by Sir John Marshall in his 1939 publication, <i>Revealing India’s Past</i>, where it was described as “the best archaeological library in India, perhaps in Asia” (J. Cumming, Revealing India’s Past, London, 1939, p. 31). This historical recognition reflects the Library’s longstanding contribution to archaeological research and scholarship. Since then, the Library has continued to develop its collections and services, preserving its heritage while supporting contemporary research in archaeology and allied disciplines
      </p>
    </div>

    
    <div>
      <SectionHeading>Rich Collections &amp; Heritage Resources</SectionHeading>
      <p className="text-[14px] text-gray-600 leading-relaxed mt-6 sm:text-justify">The Central Archaeological Library houses a rich and diverse collection of approximately <b>1.2 lakh books and 90 journal titles,</b> with journal holdings dating back to 1960. Its specialised collection covers a wide range of disciplines, including Archaeology, Anthropology, Art, Architecture, Ancient History, Indian Culture, Sociology, Epigraphy, Indology, and other allied subjects.
      </p>
      <p className="text-[14px] text-gray-600 leading-relaxed mt-6 sm:text-justify">The Library possesses a significant collection of approximately <b>21,000 rare Tibetan manuscripts,</b> reflecting the richness and historical significance of India's intellectual, cultural, and religious heritage. As part of its digitisation initiatives, <b>12,261 rare books have been made available online,</b> facilitating access for academic, scholarly, and research purposes.</p>
      {/* <p className="text-[14px] text-gray-600 leading-relaxed mb-6 sm:text-justify">
        The library houses a rich and diverse collection of approximately 1.2 lakh books and 90 journal titles dating back to 1960, covering a wide range of subjects such as Archaeology, Anthropology, Art, Architecture, Ancient History, Indian Culture, Sociology, Epigraphy, Indology, and related disciplines. Its manuscript collection comprises around 6,000 preserved manuscripts and 10,000 unpreserved manuscripts, reflecting the depth and historical significance of India’s intellectual and cultural heritage. The library has also undertaken digitization initiatives, with 12,261 rare books available online for general academic and research pursuits. Its Oriental Collection, comprising nearly 10,000 works, includes original texts in languages such as Sanskrit and Prakrit, along with translated works in English and Hindi, covering various religious and cultural traditions. Among its notable holdings are the A. Cunningham Diaries and unpublished reports (1861–62 to 1888) and a collection of approximately 6,000 portfolios documenting archaeological heritage sites in India and abroad, representing material from both the pre- and post-Independence periods. The library also provides access to daily newspapers and magazines in both print and electronic formats, with e-subscriptions available to users since June 2020.
      </p> */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard value="1,20,000" label="Books & Volumes" icon="📖" />
        <StatCard value="21,000" label="Rare Manuscripts" icon="📜" />
        <StatCard value="12,261" label="Digitized collections" icon="🏢" />
        <StatCard value="5,000" label="Oriental Collection" icon="🏢" />
      </div>
      <p className="text-[14px] text-gray-600 leading-relaxed mt-6 sm:text-justify">The <b>Oriental Collection</b>, comprising nearly 5,000 works, includes original texts in languages such as Sanskrit and Prakrit, together with English and Hindi translations, covering diverse religious, philosophical, and cultural traditions. Among its notable archival holdings are the <b>diaries of Alexander Cunningham and unpublished reports spanning 1861–62 to 1888,</b> which constitute valuable sources for archaeological research and historical documentation.
      </p>
      <p className="text-[14px] text-gray-600 leading-relaxed mt-6 sm:text-justify">The Library also maintains extensive collection of portfolios documenting archaeological sites and heritage monuments in India and abroad, representing material from both the pre-Independence and post-Independence periods. In addition to its specialised research resources, the Library provides access to daily newspapers and magazines to support the informational needs of users.
      </p>
      {/* <p className="text-[14px] text-gray-600 leading-relaxed mt-6 sm:text-justify">
        The library further preserves several special collections, including Tibetan Manuscripts, Annual Reports of the Archaeological Survey of India (ASI), Cunningham Reports, Ancient India, Annual Reports on Epigraphy, Memoirs of the ASI, Portfolios, Maps and Toposheets, and other important reference materials. Its collections also include the personal and scholarly works of several eminent historians, archaeologists, epigraphists, and scholars, including John Marshall, M. S. Vats, Ernest J. H. Mackay, D. R. Sahani, A. Ghosh, Sir William Jones, James Prinsep, James Fergusson, Charles Walkin, A. Cunningham, and R. G. Bhandarkar, making the library an important repository for the study and research of India’s archaeological, historical, cultural, and intellectual heritage.
      </p> */}
    </div>

    {/* Infrastructure */}
    <div>
      <SectionHeading>Uniqueness of the Library</SectionHeading>
      <p className="text-[14px] text-gray-600 leading-relaxed sm:text-justify mb-3">
        Our library is a unique and valuable treasure trove in India and the World.  It is a lifeline to the world community for those who are keen to undertake research work in the field of Archaeology, Religious and Cultural perspective of India, India’s ancient past and allied subjects. The Library is special for the following reasons -
      </p>
      <ul className="list-disc pl-5 space-y-3 text-[14px] text-gray-600">
        <li>Authentic records related to Archaeology, such as ASI reports, Memoaids of ASI, Annual report of India Epigraphy, Indian Archaelogical Review (IAR), Ancient India etc.</li>
        <li>Diary of Alexander Cunningham, John Marshall, etc. which are great source for researchers throughout the world.</li>
        <li>Collection of books on eminent Archaeologist.</li>
        <li>Original collection of religious books and books on cultural heritage of India, such as the sacred books on the Hindus, Manusmiti, Kautilya’s Arthasastra, etc. which are in great demand by the researchers.</li>
        <li>Oriental collections on ancient Indian History which are not available in other libraries in India.</li>
        <li>Original, specific and holistic collection on places of India, such as Kalhan’s Rjtarangini on Kashmir, History of Gujarat, etc.</li>
        <li>Original and rare books on inscriptions, such as Kharosti, Brahmi etc. </li>
        <li>Huge collection of Tibetan manuscripts (rare) which is very helpful to the scholars. The fact is also established by distinguished scholar, Sinologist and Tibetologist Dr. R.A.Stein while visiting the Library.</li>
        <li>Rare portfolios related to Ajanta, Ellora and many sites of archaeological importance.</li>
        <li>Toposheets which are solely available with Survey of India is also with us (being used for excavation and exploration purposes).</li>
        <li>Large collection of books on Archaeology, Epigraphy, Indology, Indian culture and its past, etc which make the library unique.</li>
      </ul>
    </div>

    {/* Quote */}
    {/* <blockquote className="relative bg-gradient-to-r from-[#1a1a2e] to-[#2d1a22] rounded-2xl p-6 md:p-8 overflow-hidden">
      <div className="absolute top-4 left-5 text-[80px] leading-none text-white/5 font-serif select-none">"</div>
      <p className="relative text-gray-200 text-[15px] leading-relaxed font-medium italic">
        The ASI Library is not merely a collection of books and manuscripts; it is a living
        repository of knowledge, heritage, and scholarship. By preserving rare intellectual treasures
        while embracing modern technologies, the library serves as a dynamic hub for learning, research,
        and innovation.
      </p>
      <p className="relative mt-4 text-[#F5A973] text-[12px] font-bold uppercase tracking-widest">
        — ASI Library
      </p>
    </blockquote> */}


  </div>
);

/* ─── Vision / Mission / Objectives ──────────────────────────── */
const VisionPanel = () => (
  <div className="space-y-8">

    {/* Vision */}
    {/* <div className="bg-gradient-to-br from-[#E2691E] to-[#B8581E] rounded-2xl p-6 md:p-8 text-white"> */}
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-[#E2691E]/20 hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl shrink-0">🔭</div>
        <h2 className="text-lg font-bold tracking-wide">Vision</h2>
      </div>
      <p className="text-gray-500 text-[14px] leading-relaxed">
        Its aims to serve the need of Research scholars, ASI staffs/officials & patron in the field of Archaeology by expanding their minds, provide better chance to enhance their knowledge. CAL strive to build strong collection of books in the field of Archaeology, History, Art & Architecture which help ASI staffs, Archaeologists to maintain upto date  records & knowledge - It acts as a prime Resource centre for  Archaeology and its  allied field.
      </p>
    </div>

    {/* Mission */}
    <div className="bg-[#0F2044] rounded-2xl p-6 md:p-8 text-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">🎯</div>
        <h2 className="text-lg font-bold tracking-wide">Mission</h2>
      </div>
      <p className="text-white text-[14px] leading-relaxed mb-3">The Library’s mission is to provide comprehensive resources and services in support of the researcher and the staff of ASI. To fulfill this mission, CAL commits to</p>
      <ul className="space-y-3">
        {[
          'TUnderstand the research needs of its users.',
          'Build collection and create tools to support research.',
          'Provide access to use local and external information resources.',
          'Ensure the preservation and long- lasting availability of the library collection and resources.',
          'Collaborate with other Institutes to enrich the researchers and staff of ASI.',
          'Create hospitable physical and virtual environment for the study in CAL',
          'Readers can access CAL in one click.',
          'In future connect all circle/ Branch Libraries with CAL.',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[14px] text-gray-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-[#E2691E] flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Objectives */}
    <div>
      <SectionHeading>Objectives</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { icon: '📦', title: 'Resource Development', desc: 'Systematically build a balanced, current, and comprehensive collection aligned with the institute\'s academic and research requirements.' },
          { icon: '🔒', title: 'Preservation & Conservation', desc: 'Protect and conserve rare manuscripts, rare books, and heritage materials using modern archival and digitisation techniques.' },
          { icon: '🌐', title: 'Digital Access', desc: 'Provide seamless access to e-resources, e-journals, online databases, and digital collections.' },
          { icon: '🎓', title: 'User Education', desc: 'Conduct library orientation, information literacy programmes and training sessions to maximise effective use of library resources.' },
          { icon: '🤝', title: 'Resource Sharing', desc: 'Participate in inter-library loan, document delivery networks.' },
          { icon: '📊', title: 'Research Support', desc: 'Offer specialised reference services, bibliographic assistance, and research support.' },
        ].map((obj) => (
          <FeatureCard key={obj.title} icon={obj.icon} title={obj.title} desc={obj.desc} />
        ))}
      </div>
    </div>
  </div>
);

/* ─── Library Rules ──────────────────────────── */
const RulesPanel = () => (
  <div className="space-y-8">

    <div className="">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">📜</div>
        <h2 className="text-lg font-bold tracking-wide">General rules</h2>
      </div>
      <p className="text-[14px] text-gray-600 leading-relaxed">The Library’s mission is to provide comprehensive resources and services in support of the researcher and the staff of ASI. To fulfill this mission, CAL commits to</p>
      <ul className="space-y-3 text-[14px] text-gray-600">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 bg-[#E2691E] rounded-full shrink-0" />
        <h2 className="text-[17px] font-bold text-gray-800"> Membership of the Library</h2>
      </div>
      <p className="text-[14px] text-gray-600 leading-relaxed">
        Membership of the Central Archaeological Library  is for Departmental Officials /Staffs of only DG Hqrs, Archaeological Survey of India and students of institute of Archaeology. Research Scholars/ Non Governmental Officials can only access the CAL only for Reference and reading purpose. Issuing of book is not permissible to them.  The serving departmental staffs has to obtain “No Demand Certificate” from CAL before relieving from DG Hqr.
      </p>
      <div className="flex items-center gap-3 mb-4 pt-4">
        <div className="w-1 h-6 bg-[#E2691E] rounded-full shrink-0" />
        <h2 className="text-[17px] font-bold text-gray-800"> Types of Resources and the Conditions For Use</h2>
      </div>
      <ul className="space-y-3 text-[14px] text-gray-600">
        <li>Reference documents: Only for consultation within the library.</li>
        <li>General books: only for consultation within the library.</li>
        <li>Serials: only for consultation within the library</li>
        <li>Official Publications: only for consultation within the library.</li>
        <li>Rare books: consultation with the permission of competent authority.</li>
        <li>Non-Print documents: only for consultation within the library.</li>
      </ul>
      <p className="text-[14px] text-gray-600 leading-relaxed">

      </p>
    </div>

  </div>
);

/* ═══════════════════════════════════════════════════════════════ */
/*  MAIN PAGE COMPONENT                                           */
/* ═══════════════════════════════════════════════════════════════ */

const PANEL_MAP = {
  about: <AboutPanel />,
  vision: <VisionPanel />,
  staff: <StaffPanel />,
  collection: <CollectionPanel />,
};

const LibraryAbout = () => {
  const contentRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab = TABS.some((t) => t.id === tabParam) ? tabParam : 'about';



  /* smooth-scroll content area into view on tab switch (mobile) */
  const handleTabClick = (id) => {
    setSearchParams({ tab: id });
    if (window.innerWidth < 768 && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const handleTabChange = (id) => {
    setSearchParams({ tab: id });
  };

  /* keep <title> in sync */
  useEffect(() => {
    const tab = TABS.find((t) => t.id === activeTab);
    document.title = `${tab?.label} — ASI Library`;
    return () => { document.title = 'ASI Library'; };
  }, [activeTab]);

  return (
    <div className="font-[Poppins,sans-serif]" style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* ── Page Banner ── */}
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
            <span className="text-white">{TABS.find((t) => t.id === activeTab)?.label}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            About the <span className="text-[#F5A973]">Library</span>
          </h1>


        </div>
      </div>

      {/* ── Body: sidebar tabs + panel ── */}
      <section className="bg-gray-50 py-10 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">

            {/* ── Sidebar tab list ── */}
            <aside className="md:w-56 shrink-0">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-4">
                <div className="px-4 py-3 bg-[#0F2044]">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Library</p>
                  <p className="text-white font-bold text-[13px] mt-0.5">Information</p>
                </div>
                {/* <nav className="p-2">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`w-full flex items-center gap-2.5 text-left px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 mb-0.5
                        ${activeTab === tab.id
                          ? 'bg-[#E2691E] text-white shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-[#E2691E]'
                        }`}
                    >
                      <span className="text-base shrink-0">{tab.icon}</span>
                      <span className="leading-snug">{tab.label}</span>
                      {activeTab === tab.id && (
                        <svg className="w-3.5 h-3.5 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </nav> */}
                <nav className="p-2">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`w-full flex items-center gap-2.5 text-left px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-200 mb-0.5
                        ${activeTab === tab.id
                          ? 'bg-[#E2691E] text-white shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-[#E2691E]'
                        }`}
                    >
                      <span className="text-base shrink-0">{tab.icon}</span>
                      <span className="leading-snug">{tab.label}</span>
                      {activeTab === tab.id && (
                        <svg className="w-3.5 h-3.5 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </nav>

                {/* divider + extra links */}
                <div className="border-t border-gray-100 p-2">
                  {[
                    { label: 'Services', to: '/library/services' },
                    { label: 'Membership Plan', to: '/library/membership-plan' },
                    { label: 'Membership', to: '/library/membership' },
                    { label: 'FAQs', to: '/library/faq' },
                    { label: 'Testimonials', to: '/library/testimonials' },
                  ].map((l) => (
                    <Link
                      key={l.label}
                      to={l.to}
                      className="flex items-center justify-between px-3 py-2 rounded-lg text-[12px] text-gray-500 hover:bg-gray-50 hover:text-[#E2691E] transition-colors"
                    >
                      {l.label}
                      <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── Main content panel ── */}
            <div className="flex-1 min-w-0" ref={contentRef}>
              {/* tab pill row (mobile only) */}
              <div className="flex gap-2 overflow-x-auto pb-1 mb-5 md:hidden">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap shrink-0 transition-all
                      ${activeTab === tab.id
                        ? 'bg-[#E2691E] text-white shadow-md'
                        : 'bg-white text-gray-600 border border-gray-200'
                      }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* panel heading */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#E2691E] text-white text-xl shrink-0">
                  {TABS.find((t) => t.id === activeTab)?.icon}
                </div>
                <div>
                  <h2 className="text-[18px] font-bold text-gray-800">
                    {TABS.find((t) => t.id === activeTab)?.label}
                  </h2>
                  <p className="text-[11px] text-gray-400 mt-0.5">ASI Library</p>
                </div>
              </div>

              {/* animated panel swap */}
              <div key={activeTab} style={{ animation: 'panelIn 0.25s ease' }}>
                {PANEL_MAP[activeTab]}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default LibraryAbout;
