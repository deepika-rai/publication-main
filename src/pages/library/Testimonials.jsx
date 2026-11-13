import { Link } from 'react-router-dom';
import { libassets } from "../../assets/libraryassets";

const testimonials = [
    {
        name: 'Shri Narendra Modi',
        role: ' Hon’ble Prime Minister of India (12th July, 2018 (Thursday)',
        quote: 'भारतीय पुरातत्त्व सर्वेक्षण के मुख्यालय “धरोहर भवन” के उद्घाटन के अवसर पर आज मैंने दक्षिण एशिया के सबसे प्राचीन पुस्तकालयों में से एक भारतीय पुरातत्त्व सर्वेक्षण के केंद्रीय पुस्तकालय का दौरा किया | मै इसके संग्रह को देखकर प्रफुल्लित हूँ जिसमे पुरातत्त्व से सम्बंधित विषयों और पत्र पत्रिकाओं की विशाल श्रंखला समाहित है |पुस्तकालय ज्ञान के प्रतीक चिन्ह है और आज मैंने ऐसा महसूस किया कि पुरातत्वविदों द्वारा की गई खोजो को पुस्तकों, सामयिकों पत्रों और पत्रिकाओं में बहुत बेहतरीन तरीके से परिरक्षित किया गया है | ऐसे पुस्तकालय विद्यार्थियो, विद्वानों एवं आम जनता के आकर्षण का केंद्र होते हैं जो हमारे अतीत को वर्तमान से जोड़ते है | हमारे अतीत के प्रचार-प्रसार के लिए में भारतीय पुरातत्त्व सर्वेक्षण की पूरी टीम को अपनी शुभकामनाएँ देता हूँ |',
        img: libassets.testi1
    },
    {
        name: ' K.N. Shrivastava',
        role: '(29.07.2009)',
        quote: 'ASI’s library is one of the oldest one being accessed by a larger number of scholars, researchers, students, archaeologists etc. on regular basis. ASI itself would be completing 150 years in the year 2011.',
        img: libassets.testi2
    },
    {
        name: 'P. B. Gajendra Gadkar-Judge',
        role: 'Supreme Court of India11, Tughlak Road, New Delhi (27.9.1958)',
        quote: 'LI spent two happy and instructive hours in the Central Archaeological Library this evening. Mr. Parab and his colleagues took me round the Library and gave me a vivid idea about the extent of its very proud collection. The Library possesses a large collection of rare and valuable publication; and it can justly claim that its collection of 50,000 and odd Volumes is the largest of its kind in this country and it affords invaluable assistance to all serious students of Ideology, Archaeology and ancient Indian Culture',
        img: libassets.testi3
    },
    {
        name: ' Prof. H. D. Velankar',
        role: 'Director, Bharatiya Vidya Bhawan, Bombay (16.4.1956).',
        quote: 'I visited the Central Archaeological Library today and was very pleased to see the good collection of books on Indian History and other branches of Indology. The librarian, Mr. Parab, is a good scholar of Sanskrit, Pali and Prakritie language and is very helpful to visitors in finding out reference which are needed by them.',
        img: libassets.testi4
    },
    {
        name: 'Dr. Daniel Schlumberger (Paris)',
        role: 'Director, French Archaeological Mission to Afghanistan. (4.4.1955) ',
        quote: ' This Library seems to me not only a paradise for Sanskritist, as Dr. Hoffmann writes, but a paradise for archaeologists, Indeed it should become the meeting place of all who are interested in India’s part, and working to try to make it before known.',
        img: libassets.testi5
    },
    {
        name: 'Dr.Tara Chand',
        role: 'Indian Ambassador to Iran(26th March 1955)',
        quote: 'I visited the library of the Archaeological Department this morning. My quest ancient history & archaeology of Iran and to my approached surprised me. I found the history quite well equipped with literature on the subjects. I told to Mr. Parab the librarian that he engaged in searching the journals & arranging more text on the ancient history of Iran.',
        img: libassets.testi6
    },
    {
        name: 'Dr. Raghu Vira, Madhya Pradesh',
        role: 'Director, International Academy  of Indian Culture, Nagpur(2nd February 1955)',
        quote: 'I an orientation, The Archaeological library is the one place where I come and work. It is the first collection in Delhi. The present librarian, Mr. Parab, is working for fill up the gaps. Particularly in the case of The library must be better honored. The present accommodation is a disgrace.This library should be the nucleus of a central library as it fulfill the capitals of India. The Greek India section of the library are loudly demanding for greater attention. I congratulate the librarian and his assistants for the service that they are serving to the post graduate scholars as well as research man.',
        img: libassets.testi7
    },
    {
        name: 'Dr. V Raghavan',
        role: 'Head of the Deptt. of Sanskrit, Madras University, Madras(13th January 1955)',
        quote: 'I have visited the library in the archaeological dept. many times. The library houses many old valuable publications. Unfortunately ongoing to the extremely limited accommodation. It is difficult to sit here and to work. Also I feel the library should be enriched the entire maze and a mss. dept. fully for need.',
        img: libassets.testi8
    },
    {
        name: 'A.A.A.Fazee',
        role: 'Member, Union Public Service Comission,New Delhi (4th November 1954)',
        quote: 'I am much impressed by the enthusiasm of the librarian. An archaeological library should contain a good selection of oriental journals, oriental texts (particularly Sanskrit, Arabic and Persian) and the basic instrument of research. I hope both space tenancy will be made available by the authorities for this purpose, until can have the national library following up all these lovely best smaller collection. I am much impressed by the enthusiasm of the librarian. An archaeological library should contain a good selection of oriental journals, oriental texts (particularly Sanskrit, Arabic and Persian) and the basic instrument of research. I hope both space tenancy will be made available by the authorities for this purpose, until can have the national library following up all these lovely best smaller collection.',
        img: libassets.testi9
    },
    {
        name: ' K.M. Panikkar',
        role: '(2nd November, 1954)',
        quote: 'Though I have often taken advantage of this great & valuable collection by borrowing books, this is the first time I have had an opportunity of visiting it. It is indeed a treasure of books connected with ancient India, with necessary reference books relating to the other countries of the east. ',
        img: libassets.testi10
    },
    {
        name: 'Dr. R.A. Stein',
        role: 'Sinologist & Tibetologist (29th September, 1954)',
        quote: 'Having come through Delhi for a short time, I have been delighted to discover that the Orientalist have finds a solid instrument for his research work and moreover such a kind reception and to many facilities to use the Library. Above all I was most agreatly surprised to find here a very interesting collection of Tibetan books. The scholar of Tibetan will not loose his time here.',
        img: libassets.testi11
    },,
    {
        name: 'Dr. A.S. Altekar ',
        role: '(17th September, 1954)',
        quote: 'I have visited the Library of the Archaeological department several times and have found it to contain many rare books. Recently the Library is being rearranged by its new Librarian and I find that new arrangement will add very much of the usefulness of the Library. The Library requires to be strong themed in some of its branches and it is pleasing to note that the Librarian is addressing himself to the task heart and soul. It is a very taxing work to find out the lacunae in the old series and to keep oneself in touch with the newest publication, so that the Library should remain up-to-date. It is pleasing to find that Mr. Librarian is doing this work enthusiastically. ',
        img: libassets.testi12
    },,
    {
        name: ' Bharat Ratna Dr. Bhim Rao Ramji Ambedkar',
        role: '(5th June, 1954)',
        quote: 'I have been residing in Delhi for the last ten years. Being interested in Ancient Indian History I have been a regular borrower of books on this subject from this Library. Although the Library is well stocked with books on ancient Indian the collection could be much bigger than what it is. It should be like the British Museum',
        img: libassets.testi13
    },,
    {
        name: ' Dr. Gustav Roth',
        role: 'German Scholar(5th May 1954)',
        quote: 'It is the third time during my stage in India as a student for Ideology and Archaeology at Patna University, that I have the unique chance to consult the rich collection of the Central Archaeological Library at New Delhi. It has always been due to the permanent readiness to help, with the librarian Mr. Parab exercises, that I got everything I needed and would successfully continuo my studies. Well versed in Pali and Parkrit Mr. Parab gave me very valuable advice about references and books. Which I could get from outside. I like it very much to remember t he talks I had with this learned and efficient librarian. ',
        img: libassets.testi14
    },,
    {
        name: 'Bharat Ratna  P. V. Kane',
        role: '(17th March, 1954)',
        quote: 'I have been visiting the Central Archaeological Library at least every day for the last month. I am very glad to note that the Library has a very large collection (of about forty thousand books) on the History, Archaeologists and Antiquities of India. Every student of these subjects will find this Library a most useful and up to date one. I may particularly mention Mr. R.G.Parab the Librarian who is himself a deep student of Sanskrit Literature, taking a keen interest in keeping the Library up to date and catering to the accommodation of scholars that visit this Library. I request, however, to note that the usefulness of this Library is very much marred by its location in an old and bearable life building and fervently hope that the Central Government will in the near future locate this splendid Library in some modern and up to date building containing fine fire proof furniture.',
        img: libassets.testi15
    },,
    {
        name: 'Dr. R.C. Majumdar',
        role: '(16th March, 1954)',
        quote: 'I have visited this Library on many occasions and have found it very useful to a student of history and antiquities of India. The selection of books is very good and the arrangement is quite satisfactory. The Librarian Mr. Parab is very attentive to the needs of the readers and has been of great help to me in tracing rare publications. I am sure the Library is a freak asset of the Capital city of India.',
        img: libassets.testi16
    },,
    {
        name: 'Dr. Helmut Hoffman',
        role: '(5th March, 1954)',
        quote: 'Although I have seen already many libraries in India, I have not met with such a well-preserved and voluminous collection of books and as kind a help for making use of them. Am sorry only that I cannot stay longer at this “paradise of sanskritists” ',
        img: libassets.testi17
    },
];


