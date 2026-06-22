
const Contact = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="mt-16 px-4 md:px-16">
        <div className='flex flex-col items-end w-max mb-5'>
          <p className='text-2xl font-medium uppercase'>Contact Us</p>
          <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>

        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-xl p-6 border border-gray-200">
          {/* Contact Form */}
          {/* <div className="">
            <p className="text-2xl font-medium mb-6">Send Question</p>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block mb-1">Your Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded p-2 outline-[#0000cc]"
                  />
                </div>
                <div>
                  <label className="block mb-1">Your Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded p-2 outline-[#0000cc]"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Your Message <span className="text-red-500">*</span></label>
                <textarea
                  rows={5}
                  placeholder="Write your message"
                  className="w-full border border-gray-300 rounded p-2 outline-[#0000cc]"
                />
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-primary-dull text-white w-full py-3 rounded-full transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div> */}

          {/* Contact Details */}
          <div className="space-y-6 text-[#222]">
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <div className="flex items-center gap-4">
                <span className="text-[#106412] text-xl">📍</span>
                <p className="text-base">Central Archaeological Library Dharohar Bhawan, 24 Tilak Marg New Delhi 110001</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Phones</h3>
              <div className="flex items-center gap-4">
                <span >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#0000cc"
                    className="w-5 h-5 text-blue"                >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z" />
                  </svg>
                </span>
                <p className="text-base">011- 23004578</p>
              </div>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-blue text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#0000cc"
                    className="w-5 h-5 text-blue"                >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.25 1.01l-2.2 2.19z" />
                  </svg>
                </span>
                <p className="text-base">011- 23004579</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <div className="flex items-center gap-4">
                <span className="text-[#106412] text-xl">📧</span>
                <p className="text-base">asilibrary2021@gmail.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <div className="flex items-center gap-4">
                <span className="text-[#106412] text-xl">🕓</span>
                <p className="text-base">Mon-Fri: 10:00 - 18:00 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
