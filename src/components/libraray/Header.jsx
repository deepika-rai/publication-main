import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { libassets } from "../../assets/libraryassets";
const baseURL = import.meta.env.VITE_BACKEND_URL;

/* ─── Top-strip links ─────────────────────────────────────────── */
const topLinks = [
  { label: 'Sitemap', href: '#' },
  { label: "What's New", href: '/library/whats-new', highlight: true },
  { label: 'Login', href: '#' },
];

/* ─── Mega-menu data ──────────────────────────────────────────── */
const navItems = [
  { label: 'HOME', href: '/libraryhome' },
  {
    label: 'ABOUT US',
    simple: true,
    columns: [
      { links: [
        { label: 'About Library', href: '/library/about?tab=about' },
        { label: 'Vision & Mission', href: '/library/about?tab=vision' },
        { label: 'Who is Who', href: '/library/about?tab=staff' },
        { label: 'Collections', href: '/library/about?tab=collection' },
      ], },
      { links: [{ label: 'FAQs', href: '/library/faq' }, { label: 'Testimonials', href: '/library/testimonials' }, 'Library Feedback Form'] },
    ],
  },

  // {
  //   label: "ABOUT THE ASI",
  //   tabs: [
  //     {
  //       id: 'uabout',
  //       label: 'About Us',
  //       links: [
  //         { label: 'Vision & Mission', href: '#' },
  //         { label: 'History', href: '#' },
  //         { label: 'Legacy', href: '#' },
  //       ],

  //     },
  //     {
  //       id: 'ulead',
  //       label: 'Leadership',
  //       links: [
  //         { label: 'Director General Message', href: '/library/dg-message' },
  //         { label: 'Joint Director Message', href: '/library/director-message' },
  //       ],
  //     },
  //     {
  //       id: 'ugov',
  //       label: 'Governance',
  //       links: ['Administrative Boards', 'Board of Management', 'Library Committee'],
  //     },
  //   ],
  // },


  // {
  //   label: 'BOOK COLLECTIONS',
  //   tabs: [
  //     {
  //       id: 'featured',
  //       label: 'Featured Books',
  //       links: [
  //         'New Arrivals',
  //         'Bestselling Books',
  //         'Editor’s Picks',
  //         'Recommended Reads',
  //         'Award-Winning Books',
  //         'Special Editions',
  //       ],
  //     },
  //     {
  //       id: 'fiction',
  //       label: 'Fiction',
  //       links: [
  //         'Contemporary Fiction',
  //         'Historical Fiction',
  //         'Mystery & Thriller',
  //         'Science Fiction',
  //         'Fantasy',
  //         'Short Stories',
  //         'Literary Fiction',
  //       ],
  //     },
  //     {
  //       id: 'nonfiction',
  //       label: 'Non-Fiction',
  //       links: [
  //         'History',
  //         'Biography & Memoir',
  //         'Culture & Society',
  //         'Science & Technology',
  //         'Philosophy',
  //         'Travel & Exploration',
  //         'Essays & Criticism',
  //       ],
  //     },
  //     {
  //       id: 'academic',
  //       label: 'Academic & Research',
  //       links: [
  //         'Research Publications',
  //         'Academic Monographs',
  //         'Reference Books',
  //         'Research Methodology',
  //         'Journals & Periodicals',
  //         'Conference Proceedings',
  //         'Study Guides',
  //       ],
  //     },
  //     {
  //       id: 'authors',
  //       label: 'Authors & Scholars',
  //       links: [
  //         'Featured Authors',
  //         'New Authors',
  //         'Authors by Subject',
  //         'Author Profiles',
  //         'Interviews & Conversations',
  //         'Scholar Publications',
  //       ],
  //     },
  //     {
  //       id: 'series',
  //       label: 'Book Series',
  //       links: [
  //         'ASI Classics',
  //         'Heritage & History Series',
  //         'Indian Knowledge Series',
  //         'Modern Thought Series',
  //         'Young Readers Collection',
  //         'Illustrated Editions',
  //       ],
  //     },
  //     {
  //       id: 'resources',
  //       label: 'Reader Resources',
  //       links: [
  //         'Reading Lists',
  //         'Book Reviews',
  //         'Reading Guides',
  //         'Free Downloads',
  //         'Sample Chapters',
  //         'Frequently Asked Questions',
  //         'Publication Catalog',
  //       ],
  //     },
  //   ],
  // },




  {
    label: 'REGISTER FOR MEMBERSHIP',
    simple: true,
    columns: [
      { links: [{ label: 'Membership Plan', href: '/library/membership-plan' }, { label: 'Membership Form', href: `${import.meta.env.BASE_URL}docs/form.pdf`, target: '_blank' }] },
    ],
  },

  // {
  //   label: "STUDENT'S CORNER",
  //   tabs: [
  //     {
  //       id: 'stulibservices',
  //       label: 'Library Services',
  //       links: [
  //         'Library Membership',
  //         'Library Timings',
  //         'Borrowing & Return Policy',
  //         'Book Renewal',
  //         'Inter-Library Loan',
  //         'Library Rules & Regulations',
  //       ],
  //     },
  //     {
  //       id: 'stulibresearch',
  //       label: 'Research Support',
  //       links: [
  //         'Research Guides',
  //         'Thesis & Dissertation Collection',
  //         'Citation & Referencing Guide',
  //         'Plagiarism & Academic Integrity',
  //         'Research Databases',
  //         'Historical & Archaeological Resources',
  //       ],
  //     },
  //     {
  //       id: 'stustudy',
  //       label: 'Student Support',
  //       links: [
  //         'New Student Library Guide',
  //         'How to Find a Book',
  //         'How to Use the Catalogue',
  //         'Library Orientation',
  //         'Ask a Librarian',
  //         'Frequently Asked Questions',
  //       ],
  //     },
  //     {
  //       id: 'studigital',
  //       label: 'Digital Resources',
  //       links: [
  //         'ASI Digital Collections',
  //         'Digitized Books & Manuscripts',
  //         'Online Archives',
  //         'Open Access Resources',
  //         'National Digital Library',
  //         'Academic E-Resources',
  //       ],
  //     },
  //   ],
  // },

  { label: 'SERVICES', href: '/library/services' },
  { label: 'LIBRARY RULES', href: '/library/rules' },
  { label: 'DOs & DONTs', href: '/library/dos-and-donts' },
  {
    label: 'DOWNLOADS',
    simple: true,
    columns: [
      {
        links: [
          { label: 'Application Form', href: `${import.meta.env.BASE_URL}docs/form.pdf`, target: '_blank' },
          { label: 'Rules & Regulations', href: `${import.meta.env.BASE_URL}docs/Libraray Rules.pdf`, target: '_blank' },
          { label: 'Documents Checklist', href: `${import.meta.env.BASE_URL}docs/Document.pdf`, target: '_blank' },
          { label: 'Reprographic Charges', href: `${import.meta.env.BASE_URL}docs/Reprographic Services.pdf`, target: '_blank' },
          { label: 'FAQ', href: `${import.meta.env.BASE_URL}docs/FAQ.pdf`, target: '_blank' },
        ],
      },
    ],
  },
  { label: 'GALLERY', href: '/library/gallery' },
  { label: 'EVENTS & ACTIVITIES', href: '/library/events-and-activities' },
  { label: 'QUICK LINKS', href: '/library/quick-links' },
  { label: 'ASK A LIBRARIAN', href: '/library/contact' },
  // { label: 'BLOGS', href: '/library/blogs' },
  // { label: 'REGISTER NOW', href: '/membership/form', flash: true },
];

