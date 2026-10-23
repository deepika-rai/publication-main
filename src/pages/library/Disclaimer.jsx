export default function Disclaimer() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-7 rounded-full shrink-0 bg-[#E2691E]" />
        <h1 className="text-[24px] sm:text-[28px] font-bold text-gray-800 leading-tight">
          Disclaimer
        </h1>
      </div>

      <section className="mt-5">
        <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          
          <p className="text-[14px] text-gray-600 leading-relaxed">
            The content available through the Site is the sole property of Central
            Archaeological Library and is protected by copyright, trademark and other
            intellectual property laws. Except as otherwise explicitly agreed in writing,
            Central Archaeological Library owned content received through the Site may be
            downloaded, displayed, reformatted and printed for your personal, non-commercial
            use only. Content owned by Central Archaeological Library may be subject to
            additional restrictions. You agree not to reproduce, retransmit, distribute,
            disseminate, sell, publish, broadcast or circulate the content received through
            the Site to anyone, including but not limited to others in the same company or
            organization, without its express prior written consent.
          </p>
        </div>
      </section>
    </div>
  );
}