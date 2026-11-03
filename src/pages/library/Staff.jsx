import { libassets } from "../../assets/libraryassets";

/* ─── Shared sub-components ──────────────────────────────────── */
const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-1 h-6 bg-[#E2691E] rounded-full shrink-0" />
    <h2 className="text-[17px] font-bold text-gray-800">{children}</h2>
  </div>
);

const SIZES = {
  md: 'w-32 h-32',
  lg: 'w-44 h-44',
};

const StaffCard = ({ name, img, designation, size = 'md' }) => (
  <div className="group flex flex-col items-center text-center py-2">
    <div className={`${SIZES[size]} rounded-full overflow-hidden ring-4 ring-white shadow-md bg-gray-100`}>
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <p className="mt-3 font-semibold text-gray-800 text-[15px] leading-snug">{name}</p>
    <p className="mt-3 text-gray-600 text-[14px] leading-snug">{designation}</p>
    <span className="mt-2 h-0.5 w-8 rounded-full bg-[#E2691E] transition-all duration-300 group-hover:w-14" />
  </div>
);

const StaffCard2 = ({ name, img, designation }) => (
  <div className="group bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-4 hover:shadow-md transition-all duration-200">
    <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-100 bg-gray-100 shrink-0  bg-gray-100">
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="min-w-0">
      <p className="font-bold text-gray-800 text-[15px] leading-snug">{name}</p>
      <p className="text-gray-400 text-[13px]">{designation}</p>
    </div>
  </div>
);




/* ─── Staff data ──────────────────────────────────────────────── */
const STAFF_GROUPS = [
  { name: 'Shri ', img: libassets.staff8, designation: 'Assistant Library & Information Officer' },
  { name: 'Shri Balram Singh', img: libassets.staff1, designation: 'Assistant Library & Information Officer' },
  { name: 'Shri Saurabh Sharma', img: libassets.staff7, designation: 'Assistant Library & Information Officer' },
  { name: 'Ms. Garima Singh', img: libassets.staff6, designation: 'Multi Tasking Staff' },
  { name: 'Ms. Pratiksha', img: libassets.staff5, designation: 'Multi Tasking Staff' },
  { name: 'Shri Satyam', img: libassets.staff4, designation: 'Multi Tasking Staff' },
];

const STAFF_GROUPS2 = {
  'Library & Information Officer': [
    { name: 'Dr. Shaji John', img: libassets.staff2, designation: 'Assistant Library & Information Officer' },
    { name: 'Shri Mahesh Chand Meena', img: libassets.staff3, designation: 'Assistant Library & Information Officer' },
  ],
  // 'Assistant Library and Information Officer': [
  //   { name: 'Shri ', img: '' },
  //   { name: 'Shri Balram Singh', img: libassets.staff1 },
  //   { name: 'Shri Saurabh Sharma', img: libassets.staff7 },
  // ],
  // 'Multi Tasking Staff': [
  //   { name: 'Ms. Garima Singh', img: libassets.staff6 },
  //   { name: 'Ms. Pratiksha', img: libassets.staff5 },
  //   { name: 'Ms. Satyam', img: libassets.staff4 },
  // ],
};



/* ─── Staff panel ─────────────────────────────────────────────── */
const StaffPanel = () => (
  <div className="space-y-8">
    <p className="text-[14px] text-gray-600 leading-relaxed">
      The Library team is responsible for collection development, organization and preservation of Library resources, reader services, reference assistance, membership services, reprographic services and facilitation of academic and research activities.
    </p>

    {Object.entries(STAFF_GROUPS2).map(([group, members], index) => (
      <div key={group}>
        {/* <SectionHeading>{group}</SectionHeading> */}
        <div className="flex flex-col sm:flex-row gap-4">
          {members.map((m) => (
            <div key={m.name} className="flex-1">
              <StaffCard {...m} size={index === 0 ? 'lg' : 'md'} />
            </div>
          ))}
        </div>
      </div>
    ))}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {STAFF_GROUPS.map((m) => (
        <StaffCard2 key={m.name} {...m} />
      ))}
    </div>


    {/* Contact box */}
    <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d1a22] rounded-2xl p-6 text-white">
      <h3 className="font-bold text-[15px] mb-3 flex items-center gap-2">
        <span>📬</span> Contact the Library
      </h3>
      <p className="text-[14px] leading-relaxed text-white/90 max-w-2xl mb-6">
        For membership-related queries, access to Library resources, research assistance or other
        Library services, contact the Library during the prescribed working hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 text-[13px] text-gray-300">


        <a
          href="tel:01123004578"
          className="bg-white text-[#E2691E] font-bold text-[14px] rounded px-5 py-3 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E2691E]"
        >
          011-23004578/79
        </a>
        <a
          href="mailto: calmembership2026@gmail.com"
          className="border border-white/70 font-bold text-[14px] rounded px-5 py-3 hover:bg-white/10 break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#E2691E]"
        >
          calmembership2026@gmail.com
        </a>

      </div>
    </div>
  </div>
);

export default StaffPanel;
