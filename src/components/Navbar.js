import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav
        className="flex justify-center items-center bg-off-white"
        aria-label="Main navigation"
      >
        <div className="w-75 sm:w-80 md:w-100 text-xs sm:text-sm md:text-lg flex justify-between py-5">
          <span className="font-montserrat">ABOUT</span>
          <span className="font-montserrat">PORTFOLIO</span>
          <span className="font-montserrat">CONTACT</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
