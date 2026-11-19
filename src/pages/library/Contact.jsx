import { useState } from 'react';
import { Link } from 'react-router-dom';
import { libassets } from "../../assets/libraryassets";
import axios from "axios";

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
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) e.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.subject) e.subject = 'Please select a subject.';
    if (!form.message.trim()) e.message = 'Message cannot be empty.';
    return e;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: '' }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const errs = validate();
  //   if (Object.keys(errs).length) { setErrors(errs); return; }
  //   setLoading(true);
  //   setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const { data } = await axios.post(
        "/api/user/submitContactForm",
        form
      );

      if (!data.success) {
        throw new Error(data.message || "Failed to submit enquiry.");
      }

      setSubmitted(true);

      // Reset form after successful submission
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Contact form error:", error);

      setErrors({
        submit:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again.",
      });

    } finally {
      setLoading(false);
    }

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

    </form>
  );
};

/* ─── Map embed placeholder ───────────────────────────────────── */
const MapPlaceholder = () => (
  <div className="w-full h-72 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center relative">
    {/* subtle grid pattern */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: 'linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    />
    <div className="relative flex flex-col items-center gap-2 text-gray-400">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1685264524863!2d77.2392621!3d28.624710800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2c7aaaaaaab%3A0x401d9ece6ba8b91c!2sArchaeological%20Survey%20of%20India%2C%20Dharohar%20Bhawan!5e0!3m2!1sen!2sin!4v1789549817272!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Archaeological Survey of India - Dharohar Bhawan Map"
        className="w-full max-w-[600px] rounded-lg"
      />
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════ */
/*  MAIN PAGE                                                      */
/* ═══════════════════════════════════════════════════════════════ */

const Contact = () => (
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
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          Ask A  <span className="text-[#F5A973]">Librarian</span>
        </h1>


        {/* quick stat chips */}
        <div className="flex flex-wrap gap-4 mt-8">
          {[
            { icon: '⏱️', text: 'calmembership2026@gmail.com' },
            { icon: '📍', text: 'Dharohar Bhawan, 24, Tilak Marg' },
            { icon: '📞', text: '011 2307 5357' },
          ].map((c) => (
            <span key={c.text} className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-gray-300 text-[12px] px-3 py-1.5 rounded-full">
              <span>{c.icon}</span>{c.text}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* ── Main content ── */}
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-14">

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
            {/* Social */}
            <div className="bg-[#0F2044] rounded-2xl p-5 mt-5">
              <h3 className="text-[14px] font-bold text-white mb-3">Follow Us</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { name: 'Facebook', href: 'https://www.facebook.com/IndianHeritage.GoI/', bg: '#1877f2', icon: 'f' },
                  { name: 'Twitter', href: 'https://twitter.com/ASIGoI', bg: '#1da1f2', icon: '𝕏' },
                  { name: 'YouTube', href: 'https://www.youtube.com/@ASI_GOI', bg: '#ff0000', icon: '▶' },
                  { name: 'Instagram', href: 'https://instagram.com/asi.goi?igshid=NjIwNzIyMDk2Mg==', bg: '#e1306c', icon: '📸' },
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
                Dharohar Bhawan, 24, Tilak Marg,<br />
                New Delhi, 110001 INDIA
              </p>
            </div>

            {/* Quick links */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-[14px] font-bold text-gray-700 mb-3">Quick Links</h3>
              <div className="space-y-1.5">
                {[
                  { label: 'Library Membership', to: libassets.Form, external: true },
                  { label: 'About the Library', to: '/library/about' },
                  { label: 'Gallery', to: '/library/gallery' },
                  { label: 'Library Feedback Form', to: '#' },
                ].map((l) => {
                  const cls =
                    'flex items-center justify-between px-3 py-2 rounded-lg text-[12px] text-gray-500 hover:bg-orange-50 hover:text-[#E2691E] transition-colors';
                  const arrow = (
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  );

                  return l.external ? (
                    <a
                      key={l.label}
                      href={l.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cls}
                    >
                      {l.label}
                      {arrow}
                    </a>
                  ) : (
                    <Link key={l.label} to={l.to} className={cls}>
                      {l.label}
                      {arrow}
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    {/* ── Bottom CTA ── */}
    {/* <div
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
          The library is open Monday to Friday. Walk in for reference services, manuscript access,
          or to speak with our cal team directly.
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
    </div> */}

  </div>
);

export default Contact;
