import React, { useState, useEffect } from 'react';



import News from './News';
import { Link } from 'react-router-dom';



const Home: React.FC = () => {
  // Intro slider images (from public/)
  const assetVersion = '?v=62ceabc';
  const images = [
    `/slider-1.png${assetVersion}`,
    `/slider-3.png${assetVersion}`,
    `/slider-4.png${assetVersion}`,
    `/Grating_ring.png${assetVersion}`,
    `/slider-2.png${assetVersion}`,
    `/fig1.png${assetVersion}`,
  ];
  const fallbackImages = [
    '/integrated-optics.jpg',
    '/nonlinear-photonics.jpg',
    '/photonic-computing.png',
    '/structured-light.png',
    '/integrated-optics.jpg',
    '/structured-light.png',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播：每 15 秒向右滑动一张
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const nextSlide = () => setCurrentIndex((i) => (i + 1) % images.length);

  return (
    <section id="home" className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Intro text */}
        <div className="max-w-5xl w-[78%] mx-auto">
          <div className="text-gray-900 dark:text-white">
             <p className="text-2xl font-bold leading-8">
             Welcome to the UNN Lab at the University of Hong Kong!
             </p>
             <p className="text-base leading-7 mt-4 text-justify">
             We are a group of researchers exploring the frontiers of ultrafast and nonlinear nanophotonics. Building on the fundamentals of linear and nonlinear optics, we leverage the programmable and multimode control of light in integrated photonics to customize light generation and ultrafast nonlinear interactions, for their applications in information processing and computation.
             </p>
           </div>
         </div>
 
        {/* Image slider */}
        <div className="mt-4 relative max-w-5xl w-[78%] mx-auto">
           <div className="overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
             <div
               className="flex transition-transform duration-500"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
              {images.map((src, idx) => (
                <div key={idx} className="min-w-full aspect-[17/9]">
                  <img
                    src={src}
                    onError={(e) => { e.currentTarget.src = fallbackImages[idx] || fallbackImages[0]; }}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
             </div>
           </div>
           <button aria-label="Previous slide" onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent text-white drop-shadow-lg filter p-0 text-4xl focus:outline-none">
               ‹
             </button>
           <button aria-label="Next slide" onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-white drop-shadow-lg filter p-0 text-4xl focus:outline-none">
               ›
             </button>
            <div className="mt-3 flex justify-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full ${currentIndex === idx ? 'bg-hku-green' : 'bg-gray-400/70'} transition-colors`}
                />
              ))}
            </div>
         </div>

        {/* Divider below cards */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Embedded News cards */}
        <div className="max-w-5xl w-[78%] mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">NEWS</h2>
          <News embedded />
        </div>

        {/* Divider below news */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Join Us card */}
        <div className="max-w-5xl w-[78%] mx-auto">
          <div className="rounded-lg p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-900 dark:text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Join Us</h3>
            <div className="space-y-4 mb-6 text-gray-600 dark:text-gray-300 text-justify">
              <p>
                We are always seeking motivated and talented students/postdocs/visitors to join our group. Prior experience in research areas such as integrated (nonlinear) photonics, lasers, photonic computing and structured light is preferred but not required.
              </p>
              <p>
                If you are passionate about pushing the frontiers of photonics with us, please contact Dr. Jianqi Hu (
                <a href="mailto:jianqi@hku.hk" className="text-hku-green hover:underline">jianqi@hku.hk</a>
                ).
              </p>
            </div>
            <Link to="/contact#join-section" className="inline-block bg-hku-green hover:bg-hku-darkGreen text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">Learn more</Link>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Home;