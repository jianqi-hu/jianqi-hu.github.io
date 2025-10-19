import React from 'react';
import integratedOptics from '../assets/integrated-optics.jpg';
import nonlinearPhotonics from '../assets/nonlinear-photonics.jpg';
import photonicComputing from '../assets/photonic-computing.png';
import structuredLight from '../assets/structured-light.png';

const Research: React.FC = () => {
  return (
    <section className="pt-40 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h2 className="section-title">Research</h2>
        </div>

        {/* PIXlab focuses 段落 */}
        <div className="max-w-4xl mx-auto -mt-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">PIXlab focuses</h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Integration of photonic components on chip delivers strong benefits in size, weight, power and cost. 
              Dense co-integration with electronics further enhances the capability and functionality of photonic integrated circuits.
            </p>
            <p>
              Silicon photonics has emerged as a leading platform for both device research and system demonstrations. 
              Lasers, modulators, photodetectors and passive devices together provide a complete toolkit for next-generation photonic applications.
            </p>
            <p>
              Our lab focuses on heterogeneous integration to provide an ultimate solution for various applications, 
              aiming to deliver high‑performance and low‑cost photonic integrated circuits.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Heterogeneous integration 模块 */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Heterogeneous integration</h3>

          {/* 图片组 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={integratedOptics} alt="Heterogeneous integration wafer" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={photonicComputing} alt="Integration throughput diagram" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* 文本 */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Heterogeneous integration combines multiple optical functionalities on chip. 
              Different materials can be integrated on a silicon substrate at scale, enabling high‑volume manufacturing of photonic integrated circuits.
            </p>
            <p>
              This approach addresses the need to efficiently integrate III‑V materials on silicon for high‑quality light sources, 
              while leveraging silicon as an indirect‑bandgap platform. 
              Over the years, the field has progressed rapidly by introducing materials with complementary properties and multiple integrated layers.
            </p>
          </div>

          {/* 相关文献 */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Related publications</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>
                C. Xiang, W. Jin, D. Huang, et al., "High‑performance silicon photonics using heterogeneous integration," 
                <span className="italic">Journal of Selected Topics in Quantum Electronics</span>, 2022. 
                <a
                  href="https://scholar.google.com/scholar?q=High-performance%20silicon%20photonics%20using%20heterogeneous%20integration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-800 dark:text-green-400 hover:text-green-900 underline ml-1"
                >
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Laser soliton microcombs 模块 */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Laser soliton microcombs</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={nonlinearPhotonics} alt="Microcombs device" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={structuredLight} alt="Comb spectra visualization" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Laser‑driven soliton microcombs provide evenly spaced frequency lines from compact resonators, 
              enabling applications in precision metrology, coherent communications and on‑chip spectroscopy.
            </p>
            <p>
              Our studies explore low‑threshold operation, dispersion engineering and advanced pumping schemes, 
              targeting robust comb generation compatible with silicon photonics platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;