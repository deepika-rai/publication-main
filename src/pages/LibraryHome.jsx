import { useState, useEffect, useRef } from 'react';
import { libassets } from "../assets/libraryassets";
import MembershipForm from "../components/libraray/MembershipForm";
const baseURL = import.meta.env.VITE_BACKEND_URL;

/* ─── Data ──────────────────────────────────────────────────── */

const whatsNew = [
  { day: '30', month: 'July 2026', cat: 'Notice', text: 'ASI, Bhubaneswar Circle has organised a Tiranga Rangoli at Rajarani Temple as a part of Har Ghar Tiranga.' },
  { day: '28', month: 'July 2026', cat: 'Notice', text: 'Tricolour Illumination at Ruined fort Nurpur during Har Ghar Tringa 2026.' },
  { day: '17', month: 'July 2026', cat: 'Notice', text: 'BRICS Culture Working Group Meeting, Dated 5th August 2026.' },
  { day: '15', month: 'July 2026', cat: 'Notice', text: 'The Ancient Buddhist Site of Sarnath in Uttar Pradesh was officially inscribed as Indias 45th UNESCO World Heritage Site.' },
];

const newsItems = [
  { day: '30', month: 'July 2026', cat: 'Times of India', text: 'ASI, Bhubaneswar Circle has organised a Tiranga Rangoli at Rajarani Temple as a part of Har Ghar Tiranga', url: '#' },
  { day: '28', month: 'July 2026', cat: 'Organiser', text: 'Tricolour Illumination at Ruined fort Nurpur during Har Ghar Tringa 2026', url: '#' },
  { day: '26', month: 'July 2026', cat: 'The Hindu', text: 'BRICS Culture Working Group Meeting, Dated 5th August 2026', url: '#' },
  { day: '22', month: 'July 2026', cat: 'Hindustan Times', text: 'The Ancient Buddhist Site of Sarnath in Uttar Pradesh was officially inscribed as Indias 45th UNESCO World Heritage Site', url: '#' },
];

const services = [
  { icon: '📜', title: 'MANUSCRIPTS', desc: 'The Central Archaeological Library (CAL), Archaeological Survey of India, has a rare manuscripts, archival materials, fragile publications and special collections' },
  { icon: '📚', title: 'BOOKS', desc: 'The Central Archaeological Library (CAL), Archaeological Survey of India, houses a rich and specialised collection of about 1.2 lakh books and journals' },
  { icon: '🔭', title: 'RESEARCH ENVIRONMENT', desc: 'Spacious reading halls, reference sections, stack rooms for Research Environment' },
];

const stats = [
  { value: 120000, label: 'Books & Reference Materials' },
  { value: 21000, label: 'Rare & Valuable Collections' },
  { value: 5000, label: 'Research Resources' },
  { value: 124, label: 'Years of Knowledge & Heritage' },
];

const departments = [
  { title: 'AIHC & Archaeology', back: 'Founded by Prof. H.D. Sankalia in 1939 — the premier centre for teaching and research in Indian Archaeology.', href: '#' },
  { title: 'Linguistics', back: 'Oldest department of modern Linguistics in India, founded by Prof. S.M. Katre in 1939.', href: '#' },
  { title: 'Sanskrit & Lexicography', back: 'Offers M.A. and Ph.D. programmes and leads the monumental Encyclopaedic Dictionary of Sanskrit.', href: '#' },
];

const infrastructure = [
  { img: libassets.car1, label: 'ASI Main Building' },
  { img: libassets.car2, label: 'ASI Institute' },
  { img: libassets.car3, label: 'Board Room' },
  { img: libassets.car4, label: 'Libraray' },
  { img: libassets.car5, label: 'Libraray Hall' },
  { img: libassets.car6, label: 'NMMA' },
  { img: libassets.car7, label: 'Board Room' },
];

