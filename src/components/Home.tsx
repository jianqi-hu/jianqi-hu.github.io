import React, { useState, useEffect } from 'react';

import integratedOptics from '../assets/integrated-optics.jpg';
import nonlinearPhotonics from '../assets/nonlinear-photonics.jpg';
import photonicComputing from '../assets/photonic-computing.png';
import structuredLight from '../assets/structured-light.png';
import centennialCampus from '../assets/centennial-campus.jpg';
import News from './News';
import { Link } from 'react-router-dom';

interface GalleryCardProps {
  title: string;
  description: string;
  image: string;
  to?: string; // optional now
  aspect?: string; // tailwind aspect class, e.g. 'aspect-[4/3]'
  onClick?: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, description, image, aspect = 'aspect-[4/3]', onClick }) => {
  return (
    <div
      className={`block ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => { if (onClick && (e.key === 'Enter' || e.key === ' ')) onClick(); }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className={`w-full ${aspect} overflow-hidden`}>
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  // Intro slider images
  const images = [integratedOptics, nonlinearPhotonics, photonicComputing, structuredLight];
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
             Welcome to the UNIO Lab at the University of Hong Kong!
             </p>
             <p className="text-base leading-7 mt-4">
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
                                <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
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
        <div className="max-w-2xl mx-auto">
          <div className="rounded-lg p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-900 dark:text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Join Us</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              We welcome outstanding students and researchers to join our group.
            </p>
            <Link to="/contact" className="inline-block bg-hku-green hover:bg-hku-darkGreen text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">Learn more</Link>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Home;