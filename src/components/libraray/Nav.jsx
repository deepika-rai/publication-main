/* ─── Top-strip links ─────────────────────────────────────────── */
export const topLinks = [
    { label: 'Sitemap', href: '/library/sitemap' },
    { label: "What's New", href: '/library/whats-new', highlight: true },
];

/* ─── Mega-menu data ──────────────────────────────────────────── */
export const navItems = [
    { label: 'HOME', href: '/libraryhome' },
    {
        label: 'ABOUT US',
        simple: true,
        columns: [
            {
                links: [
                    { label: 'About Library', href: '/library/about?tab=about' },
                    { label: 'Vision & Mission', href: '/library/about?tab=vision' },
                    { label: 'Who is Who', href: '/library/about?tab=staff' },
                    { label: 'Collections', href: '/library/about?tab=collection' },
                ],
            },
            { links: [{ label: 'FAQs', href: '/library/faq' }, { label: 'Testimonials', href: '/library/testimonials' }, { label: 'Library Feedback Form', href: `${import.meta.env.BASE_URL}docs/FeedbackForm.pdf`, target: '_blank' }] },
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


/* ─── Footer Links ──────────────────────────────────────────── */

export const policyLinks = [
    // { label: 'Disclaimer', href: '/library/disclaimer' },
    { label: 'Copyright Policy', href: '/library/copyright-policy' },
    { label: 'Privacy Policy', href: '/library/privacy-policy' },
    { label: 'Hyperlink Policy', href: '/library/hyperlink-policy' },
];

export const socialLinks = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/IndianHeritage.GoI/',
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
        ),
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@ASI_GOI',
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
        ),
    },
    {
        label: 'Twitter / X',
        href: 'https://twitter.com/ASIGoI',
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com/asi.goi?igshid=NjIwNzIyMDk2Mg==',
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
];