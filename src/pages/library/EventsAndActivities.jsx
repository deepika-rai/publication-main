import { Link } from 'react-router-dom';

const blogs = [
    // {
    //     id: 1,
    //     title: 'Exploring the World of Archaeology',
    //     date: '15 September 2026',
    //     img: '/assets/lib/images/blog/archaeology.jpg',
    //     content:
    //         'Archaeology helps us understand human history through the study of ancient objects, monuments, and cultural remains. Discover how archaeological research helps connect the past with the present.'
    // },
  
];


/* ─── EventsAndActivities Page ─────────────────────────────────────────────── */
const EventsAndActivities = () => {
    return (
        <div
            className="font-[Poppins,sans-serif]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
        >

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
                    <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-4">
                        <Link to="/libraryhome" className="hover:text-[#E2691E] transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-gray-400">Library</span>
                        <span>/</span>
                        <span className="text-white">Activities</span>
                    </nav>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                        Events & <span className="text-[#F5A973]">Activities</span>
                    </h1>
                </div>
            </div>


            {/* ── EventsAndActivities Section ── */}
            <div className="relative max-w-6xl mx-auto px-4 py-16">

                {blogs.length === 0 ? (
                    <p className="text-center text-gray-500 text-[15px] py-10">
                        No current events.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {blogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                            >

                                <div className="relative h-52 overflow-hidden">

                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.target.src =
                                                'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80';
                                        }}
                                    />

                                </div>


                                <div className="p-6">

                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">

                                        <svg
                                            className="w-4 h-4 text-[#E2691E]"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>

                                        <span>{blog.date}</span>

                                    </div>


                                    <h3 className="text-lg font-bold text-gray-800 leading-snug mb-3 group-hover:text-[#E2691E] transition-colors">

                                        {blog.title}

                                    </h3>


                                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">

                                        {blog.content}

                                    </p>

                                </div>

                            </article>
                        ))}
                    </div>
                )}


                
            </div>

        </div>
    );
};

export default EventsAndActivities;