/* ─── Sub-components ──────────────────────────────────────────── */



/** Tabbed mega-menu panel */
const TabbedMegaMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex gap-0 min-w-[680px]">
      {/* Tab list */}
      <div className="w-52 shrink-0 border-r border-gray-200 bg-gray-50">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onMouseEnter={() => setActiveTab(i)}
            onClick={() => setActiveTab(i)}
            className={`w-full text-left px-4 py-2.5 text-[13px] font-medium transition-colors border-b border-gray-100 last:border-b-0
              ${activeTab === i
                ? 'bg-[#0F2044] text-white'
                : 'text-gray-700 hover:bg-orange-50 hover:text-[#E2691E]'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="flex-1 p-4 max-h-80 overflow-y-auto">
        {tabs[activeTab] && (
          <ul className="space-y-1">
            {tabs[activeTab].links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block text-[13px] text-gray-700 hover:text-[#E2691E] hover:underline py-0.5 border-b border-gray-50 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

/** Simple columns mega-menu panel */
const SimpleMegaMenu = ({ columns }) => (
  <div className="flex gap-6 min-w-[320px] p-4">
    {columns.map((col, i) => (
      <ul key={i} className="space-y-1 min-w-[160px]">
        {col.links.map((link) => {
          const label = typeof link === 'string' ? link : link.label;
          const href = typeof link === 'string' ? null : link.href;
          const target = typeof link === 'string' ? null : link.target;
          return (
            <li key={label}>
              {href ? (
                target === '_blank' ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[13px] text-gray-700 hover:text-[#E2691E] hover:underline py-0.5 transition-colors"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    to={href}
                    className="block text-[13px] text-gray-700 hover:text-[#E2691E] hover:underline py-0.5 transition-colors"
                  >
                    {label}
                  </Link>
                )
              ) : (
                <a
                  href="#"
                  className="block text-[13px] text-gray-700 hover:text-[#E2691E] hover:underline py-0.5 transition-colors"
                >
                  {label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    ))}
  </div>
);

/* ─── Main Header ─────────────────────────────────────────────── */
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openNav, setOpenNav] = useState(null);   // which nav item's dropdown is open
  const [sticky, setSticky] = useState(false);
  const timeoutRef = useRef(null);

  /* sticky on scroll */
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 170);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* hover helpers */
  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setOpenNav(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenNav(null), 150);
  };

  return (
    <header
      className={`w-full z-50 font-[Poppins,sans-serif]
        ${sticky ? 'fixed top-0 shadow-lg' : 'relative'}`}
    >
      {/* ── TOP STRIP ── */}
      <div className="hidden md:block bg-white border-b border-gray-200">
        <div className="max-w-[1500px] mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="py-2">
            <a href="/libraryhome" className="block">
              <img
                src={libassets.asilogo}
                alt="ASI LIBRARY Logo"
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{ display: 'none' }} className="text-[#E2691E] font-bold text-lg">
                ASI LIBRARY
              </span>
            </a>
          </div>

          {/* Top-strip links */}
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-gray-600 py-1">
            {topLinks.map((l) => (
              <li key={l.label} className="border-r border-gray-300 last:border-r-0 pr-3 last:pr-0">
                <Link
                  to={l.href}
                  className={`hover:text-[#E2691E] transition-colors whitespace-nowrap
                    ${l.highlight ? 'text-[#E2691E] font-semibold' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav
        className="bg-[#0F2044] backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(15,32,68,0.97)' }}
      >
        <div className="max-w-[1500px] mx-auto px-4 flex items-center justify-between">

          {/* Mobile logo */}
          <div className="md:hidden py-2">
            <a href="/libraryhome">
              <img
                src="/assets/lib/images/name325x76.png"
                alt="ASI Libraray"
                className="h-10 w-auto"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </a>
          </div>

          {/* Desktop nav links */}
          <ul className="hidden md:flex flex-wrap items-stretch text-[12.5px] font-semibold tracking-wide">
            {navItems.map((item) => {
              const hasDropdown = item.tabs || item.simple;

              return (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => hasDropdown && handleMouseEnter(item.label)}
                  onMouseLeave={() => hasDropdown && handleMouseLeave()}
                >
                  {item.href ? (
                    <Link
                      to={item.href}
                      className={`flex items-center h-full px-3 py-3 text-white hover:bg-white/20 transition-colors whitespace-nowrap
                        ${item.flash ? 'bg-white/25 border border-white/60 rounded-sm mx-1' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className="flex items-center h-full px-3 py-3 text-white hover:bg-white/20 transition-colors whitespace-nowrap cursor-default"
                      aria-haspopup="true"
                      aria-expanded={openNav === item.label}
                    >
                      {item.label}
                      {hasDropdown && (
                        <svg className="ml-1 w-3 h-3 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  )}

                  {/* Dropdown panel */}
                  {hasDropdown && openNav === item.label && (
                    <div
                      className="absolute top-full left-0 z-50 bg-white shadow-2xl border border-gray-100 rounded-b"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.tabs
                        ? <TabbedMegaMenu tabs={item.tabs} />
                        : <SimpleMegaMenu columns={item.columns} />
                      }
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            <MobileMenu items={navItems} onClose={() => setMobileOpen(false)} />
          </div>
        )}
      </nav>
    </header>
  );
};

/* ─── Mobile accordion menu ───────────────────────────────────── */
const MobileMenu = ({ items, onClose }) => {
  const [open, setOpen] = useState(null);
  const [openTab, setOpenTab] = useState({});

  const toggle = (label) => setOpen(open === label ? null : label);
  const toggleTab = (key) => setOpenTab((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <ul>
      {items.map((item) => {
        const hasDropdown = item.tabs || item.simple;

        return (
          <li key={item.label} className="border-b border-gray-100">
            {item.href ? (
              <Link
                to={item.href}
                onClick={onClose}
                className="block px-4 py-3 text-sm font-semibold text-gray-800 hover:text-[#E2691E]"
              >
                {item.label}
              </Link>
            ) : (
              <>
                <button
                  onClick={() => toggle(item.label)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-800 hover:text-[#E2691E]"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${open === item.label ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {open === item.label && (
                  <div className="bg-gray-50 px-4 pb-3">
                    {/* Tabbed */}
                    {item.tabs && item.tabs.map((tab) => (
                      <div key={tab.id}>
                        <button
                          onClick={() => toggleTab(tab.id)}
                          className="flex items-center justify-between w-full py-2 text-xs font-semibold text-[#E2691E] uppercase tracking-wide border-b border-gray-200"
                        >
                          {tab.label}
                          <svg
                            className={`w-3 h-3 transition-transform ${openTab[tab.id] ? 'rotate-180' : ''}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openTab[tab.id] && (
                          <ul className="pl-3 py-1 space-y-1">
                            {tab.links.map((link) => (
                              <li key={link}>
                                <a href="#" className="block text-[12px] text-gray-600 hover:text-[#E2691E] py-0.5">{link}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* Simple columns */}
                    {item.simple && item.columns && item.columns.map((col, ci) => (
                      <ul key={ci} className="py-1 space-y-1">
                        {col.links.map((link) => {
                          const label = typeof link === 'string' ? link : link.label;
                          const href = typeof link === 'string' ? null : link.href;
                          const target = typeof link === 'string' ? null : link.target;
                          return (
                            <li key={label}>
                              {href ? (
                                target === '_blank' ? (
                                  <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={onClose}
                                    className="block text-[12px] text-gray-600 hover:text-[#E2691E] py-0.5"
                                  >
                                    {label}
                                  </a>
                                ) : (
                                  <Link
                                    to={href}
                                    className="block text-[12px] text-gray-600 hover:text-[#E2691E] py-0.5"
                                  >
                                    {label}
                                  </Link>
                                )
                              ) : (
                                <a href="#" className="block text-[12px] text-gray-600 hover:text-[#E2691E] py-0.5">{label}</a>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    ))}
                  </div>
                )}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Header;
