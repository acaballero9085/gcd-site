import { useState, useEffect } from 'react';

const About = () => {
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
          transition-opacity duration-2500 ease-in-out 
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <span className="font-montserrat pt-6">birmingham, al</span>
      </main>
    </div>
  );
};

export default About;
