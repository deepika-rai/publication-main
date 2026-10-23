export default function PrivacyPolicy() {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-7 rounded-full shrink-0 bg-[#E2691E]" />
        <h1 className="text-[24px] sm:text-[28px] font-bold text-gray-800 leading-tight">
          Privacy Policy
        </h1>
      </div>

      {/* Conditions */}
      <section className="mt-5">
        <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <p className="text-[14px] text-gray-600 leading-relaxed">
            We do not collect personal information for any purpose other than to respond to you. If you choose to provide us with personal information like filling out a Contact Us form with an e-mail address or postal address, and submitting it to us through the website, we use that information to respond to your message, and to help you get the information you have requested.
          </p>
        </div>
      </section>
    </div>
  );
}