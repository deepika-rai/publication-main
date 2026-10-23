
export default function QuickLinks() {
    return (
        <div className="relative max-w-4xl mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-7 rounded-full shrink-0 bg-[#E2691E]" />
                <h1 className="text-[24px] sm:text-[28px] font-bold text-gray-800 leading-tight">Quick Links</h1>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-3 shadow-sm">
                <a href="http://www.csl.nic.in/"><h2 class="text-[17px] font-bold text-gray-800">Central Secretariat Library</h2></a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-3 shadow-sm">
                <a href="https://dpl.gov.in/"><h2 class="text-[17px] font-bold text-gray-800">Delhi Public Library</h2></a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-3 shadow-sm">
                <a href="https://www.nationallibrary.gov.in/"><h2 class="text-[17px] font-bold text-gray-800">National Library</h2></a>
            </div>            
            <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-3 shadow-sm">
                <a href="https://duls.du.ac.in/crl/"><h2 class="text-[17px] font-bold text-gray-800"> Central Reference Library</h2></a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-3 shadow-sm">
                <a href="https://pmml.nic.in/"><h2 class="text-[17px] font-bold text-gray-800"> Prime Ministers Museum and Library (PMML)</h2></a>
            </div>
            {/* <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-3 shadow-sm">
                <a href="#"><h2 class="text-[17px] font-bold text-gray-800">Raja Ram Mohan Roy Library </h2></a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-3 shadow-sm">
                <a href="#"><h2 class="text-[17px] font-bold text-gray-800">Rampur Raza Library</h2></a>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 mt-3 shadow-sm">
                <a href="#"><h2 class="text-[17px] font-bold text-gray-800">Khuda Bakhsh Oriental Public Library </h2></a>
            </div> */}


        </div>
    );
}