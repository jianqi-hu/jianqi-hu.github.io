import React, { useState, useEffect } from 'react';

import integratedOptics from '../assets/integrated-optics.jpg';
import nonlinearPhotonics from '../assets/nonlinear-photonics.jpg';
import photonicComputing from '../assets/photonic-computing.png';
import structuredLight from '../assets/structured-light.png';
import centennialCampus from '../assets/centennial-campus.jpg';

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
      className="block cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
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
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    image: string;
    content: string;
  } | null>(null);

  // 锁定背景滚动，避免滚动穿透到 Home 页面
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedArticle]);

  const openArticle = (key: string) => {
    const map: Record<string, { title: string; image: string; content: string }> = {
      'Integrated Optics': {
        title: 'Integrated Optics',
        image: integratedOptics,
        content:
          `Integrated optics studies photonic circuits on chips, enabling compact, stable and scalable optical systems.\n\n` +
          `We design and fabricate waveguides, couplers, gratings and interferometers to manipulate light at micron scales.\n\n` +
          `Applications span sensing, communications and quantum technologies, benefiting from low size, weight and power.`,
      },
      'Nonlinear Photonics': {
        title: 'Nonlinear Photonics',
        image: nonlinearPhotonics,
        content:
          `Nonlinear photonics harnesses intensity-dependent phenomena for frequency conversion, comb generation and ultrafast dynamics.\n\n` +
          `Our work explores phase matching, dispersion engineering, and microresonator-based nonlinear processes.\n\n` +
          `These effects empower broadband sources and novel information processing schemes.`,
      },
      'Photonic Computing': {
        title: 'Photonic Computing',
        image: photonicComputing,
        content:
          `Photonic computing uses light to perform operations with high bandwidth and low latency.\n\n` +
          `We investigate optical linear algebra, neuromorphic computing, and complex media for large-scale parallelism.\n\n` +
          `The goal is energy-efficient computation beyond traditional electronic limits.`,
      },
      'Structured Light': {
        title: 'Structured Light',
        image: structuredLight,
        content:
          `Structured light tailors amplitude, phase, polarization and spatial modes to achieve precision control.\n\n` +
          `We study orbital angular momentum (OAM) beams, vector beams and tailored fields for sensing and manipulation.\n\n` +
          `This enables novel imaging, metrology and information encoding strategies.`,
      },
      'Lab & Campus': {
        title: 'Lab & Campus',
        image: centennialCampus,
        content:
          `The University of Hong Kong Campus and our lab facilities support cutting-edge research.\n\n` +
          `Our environment fosters collaboration, experimentation and innovation across disciplines.\n\n` +
          `Here we build photonic systems, validate theory, and train the next generation of researchers.`,
      },
    };
    setSelectedArticle(map[key] || null);
  };

  const closeArticle = () => setSelectedArticle(null);

  return (
    <section id="home" className="pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* 12 列 2 行：左右列为两张卡，中心卡跨两行 */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-x-8 md:gap-y-2">
          {/* 左上 */}
          <div className="md:col-span-3 md:col-start-1 md:row-start-1">
            <GalleryCard
              title="Integrated Optics"
              description="Chip-scale photonics enabling compact, robust optical systems."
              image={integratedOptics}
              aspect="aspect-[4/3]"
              onClick={() => openArticle('Integrated Optics')}
            />
          </div>

          {/* 左下 */}
          <div className="md:col-span-3 md:col-start-1 md:row-start-2">
            <GalleryCard
              title="Nonlinear Photonics"
              description="Harnessing optical nonlinearities for frequency combs and beyond."
              image={nonlinearPhotonics}
              aspect="aspect-[4/3]"
              onClick={() => openArticle('Nonlinear Photonics')}
            />
          </div>

          {/* 右上 */}
          <div className="md:col-span-3 md:col-start-10 md:row-start-1">
            <GalleryCard
              title="Photonic Computing"
              description="Computing with light for speed and efficiency."
              image={photonicComputing}
              aspect="aspect-[4/3]"
              onClick={() => openArticle('Photonic Computing')}
            />
          </div>

          {/* 右下 */}
          <div className="md:col-span-3 md:col-start-10 md:row-start-2">
            <GalleryCard
              title="Structured Light"
              description="Tailoring light fields for precision sensing and manipulation."
              image={structuredLight}
              aspect="aspect-[4/3]"
              onClick={() => openArticle('Structured Light')}
            />
          </div>

          {/* 中心卡：跨两行，按当前高度再减半 → 提高纵横比 */}
          <div className="md:col-span-6 md:col-start-4 md:row-span-2">
            <GalleryCard
              title="Lab & Campus"
              description="The University of Hong Kong Campus and our Lab facilities."
              image={centennialCampus}
              aspect="aspect-[8/5]"
              onClick={() => openArticle('Lab & Campus')}
            />
          </div>
        </div>

        {selectedArticle && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto p-4"
            onClick={closeArticle}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full mx-4 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{selectedArticle.title}</h3>
                <button onClick={closeArticle} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">✕</button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="h-64 w-full overflow-hidden rounded-lg mb-6">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>
                <div className="prose dark:prose-invert max-w-none">
                  {selectedArticle.content.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <button onClick={closeArticle} className="btn-secondary">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;