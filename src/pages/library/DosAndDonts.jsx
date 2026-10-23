import { Check, X, ThumbsUp, Hand } from "lucide-react";
import { Link } from 'react-router-dom';

const BRAND = "#d2042d";

const DOS = [
    "Maintain silence and discipline in the Library.",
    "Follow instructions issued by Library and security staff.",
    "Handle books and other Library resources carefully.",
    "Keep books in their designated place or return them to Library staff.",
    "Carry and produce the membership card whenever required.",
    "Immediately report loss of the membership card.",
    "Comply with all security and access-control procedures.",
];

const DONTS = [
    "Mark, underline, fold, tear, deface or otherwise damage Library material.",
    "Remove books or Library resources from the premises without authorization.",
    "Rearrange or misplace books from their designated location.",
    "Carry food or beverages into prohibited areas.",
    "Disturb other Library users.",
    "Lend, transfer or permit another person to use the membership card.",
    "Attempt unauthorized access to restricted collections.",
    "Undertake unauthorized photography, scanning or reproduction.",
    "Use Library facilities for unlawful or commercial purposes.",
];

const THEMES = {
    do: {
        title: "Do’s",
        lead: "Members shall:",
        icon: ThumbsUp,
        items: DOS,
        Mark: Check,
        header: "linear-gradient(135deg, #047857, #065f46)",
        badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
        border: "border-emerald-200",
        row: "hover:bg-emerald-50/50",
    },
    dont: {
        title: "Don’ts",
        lead: "Members shall not:",
        icon: Hand,
        items: DONTS,
        Mark: X,
        header: `linear-gradient(135deg, ${BRAND}, #9c0322)`,
        badge: "bg-orange-50 text-[#d2042d] ring-red-200",
        border: "border-red-200",
        row: "hover:bg-orange-50/50",
    },
};

function Panel({ theme }) {
    const { title, lead, icon: Icon, items, Mark, header, badge, border, row } = theme;
    return (
        <section className={`rounded-2xl border ${border} bg-white shadow-sm overflow-hidden`}>
            <header className="relative px-6 py-5 text-white overflow-hidden" style={{ background: header }}>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-10 -right-10 w-36 h-36 rounded-full border-[20px] border-white/10"
                />
                <div className="relative flex items-center gap-3">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-white/15 ring-1 ring-white/25">
                        <Icon size={20} />
                    </span>
                    <div>
                        <h2 className="text-[19px] font-bold leading-tight">{title}</h2>
                        <p className="text-[13.5px] text-white/85 mt-0.5">{lead}</p>
                    </div>
                </div>
            </header>

            <ul className="divide-y divide-gray-100">
                {items.map((text) => (
                    <li key={text} className={`flex items-start gap-4 px-6 py-4 transition-colors ${row}`}>
                        <span className={`mt-0.5 grid place-items-center w-6 h-6 rounded-full ring-1 shrink-0 ${badge}`}>
                            <Mark size={14} strokeWidth={3} />
                        </span>
                        <p className="text-[14px] text-gray-700 leading-relaxed">{text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default function DosAndDonts() {
    return (
        <>
            <div style={{ background: 'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)' }} className="border-b border-gray-700">
                <div className="relative max-w-6xl mx-auto px-4 py-16">
                    {/* <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-7 rounded-full shrink-0 bg-[#E2691E]" />
                    <h1 className="text-[24px] sm:text-[28px] font-bold text-gray-800 leading-tight">Do’s &amp; Don’ts</h1>
                    </div> */}

                    <div className="grid lg:grid-cols-2 gap-6 items-start">
                        <Panel theme={THEMES.do} />
                        <Panel theme={THEMES.dont} />
                    </div>
                </div>
               
            </div>
        </>
    );
}