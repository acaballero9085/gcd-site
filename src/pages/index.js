'use client';
import { useState, useEffect } from 'react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in when component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-pea-green">
      <main
        className={`
          flex flex-col-reverse md:flex-row justify-center items-center py-12 
          transition-opacity duration-3000 ease-in-out 
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Image (bottom on mobile, left on desktop) */}
        <div className="mt-8 md:mt-0 md:mr-12">
          <img
            src="/images/foyer_landing_page.jpg"
            width={500}
            height={400}
            alt="foyer"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* Divider – hidden on mobile */}
        <div className="hidden md:block h-[500px] border-l border-off-white" />

        {/* Text (top on mobile, right on desktop) */}
        <div className="font-lato flex flex-col justify-center text-center md:text-left w-full md:w-[350px] h-auto md:h-[400px] mb-6 md:mb-0">
          {/* Mobile: one line */}
          <span className="block md:hidden text-2xl sm:text-3xl md:text-4xl text-off-white">
            Grace Caballero Design
          </span>

          {/* Desktop: staggered lines */}
          <div className="hidden md:flex flex-col md:pl-10">
            <span className="text-4xl lg:text-5xl text-off-white">Grace</span>
            <span className="text-4xl lg:text-5xl text-off-white pl-12 py-1">
              Caballero
            </span>
            <span className="text-4xl lg:text-5xl text-off-white pl-24 py-1">
              Design
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
