import { CardSpotlight } from "../../ui/card-spotlight";

const TimelineCard = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="relative wrap overflow-hidden">
          {/* Garis vertikal di tengah */}
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>

          {/* Timeline Item 1 */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            {/* Tanggal di sebelah kiri */}
            <div data-aos="fade-right" className="order-1 w-5/12 text-right">
              <p className="text-gray-300">February 2023 - May 2023</p>
            </div>
            {/* Nomor di tengah */}
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full border-2 border-white">
              <h1 className="mx-auto font-semibold text-lg text-white">
                <svg
                  className="w-3.5 h-3.5 text-white dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </h1>
            </div>
            {/* Konten di sebelah kanan */}
            <CardSpotlight data-aos="fade-left" className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="font-bold text-white text-xl">
                Beshoes Laundry Web Application (Part time)
              </h3>
              <p className="text-gray-400 mb-3">Beshoes Shoes Laundry</p>
              <p className="text-gray-200 leading-tight">
                Developed a laundry order tracking website using pure PHP, HTML,    
                CSS, and JavaScript. Created a user-friendly interface for
                customers to track orders in real-time, including status,
                schedules, and payment details.
              </p>
            </CardSpotlight>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full right-timeline">
            {/* Tanggal di sebelah kiri */}
            <div data-aos="fade-left" className="order-1 w-5/12 text-left pl-4">
              <p className="text-gray-300">Oktober 2023 - Januari 2024</p>
            </div>
            {/* Nomor di tengah */}
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full border-2 border-white">
              <h1 className="mx-auto font-semibold text-lg text-white"><svg
                  className="w-3.5 h-3.5 text-white dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg></h1>
            </div>
            {/* Konten di sebelah kanan */}
            <CardSpotlight data-aos="fade-right" className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="font-bold text-white text-xl">
                Internship Programmer
              </h3>
              <p className="text-gray-400 mb-3">PT. Talenta Sinergi Group</p>
              <p className="text-gray-200 leading-tight">
                Developed a Content Management System (CMS) using Laravel, which
                included features for managing and organizing digital content
                efficiently. Gained hands-on experience in full-stack
                development, database management, and collaborating with a team
                to deliver high-quality solutions.
              </p>
            </CardSpotlight>
          </div>

          {/* Timeline Item 3 */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            {/* Tanggal di sebelah kiri */}
            <div data-aos="fade-right" className="order-1 w-5/12 text-right pr-4">
              <p className="text-gray-300">Juni 2024 - Present</p>
            </div>
            {/* Nomor di tengah */}
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full border-2 border-white">
              <h1 className="mx-auto font-semibold text-lg text-white"><svg
                  className="w-3.5 h-3.5 text-white dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg></h1>
            </div>
            {/* Konten di sebelah kanan */}
            <CardSpotlight data-aos="fade-left" className="order-1 bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="font-bold text-white text-xl">Coming Soon</h3>
              <p className="text-gray-400 mb-3">Coming Soon</p>
              <p className="text-gray-200 leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus quis vero quia laudantium quam ducimus beatae
                perferendis, fuga soluta, labore natus maxime esse aliquam
                veniam temporibus provident in dolorum iste!
              </p>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
