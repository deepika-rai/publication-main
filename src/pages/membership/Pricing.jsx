import { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── Plan data ─────────────────────────────────────────────── */
const plans = [
  {
    id: 'monthly',
    label: 'Monthly',
    duration: '1 Month',
    price: 299,
    originalPrice: null,
    saving: null,
    badge: null,
    color: 'border-gray-200',
    highlight: false,
    features: [
      { text: 'Full Library Access', included: true },
      { text: 'Reading Room (6 hrs/day)', included: true },
      { text: 'E-Resources Access', included: true },
      { text: 'Question Papers Archive', included: true },
      { text: 'Book Home Issue (2 books)', included: true },
      { text: 'Research Assistance', included: false },
      { text: 'Digital Newspaper Access', included: false },
    ],
  },
  {
    id: 'yearly',
    label: 'Yearly',
    duration: '12 Months',
    price: 2399,
    originalPrice: 3588,
    saving: '33%',
    badge: 'Most Popular',
    color: 'border-[#E2691E]',
    highlight: true,
    features: [
      { text: 'Full Library Access', included: true },
      { text: 'Reading Room (Unlimited)', included: true },
      { text: 'E-Resources Access', included: true },
      { text: 'Question Papers Archive', included: true },
      { text: 'Book Home Issue (4 books)', included: true },
      { text: 'Research Assistance', included: true },
      { text: 'Digital Newspaper Access', included: true },
    ],
  },
  {
    id: '24months',
    label: '24 Months',
    duration: '24 Months',
    price: 3999,
    originalPrice: 7176,
    saving: '44%',
    badge: 'Best Value',
    color: 'border-[#1a1a2e]',
    highlight: false,
    features: [
      { text: 'Full Library Access', included: true },
      { text: 'Reading Room (Unlimited)', included: true },
      { text: 'E-Resources Access', included: true },
      { text: 'Question Papers Archive', included: true },
      { text: 'Book Home Issue (6 books)', included: true },
      { text: 'Research Assistance', included: true },
      { text: 'Digital Newspaper Access', included: true },
    ],
  },
];

const faq = [
  { q: 'Can I upgrade my plan later?', a: 'Yes. You can upgrade from Monthly to Yearly or 24-Month at any time. The remaining balance from your current plan is prorated and adjusted.' },
  { q: 'Is there a student discount?', a: 'Students enrolled at ASI get an additional 15% discount on all plans. Bring your valid ID card to the library counter at the time of registration.' },
  { q: 'What payment methods are accepted?', a: 'We accept UPI, net banking, debit/credit cards, and cash payment at the library counter (Ground Floor, Main Building).' },
  { q: 'Can I cancel my membership?', a: 'Memberships are non-refundable once activated. However, in exceptional circumstances please contact the Library Committee for review.' },
  { q: 'What happens to my borrowed books when my plan expires?', a: 'All borrowed books must be returned within 7 days of plan expiry to avoid a late fine of ₹5 per day per book.' },
];

/* ─── Sub-components ────────────────────────────────────────── */

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#E2691E] shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-4 h-4 text-gray-300 shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 text-sm pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-[#E2691E] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 bg-white">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

/* ─── Main Page ─────────────────────────────────────────────── */
const Pricing = () => {
  const [selected, setSelected] = useState('yearly');

  return (
    <div className="font-[Poppins,sans-serif]" style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* ── Page Banner ── */}
      <div
        className="relative bg-[#0F2044] py-16 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)',
        }}
      >
        {/* decorative rings */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/5" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-[#E2691E]/10" />

        <div className="relative max-w-[1200px] mx-auto px-4 text-center">
          {/* breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-5">
            <Link to="/libraryhome" className="hover:text-[#E2691E] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Membership</span>
            <span>/</span>
            <span className="text-white">Pricing</span>
          </nav>
          <span className="inline-block bg-[#E2691E]/20 text-[#F5A973] text-xs font-semibold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            Library Membership
          </span>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Choose Your <span className="text-[#F5A973]">Membership Plan</span>
          </h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Get unlimited access to ASI world-class library resources. Pick a plan that works for your research journey.
          </p>
        </div>
      </div>

      {/* ── Plan Cards ── */}
      {/* <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4">


          <p className="text-center text-sm text-gray-500 mb-10">
            All prices in <strong>INR (₹)</strong> · Inclusive of all library charges
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelected(plan.id)}
                className={`relative bg-white rounded-2xl border-2 ${plan.color} shadow-sm cursor-pointer transition-all duration-300
                  ${selected === plan.id ? 'shadow-xl -translate-y-2 ring-2 ring-[#E2691E]/30' : 'hover:-translate-y-1 hover:shadow-md'}
                  ${plan.highlight ? 'md:-mt-4' : ''}`}
              >
                
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`inline-block text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow
                      ${plan.highlight ? 'bg-[#E2691E]' : 'bg-[#0F2044]'}`}>
                      {plan.badge}
                    </span>
                  </div>
                )}

         
                <div className={`rounded-t-2xl px-6 pt-8 pb-6 text-center
                  ${plan.highlight ? 'bg-gradient-to-br from-[#E2691E] to-[#B8581E] text-white' : 'bg-gray-50 text-gray-800'}`}>
                  <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-800'}`}>
                    {plan.label}
                  </h3>
                  <p className={`text-xs uppercase tracking-widest mb-5 ${plan.highlight ? 'text-red-200' : 'text-gray-400'}`}>
                    {plan.duration}
                  </p>

               
                  <div className="flex items-end justify-center gap-1">
                    <span className={`text-sm font-medium ${plan.highlight ? 'text-red-200' : 'text-gray-400'}`}>₹</span>
                    <span className={`text-6xl font-extrabold leading-none ${plan.highlight ? 'text-white' : 'text-gray-800'}`}>
                      {plan.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {plan.originalPrice && (
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <span className={`line-through text-sm ${plan.highlight ? 'text-red-300' : 'text-gray-400'}`}>
                        ₹{plan.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full
                        ${plan.highlight ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'}`}>
                        Save {plan.saving}
                      </span>
                    </div>
                  )}
                </div>

                
                <div className="px-6 py-5">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3">
                        {f.included ? <CheckIcon /> : <CrossIcon />}
                        <span className={`text-sm ${f.included ? 'text-gray-700' : 'text-gray-300 line-through'}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  
                  <Link
                    to="/membership/form"
                    state={{ plan: plan.id, price: plan.price, duration: plan.duration }}
                    className={`mt-7 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200
                      ${plan.highlight
                        ? 'bg-[#E2691E] hover:bg-[#B8581E] text-white shadow-lg shadow-red-200'
                        : 'bg-[#0F2044] hover:bg-[#E2691E] text-white'}`}
                  >
                    Get Started
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <p className="text-center text-[11px] text-gray-400 mt-3">
                    No hidden charges · Cancel anytime
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Feature Comparison Table ── */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#E2691E] text-xs font-semibold uppercase tracking-widest">Compare</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">Full Feature Breakdown</h2>
            <div className="w-16 h-1 bg-[#E2691E] mx-auto mt-3 rounded" />
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0F2044]">
                  <th className="text-left text-white font-semibold px-5 py-4 w-1/2">Feature</th>
                  {plans.map((p) => (
                    <th key={p.id} className={`text-center font-semibold px-4 py-4 ${p.highlight ? 'text-[#F5A973]' : 'text-gray-300'}`}>
                      {p.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feat, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3.5 text-gray-700 font-medium border-b border-gray-100">{feat.text}</td>
                    {plans.map((p) => (
                      <td key={p.id} className="text-center px-4 py-3.5 border-b border-gray-100">
                        {p.features[i].included
                          ? <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-50"><CheckIcon /></span>
                          : <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-50"><CrossIcon /></span>}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Price row */}
                <tr className="bg-[#0F2044]/5">
                  <td className="px-5 py-4 text-gray-800 font-bold">Total Price</td>
                  {plans.map((p) => (
                    <td key={p.id} className={`text-center px-4 py-4 font-bold ${p.highlight ? 'text-[#E2691E]' : 'text-gray-800'}`}>
                      ₹{p.price.toLocaleString('en-IN')}
                    </td>
                  ))}
                </tr>
                {/* CTA row */}
                <tr>
                  <td className="px-5 py-4" />
                  {plans.map((p) => (
                    <td key={p.id} className="text-center px-4 py-4">
                      <Link
                        to="/membership/form"
                        state={{ plan: p.id, price: p.price, duration: p.duration }}
                        className={`inline-block text-xs font-bold px-4 py-2 rounded-lg transition-colors
                          ${p.highlight ? 'bg-[#E2691E] text-white hover:bg-[#B8581E]' : 'bg-[#0F2044] text-white hover:bg-[#E2691E]'}`}
                      >
                        Choose {p.label}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Why Join Section ── */}
      <section className="bg-[#0F2044] py-14">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#F5A973] text-xs font-semibold uppercase tracking-widest">Benefits</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">Why Join Our Library?</h2>
            <div className="w-16 h-1 bg-[#E2691E] mx-auto mt-3 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '📖', title: '1.5 Lakh+ Volumes', desc: 'Access one of the richest humanities and archaeology collections in India.' },
              { icon: '💻', title: 'Digital Resources', desc: 'Full access to e-journals, e-books, and the digital Virasat archive.' },
              { icon: '🔬', title: 'Research Support', desc: 'Dedicated research assistance from qualified library professionals.' },
              { icon: '📜', title: 'Rare Manuscripts', desc: 'Access to the unique manuscripts collection curated over 200 years.' },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#E2691E]/50 transition-colors">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h4 className="text-white font-bold text-sm mb-2">{b.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Bottom CTA ── */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #E2691E 0%, #B8581E 100%)' }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-[700px] mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to get started?
          </h2>
          <p className="text-red-200 mb-8 text-sm">
            Fill out the membership form and a library staff member will confirm your registration within one working day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/membership/form"
              className="bg-white text-[#E2691E] hover:bg-gray-100 font-bold px-8 py-3 rounded-xl transition-colors shadow-lg text-sm"
            >
              Apply for Membership
            </Link>
            <a
              href="#"
              className="border border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Contact Library
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;
