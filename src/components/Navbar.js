import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav
        className="flex justify-center items-center bg-pea-green h-20"
        aria-label="Main navigation"
      >
        <img src="gcd-logo.svg" width={500} />
      </nav>
    </header>
  );
};

export default Navbar;
