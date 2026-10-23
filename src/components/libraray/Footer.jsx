
import { Link } from 'react-router-dom';
import { libassets } from "../../assets/libraryassets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/libraryhome' },
    { label: 'About the Library', href: '/library/about' },
    { label: 'Services', href: '/library/services' },
  ];

  const usefulLinks = [
    { label: 'Membership Form', href: libassets.Form },
    { label: 'RTI', href: '#' },
    { label: 'Terms & Conditions', href: '/library/terms-and-conditions' },
    { label: 'Contact', href: '/library/contact' },
  ];

  const policyLinks = [
    { label: 'Disclaimer', href: '/library/disclaimer' },
    { label: 'Copyright Policy', href: '/library/copyright-policy' },
    { label: 'Privacy Policy', href: '/library/privacy-policy' },
    { label: 'Hyperlink Policy', href: '/library/hyperlink-policy' },
  ];

  const socialLinks = [
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

  return (
    <footer
      className="font-[Poppins,sans-serif]"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Main footer body ── */}
      <div className="bg-[#0F2044] text-gray-300">
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">


            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-[#E2691E]">
                Quick Links
              </h3>
              {/* <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm hover:text-[#F5A973] transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul> */}
              <ul className="space-y-2">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-sm hover:text-[#F5A973] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-[#E2691E]">
                Useful Links
              </h3>
              <ul className="space-y-2">
                {usefulLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-sm hover:text-[#F5A973] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Policy */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-[#E2691E]">
                Policy Links
              </h3>
              <ul className="space-y-2">
                {policyLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-sm hover:text-[#F5A973] transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 pb-2 border-b border-[#E2691E]">
                Contact Us
              </h3>
              {/* <p className="text-white text-sm font-medium mb-3 leading-snug">
                ASI libraray<br />
                For Students &amp; Researchers 
              </p> */}
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-[#E2691E] font-semibold">Address:</span>
                  <p className="text-gray-400 mt-0.5">
                    24, Tilak Marg, Dharohar Bhawan, <br />
                    New Delhi, 110001 INDIA
                  </p>
                </div>
                <div>
                  <span className="text-[#E2691E] font-semibold">Phone:</span>
                  <p className="text-gray-400 mt-0.5">011-23004578/79 </p>
                </div>
                <div>
                  <span className="text-[#E2691E] font-semibold">Email:</span>
                  <p className="text-gray-400 mt-0.5">
                    calmembership2026@gmail.com<br />
                    <span className="text-xs text-gray-500">(Libarary related queries)</span>
                    <br />

                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Social icons row */}
          <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Follow Us</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#E2691E] text-white flex items-center justify-center hover:bg-[#B8581E] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="bg-[#E2691E] text-white text-center text-xs py-3 px-4">
        Copyright &copy; {currentYear} All rights reserved &mdash; Archaeological survey of India
      </div>
    </footer>
  );
};

export default Footer;
