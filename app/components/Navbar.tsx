import "@fontsource/open-sans";
import "@fontsource/roboto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      {/* header top start */}
      <div
        className="container mx-auto header"
        style={{ background: "#ffffff" }}
      >
        <header
          className={"text-black-900"}
          style={{ fontFamily: "sans-serif, Open Sans" }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-5 border-b-2">
            <nav className="flex flex-wrap items-center text-base md:ml-auto lg:w-2/5">
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="w-4 ml-4 absolute top-1/2 transform -translate-y-1/2 text-gray-900"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10  rounded-md px-3 py-2 outline-none focus:border-blue-500"
                />
              </div>
            </nav>
            <a
              href="#"
              className="title-font order-first mb-4 md:mb-0 lg:order-none lg:w-1/5 lg:items-center lg:justify-center flex items-center font-medium text-gray-900"
            >
              <svg
                width="32"
                height="20"
                viewBox="0 0 62 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M15,0L30,15L15,30L0,15L15,0Z"
                  stroke="#000000"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M31,0L46,15L31,30L16,15L31,0Z"
                  stroke="#000000"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M47,0L62,15L47,30L32,15L47,0Z"
                  stroke="#000000"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mx-1 text-xl ">CORAL</span>
              <svg
                width="32"
                height="20"
                viewBox="0 0 62 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M15,0L30,15L15,30L0,15L15,0Z"
                  stroke="#000000"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M31,0L46,15L31,30L16,15L31,0Z"
                  stroke="#000000"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M47,0L62,15L47,30L32,15L47,0Z"
                  stroke="#000000"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="ml-5 flex items-center lg:ml-0 lg:w-2/5 lg:justify-end">
              <button className="mt-4 inline-flex items-center rounded border-0 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
                <FontAwesomeIcon icon={faUser} className="w-3 me-2" />
                Account
              </button>
              <button className="mt-4 ml-4 inline-flex items-center rounded border-0 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
                <FontAwesomeIcon icon={faBagShopping} className="w-3 me-2" />
                Shopping
              </button>
            </div>
          </div>
          <div className=" flex flex-wrap justify-between mt-4">
            <button className="mt-4 inline-flex items-center rounded border-0 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
              Jewelry & Accessories
            </button>
            <button className="mt-4 ml-4 inline-flex items-center rounded border-0 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
              Clothing & Shoes
            </button>
            <button className="mt-4 ml-4 inline-flex items-center rounded border-0 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
              Home & Living
            </button>
            <button className="mt-4 ml-4 inline-flex items-center rounded border-0 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
              Wedding & Party
            </button>
            <button className="mt-4 ml-4 inline-flex items-center rounded border-0 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
              Toys & Entertainment
            </button>
            <button className="mt-4 ml-4 inline-flex items-center rounded border-0 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
              Art & Collectibles
            </button>
            <button className="mt-4 ml-4 inline-flex items-center rounded border-0 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
              Craft Supplies & Tools
            </button>
          </div>
        </header>
      </div>
      {/* header top start */}
    </>
  );
}

export default Navbar;
