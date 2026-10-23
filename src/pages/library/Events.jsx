import { useState, useMemo, useEffect, useCallback } from 'react';

/* ─── Data ───────────────────────────────────────────────────── */
const GALLERY_OPTIONS = [
  'All',
  'Library',
  'Archaeology',
  'Sanskrit and Lexicography',
  'Maratha History Museum',
];

/**
 * Generate N placeholder images for an event using picsum.
 * In production swap src values with real image URLs.
 */
const makePlaceholders = (count, seed = 1) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    src: `https://picsum.photos/seed/${seed + i}/600/400`,
    thumb: `https://picsum.photos/seed/${seed + i}/300/200`,
  }));

const EVENTS = [
  {
    id: 1,
    category: 'Archaeology',
    title: 'Welcome of PM',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys tandard dummy text ever since 1966',
    date: '09 May, 2026',
    images: makePlaceholders(6, 5),
  },
  {
    id: 2,
    category: 'Archaeology',
    title: 'Inaugural — Art Circle',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys tandard dummy text ever since 1966',
    date: '31 March, 2024',
    images: makePlaceholders(9, 10),
  },
  {
    id: 3,
    category: 'Library',
    title: 'Library Annual Day 2023',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys tandard dummy text ever since 1966',
    date: '12 March, 2023',
    images: makePlaceholders(6, 15),
  },

];

/* ─── Lightbox ────────────────────────────────────────────────── */
const Lightbox = ({ images, startIndex, onClose }) => {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  /* keyboard navigation */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, onClose]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      {/* top bar */}
      <div
        className="flex items-center justify-between px-5 py-3 text-white shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-sm text-gray-400 font-medium">
          {current + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* main image */}
      <div
        className="flex-1 flex items-center justify-center relative px-14 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E2691E] text-white transition-colors shrink-0"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <img
          key={current}
          src={images[current].src}
          alt={`Photo ${current + 1}`}
          className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
          style={{ animation: 'fadeIn 0.25s ease' }}
        />

        <button
          onClick={next}
          className="absolute right-2 md:right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E2691E] text-white transition-colors shrink-0"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* thumbnail strip */}
      <div
        className="flex gap-2 overflow-x-auto px-4 py-3 shrink-0 justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setCurrent(i)}
            className={`shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all ${
              i === current ? 'border-[#E2691E] scale-110' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img.thumb} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

/* ─── Image grid inside event card ───────────────────────────── */
const ImageGrid = ({ images, onOpen }) => {
  if (!images.length) return null;

  const shown = images.slice(0, 5);
  const rest = images.length - 5;

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 mt-4">
      {shown.map((img, i) => {
        const isLast = i === 4 && rest > 0;
        return (
          <button
            key={img.id}
            onClick={() => onOpen(i)}
            className="relative group rounded-lg overflow-hidden aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E2691E]"
            aria-label={`View photo ${i + 1}`}
          >
            <img
              src={img.thumb}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            {/* hover overlay */}
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              {!isLast && (
                <svg
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16zm3-8H8m3-3v6" />
                </svg>
              )}
            </span>
            {/* +N overlay on last tile */}
            {isLast && (
              <span className="absolute inset-0 bg-black/55 flex items-center justify-center text-white font-bold text-lg">
                +{rest}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

/* ─── Event card ──────────────────────────────────────────────── */
const EventCard = ({ event }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        {/* card header */}
        <div className="px-5 pt-5 pb-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <span className="inline-block bg-orange-50 text-[#E2691E] text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2">
                {event.category}
              </span>
              <h3 className="font-bold text-gray-800 text-[15px] leading-snug line-clamp-2">
                {event.title}
              </h3>
              <p className="text-gray-500 text-[13px] mt-1 leading-relaxed line-clamp-2">
                {event.description}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium whitespace-nowrap mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {event.date}
              </span>
              <span className="text-[11px] text-gray-400 mt-0.5 block">
                {event.images.length} photo{event.images.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {/* image grid */}
          <ImageGrid images={event.images} onOpen={(i) => setLightboxIndex(i)} />
        </div>

        {/* card footer */}
        {event.images.length > 5 && (
          <div className="px-5 pb-4">
            <button
              onClick={() => setLightboxIndex(0)}
              className="text-[#E2691E] text-[12px] font-semibold hover:underline flex items-center gap-1"
            >
              View all {event.images.length} photos
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </article>

      {lightboxIndex !== null && (
        <Lightbox
          images={event.images}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
};

/* ─── Category pill ───────────────────────────────────────────── */
const Pill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap transition-all duration-200
      ${active
        ? 'bg-[#E2691E] text-white shadow-md shadow-red-200'
        : 'bg-white text-gray-600 border border-gray-200 hover:border-[#E2691E] hover:text-[#E2691E]'
      }`}
  >
    {label}
  </button>
);

