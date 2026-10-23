import { useState } from 'react';
import { Link } from 'react-router-dom';



/* ─── Main Page ─────────────────────────────────────────────── */
const Blank = () => {
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
                        <span className="text-white">Leadership</span>
                    </nav>
                    <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
                        Director General <span className="text-[#F5A973]">Message</span>
                    </h1>
                </div>
            </div>
            {/* ── Blank ── */}
            <div className='relative max-w-6xl mx-auto px-4 py-16'>
                <div className="space-y-10">




                </div>
            </div>





        </div>
    );
};

export default Blank;
