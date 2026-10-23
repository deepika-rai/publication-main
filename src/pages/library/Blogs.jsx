import { Link } from 'react-router-dom';

const blogs = [
    {
        id: 1,
        title: 'Exploring the World of Archaeology',
        date: '15 September 2026',
        img: '/assets/lib/images/blog/archaeology.jpg',
        content:
            'Archaeology helps us understand human history through the study of ancient objects, monuments, and cultural remains. Discover how archaeological research helps connect the past with the present.'
    },
    {
        id: 2,
        title: 'The Importance of Libraries in Education',
        date: '10 September 2026',
        img: '/assets/lib/images/blog/library.jpg',
        content:
            'Libraries are an essential part of education and research. They provide students and researchers with access to valuable books, journals, digital resources, and knowledge from around the world.'
    },
    {
        id: 3,
        title: 'Understanding Indian Languages and Literature',
        date: '05 September 2026',
        img: '/assets/lib/images/blog/languages.jpg',
        content:
            'India is home to a rich diversity of languages and literary traditions. Exploring these languages allows us to understand the cultural history and traditions that have shaped Indian society.'
    },
    {
        id: 4,
        title: 'Preserving Historical Knowledge',
        date: '28 August 2026',
        img: '/assets/lib/images/blog/history.jpg',
        content:
            'Preserving historical documents and cultural resources is important for future generations. Modern libraries and research institutions play an important role in protecting valuable knowledge.'
    },
    {
        id: 5,
        title: 'Digital Resources for Modern Researchers',
        date: '20 August 2026',
        img: '/assets/lib/images/blog/digital-library.jpg',
        content:
            'Digital libraries have transformed the way researchers access information. Online catalogues, digital archives, and electronic publications make research faster and more accessible.'
    },
    {
        id: 6,
        title: 'The Role of Students in Academic Research',
        date: '12 August 2026',
        img: '/assets/lib/images/blog/students.jpg',
        content:
            'Students play an important role in academic research. Developing curiosity, reading widely, and learning how to use reliable sources can help students become successful researchers.'
    },
];


/* ─── Blog Page ─────────────────────────────────────────────── */
const Blog = () => {
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
                    <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-5">
                        <Link to="/libraryhome" className="hover:text-[#E2691E] transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-gray-400">Library</span>
                        <span>/</span>
                        <span className="text-white">Blog</span>
                    </nav>
                    <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Latest Articles & <span className="text-[#F5A973]">Updates</span>
                    </h1>
                </div>
            </div>


            {/* ── Blog Section ── */}
            <div className="relative max-w-6xl mx-auto px-4 py-16">


                {/* ── Blog Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                    {blogs.map((blog) => (

                        <article
                            key={blog.id}
                            className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >

                            {/* Blog Image */}
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

                                {/* Date Badge */}
                                {/* <div className="absolute bottom-3 left-3 bg-[#E2691E] text-white px-3 py-2 rounded-md text-xs font-medium shadow-md">
                                    {blog.date}
                                </div> */}

                            </div>


                            {/* Card Content */}
                            <div className="p-6">

                                {/* Date */}
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


                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-800 leading-snug mb-3 group-hover:text-[#E2691E] transition-colors">

                                    {blog.title}

                                </h3>


                                {/* Content */}
                                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">

                                    {blog.content}

                                </p>


                                {/* Read More */}
                                <Link
                                    to={`/blog/${blog.id}`}
                                    className="inline-flex items-center gap-2 text-[#E2691E] text-sm font-semibold hover:gap-3 transition-all"
                                >

                                    Read More

                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>

                                </Link>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </div>
    );
};

export default Blog;
