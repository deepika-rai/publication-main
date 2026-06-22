import aboutImg from '../assets/library_rack.jpg';

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
    <div className="mt-16 flex flex-col">
      {/* Heading */}
      <div className='flex flex-col items-end w-max mb-5'>
        <p className='text-2xl font-medium uppercase'>About Publication Division of ASI</p>
        <div className='w-16 h-0.5 bg-primary rounded-full'></div>
      </div>

      {/* Grid layout */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-4">
        {/* Left: Image */}
        <div>
          <img
            src={aboutImg}
            alt="Fast Grocery Delivery"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-gray-700 mb-3">

              Publications of the ASI was started by A. Cunningham, the first Director General, who along with his associates, documented vigorously all the results of their tour from1862-63 onwards. In 1874, a new series entitled 'New Imperial Series' was launched which continued upto 1933 containing exhaustive research on antiquarian remains.
            </p>
            <p className="text-gray-700 mb-3">
              John Marshall introduced Annual Reports published in two parts from 1902 onwards. He also started the publication of a new series 'Memoirs of the Archaeological Survey of India', of which the first number appeared in 1919 and the latest (ninety-eight) in 2003. There are three forthcoming Vols. viz., Nagarjunakonda-II, Adam and Udaygiri excavation reports which are in the various stages of printing.
            </p>
            <p className="text-gray-700 mb-3">
              'Ancient India' the Bulletin of the Archaeological Survey of India was started in 1946, which contained general and research articles on different aspects of archaeology in India and adjacent countries.
              The first issue of 'Indian Archaeology – A Review' was published in 1954, which provides information about all important archaeological activities carried out in the country each year.
            </p>
            <p className="text-gray-700 mb-3">
              The monograph on Indian Temple Architecture is also being published under the series 'Architectural Survey of Temples'. The department also brought out various publications under the special publication series. A new series 'Portfolio' also has been introduced highlighting the monumental Heritage. The one such issue has been brought out on 'Ladakh'. Apart from these, Guide Books and Picture Post-Cards on centrally protected monuments have also been published under the World Heritage Series.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Delivery */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Instant PDF Access</h3>
              <p className="text-gray-700 text-sm">
                Download your favorite books instantly in PDF format and start reading anytime, anywhere.
              </p>
            </div>

            {/* Support */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Friendly Customer Support</h3>
              <p className="text-gray-700 text-sm">
                Need help finding a book or order? Our support team is always ready to assist you.
              </p>
            </div>

            {/* Value */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Best Value for Money</h3>
              <p className="text-gray-700 text-sm">
                Discover great deals on books, journals, and study materials at affordable prices.
              </p>
            </div>

            {/* Security */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Safe & Secure Checkout</h3>
              <p className="text-gray-700 text-sm">
                Enjoy a secure checkout experience with trusted payment methods and complete data protection.
              </p>
            </div>
          </div>
          <div>
            <p className="text-gray-700 mb-3">
              The epigraphical publications are also given equal importance. The most important among them, 'Epigraphia Indica' for Sanskrit inscriptions was first published in 1892. So far 42 volumes have been published. In the field of Arabic and Persian inscription, 'Epigraphia Indo-Moslemica' is being brought out.
            </p>
          </div>


        </div>
      </div>
      <div>
        <p className="text-gray-700 mb-3">
          The 'Annual Report on Indian Epigraphy' has been brought out from 1887 till 1995-96, which contains the reports on the epigraphical discoveries made each year. In addition to these, inscriptions of various dynasties were also published under the series 'Corpus Inscriptionum Indicarum'. For the epigraphical records of south India, a separate series 'South Indian Inscriptions' is also being published since 1890.
        </p>
        <p className="text-gray-700 mb-3">
          The south Indian inscriptions are also dealt with from 1905 to 1946 in another series called 'Annual Report of South Indian Epigraphy' which contains brief notes on inscriptions of south India collected during a particular year.
          During the 50th year of Independence of India, the Archaeological Survey of India has also initiated to prepare and publish an 'Inventory of Monuments and Sites of National Importance' containing details of centrally protected monuments and sites under various Circles along with their plans and photographs so that it could cater to the needs of the heritage administrators, scholars and tourists.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;