const testimonials = [
  {
    name: 'Shri Narendra Modi',
    role: ' Hon’ble Prime Minister of India (12th July, 2018 (Thursday)',
    quote: 'भारतीय पुरातत्त्व सर्वेक्षण के मुख्यालय “धरोहर भवन” के उद्घाटन के अवसर पर आज मैंने दक्षिण एशिया के सबसे प्राचीन पुस्तकालयों में से एक भारतीय पुरातत्त्व सर्वेक्षण के केंद्रीय पुस्तकालय का दौरा किया | मै इसके संग्रह को देखकर प्रफुल्लित हूँ जिसमे पुरातत्त्व से सम्बंधित विषयों और पत्र पत्रिकाओं की विशाल श्रंखला समाहित है |पुस्तकालय ज्ञान के प्रतीक चिन्ह है और आज मैंने ऐसा महसूस किया कि पुरातत्वविदों द्वारा की गई खोजो को पुस्तकों, सामयिकों पत्रों और पत्रिकाओं में बहुत बेहतरीन तरीके से परिरक्षित किया गया है | ऐसे पुस्तकालय विद्यार्थियो, विद्वानों एवं आम जनता के आकर्षण का केंद्र होते हैं जो हमारे अतीत को वर्तमान से जोड़ते है | हमारे अतीत के प्रचार-प्रसार के लिए में भारतीय पुरातत्त्व सर्वेक्षण की पूरी टीम को अपनी शुभकामनाएँ देता हूँ |',
    img: libassets.testi1
  },
  {
    name: ' K.N. Shrivastava',
    role: '(29.07.2009)',
    quote: 'ASI’s library is one of the oldest one being accessed by a larger number of scholars, researchers, students, archaeologists etc. on regular basis. ASI itself would be completing 150 years in the year 2011.',
    img: libassets.testi2
  },
  {
    name: 'P. B. Gajendra Gadkar-Judge',
    role: 'Supreme Court of India11, Tughlak Road, New Delhi (27.9.1958)',
    quote: 'LI spent two happy and instructive hours in the Central Archaeological Library this evening. Mr. Parab and his colleagues took me round the Library and gave me a vivid idea about the extent of its very proud collection. The Library possesses a large collection of rare and valuable publication; and it can justly claim that its collection of 50,000 and odd Volumes is the largest of its kind in this country and it affords invaluable assistance to all serious students of Ideology, Archaeology and ancient Indian Culture',
    img: libassets.testi3
  },
  {
    name: ' Prof. H. D. Velankar',
    role: 'Director, Bharatiya Vidya Bhawan, Bombay (16.4.1956).',
    quote: 'I visited the Central Archaeological Library today and was very pleased to see the good collection of books on Indian History and other branches of Indology. The librarian, Mr. Parab, is a good scholar of Sanskrit, Pali and Prakritie language and is very helpful to visitors in finding out reference which are needed by them.',
    img: libassets.testi4
  },
];


/* ─── Sub-components ────────────────────────────────────────── */
const handleMembershipSubmit = (formData) => {
  console.log("Membership form data:", formData);

  // Call your membership API here.
};

/** Animated counter */
const Counter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          setCount(current);
          if (current >= target) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.4 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-3xl font-bold text-gray-800 mb-2">{count}+</div>
      <div className="text-sm text-gray-600 uppercase tracking-wide">{label}</div>
    </div>
  );
};

