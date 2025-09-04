import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav
        className="flex justify-center items-center bg-off-white"
        aria-label="Main navigation"
      >
        <div className="w-75 sm:w-80 md:w-100 text-xs sm:text-sm md:text-lg flex justify-between py-5">
          <Link href="/about" className="font-montserrat">
            ABOUT
          </Link>
          {/* <Link href="/portfolio" className="font-montserrat pl-4">
            PORTFOLIO
          </Link> */}
          <span className="font-montserrat pl-4">PORTFOLIO</span>
          <Link href="/contact" className="font-montserrat">
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
