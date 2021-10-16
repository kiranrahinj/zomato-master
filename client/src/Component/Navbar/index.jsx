import { FaUserAlt } from "react-icons/fa";

const mobileNav = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between lg:hidden">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3 ml-24 relative">
          <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
            Use App
          </button>
          <span className="border border-grey-500 text-zomato-400 rounded-full">
            <FaUserAlt />
          </span>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <div className="md:hidden" >
        <mobileNav/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
