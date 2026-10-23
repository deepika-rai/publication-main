import { useState } from 'react';
import { Link } from 'react-router-dom';

const newsItems = [
    { day: '30', month: 'July 2026', cat: 'Times of India', text: 'ASI, Bhubaneswar Circle has organised a Tiranga Rangoli at Rajarani Temple as a part of Har Ghar Tiranga', url: '#' },
    { day: '28', month: 'July 2026', cat: 'Organiser', text: 'Tricolour Illumination at Ruined fort Nurpur during Har Ghar Tringa 2026', url: '#' },
    { day: '26', month: 'July 2026', cat: 'The Hindu', text: 'BRICS Culture Working Group Meeting, Dated 5th August 2026', url: '#' },
    { day: '22', month: 'July 2026', cat: 'Hindustan Times', text: 'The Ancient Buddhist Site of Sarnath in Uttar Pradesh was officially inscribed as Indias 45th UNESCO World Heritage Site', url: '#' },
];

/* ─── Main Page ─────────────────────────────────────────────── */
const News = () => {
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
                        <span className="text-gray-400">Library</span>
                        <span>/</span>
                        <span className="text-white">News</span>
                    </nav>
                    <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Media Coverage 
                    </h1>
                </div>
            </div>
            {/* ── News ── */}
            <div className='relative max-w-6xl mx-auto px-4 py-16'>
                <div className="space-y-10">

                    <section className="bg-white py-14 border-b border-gray-100">
                        <div className="max-w-[1400px] mx-auto px-4">
                            <div className="flex flex-col lg:flex-row gap-8">


                                <div className="flex-[3]">                     

                                    <div className="space-y-3 max-h-[560px] overflow-y-auto pr-1 scrollbar-thin">
                                        {newsItems.map((n, i) => (
                                            <div key={i} className="flex gap-3 pb-3 border-b border-gray-100 hover:bg-gray-50 rounded p-2 transition-colors">
                                                <div className="shrink-0 w-14 bg-gray-50 border border-gray-100 rounded text-center py-2">
                                                    <span className="block text-lg font-bold text-[#E2691E] leading-none">{n.day}</span>
                                                    <small className="text-[10px] text-gray-500 leading-none">{n.month}</small>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <span className="block text-[10px] font-bold text-[#E2691E] uppercase tracking-wide mb-0.5">{n.cat}</span>
                                                    <p className="text-[13px] text-gray-700 leading-snug mb-1 line-clamp-2">{n.text}</p>
                                                    <a href={n.url} target="_blank" rel="noreferrer" className="text-[11px] text-[#E2691E] font-semibold hover:underline">
                                                        View Details →
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>



                            </div>
                        </div>
                    </section>


                </div>
            </div>





        </div>
    );
};

export default News;