/* ─── Events page ────────────────────────────────────────────── */
const Events = () => {
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [eventFilter, setEventFilter] = useState('0');
  const [search, setSearch] = useState('');

  /* event dropdown — depends on category */
  const eventOptions = useMemo(
    () => EVENTS.filter((e) => galleryFilter === 'All' || e.category === galleryFilter),
    [galleryFilter]
  );

  /* visible events */
  const visibleEvents = useMemo(() => {
    let list =
      galleryFilter === 'All' ? EVENTS : EVENTS.filter((e) => e.category === galleryFilter);

    if (eventFilter !== '0') {
      list = list.filter((e) => String(e.id) === eventFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [galleryFilter, eventFilter, search]);

  const handleCategoryChange = (cat) => {
    setGalleryFilter(cat);
    setEventFilter('0');
  };

  const handleReset = () => {
    setGalleryFilter('All');
    setEventFilter('0');
    setSearch('');
  };

  const totalPhotos = visibleEvents.reduce((s, e) => s + e.images.length, 0);

  return (
    <div className="font-[Poppins,sans-serif]" style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* ── Page Banner ── */}
      <div
        className="relative overflow-hidden py-14"
        style={{ background: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)' }}
      >
        {/* decorative rings */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-10 -left-16 w-56 h-56 rounded-full border border-[#E2691E]/10 pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full border border-white/[0.03] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4">
          <span className="inline-block bg-[#E2691E]/20 text-[#F5A973] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            Photo Events
          </span>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Events &amp; <span className="text-[#F5A973]">Activities</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-lg">
            Browse photographs from ASI events, library activities, departmental programmes and more.
          </p>

      
        </div>
      </div>

      {/* ── Sticky filter bar ── */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center">

          {/* Category pills — scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-0.5 flex-1 min-w-0 scrollbar-hide">
            {GALLERY_OPTIONS.map((cat) => (
              <Pill
                key={cat}
                label={cat}
                active={galleryFilter === cat}
                onClick={() => handleCategoryChange(cat)}
              />
            ))}
          </div>

          {/* Search box */}
          <div className="relative shrink-0 w-full sm:w-52">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events…"
              className="w-full pl-8 pr-3 py-1.5 border border-gray-200 rounded-full text-[13px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E2691E]/30 focus:border-[#E2691E] bg-gray-50 transition"
            />
            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <section className="bg-gray-50 py-8 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4">

          {/* Sub-filter row: event dropdown + result count + reset */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <select
                value={eventFilter}
                onChange={(e) => setEventFilter(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-1.5 text-[13px] text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#E2691E]/30 focus:border-[#E2691E] shadow-sm transition"
              >
                <option value="0">All Events</option>
                {eventOptions.map((e) => (
                  <option key={e.id} value={String(e.id)}>{e.title}</option>
                ))}
              </select>

              <span className="text-[12px] text-gray-400 font-medium">
                {visibleEvents.length} event{visibleEvents.length !== 1 ? 's' : ''} · {totalPhotos} photos
              </span>
            </div>

            {(galleryFilter !== 'All' || eventFilter !== '0' || search) && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-500 hover:text-[#E2691E] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear filters
              </button>
            )}
          </div>

          {/* Event cards */}
          {visibleEvents.length > 0 ? (
            <div className="space-y-5">
              {visibleEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 font-medium">No events match your filters.</p>
              <button onClick={handleReset} className="mt-3 text-[#E2691E] text-sm font-semibold hover:underline">
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* fade-in keyframe injected once */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default Events;
