import { useState } from "react";

const navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [menuOne, setMenuOne] = useState(false);


  return (
    <>
    <section>
      <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
        <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
          <a href="/">
            <img src="/Reichwein50.png" alt="Reichwein" width="200px" className="md:w-80"/>
          </a>
          <div
            className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? "" : "hidden"}`}
          >
                        <a
              href="/"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-red-500"
            >
              Home
            </a>
            <a
              href="/kontakt"
              className="font-inter rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-red-500"
            >
              Kontakt
            </a>
            <a
              href="/karriere"
              className="font-inter lg: rounded-lg lg:px-6 lg:py-4 lg: lg:hover:text-red-500"
            >
              Karriere
            </a>
            <div className="relative flex flex-col">
              <button
                onClick={() => setMenuOne(!menuOne)}
                className={`flex flex-row rounded-lg lg:px-6 lg:py-4 lg:hover:text-red-500 ${menuOne ? "text-gray-800 lg:border lg:border-black" : "text-black lg:border lg:border-white"}`}
              >
                Über uns
                <svg
                  className={`w-6 h-6 fill-current transition-transform duration-300 ${menuOne ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                </svg>
              </button>
              {menuOne && (
                <div className=" z-50 flex w-full flex-col rounded-lg px-5 py-5 lg:absolute lg:top-20 lg:right-1 lg:w-[800px] bg-gray-100 lg:flex-row lg:flex-wrap lg:py-7 xl:w-[950px]">
                  {/* ITEM */}
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5 lg:basis-60 xl:px-8 border border-gray-100 hover:border hover:border-red-500"
                    href="/unsere-dienstleistung"
                  >
                    {/* ICON */}
                    <div className="relative bg-black w-12 p-1 rounded-lg ">
                      <img src="/Favicon.png" alt="Reichwein" width="100" className="transition ease-in-out lg:hover:rotate-90"/>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500">
                      Unsere Dienstleistungen
                    </h2>
                  </a>
                  {/* ITEM */}
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8 border border-gray-100 hover:border hover:border-red-500"
                    href="/innovation-nachhaltigkeit"
                  >
                    {/* ICON */}
                    <div className="relative bg-black w-12 p-1 rounded-lg">
                      <img src="/Favicon.png" alt="Reichwein" width="100" className="transition ease-in-out lg:hover:rotate-90"/>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500">
                      Innovationen, Nachhaltigkeit
                    </h2>
                  </a>
                  {/* ITEM */}
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8 border border-gray-100 hover:border hover:border-red-500"
                    href="/unsere-zertifizierungen"
                  >
                    {/* ICON */}
                    <div className="relative bg-black w-12 p-1 rounded-lg">
                      <img src="/Favicon.png" alt="Reichwein" width="100" className="transition ease-in-out lg:hover:rotate-90"/>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500">
                    Unsere Zertifizierungen
                    </h2>
                  </a>
                  {/* ITEM */}
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8 border border-gray-100 hover:border hover:border-red-500"
                    href="/ds-at-als-arbeitsgeber"
                  >
                    {/* ICON */}
                    <div className="relative bg-black w-12 p-1 rounded-lg">
                      <img src="/Favicon.png" alt="Reichwein" width="100" className="transition ease-in-out lg:hover:rotate-90"/>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500">
                      DS-AT als Arbeitgeber
                    </h2>
                  </a>
                  {/* ITEM */}
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5  lg:basis-60 xl:px-8 border border-gray-100 hover:border hover:border-red-500"
                    href="/unsere-zusaetzlichen-benefits"
                  >
                    {/* ICON */}
                    <div className="relative bg-black w-12 p-1 rounded-lg">
                      <img src="/Favicon.png" alt="Reichwein" width="100" className="transition ease-in-out lg:hover:rotate-90"/>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500">
                      Unsere zusätzlichen Benefits
                    </h2>
                  </a>
                  {/* ITEM */}
                  <a
                    className="flex grow flex-col rounded-lg px-5 py-5 lg:basis-60 xl:px-8 border border-gray-100 hover:border hover:border-red-500"
                    href="/oems-und-partner"
                  >
                    {/* ICON */}
                    <div className="relative bg-black w-12 p-1 rounded-lg">
                      <img src="/Favicon.png" alt="Reichwein" width="100" className="transition ease-in-out lg:hover:rotate-90"/>
                    </div>
                    {/* TEXT */}
                    <h2 className="font-inter mb-1 mt-5 text-lg font-medium text-black lg:hover:text-red-500">
                      OEMs und Partner
                    </h2>
                  </a>
                  
                </div>
              )}
            </div>
          </div>
          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#160042"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#160042"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#160042"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </section>
    </>
  )};

  export default navbar;