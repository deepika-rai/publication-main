
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { libassets } from "../../assets/libraryassets";
import { policyLinks, socialLinks } from './Nav';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  /* ── Inject Bhashini translation plugin after component mounts ── */
  useEffect(() => {
    // Avoid duplicate injection if already loaded
    if (document.getElementById('bhashini-script')) return;

    const script = document.createElement('script');
    script.id = 'bhashini-script';
    script.src = 'https://translation-plugin.bhashini.co.in/v3/website_translation_utility.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // cleanup on unmount (e.g. layout switch)
      const s = document.getElementById('bhashini-script');
      if (s) s.remove();
    };
  }, []);


  const quickLinks = [
    { label: 'Home', href: '/libraryhome' },
    { label: 'About the Library', href: '/library/about' },
    { label: 'Services', href: '/library/services' },
  ];

  const usefulLinks = [
    { label: 'Membership Form', href: `${import.meta.env.BASE_URL}docs/form.pdf`, target: '_blank' },
    { label: 'RTI', href: 'https://asi.nic.in/HQ/rti/' },
    { label: 'Terms & Conditions', href: '/library/terms-and-conditions' },
    { label: 'Contact', href: '/library/contact' },
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
                     Dharohar Bhawan, 24, Tilak Marg <br />
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
                    <span className="text-xs text-gray-500">(Libarary membership related queries)</span>
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
