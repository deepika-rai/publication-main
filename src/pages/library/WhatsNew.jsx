import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── Data ──────────────────────────────────────────────────────
   cat: 'Notice' | 'Circular' 'Event'
   link: optional (PDF / detail page). Replace with your API data.
──────────────────────────────────────────────────────────────── */
const whatsNew = [
  { date: '2026-07-30', cat: 'Notice', text: 'ASI, Bhubaneswar Circle has organised a Tiranga Rangoli at Rajarani Temple as a part of Har Ghar Tiranga.', link: '#' },
  { date: '2026-07-28', cat: 'Notice', text: 'Tricolour Illumination at Ruined Fort Nurpur during Har Ghar Tiranga 2026.', link: '#' },
  { date: '2026-07-22', cat: 'Circular', text: 'Revised guidelines for submission of annual conservation reports by all Circles.', link: '#' },
  { date: '2026-07-17', cat: 'Event', text: 'BRICS Culture Working Group Meeting, dated 5th August 2026.', link: '#' },
  { date: '2026-07-15', cat: 'Notice', text: "The Ancient Buddhist Site of Sarnath in Uttar Pradesh was officially inscribed as India's 45th UNESCO World Heritage Site.", link: '#' },
  { date: '2026-07-10', cat: 'Circular', text: 'Instructions regarding digitisation of library catalogues and accession registers.', link: '#' },
];

const CATEGORIES = ['All', 'Notice', 'Circular', 'Event'];
const PAGE_SIZE = 6;

const CAT_STYLE = {
  Notice: 'bg-orange-50 text-[#E2691E] border-red-200',
  Circular: 'bg-blue-50 text-blue-800 border-blue-200',
  Event: 'bg-emerald-50 text-emerald-800 border-emerald-200',
};

const formatDate = (iso) => {
  const d = new Date(iso + 'T00:00:00');
  return {
    day: String(d.getDate()).padStart(2, '0'),
    month: d.toLocaleString('en-IN', { month: 'short' }),
    year: d.getFullYear(),
  };
};

/* Build page list with ellipses: 1 … 4 5 6 … 12 */
const getPages = (current, total) => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push('…');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push('…');
  pages.push(total);
  return pages;
};

/* ─── List item ─────────────────────────────────────────────── */
const NewsRow = ({ item }) => {
  const { day, month, year } = formatDate(item.date);
  return (
    <li className="flex gap-4 p-4 sm:p-5 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
      <div className="shrink-0 w-16 text-center rounded border border-gray-200 bg-white py-2">
        <span className="block text-2xl font-bold text-[#E2691E] leading-none">{day}</span>
        <span className="block text-xs font-medium text-gray-600 mt-1">{month}</span>
        <span className="block text-[11px] text-gray-400">{year}</span>
      </div>

      <div className="flex-1 min-w-0">
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded border ${CAT_STYLE[item.cat]}`}>
          {item.cat}
        </span>
        <p className="mt-1.5 text-sm text-gray-800 leading-relaxed max-w-[70ch]">{item.text}</p>
      </div>

      {item.link && (
        <a
          href={item.link}
          className="self-center shrink-0 text-sm font-medium text-[#E2691E] border border-[#E2691E] px-3 py-1.5 rounded hover:bg-[#E2691E] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2691E] transition-colors"
          aria-label={`View details: ${item.text.slice(0, 60)}`}
        >
          View
        </a>
      )}
    </li>
  );
};

/* ─── Pagination ────────────────────────────────────────────── */
const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  const btn =
    'min-w-9 h-9 px-3 text-sm rounded border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2691E]';

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-1.5 pt-6">
      <button
        className={`${btn} border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent`}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>

      {getPages(page, totalPages).map((p, i) =>
        p === '…' ? (
          <span key={`gap-${i}`} className="px-1 text-gray-400" aria-hidden="true">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p)}
            aria-current={p === page ? 'page' : undefined}
            className={`${btn} ${
              p === page
                ? 'bg-[#E2691E] border-[#E2691E] text-white font-semibold'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        className={`${btn} border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent`}
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </nav>
  );
};

/* ─── Main Page ─────────────────────────────────────────────── */
const WhatsNew = () => {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const listTop = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...whatsNew]
      .sort((a, b) => b.date.localeCompare(a.date)) // newest first
      .filter((n) => category === 'All' || n.cat === category)
      .filter((n) => !q || n.text.toLowerCase().includes(q));
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const from = filtered.length ? (current - 1) * PAGE_SIZE + 1 : 0;
  const to = Math.min(current * PAGE_SIZE, filtered.length);

  const goToPage = (p) => {
    setPage(p);
    listTop.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const changeCategory = (c) => {
    setCategory(c);
    setPage(1);
  };

  const countFor = (c) => (c === 'All' ? whatsNew.length : whatsNew.filter((n) => n.cat === c).length);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* ── Page Banner ── */}
      {/* <div
        className="relative bg-[#0F2044] py-16 overflow-hidden"
        style={{ backgroundImage: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)' }}
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/5" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-[#E2691E]/10" />

        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-5">
            <Link to="/libraryhome" className="hover:text-[#F5A973] transition-colors">Home</Link>
            <span>/</span>
            <span>Library</span>
            <span>/</span>
            <span className="text-white">What's New</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Library What's New
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Notices, circulars, tenders and events from the library.
          </p>
        </div>
      </div> */}

      {/* ── List ── */}
      <div className="max-w-5xl mx-auto px-4 py-12" ref={listTop} style={{ scrollMarginTop: '1rem' }}>
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
          <div role="tablist" aria-label="Filter by type" className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  onClick={() => changeCategory(c)}
                  className={`text-sm px-4 py-1.5 rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2691E] ${
                    active
                      ? 'bg-[#E2691E] border-[#E2691E] text-white font-medium'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-[#E2691E] hover:text-[#E2691E]'
                  }`}
                >
                  {c}
                  <span className={`ml-1.5 text-xs ${active ? 'text-white/80' : 'text-gray-400'}`}>
                    {countFor(c)}
                  </span>
                </button>
              );
            })}
          </div>

          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search updates"
            aria-label="Search updates"
            className="w-full md:w-64 text-sm border border-gray-300 rounded px-3 py-2 focus:outline focus:outline-2 focus:outline-[#E2691E] focus:border-transparent"
          />
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-center justify-between bg-[#E2691E] text-white px-5 py-3">
            <h2 className="font-semibold text-sm">{category === 'All' ? 'All updates' : `${category}s`}</h2>
            <span className="text-xs text-white/80" aria-live="polite">
              {filtered.length ? `Showing ${from}–${to} of ${filtered.length}` : 'No results'}
            </span>
          </div>

          {visible.length ? (
            <ul>
              {visible.map((item, i) => (
                <NewsRow key={`${item.date}-${i}`} item={item} />
              ))}
            </ul>
          ) : (
            <div className="py-16 text-center px-4">
              <p className="text-gray-800 font-medium">No updates found</p>
              <p className="text-sm text-gray-500 mt-1">Try another type or clear your search.</p>
              <button
                onClick={() => {
                  setQuery('');
                  changeCategory('All');
                }}
                className="mt-4 text-sm bg-[#E2691E] text-white px-4 py-1.5 rounded hover:bg-[#B8581E] transition-colors"
              >
                Show all updates
              </button>
            </div>
          )}
        </div>

        <Pagination page={current} totalPages={totalPages} onChange={goToPage} />
      </div>
    </div>
  );
};

export default WhatsNew;