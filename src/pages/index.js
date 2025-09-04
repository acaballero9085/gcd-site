'use client';
import { useState, useEffect } from 'react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in when component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-[calc(100vh)] bg-off-white">
      <main
        className={`
          flex flex-col justify-center items-center
          transition-opacity duration-3000 ease-in-out 
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* <div className="w-75 sm:w-80 md:w-100 text-xs sm:text-sm md:text-lg flex justify-between pb-5">
          <span className="font-montserrat">ABOUT</span>
          <span className="font-montserrat">PORTFOLIO</span>
          <span className="font-montserrat">CONTACT</span>
        </div> */}

        {/* Image (bottom on mobile, left on desktop) */}
        <div>
          <img
            src="/images/foyer_landing_page.jpg"
            width={500}
            height={400}
            alt="foyer"
            className="w-80 sm:w-100 md:w-120"
          />
        </div>

        <span className="font-montserrat pt-10">
          hello@gracecaballerodesign.com
        </span>
        <span className="font-montserrat">birmingham, al</span>
      </main>
    </div>
  );
};

export default Home;
