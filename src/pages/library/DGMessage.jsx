import { useState } from 'react';
import { Link } from 'react-router-dom';
import { libassets } from "../../assets/libraryassets";



/* ─── Main Page ─────────────────────────────────────────────── */
const DGMessage = () => {
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
            {/* ── Message ── */}
            <section className="bg-white py-14 border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto px-4">
                    {/* Section label */}
                    <div className="text-center mb-10">
                        <span className="text-[#E2691E] text-xs font-semibold uppercase tracking-widest">Leadership &amp; Updates</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">Director General &amp; Director</h2>
                        <div className="w-16 h-1 bg-[#E2691E] mx-auto mt-3 rounded" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-6">

                     
                        <div className="flex-[5] flex flex-col gap-5">

                            {/* DIRECTOR GENERAL */}
                            <div className="relative flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:-translate-y-1 transition-transform overflow-hidden">
                                <div className="shrink-0 w-40">
                                    <img
                                        src={libassets.madhulika}
                                        alt="DIRECTOR GENERAL"
                                        className="w-full h-40 object-cover rounded-md"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="block text-[#E2691E] text-xs font-bold uppercase tracking-wider mb-1">JOINT DIRECTOR GENERAL</span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Madhulika Samanta</h3>
                                    <p className="text-gray-500 text-sm mb-2">Joint Director General Library, Archaeological Survey of India</p>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966.
                                    </p>
                                    <a href="#" className="inline-block mt-3 bg-[#E2691E] hover:bg-[#B8581E] text-white text-xs px-4 py-2 rounded transition-colors">
                                        View Message
                                    </a>
                                </div>
                                {/* Red bottom strip */}
                                <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#E2691E]" />
                            </div>


                        </div>




                    </div>
                </div>
            </section>





        </div>
    );
};

export default DGMessage;
