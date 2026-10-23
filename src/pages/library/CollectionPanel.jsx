/* ─── Shared sub-components ──────────────────────────────────── */
const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-1 h-6 bg-[#E2691E] rounded-full shrink-0" />
    <h2 className="text-[17px] font-bold text-gray-800">{children}</h2>
  </div>
);

const StatCard = ({ value, label, icon }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
    <div className="text-3xl mb-1">{icon}</div>
    <div className="text-2xl font-extrabold text-[#E2691E] leading-tight">{value}</div>
    <div className="text-[12px] text-gray-500 font-medium mt-1">{label}</div>
  </div>
);

const FeatureCard = ({ title, desc, icon }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-[#E2691E]/20 hover:-translate-y-0.5 transition-all duration-200">
    <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-xl mb-3 shrink-0">
      {icon}
    </div>
    <h4 className="font-bold text-gray-800 text-[14px] mb-1.5">{title}</h4>
    <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const CollectionCard = ({ icon, title, count, desc }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-[#E2691E]/20 hover:-translate-y-0.5 transition-all duration-200">
    <div className="flex items-center justify-between mb-3">
      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      {count && (
        <span className="text-[#E2691E] font-extrabold text-[15px]">{count}</span>
      )}
    </div>
    <h4 className="font-bold text-gray-800 text-[14px] mb-1.5">{title}</h4>
    <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

/* ─── Collection panel ────────────────────────────────────────── */
const CollectionPanel = () => (
  <div className="space-y-10">
    <div>
      <p className="text-[14px] text-gray-600 mb-8 leading-relaxed">
        The Central Archaeological Library (CAL), Archaeological Survey of India, houses a rich and specialised collection of about 1.2 lakh books and journals comprising:
      </p>
      <ul className="border-t border-gray-200">
        <li className="flex items-start gap-3 py-3.5 border-b border-gray-200 text-[14px] text-gray-800">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#E2691E] shrink-0" />
          Books and publications on Archaeology and allied subjects
        </li>
        <li className="flex items-start gap-3 py-3.5 border-b border-gray-200 text-[14px] text-gray-800">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#E2691E] shrink-0" />
          Indian History, Art and Architecture
        </li>
        <li className="flex items-start gap-3 py-3.5 border-b border-gray-200 text-[14px] text-gray-800">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#E2691E] shrink-0" />
          Museology and Conservation
        </li>
        <li className="flex items-start gap-3 py-3.5 border-b border-gray-200 text-[14px] text-gray-800">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#E2691E] shrink-0" />
          Heritage Management and related disciplines
        </li>
        <li className="flex items-start gap-3 py-3.5 border-b border-gray-200 text-[14px] text-gray-800">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#E2691E] shrink-0" />
          Journals and periodicals
        </li>
        <li className="flex items-start gap-3 py-3.5 border-b border-gray-200 text-[14px] text-gray-800">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#E2691E] shrink-0" />
          Reference and research materials
        </li>
        <li className="flex items-start gap-3 py-3.5 border-b border-gray-200 text-[14px] text-gray-800">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#E2691E] shrink-0" />
          Digitized and electronic resources
        </li>
        <li className="flex items-start gap-3 py-3.5 border-b border-gray-200 text-[14px] text-gray-800">
          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#E2691E] shrink-0" />
          Special and valuable collections, including rare books and manuscripts, subject to applicable access restrictions
        </li>
      </ul>
    </div>

    
    {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <StatCard value="1,80,000+" label="Books & Volumes" icon="📖" />
      <StatCard value="12,000+" label="Manuscripts" icon="📜" />
      <StatCard value="500+" label="Journal Subscriptions" icon="📰" />
      <StatCard value="2,000+" label="Theses & Dissertations" icon="🎓" />
      <StatCard value="5,000+" label="Maps & Toposheets" icon="🗺️" />
      <StatCard value="1,000+" label="Audio-Visual Items" icon="🎬" />
      <StatCard value="10,000+" label="Rare Books (pre-1960)" icon="📕" />
      <StatCard value="200+" label="Years of Heritage" icon="⏳" />
    </div>
  
    <div>
      <SectionHeading>Subject Specialisation</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CollectionCard icon="⛏️" title="Archaeology" count="60,000+" desc="Extensive coverage of excavation reports, field surveys, archaeological journals, and heritage site studies." />
        <CollectionCard icon="🏺" title="Ancient Indian History" count="35,000+" desc="Primary and secondary sources on ancient Indian civilisations, epigraphy, numismatics, and art history." />
        <CollectionCard icon="🗣️" title="Linguistics" count="25,000+" desc="Books, journals, and research materials on phonetics, morphology, syntax, dialects, and computational linguistics." />
        <CollectionCard icon="📖" title="Sanskrit & Lexicography" count="20,000+" desc="Classical Sanskrit texts, dictionaries, lexicons, and materials from the Encyclopaedic Dictionary project." />
        <CollectionCard icon="🧬" title="Anthropology" count="15,000+" desc="Physical and cultural anthropology, ethnography, tribal studies, and folk traditions of India." />
        <CollectionCard icon="🔮" title="Philosophy & Religion" count="10,000+" desc="Indian philosophy, comparative religion, Vedic studies, Puranas, and texts of major religious traditions." />
      </div>
    </div>

    
    <div>
      <SectionHeading>Special Collections</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            icon: '📜',
            title: 'Manuscript Collection',
            desc: 'Nearly 12,000 manuscripts in Sanskrit, Marathi, and Urdu covering grammar, history, philosophy, religion, medicine, and astrology. Many are unique copies found nowhere else.',
            badge: '12,000+ items',
          },
          {
            icon: '📕',
            title: 'Rare Books (1523–1960)',
            desc: 'A curated collection of rare printed books from 1523 to 1960, including early printed works, colonial-era publications, and first editions of significant academic texts.',
            badge: '10,000+ items',
          },
          {
            icon: '🗺️',
            title: 'Maps & Toposheets',
            desc: 'An extensive cartographic collection including archaeological survey maps, geological survey toposheets, historical maps, and site plans essential for field research.',
            badge: '5,000+ items',
          },
          {
            icon: '🎬',
            title: 'Audio-Visual Archive',
            desc: 'Films, recordings, slides, and photographic documentation of archaeological excavations, cultural events, and academic programmes spanning several decades.',
            badge: '1,000+ items',
          },
        ].map((sc) => (
          <div
            key={sc.title}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-[#E2691E]/20 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-xl shrink-0">
                  {sc.icon}
                </div>
                <h4 className="font-bold text-gray-800 text-[14px]">{sc.title}</h4>
              </div>
              <span className="shrink-0 bg-orange-50 text-[#E2691E] text-[10px] font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">
                {sc.badge}
              </span>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed">{sc.desc}</p>
          </div>
        ))}
      </div>
    </div>

    
    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#2d1a22] rounded-2xl p-6 md:p-8 text-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#E2691E]/30 flex items-center justify-center text-xl shrink-0">🗄️</div>
        <div>
          <h3 className="font-bold text-[15px]">VIRASAT Digital Library</h3>
          <p className="text-gray-400 text-[12px]">Digital Heritage Archive</p>
        </div>
      </div>
      <p className="text-gray-300 text-[13px] leading-relaxed mb-5">
        VIRASAT is the library's flagship digital initiative, making rare and unique collections accessible
        online. It houses digitised manuscripts, pothis, rare books, the complete Bulletin
        series, theses and dissertations, maps, toposheets, non-book materials, and audio-video collections —
        all freely accessible to registered users.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Manuscripts',  count: '12,000+' },
          { label: 'Rare Books',   count: '10,000+' },
          { label: 'Theses',       count: '2,000+'  },
          { label: 'AV Materials', count: '1,000+'  },
        ].map((v) => (
          <div key={v.label} className="bg-white/10 rounded-lg p-3 text-center">
            <div className="text-white font-extrabold text-[16px]">{v.count}</div>
            <div className="text-gray-400 text-[11px] mt-0.5">{v.label}</div>
          </div>
        ))}
      </div>
    </div>

 
    <div>
      <SectionHeading>Electronic Resources</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: '🔓', title: 'ONOS (One Nation One Subscription)', desc: "Access to a large corpus of e-journals and research publications through the Government of India's ONOS initiative." },
          { icon: '🔗', title: 'Open Access Repositories', desc: 'Curated links to open-access databases, institutional repositories, and free scholarly resources relevant to library disciplines.' },
          { icon: '🔐', title: 'INFLIBNET Remote Access', desc: 'Shibboleth-authenticated remote access to subscribed e-resources via the Indian Access Management Federation (INFED) of INFLIBNET.' },
        ].map((r) => (
          <FeatureCard key={r.title} icon={r.icon} title={r.title} desc={r.desc} />
        ))}
      </div>
    </div> */}



  </div>
);

export default CollectionPanel;
