import { assets, footerLinks } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="px-4 md:px-10 lg:px-16 xl:px-24 mt-24 bg-[#222]">
      {/* Grid with 12 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 py-10 border-b border-gray-500/30 text-gray-500">
        
        {/* About Us (3 columns on large) */}
        <div className="lg:col-span-3 col-span-12">
          <h3 className="font-semibold text-[22px] text-white mb-2">About ASI Publications</h3>
          <p className="text-lg mt-4 max-w-[300px]">
        A centralised digital platform for browsing, purchasing, and securely accessing ASI publications online — bringing heritage knowledge to every reader.

          </p>
        </div>

        {/* Footer Links (9 columns divided among link sections) */}
        {footerLinks.slice(0, 9).map((section, index) => (
          <div key={index} className="lg:col-span-3 col-span-12">
            <h3 className="font-semibold text-[22px] text-white mb-2">{section.title}</h3>
            <ul className="text-lg space-y-1">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link to={link.url} className="hover:underline transition">{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Footer Bottom */}
      <p className="py-4 text-center text-lg md:text-base text-gray-500/80">
        © {new Date().getFullYear()}  Archaeological Survey of India Government of India. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
