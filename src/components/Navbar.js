import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between items-center bg-pea-green h-16" aria-label="Main navigation">
        <Link className="font-lato text-2xl text-off-white pl-5" href="/">Grace Caballero Design</Link>

        {/* <ul className="flex flex-row items-center pr-5">
          <li className="text-off-white px-2"><Link href="about">About</Link></li>
          <li className="text-off-white px-2"><Link href="portfolio">Portfolio</Link></li>
        </ul> */}
      </nav>
    </header>
  )
}

export default Navbar;
