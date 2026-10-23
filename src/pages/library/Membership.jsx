import { Link } from "react-router-dom";
import MembershipForm from "../../components/libraray/MembershipForm";

const Membership = () => {
    const handleMembershipSubmit = (formData) => {
        console.log("Membership form data:", formData);

        // Call your membership API here.
    };

    return (
        <div className="font-[Poppins,sans-serif]">

            {/* Page Banner */}
            <div
                className="relative bg-[#0F2044] py-14 overflow-hidden"
                style={{
                    backgroundImage:
                        "linear-gradient(135deg, #0F2044 60%, #1a3560 100%)",
                }}
            >
                <div className="relative max-w-[1200px] mx-auto px-4 text-center">

                    <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-4">
                        <Link to="/libraryhome">
                            Home
                        </Link>

                        <span>/</span>

                        <Link to="/library/membership">
                            Membership
                        </Link>

                        <span>/</span>

                        <span className="text-white">Apply</span>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Membership{" "}
                        <span className="text-[#F5A973]">
                            Application Form
                        </span>
                    </h1>

                    <p className="text-gray-400 text-sm max-w-lg mx-auto">
                        Complete all sections below. Fields marked with{" "}
                        <span className="text-[#F5A973]">*</span> are required.
                        Your application will be reviewed within one working day.
                    </p>

                </div>
            </div>

            {/* Reusable Membership Form */}
            <MembershipForm
                onSubmit={handleMembershipSubmit}
            />

            {/* Info Strip */}
            <div className="bg-[#0F2044] py-8">
                <div className="max-w-[860px] mx-auto px-4">

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">

                        {[
                            {
                                icon: "🕐",
                                title: "Quick Activation",
                                desc: "Membership activated within 1 working day after verification.",
                            },
                            {
                                icon: "📍",
                                title: "Library Counter",
                                desc: "Ground Floor, Main Building — Mon to Fri, 10:00 AM to 5:30 PM.",
                            },
                            {
                                icon: "📞",
                                title: "Need Help?",
                                desc: "Call 011 2307 5357 or email calmembership2026@gmail.com",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-5"
                            >
                                <div className="text-3xl mb-2">
                                    {item.icon}
                                </div>

                                <h4 className="text-white text-sm font-semibold mb-1">
                                    {item.title}
                                </h4>

                                <p className="text-gray-400 text-xs leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Membership;