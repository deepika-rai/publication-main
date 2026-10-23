import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const baseURL = import.meta.env.VITE_BACKEND_URL;

/* ─── Shared helpers ──────────────────────────────────────────── */
const StarRating = ({ rating = 4 }) => (
  <div className="flex items-center gap-0.5">
    {Array(5).fill('').map((_, i) => (
      <img
        key={i}
        className="w-3"
        src={i < rating ? assets.star_icon : assets.star_dull_icon}
        alt=""
      />
    ))}
  </div>
);

/* ─── Book card (paid) ────────────────────────────────────────── */
const PaidBookCard = ({ book }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  return (
    <div
      onClick={() => { navigate(`/books/${book.id}`); window.scrollTo(0, 0); }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* cover */}
      <div className="relative h-52 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={book.image[0]}
          alt={book.name}
          className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="bg-white/90 text-[#E2691E] text-[11px] font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow">
            View Details
          </span>
        </div>
        {/* paid badge */}
        <span className="absolute top-2 left-2 bg-[#0F2044] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
          Buy
        </span>
      </div>

      {/* body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-[13px] leading-snug mb-2 line-clamp-2 flex-1">
          {book.name}
        </h3>
        <StarRating />
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-extrabold text-[#E2691E]">{currency}{book.offerPrice}</span>
            {book.price !== book.offerPrice && (
              <span className="text-[11px] text-gray-400 line-through">{currency}{book.price}</span>
            )}
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            {!cartItems[book._id] ? (
              <button
                onClick={() => addToCart(book.id)}
                className="flex items-center gap-1 bg-[#E2691E] hover:bg-[#8b0000] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full transition-colors"
              >
                <img src={assets.cart_icon} alt="" className="w-3 filter brightness-0 invert" />
                Add
              </button>
            ) : (
              <div className="flex items-center gap-1 bg-[#E2691E] text-white rounded-full px-2 py-1">
                <button onClick={() => removeFromCart(book.id)} className="w-5 h-5 flex items-center justify-center hover:bg-black/10 rounded-full font-bold">−</button>
                <span className="text-[12px] font-bold w-4 text-center">{cartItems[book.id]}</span>
                <button onClick={() => addToCart(book.id)} className="w-5 h-5 flex items-center justify-center hover:bg-black/10 rounded-full font-bold">+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Book card (free) ────────────────────────────────────────── */
const FreeBookCard = ({ book }) => {
  const { navigate } = useAppContext();

  return (
    <div
      onClick={() => { navigate(`/book-reader/${book.id}`); window.scrollTo(0, 0); }}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* cover */}
      <div className="relative h-52 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={book.image[0]}
          alt={book.name}
          className="h-full w-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <span className="bg-white/90 text-[#E2691E] text-[11px] font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow">
            Read Free
          </span>
        </div>
        <span className="absolute top-2 left-2 bg-green-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
          Free
        </span>
      </div>

      {/* body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-[13px] leading-snug mb-2 flex-1 line-clamp-2">
          {book.name}
        </h3>
        <StarRating />
        <div className="mt-3">
          <span className="inline-block bg-green-50 text-green-700 text-[11px] font-bold px-3 py-1 rounded-full">
            Free to Read
          </span>
        </div>
      </div>
    </div>
  );
};

/* ─── Category pill ───────────────────────────────────────────── */
const CategoryPill = ({ cat, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-semibold whitespace-nowrap border transition-all duration-200
      ${active
        ? 'bg-[#E2691E] text-white border-[#E2691E] shadow-md shadow-red-200'
        : 'bg-white text-gray-600 border-gray-200 hover:border-[#E2691E] hover:text-[#E2691E]'
      }`}
  >
    {cat.catImage && (
      <img src={cat.catImage} alt="" className="w-5 h-5 object-contain shrink-0" />
    )}
    {cat.catName}
  </button>
);

/* ─── Section heading ─────────────────────────────────────────── */
const SectionHeading = ({ label, title, count }) => (
  <div className="flex items-center justify-between mb-6">
    <div>
      <span className="text-[#E2691E] text-[10px] font-bold uppercase tracking-widest block mb-1">
        {label}
      </span>
      <h2 className="text-[20px] font-bold text-gray-800">{title}</h2>
    </div>
    {count != null && (
      <span className="text-[12px] text-gray-400 font-medium">{count} books</span>
    )}
  </div>
);

/* ─── Skeleton card ───────────────────────────────────────────── */
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
    <div className="h-52 bg-gray-100" />
    <div className="p-4 space-y-2">
      <div className="h-3 bg-gray-100 rounded w-3/4" />
      <div className="h-3 bg-gray-100 rounded w-1/2" />
      <div className="h-3 bg-gray-100 rounded w-1/3 mt-2" />
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════ */
/*  MAIN PAGE                                                      */
/* ═══════════════════════════════════════════════════════════════ */

const LibraryBooks = () => {
  const { homeBooks, bookCategory, navigate } = useAppContext();

  const allBooks      = homeBooks?.books || [];
  const featuredBooks = homeBooks?.featuredBooks || allBooks.slice(0, 8);
  const freeBooks     = allBooks.filter((b) => b.isPaid === false);
  const paidBooks     = allBooks.filter((b) => b.isPaid === true);

  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [sortBy, setSortBy] = useState('default');

  const isLoading = allBooks.length === 0;

  /* filtered + sorted books */
  const filteredBooks = useMemo(() => {
    let list = [...allBooks];

    if (activeCategory !== 'all') {
      list = list.filter((b) => String(b.category) === String(activeCategory));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((b) => b.name?.toLowerCase().includes(q));
    }

    if (sortBy === 'price-asc')  list.sort((a, b) => a.offerPrice - b.offerPrice);
    if (sortBy === 'price-desc') list.sort((a, b) => b.offerPrice - a.offerPrice);
    if (sortBy === 'name')       list.sort((a, b) => a.name?.localeCompare(b.name));
    if (sortBy === 'free-first') list.sort((a) => (a.isPaid === false ? -1 : 1));

    return list;
  }, [allBooks, activeCategory, search, sortBy]);

  return (
    <div className="font-[Poppins,sans-serif]" style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* ── Page Banner ── */}
      <div
        className="relative overflow-hidden py-14"
        style={{ background: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)' }}
      >
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/[0.05] pointer-events-none" />
        <div className="absolute top-8 -left-12 w-48 h-48 rounded-full border border-[#E2691E]/10 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4">
          {/* breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-gray-500 mb-4">
            <Link to="/libraryhome" className="hover:text-[#F5A973] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Library</span>
            <span>/</span>
            <span className="text-white">Books</span>
          </nav>

          <span className="inline-block bg-[#E2691E]/20 text-[#F5A973] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            ASI Library
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Explore Our <span className="text-[#F5A973]">Books</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
            Browse our curated collection of academic books, research publications, rare manuscripts and free digital resources.
          </p>

          {/* stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { label: 'Total Books',  value: allBooks.length  || '—' },
              { label: 'Free to Read', value: freeBooks.length || '—' },
              { label: 'Categories',   value: bookCategory.length || '—' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-white">{s.value}</span>
                <span className="text-[11px] text-gray-500 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sticky filter bar ── */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 items-center justify-between">

          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto pb-0.5 flex-1 min-w-0 hide-scrollbar">
            <CategoryPill
              cat={{ catName: 'All Books', catImage: null }}
              active={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            />
            {bookCategory.map((cat) => (
              <CategoryPill
                key={cat.id}
                cat={cat}
                active={String(activeCategory) === String(cat.id)}
                onClick={() => setActiveCategory(String(cat.id))}
              />
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search books…"
                className="pl-8 pr-3 py-1.5 border border-gray-200 rounded-full text-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E2691E]/25 focus:border-[#E2691E] bg-gray-50 w-40 transition"
              />
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-full text-[12px] text-gray-600 px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#E2691E]/20"
            >
              <option value="default">Sort: Default</option>
              <option value="name">Name A–Z</option>
              <option value="price-asc">Price: Low–High</option>
              <option value="price-desc">Price: High–Low</option>
              <option value="free-first">Free First</option>
            </select>

            {/* View toggle */}
            <div className="flex border border-gray-200 rounded-full overflow-hidden">
              {['grid', 'list'].map((m) => (
                <button
                  key={m}
                  onClick={() => setViewMode(m)}
                  className={`px-2.5 py-1.5 transition-colors ${viewMode === m ? 'bg-[#E2691E] text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                  title={m === 'grid' ? 'Grid view' : 'List view'}
                >
                  {m === 'grid' ? (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3A1.5 1.5 0 0115 10.5v3A1.5 1.5 0 0113.5 15h-3A1.5 1.5 0 019 13.5v-3z"/>
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="bg-gray-50 min-h-[60vh]">
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-14">

          {/* ── Category browsing (shown when no filter active) ── */}
          {activeCategory === 'all' && !search && bookCategory.length > 0 && (
            <section>
              <SectionHeading label="Browse by" title="Categories" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                {bookCategory.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => { setActiveCategory(String(cat.id)); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center cursor-pointer hover:shadow-md hover:border-[#E2691E]/20 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center mb-3 overflow-hidden group-hover:bg-red-100 transition-colors">
                      <img
                        src={cat.catImage}
                        alt={cat.catName}
                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-[12px] font-semibold text-gray-700 text-center group-hover:text-[#E2691E] transition-colors">
                      {cat.catName}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Top Selling / filtered results ── */}
          {activeCategory === 'all' && !search ? (
            <>
              {/* Top Selling */}
              <section>
                <SectionHeading label="Most Popular" title="Top Selling" count={paidBooks.length} />
                {isLoading ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {Array(10).fill('').map((_, i) => <SkeletonCard key={i} />)}
                  </div>
                ) : paidBooks.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {paidBooks.map((book) => (
                      <PaidBookCard key={book.id} book={book} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm text-center py-8">No books available yet.</p>
                )}
              </section>

              {/* Free to Read */}
              {freeBooks.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1">
                      <span className="text-green-600 text-[10px] font-bold uppercase tracking-widest block mb-1">Free Access</span>
                      <h2 className="text-[20px] font-bold text-gray-800">Free to Read</h2>
                    </div>
                    <span className="text-[12px] text-gray-400 font-medium">{freeBooks.length} books</span>
                  </div>
                  {/* decorative divider */}
                  <div className="bg-gradient-to-r from-green-50 via-white to-green-50 border border-green-100 rounded-2xl p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                      {freeBooks.map((book) => (
                        <FreeBookCard key={book.id} book={book} />
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </>
          ) : (
            /* ── Filtered results ── */
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[#E2691E] text-[10px] font-bold uppercase tracking-widest block mb-1">
                    {search ? 'Search results' : 'Category'}
                  </span>
                  <h2 className="text-[20px] font-bold text-gray-800">
                    {search
                      ? `"${search}"`
                      : bookCategory.find((c) => String(c.id) === activeCategory)?.catName || 'Books'}
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] text-gray-400 font-medium">{filteredBooks.length} results</span>
                  <button
                    onClick={() => { setActiveCategory('all'); setSearch(''); setSortBy('default'); }}
                    className="text-[12px] text-[#E2691E] font-semibold hover:underline flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Clear
                  </button>
                </div>
              </div>

              {filteredBooks.length === 0 ? (
                <div className="flex flex-col items-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-3xl mb-4">📚</div>
                  <p className="text-gray-500 font-semibold">No books found.</p>
                  <button
                    onClick={() => { setActiveCategory('all'); setSearch(''); }}
                    className="mt-3 text-[#E2691E] text-[13px] font-semibold hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {filteredBooks.map((book) =>
                    book.isPaid === false
                      ? <FreeBookCard key={book.id} book={book} />
                      : <PaidBookCard key={book.id} book={book} />
                  )}
                </div>
              ) : (
                /* list view */
                <div className="space-y-3">
                  {filteredBooks.map((book) => (
                    <div
                      key={book.id}
                      onClick={() => {
                        book.isPaid === false
                          ? navigate(`/book-reader/${book.id}`)
                          : navigate(`/books/${book.id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="group bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 cursor-pointer hover:shadow-md hover:border-[#E2691E]/20 transition-all duration-200"
                    >
                      <img
                        src={book.image[0]}
                        alt={book.name}
                        className="w-14 h-18 object-contain shrink-0 rounded-lg bg-gray-50 p-1 group-hover:scale-105 transition-transform"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 text-[14px] leading-snug truncate">{book.name}</h3>
                        <StarRating />
                      </div>
                      <div className="shrink-0 text-right">
                        {book.isPaid === false ? (
                          <span className="bg-green-50 text-green-700 text-[11px] font-bold px-3 py-1 rounded-full">Free</span>
                        ) : (
                          <span className="text-[15px] font-extrabold text-[#E2691E]">
                            {import.meta.env.VITE_CURRENCY}{book.offerPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* ── Why Choose Us ── */}
          {activeCategory === 'all' && !search && (
            <section>
              <SectionHeading label="Our Promise" title="Why Choose ASI Library?" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  { icon: '📜', title: 'Heritage Collection',    desc: 'Over 1,80,000 volumes including rare manuscripts, maps, and audio-visual archives spanning 200+ years.' },
                  { icon: '💻', title: 'Digital Access',         desc: 'Read free books online, access e-journals via INFLIBNET, and explore the VIRASAT digital library.' },
                  { icon: '🔬', title: 'Research Support',       desc: 'Dedicated research assistance, plagiarism detection, and inter-library loan services for scholars.' },
                  { icon: '♿', title: 'Inclusive Services',      desc: 'Free e-resources for differently abled students and assistive technology support.' },
                ].map((f) => (
                  <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md hover:border-[#E2691E]/20 hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-2xl mb-3 shrink-0">
                      {f.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 text-[13px] mb-1.5">{f.title}</h4>
                    <p className="text-gray-500 text-[12px] leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── CTA strip ── */}
          <div
            className="relative rounded-2xl overflow-hidden p-8 text-center"
            style={{ background: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)' }}
          >
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <div className="relative">
              <h3 className="text-white font-bold text-[18px] mb-2">Want unlimited access?</h3>
              <p className="text-gray-400 text-[13px] mb-5 max-w-sm mx-auto">
                Get a library membership and unlock all resources, reading rooms, and research support.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  to="#"
                  className="bg-[#E2691E] hover:bg-[#8b0000] text-white font-bold text-[13px] px-6 py-2.5 rounded-xl transition-colors shadow-lg shadow-red-900/30"
                >
                  View Membership Plans
                </Link>
                <Link
                  to="/library/contact"
                  className="border border-white/30 text-white hover:bg-white/10 font-semibold text-[13px] px-6 py-2.5 rounded-xl transition-colors"
                >
                  Contact Library
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default LibraryBooks;
