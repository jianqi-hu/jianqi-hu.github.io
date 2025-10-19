import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white h-[400px] bg-vahala-blue">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Confining light on a chip:
            <span className="block text-caltech-orange">the science of optical microresonators</span>
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Like a tuning fork for light, optical resonators have a characteristic set of frequencies at which it is possible to confine light waves. At these frequencies, optical energy can be efficiently stored for lengths of time characterized by the resonator Q factor, roughly the storage time in cycles of oscillation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;