/* ─── Main Page ─────────────────────────────────────────────── */
const Testimonials = () => {
    return (
        <div
            className="font-[Poppins,sans-serif]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
        >

            {/* ── Page Banner ── */}
            <div
                className="relative bg-[#0F2044] py-16 overflow-hidden"
                style={{
                    backgroundImage:
                        'linear-gradient(135deg, #0F2044 60%, #1a3560 100%)',
                }}
            >
                {/* Decorative rings */}
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5" />
                <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full border border-white/5" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-[#E2691E]/10" />

                <div className="relative max-w-[1200px] mx-auto px-4 text-center">

                    {/* Breadcrumb */}
                    <nav className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-4">
                        <Link
                            to="/libraryhome"
                            className="hover:text-[#E2691E] transition-colors"
                        >
                            Home
                        </Link>

                        <span>/</span>

                        <span className="text-gray-400">Library</span>

                        <span>/</span>

                        <span className="text-white">Testimonials</span>
                    </nav>

                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                        Testimonials
                    </h1>
                </div>
            </div>


            {/* ── Testimonials ── */}
            <div className="relative max-w-6xl mx-auto px-4 py-16">

                {/* 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col items-center text-center">

                                {/* Profile Image */}
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-30 h-30 rounded-full object-fill mb-4"
                                    onError={(e) => {
                                        e.target.src =
                                            `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                item.name
                                            )}&background=b7202e&color=fff`;
                                    }}
                                />

                                {/* Quote Icon */}
                                <svg
                                    className="w-6 h-6 text-[#E2691E] mb-3"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                </svg>

                                {/* Testimonial */}
                                <p className="text-gray-600 text-sm italic leading-relaxed mb-5">
                                    {item.quote}
                                </p>

                                {/* Name */}
                                <h6 className="font-bold text-gray-800 text-sm">
                                    {item.name}
                                </h6>

                                {/* Role */}
                                <small className="text-[#E2691E] text-xs mt-1">
                                    {item.role}
                                </small>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default Testimonials;
