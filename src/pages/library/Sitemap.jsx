import { Link } from 'react-router-dom';
import { navItems, topLinks, policyLinks, socialLinks } from '../../components/libraray/Nav';

/* ─── Helpers ─────────────────────────────────────────────────── */
const normalise = (link) =>
  typeof link === 'string' ? { label: link, href: null } : link;

const getChildren = (item) =>
  (item.columns || []).flatMap((col) => col.links.map(normalise));

const SmartLink = ({ href, target, className, children }) => {
  if (!href) {
    return <span className={`${className} cursor-default opacity-60`}>{children}</span>;
  }
  const isExternal =
    target === '_blank' || /^https?:\/\//.test(href) || href.endsWith('.pdf');
  return isExternal ? (
    <a href={href} target={target || '_blank'} rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};

/* ─── Sitemap Page ─────────────────────────────────────────────── */
const Sitemap = () => {
  // Add the top-strip links as one more group, skipping Sitemap itself
  const groups = [
    ...navItems.map((item) => ({
      label: item.label,
      href: item.href,
      target: item.target,
      children: getChildren(item),
    })),
    {
      label: 'POLICY',
      children: policyLinks,
    },
    {
      label: 'SOCIAL',
      children: socialLinks,
    },
    {
      label: 'MORE',
      children: topLinks
        .filter((l) => l.href !== '/library/sitemap')
        .map((l) => ({ label: l.label, href: l.href })),
    },
  ];

  return (
    <div className="font-[Poppins,sans-serif]" style={{ fontFamily: 'Poppins, sans-serif' }}>
      

      {/* ── Sitemap List ── */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-7 rounded-full shrink-0 bg-[#E2691E]" />
                <h1 className="text-[24px] sm:text-[28px] font-bold text-gray-800 leading-tight">Sitemap</h1>
            </div>

        <ul className="space-y-5">
          {groups.map((group) => (
            <li key={group.label}>
              {/* Parent */}
              {group.href ? (
                <SmartLink
                  href={group.href}
                  target={group.target}
                  className="text-base font-semibold text-[#0F2044] hover:text-[#E2691E] transition-colors"
                >
                  {group.label}
                </SmartLink>
              ) : (
                <span className="text-base font-semibold text-[#0F2044]">{group.label}</span>
              )}

              {/* Children */}
              {group.children.length > 0 && (
                <ul className="mt-2 ml-2 pl-4 border-l-2 border-gray-200 space-y-1.5">
                  {group.children.map((link) => (
                    <li key={link.label}>
                      <SmartLink
                        href={link.href}
                        target={link.target}
                        className="text-sm text-gray-600 hover:text-[#E2691E] transition-colors"
                      >
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sitemap;