/** Scrolling marquee for What's New */
const WhatsNewTicker = ({ items }) => {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden h-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`flex flex-col gap-0 ${paused ? '' : 'animate-ticker'}`}
        style={{
          animation: paused ? 'none' : 'ticker 30s linear infinite',
        }}
      >
        {[...items].map((item, i) => (
          <div key={i} className="flex gap-3 p-3 border-b border-gray-100 hover:bg-orange-50 transition-colors">
            <div className="shrink-0 w-14 bg-gray-50 rounded text-center py-2 border border-gray-100">
              <span className="block text-xl font-bold text-[#E2691E] leading-none">{item.day}</span>
              <small className="text-[10px] text-gray-500 leading-none">{item.month}</small>
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold text-[#E2691E] uppercase tracking-wide mb-0.5">{item.cat}</span>
              <p className="text-[12px] text-gray-700 leading-snug line-clamp-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
};

/** Infrastructure carousel */
const InfraCarousel = ({ items }) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const visible = 4;

  const start = () => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, 3000);
  };
  const stop = () => clearInterval(timerRef.current);

  useEffect(() => { start(); return stop; }, []);

  const getSlide = (offset) => items[(current + offset) % items.length];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Array.from({ length: visible }).map((_, i) => {
          const item = getSlide(i);
          return (
            <div key={i} className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3]">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://placehold.co/400x300/1a1a2e/ffffff?text=' + encodeURIComponent(item.label); }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-0 right-0 text-center text-white text-xs font-semibold px-2">{item.label}</p>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-[#E2691E]' : 'bg-gray-300'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/** Testimonials slider */
const TestimonialsSlider = ({ items }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);



  const item = items[idx];
  return (
    <div className="relative min-h-[280px]">
      <div key={idx} className="animate-fadeIn">
        <div className="flex flex-col items-center text-center px-4">
          <img
            src={item.img}
            alt={item.name}
            className="w-20 h-20 rounded-full object-cover mb-3"
            onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=b7202e&color=fff`; }}
          />
          <svg className="w-6 h-6 text-[#E2691E] mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" /></svg>
          <p className="text-gray-600 text-sm italic leading-relaxed mb-4">{item.quote}</p>
          <h6 className="font-bold text-gray-800 text-sm">{item.name}</h6>
          <small className="text-[#E2691E] text-xs">{item.role}</small>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? 'bg-[#E2691E]' : 'bg-gray-300'}`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.5s ease; }
      `}</style>
    </div>
  );
};
const BRAND = "#E2691E";
/** LOGO slider */
const LOGOS = [
  { name: "Logo 1", src: "https://asi.nic.in/images/ftl-2.png", hrf: "https://www.mygov.in/" },
  { name: "Logo 2", src: "https://asi.nic.in/images/ftl-3.png", hrf: "https://www.indiaculture.nic.in/" },
  { name: "Logo 3", src: "https://asi.nic.in/images/ftl-5.png", hrf: "http://ncf.nic.in/" },
  { name: "Logo 4", src: "https://asi.nic.in/images/ftl-6.png", hrf: "https://www.incredibleindia.org/" },
  { name: "Logo 5", src: "https://asi.nic.in/images/ftl-1.png", hrf: "https://www.india.gov.in/" },
];

function LogoSlider() {
  // Duplicate the list so the loop is seamless
  const track = [...LOGOS, ...LOGOS];

  return (
    <section className="">
      <div className="logo-slider relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="logo-track flex w-max items-center gap-12 px-6">
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-14 w-32 shrink-0 items-center justify-center"
            >
              <a href={logo.hrf}><img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition duration-300"
              /></a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logo-track {
          animation: logo-scroll 30s linear infinite;
        }
        .logo-slider:hover .logo-track {
          animation-play-state: paused;
        }
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-track { animation: none; }
        }
      `}</style>
    </section>
  );
}

/* ─── Main page ─────────────────────────────────────────────── */
const LibraryHome = () => (
  <div className="font-[Poppins,sans-serif]" style={{ fontFamily: 'Poppins, sans-serif' }}>



    {/* ══ 1. VIDEO BANNER ══════════════════════════════════════ */}
    <section className="relative w-full h-[92vh] min-h-[520px] overflow-hidden">
      {/* Layer 1: Fallback image (always rendered, visible instantly) */}
      <img
        src={libassets.homebanner}
        alt="ASI Library"
        className="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high"
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source
          src={libassets.bannervideo}
          type="video/mp4" />
      </video>

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0F2044]/70 via-black/40 to-[#0F2044]/75" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2044]/50 via-black/20 to-[#0F2044]/55" />


      {/* Caption */}
      <div className="relative z-10 h-full flex items-center justify-start text-left px-4 max-w-[1500px] mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            Welcome to ASI Library <br className="hidden md:block" />
            <span className="text-[#F5A973]"> A Gateway to Knowledge & Discovery</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Your trusted space for learning, research, and knowledge.

          </p>
          <div className="flex flex-wrap gap-3 justify-start">
            <a
              href={libassets.Form}
              className="bg-[#E2691E] hover:bg-[#B8581E] text-white px-8 py-3 rounded font-semibold text-sm transition-colors shadow-lg"
            >
              Join Us Now!
            </a>
            <a
              href="/library/contact"
              className="border border-white/70 hover:bg-white/10 text-white px-8 py-3 rounded font-semibold text-sm transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
        <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>

    {/* ══ 2. History + WHAT'S NEW ═══════════════════════ */}
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section label */}
        <div className="text-center mb-10">
          <span className="text-[#E2691E] text-xs font-semibold uppercase tracking-widest">Library &amp; Updates</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">About the Library</h2>
          <div className="w-16 h-1 bg-[#E2691E] mx-auto mt-3 rounded" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT — leader cards */}
          <div className="flex-[5] flex flex-col gap-5">
            {/* <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#E2691E] rounded-full shrink-0" />
              <h2 className="text-[17px] font-bold text-gray-800">CAL</h2>
            </div> */}
            <p className="text-[14px] text-gray-600 leading-relaxed  sm:text-justify">
              The Central Archaeological Library (CAL), Archaeological Survey of India, provides specialized library resources in Archaeology, Ancient Indian History, Art, Architecture, Conservation, Museology, Epigraphy, Numismatics, Cultural Heritage and allied subjects.
            </p>

            <p className="text-[14px] text-gray-600 leading-relaxed mb-6  sm:text-justify">
              To facilitate wider academic and research access to its resources, CAL has initiated membership for eligible non-departmental users, subject to the prescribed rules, availability of resources and approval of the competent authority.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#E2691E] rounded-full shrink-0" />
              <h2 className="text-[17px] font-bold text-gray-800">Few Facts about Library</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map((s) => (
                <Counter key={s.label} target={s.value} label={s.label} />
              ))}
            </div>
          </div>



          {/* RIGHT — What's New */}
          <div className="flex-[2] min-w-0">
            <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full">
              <div className="bg-[#E2691E] text-white text-center py-3 font-semibold text-sm uppercase tracking-widest">
                What's New
              </div>
              <div className="flex-1 overflow-hidden" style={{ height: '440px' }}>
                <WhatsNewTicker items={whatsNew} />
              </div>
              <div className="text-center py-3 border-t border-gray-100">
                <a href="/library/whats-new" className="text-xs bg-[#E2691E] text-white px-4 py-1.5 rounded hover:bg-[#B8581E] transition-colors">
                  View All
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    {/* ══ 5. Membership FORM ════════════════════════════ */}
    {/* <section className="bg-gray-50 py-14 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">Apply For Membership</h2>
          <div className="w-16 h-1 bg-[#E2691E] mx-auto mt-3 rounded" />
        </div>
        <MembershipForm
          onSubmit={handleMembershipSubmit}
        />
      </div>
    </section> */}





    {/* ══ 4. STATS COUNTER ══════════════════════════════════════ */}
    {/* <section className="bg-[#0F2044] py-14">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold">A Few Facts About Our Library</h2>
          <div className="w-16 h-1 bg-[#E2691E] mx-auto mt-3 rounded" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <Counter key={s.label} target={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section> */}



    {/* ══ 3. SERVICES / KEY FEATURES ═══════════════════════════ */}
    <section className="bg-gray-50 py-14 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#E2691E] text-xs font-semibold uppercase tracking-widest">What We Offer</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">Our Key Strengths</h2>
          <div className="w-16 h-1 bg-[#E2691E] mx-auto mt-3 rounded" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white rounded-xl border border-gray-100 p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-center"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <div className="w-10 h-0.5 bg-[#E2691E] mx-auto mb-4 rounded transition-all group-hover:w-16" />
              <h4 className="text-base font-bold text-gray-800 mb-2 uppercase tracking-wide">{s.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



    {/* ══ 6. INFRASTRUCTURE CAROUSEL ════════════════════════════ */}
    {/* <section className="bg-gray-50 py-14 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#E2691E] text-xs font-semibold uppercase tracking-widest">ASI Facility</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">Infrastructure</h2>
          <div className="w-16 h-1 bg-[#E2691E] mx-auto mt-3 rounded" />
        </div>
        <InfraCarousel items={infrastructure} />
      </div>
    </section> */}

    {/* ══ 7. NEWS + TESTIMONIALS ════════════════════════════════ */}
    {/* <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">

      
          <div className="flex-[3]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[#E2691E] text-xs font-semibold uppercase tracking-widest">Media Coverage</span>
                <h2 className="text-xl font-bold text-gray-800 mt-0.5">Latest News</h2>
              </div>
              <div className="w-10 h-1 bg-[#E2691E] rounded" />
            </div>

            <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1 scrollbar-thin">
              {newsItems.map((n, i) => (
                <div key={i} className="flex gap-3 pb-3 border-b border-gray-100 hover:bg-gray-50 rounded p-2 transition-colors">
                  <div className="shrink-0 w-14 bg-gray-50 border border-gray-100 rounded text-center py-2">
                    <span className="block text-lg font-bold text-[#E2691E] leading-none">{n.day}</span>
                    <small className="text-[10px] text-gray-500 leading-none">{n.month}</small>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] font-bold text-[#E2691E] uppercase tracking-wide mb-0.5">{n.cat}</span>
                    <p className="text-[13px] text-gray-700 leading-snug mb-1 line-clamp-2">{n.text}</p>
                    <a href={n.url} target="_blank" rel="noreferrer" className="text-[11px] text-[#E2691E] font-semibold hover:underline">
                      View Details →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
          <div className="flex-[2] lg:border-l border-gray-100 lg:pl-8">
            <div className="mb-6">
              <span className="text-[#E2691E] text-xs font-semibold uppercase tracking-widest">Voices</span>
              <h2 className="text-xl font-bold text-gray-800 mt-0.5">Testimonials</h2>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
              <TestimonialsSlider items={testimonials} />
            </div>
          </div>

        </div>
      </div>
    </section> */}

    {/* ══ 8. LOGO SLIDER ════════════════════════════════ */}
    <section className="py-8 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <LogoSlider />
      </div>
    </section>

    {/* ══ 8. AFFILIATION BANNER ═════════════════════════════════ */}
    <section className="bg-[#0F2044] py-12  border-b border-gray-700">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <p className="text-[#E2691E] text-xs font-semibold uppercase tracking-widest mb-2">Archaeological Suervey of India</p>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">124 Years of Excellence</h2>
        <div className="w-16 h-1 bg-[#E2691E] mx-auto mb-8 rounded" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#"
            className="flex-1 max-w-xs bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#E2691E] transition-colors text-center"
          >
            <img
              src={libassets.logo}
              alt="ASI Libraray"
              className="h-20 mx-auto object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <p className="text-gray-400 text-xs mt-3">Established in 1902 in Shimla </p>
          </a>
          <div className="flex-1 max-w-xs bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <img
              src={libassets.car1}
              alt="Campus"
              className="w-full h-40 object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </section>


    {/* ══ 9. QUICK LINKS / CTA STRIP ════════════════════════════ */}
    {/* <section className="bg-[#E2691E] py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          {[
            { label: 'Online Registration', href: '#' },
            { label: 'Library', href: '#' },
            { label: 'E-Resources', href: '#' },
            { label: 'Books', href: '#' },
            { label: 'Contact Us', href: '#' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="bg-white/15 hover:bg-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/30 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section> */}

  </div>
);

export default LibraryHome;
