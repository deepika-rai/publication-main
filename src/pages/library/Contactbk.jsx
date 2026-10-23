import { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── Leadership data ─────────────────────────────────────────── */
const LEADERSHIP = [
  {
    id: 'chancellor',
    role: 'Chancellor',
    name: 'Dr. Bhushan Patwardhan',
    title: 'Hon. Chancellor, ASI Libraray PGRI',
    avatar: 'B',
    color: 'from-[#1a1a2e] to-[#2d1a22]',
    accent: '#F5A973',
    email: 'chancellor@dcpune.ac.in',
    phone: '011 2307 5357 Ext. 100',
    office: 'Chancellor\'s Office, Main Building, Ground Floor',
    bio: 'Dr. Bhushan Patwardhan is a distinguished scientist, academician, and thought leader in integrative medicine and Ayurveda. He has served in key advisory roles for UGC, ICMR, and DST, and brings visionary leadership to the institution.',
    availability: 'By appointment only',
  },
  {
    id: 'vc',
    role: 'Vice Chancellor',
    name: 'Prof. Prasad Joshi',
    title: 'Vice Chancellor (Actg.), ASI Libraray PGRI',
    avatar: 'P',
    color: 'from-[#E2691E] to-[#B8581E]',
    accent: '#fecaca',
    email: 'vc@dcpune.ac.in',
    phone: '011 2307 5357 Ext. 101',
    office: 'Vice Chancellor\'s Office, Main Building, First Floor',
    bio: 'Prof. Prasad Joshi is an eminent archaeologist and academic administrator. He has led numerous excavation projects across Maharashtra and is widely recognised for his contributions to AIHC and Archaeology research.',
    availability: 'Mon – Fri, 10:00 AM – 1:00 PM',
  },
  {
    id: 'librarian',
    role: 'Librarian',
    name: 'Dr. Pramod Joglekar',
    title: 'Librarian (I/C), ASI Libraray Library',
    avatar: 'P',
    color: 'from-[#0f4c81] to-[#1a3a5c]',
    accent: '#93c5fd',
    email: 'calmembership2026@gmail.com',
    phone: '011 2307 5357 Ext. 120',
    office: 'Library Building, Ground Floor',
    bio: 'Dr. Pramod Joglekar heads the ASI Libraray Library and has been instrumental in the VIRASAT Digital Library project, library automation, and expanding access to e-resources for researchers and students.',
    availability: 'Mon – Sat, 9:00 AM – 5:00 PM',
  },
];

/* ─── Quick contact info ──────────────────────────────────────── */
const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    lines: ['ASI Libraray Road, Yerawada,', 'Pune 411 006, Maharashtra, India'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    lines: ['011 2307 5357 (Office)', '020-26513238 (Library)'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    lines: ['calmembership2026@gmail.com', 'academic@dcpune.ac.in'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Library Hours',
    lines: ['Mon – Sat: 8:00 AM – 8:00 PM', 'Sunday: 10:00 AM – 5:00 PM'],
  },
];

/* ─── Leader card ─────────────────────────────────────────────── */
const LeaderCard = ({ leader }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* colour header */}
      <div className={`bg-gradient-to-br ${leader.color} p-6`}>
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold text-2xl shrink-0 border-2 border-white/20 shadow-lg"
            style={{ background: 'rgba(255,255,255,0.15)' }}
          >
            {leader.avatar}
          </div>
          <div className="min-w-0">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1"
              style={{ background: 'rgba(255,255,255,0.15)', color: leader.accent }}
            >
              {leader.role}
            </span>
            <h3 className="text-white font-bold text-[16px] leading-snug">{leader.name}</h3>
            <p className="text-[12px] mt-0.5" style={{ color: leader.accent }}>{leader.title}</p>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="p-5 space-y-3">
        {/* bio toggle */}
        <p className={`text-[13px] text-gray-500 leading-relaxed ${!expanded ? 'line-clamp-2' : ''}`}>
          {leader.bio}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#E2691E] text-[11px] font-semibold hover:underline"
        >
          {expanded ? 'Show less ↑' : 'Read more ↓'}
        </button>

        <hr className="border-gray-100" />

        {/* contact details */}
        <div className="space-y-2">
          {[
            { icon: '📧', label: leader.email, href: `mailto:${leader.email}`, isLink: true },
            { icon: '📞', label: leader.phone, href: `tel:${leader.phone.replace(/\D/g, '')}`, isLink: true },
            { icon: '📍', label: leader.office, isLink: false },
            { icon: '🕐', label: leader.availability, isLink: false },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[14px] shrink-0 mt-0.5">{item.icon}</span>
              {item.isLink ? (
                <a href={item.href} className="text-[12px] text-blue-600 hover:underline break-all leading-snug">
                  {item.label}
                </a>
              ) : (
                <p className="text-[12px] text-gray-500 leading-snug">{item.label}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Contact form ────────────────────────────────────────────── */
const SUBJECTS = [
  'General Enquiry',
  'Library Membership',
  'Feedback & Suggestions',
  'Other',
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Full name is required.';
    if (!form.email.trim())   e.email   = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.subject)        e.subject = 'Please select a subject.';
    if (!form.message.trim()) e.message = 'Message cannot be empty.';
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  const inputBase =
    'w-full bg-gray-50 border rounded-lg px-3.5 py-2.5 text-[13px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E2691E]/25 focus:border-[#E2691E] transition';

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4 text-3xl">✅</div>
        <h3 className="text-gray-800 font-bold text-[18px] mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-[14px] max-w-xs leading-relaxed">
          Thank you for reaching out. A library staff member will get back to you within one working day.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
          className="mt-6 px-6 py-2 bg-[#E2691E] text-white text-[13px] font-semibold rounded-full hover:bg-[#8b0000] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-[12px] font-semibold text-gray-600 mb-1">
            Full Name <span className="text-[#d2042d]">*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Kumar"
            className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
          />
          {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-[12px] font-semibold text-gray-600 mb-1">
            Email Address <span className="text-[#d2042d]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
          />
          {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="block text-[12px] font-semibold text-gray-600 mb-1">Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className={`${inputBase} border-gray-200`}
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-[12px] font-semibold text-gray-600 mb-1">
            Subject <span className="text-[#d2042d]">*</span>
          </label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`${inputBase} ${errors.subject ? 'border-red-400' : 'border-gray-200'}`}
          >
            <option value="">Select a subject…</option>
            {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.subject && <p className="text-red-500 text-[11px] mt-1">{errors.subject}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[12px] font-semibold text-gray-600 mb-1">
          Message <span className="text-[#d2042d]">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Write your message here…"
          className={`${inputBase} resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
        />
        {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3 bg-[#E2691E] hover:bg-[#8b0000] disabled:opacity-60 text-white font-semibold text-[14px] rounded-xl transition-colors shadow-md shadow-red-200"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-gray-400">
        We typically respond within 1 working day · Your data is kept confidential
      </p>
    </form>
  );
};

/* ─── Map embed placeholder ───────────────────────────────────── */
const MapPlaceholder = () => (
  <div className="w-full h-52 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center relative">
    {/* subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: 'linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
    <div className="relative flex flex-col items-center gap-2 text-gray-400">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span className="text-[12px] font-medium">ASI Libraray Road, Yerawada, Pune</span>
      <a
        href="https://maps.google.com/?q=Deccan+College+Pune"
        target="_blank"
        rel="noreferrer"
        className="text-[11px] text-[#E2691E] hover:underline font-semibold"
      >
        Open in Google Maps →
      </a>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════ */
/*  MAIN PAGE                                                      */
/* ═══════════════════════════════════════════════════════════════ */

const Contactbk = () => (
  <div className="font-[Poppins,sans-serif]" style={{ fontFamily: 'Poppins, sans-serif' }}>

    {/* ── Page Banner ── */}
    <div
      className="relative overflow-hidden py-14"
      style={{ background: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)' }}
    >
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/[0.05] pointer-events-none" />
      <div className="absolute top-8 -left-12 w-48 h-48 rounded-full border border-[#E2691E]/10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4">
        <nav className="flex items-center gap-2 text-[11px] text-gray-500 mb-4">
          <Link to="/libraryhome" className="hover:text-[#F5A973] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-400">Library</span>
          <span>/</span>
          <span className="text-white">Contact Us</span>
        </nav>

        <span className="inline-block bg-[#E2691E]/20 text-[#F5A973] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
          Get in Touch
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          Contact <span className="text-[#F5A973]">Us</span>
        </h1>
        <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
          Reach out for library enquiries, research assistance, membership, or general information.
          Our team is happy to help.
        </p>

        {/* quick stat chips */}
        <div className="flex flex-wrap gap-4 mt-8">
          {[
            { icon: '⏱️', text: 'Reply within 1 working day' },
            { icon: '📍', text: 'Yerawada, Pune 411 006'     },
            { icon: '📞', text: '011 2307 5357'               },
          ].map((c) => (
            <span key={c.text} className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-gray-300 text-[12px] px-3 py-1.5 rounded-full">
              <span>{c.icon}</span>{c.text}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* ── Quick info strip ── */}
    <div className="bg-[#E2691E]">
      <div className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {CONTACT_INFO.map((item) => (
          <div key={item.label} className="flex items-start gap-2.5">
            <div className="text-white/70 shrink-0 mt-0.5">{item.icon}</div>
            <div>
              <p className="text-[10px] font-bold text-red-200 uppercase tracking-wider mb-0.5">{item.label}</p>
              {item.lines.map((l, i) => (
                <p key={i} className="text-white text-[11px] leading-snug">{l}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* ── Main content ── */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-14">

        {/* ── Leadership contacts ── */}
        <div>
          <div className="text-center mb-8">
            <span className="text-[#E2691E] text-[10px] font-bold uppercase tracking-widest">Reach Out Directly</span>
            <h2 className="text-[22px] font-bold text-gray-800 mt-1">Leadership &amp; Administration</h2>
            <div className="w-12 h-1 bg-[#E2691E] mx-auto mt-3 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP.map((l) => <LeaderCard key={l.id} leader={l} />)}
          </div>
        </div>

        {/* ── Form + sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E2691E] flex items-center justify-center text-white shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-[17px] font-bold text-gray-800">Send a Message</h2>
                  <p className="text-[11px] text-gray-400 mt-0.5">We'll get back to you within one working day</p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-5">

            {/* Map */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-[14px] font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span className="text-[#E2691E]">📍</span> Find Us
              </h3>
              <MapPlaceholder />
              <p className="text-[12px] text-gray-400 mt-3 leading-relaxed">
                ASI Libraray Road, Yerawada, Pune 411 006.<br />
                Near Yerawada Bus Depot, opposite Aga Khan Palace.
              </p>
            </div>

            {/* How to reach */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-[14px] font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span className="text-[#E2691E]">🚌</span> How to Reach
              </h3>
              <ul className="space-y-2.5">
                {[
                  { mode: '🚌', text: 'PMPML Bus: Routes 4, 4 Ltd, 6, 50 (Yerawada stop)' },
                  { mode: '🚖', text: 'Auto / Cab: Available from Pune Railway Station (~6 km)' },
                  { mode: '✈️', text: 'Airport: Pune International Airport (~5 km via Nagar Road)' },
                  { mode: '🚉', text: 'Railway: Pune Junction (~7 km), Hadapsar (~8 km)' },
                ].map((r) => (
                  <li key={r.mode} className="flex items-start gap-2 text-[12px] text-gray-500">
                    <span className="shrink-0">{r.mode}</span>
                    <span>{r.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="bg-[#0F2044] rounded-2xl p-5">
              <h3 className="text-[14px] font-bold text-white mb-3">Follow Us</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { name: 'Facebook',  href: 'https://www.facebook.com/DeccanCollegeOfficial', bg: '#1877f2', icon: 'f' },
                  { name: 'Twitter',   href: 'https://twitter.com/CollegeDeccan',              bg: '#1da1f2', icon: '𝕏' },
                  { name: 'YouTube',   href: 'https://www.youtube.com/channel/UCq7djob7VE1p0YvRzdySvaQ', bg: '#ff0000', icon: '▶' },
                  { name: 'Instagram', href: 'https://www.instagram.com/deccan.college/',     bg: '#e1306c', icon: '📸' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.name}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[13px] font-bold hover:scale-110 transition-transform"
                    style={{ background: s.bg }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <p className="text-gray-500 text-[11px] mt-3">
                Stay updated with library news, events, and announcements.
              </p>
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-[14px] font-bold text-gray-700 mb-3">Quick Links</h3>
              <div className="space-y-1.5">
                {[
                  { label: 'Library Membership',  to: '/membership/pricing' },
                  { label: 'About the Library',   to: '/library/about'      },
                  { label: 'Gallery',             to: '/library/gallery'    },
                  { label: 'Library Feedback Form', to: '#'                 },
                ].map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-[12px] text-gray-500 hover:bg-orange-50 hover:text-[#E2691E] transition-colors"
                  >
                    {l.label}
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Department contacts ── */}
        <div>
          <div className="text-center mb-8">
            <span className="text-[#E2691E] text-[10px] font-bold uppercase tracking-widest">Departments</span>
            <h2 className="text-[22px] font-bold text-gray-800 mt-1">Head of Departments</h2>
            <div className="w-12 h-1 bg-[#E2691E] mx-auto mt-3 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                dept: 'Linguistics',
                hod:  'Prof. Madhav Deshpande',
                email: 'linguistics@dcpune.ac.in',
                phone: '011 2307 5357 Ext. 201',
                icon: '🗣️',
                bg: 'bg-purple-50',
                border: 'border-purple-100',
                text: 'text-purple-700',
              },
              {
                dept: 'AIHC & Archaeology',
                hod:  'Prof. Shrikant Pradhan',
                email: 'archaeology@dcpune.ac.in',
                phone: '011 2307 5357 Ext. 202',
                icon: '⛏️',
                bg: 'bg-amber-50',
                border: 'border-amber-100',
                text: 'text-amber-700',
              },
              {
                dept: 'Sanskrit & Lexicography',
                hod:  'Prof. Asha Kulkarni',
                email: 'sanskrit@dcpune.ac.in',
                phone: '011 2307 5357 Ext. 203',
                icon: '📖',
                bg: 'bg-emerald-50',
                border: 'border-emerald-100',
                text: 'text-emerald-700',
              },
            ].map((d) => (
              <div
                key={d.dept}
                className={`${d.bg} ${d.border} border rounded-2xl p-5 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm`}>
                    {d.icon}
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold uppercase tracking-wider ${d.text}`}>Head of Department</p>
                    <p className="text-gray-800 font-bold text-[13px] leading-snug">{d.dept}</p>
                  </div>
                </div>
                <p className="text-gray-700 font-semibold text-[13px] mb-2">{d.hod}</p>
                <div className="space-y-1">
                  <a href={`mailto:${d.email}`} className="flex items-center gap-1.5 text-[11px] text-blue-600 hover:underline">
                    <span>📧</span>{d.email}
                  </a>
                  <p className="flex items-center gap-1.5 text-[11px] text-gray-500">
                    <span>📞</span>{d.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    {/* ── Bottom CTA ── */}
    <div
      className="relative py-12 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #E2691E 0%, #8b0000 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Visit Us in Person</h2>
        <p className="text-red-200 text-sm mb-6">
          The library is open Monday to Saturday. Walk in for reference services, manuscript access,
          or to speak with our research team directly.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/library/membership"
            className="bg-white text-[#E2691E] hover:bg-gray-100 font-bold px-7 py-2.5 rounded-xl text-[13px] transition-colors shadow-lg"
          >
            Get Membership
          </Link>
          <Link
            to="/library/about"
            className="border border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-2.5 rounded-xl text-[13px] transition-colors"
          >
            About Library
          </Link>
        </div>
      </div>
    </div>

  </div>
);

export default Contactbk;
