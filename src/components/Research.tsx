import React from 'react';

const Research: React.FC = () => {
  return (
    <section className="pt-40 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h2 className="section-title">Research</h2>
        </div>

        {/* UNOlab overview removed per request */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Integrated nonlinear photonics */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integrated nonlinear photonics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-start">
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>
                Integrated nonlinear photonics merges the principles of nonlinear optics with photonic integrated circuits. With highly nonlinear optical materials, tightly confined modes, and flexible dispersion engineering, integrated photonics provides an ideal platform for studying nonlinear optics phenomena. Our research focuses on the fundamentals and applications of various χ^((2)) and  χ^((3)) nonlinear effects in microresonators across different material platform. One of our interests is on photo-induced χ^((2)) nonlinear effects in silicon nitride photonics.
              </p>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                <span>Further reading:</span>
                <div>
                  <a href="https://www.nature.com/articles/s41467-025-59215-1" target="_blank" rel="noopener noreferrer" className="text-hku-green hover:underline">Nature Communications (2025)</a>
                </div>
                <div>
                  <a href="https://www.science.org/doi/10.1126/sciadv.add8252" target="_blank" rel="noopener noreferrer" className="text-hku-green hover:underline">Science Advances (2022)</a>
                </div>
                <div>
                  <a href="https://www.nature.com/articles/s41566-021-00925-5" target="_blank" rel="noopener noreferrer" className="text-hku-green hover:underline">Nature Photonics (2022)</a>
                </div>
                <div>
                  <a href="https://www.nature.com/articles/s41467-020-18215-z" target="_blank" rel="noopener noreferrer" className="text-hku-green hover:underline">Nature Communications (2020)</a>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 -mt-8 md:-mt-10 lg:-mt-12">
              <img src="/Integrated nonlinear photonics.png?v=6502cb1" alt="Integrated nonlinear photonics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Integrated ultrafast photonics */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integrated ultrafast photonics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-start">
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>
                Integrated ultrafast photonics enables the generation and processing of ultrafast optical waveforms in integrated photonics platforms. To date, the performance of chipscale mode-locked lasers still lag behind their bulk counterparts, limiting their wide range of applications. We aim to fill this gap by developing femtosecond lasers based on ion-doped integrated waveguides. In addition, we are also interested in leveraging photonic integrated circuits for ultrafast information processing. 
              </p>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                <span>Further reading:</span>
                <div>
                  <a href="https://arxiv.org/abs/2509.05133" target="_blank" rel="noopener noreferrer" className="text-hku-green hover:underline">arXiv (2025)</a>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 -mt-8 md:-mt-10 lg:-mt-12">
              <img src="/Integrated ultrafast photonics.png" alt="Integrated ultrafast photonics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Photonic computing */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Photonic computing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-start">
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>
                Photonic computing harnesses photons to perform computation. Compared to conventional electronic processors, photonics offers potential advantages in speed, bandwidth and energy efficiency, making it a promising platform for neuromorphic computing. Our research focuses on developing next-generation photonic computing systems, preferably based on photonic integrated circuits. 
              </p>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                <span>Further reading:</span>
                <div>
                  <a href="https://www.nature.com/articles/s41377-025-01927-6" target="_blank" rel="noopener noreferrer" className="text-hku-green hover:underline">Light: Science & Applications (2025)</a>
                </div>
                <div>
                  <a href="https://www.nature.com/articles/s43588-024-00644-1" target="_blank" rel="noopener noreferrer" className="text-hku-green hover:underline">Nature Computational Science (2024)</a>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 -mt-8 md:-mt-10 lg:-mt-12 h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
              <img src="/Photonic computing.png?v=6502cb1" alt="Photonic computing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Structured light */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Structured light</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-start">
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <p>
                Structured light refers to the shaping of light waves across one or more degrees of freedom. By controlling optical fields in space and/or time, structured light finds applications in optical imaging, classical and quantum information processing. Our approach leverages the famous space-time duality to develop new methods for generating, processing and measuring structured light fields. We are also keen in realizing these functions with integrated photonics. 
              </p>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                <span>Further reading:</span>
                <div>
                  <a href="https://www.nature.com/articles/s41566-025-01622-3" target="_blank" rel="noopener noreferrer" className="text-hku-green hover:underline">Nature Photonics (2025)</a>
                </div>
                <div>
                  <a href="https://www.spiedigitallibrary.org/journals/advanced-photonics/volume-5/issue-3/036006/Single-shot-KramersKronig-complex-orbital-angular-momentum-spectrum-retrieval/10.1117/1.AP.5.3.036006.full" target="_blank" rel="noopener noreferrer" className="text-hku-green hover:underline">Advanced Photonics (2023)</a>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 -mt-8 md:-mt-10 lg:-mt-12">
              <img src="/Structured light.png?v=6502cb1" alt="Structured light" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;