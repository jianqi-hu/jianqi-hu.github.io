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

        {/* UNOlab overview */}
        <div className="max-w-4xl mx-auto -mt-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ultrafast Nonlinear Optical Laboratory (UNOlab)</h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              UNOlab focuses on ultrafast nonlinear optics and integrated photonics. Integration of photonic components on chip delivers strong benefits in size, weight, power and cost, while dense co‑integration with electronics further enhances the capability and functionality of photonic integrated circuits.
            </p>
            <p>
              We leverage silicon photonics and emerging platforms including silicon nitride, III–V/Si heterogeneous integration and thin‑film lithium niobate to realize ultrafast sources, modulators, photodetectors and nonlinear devices. These building blocks enable next‑generation applications in frequency combs, communications and sensing.
            </p>
            <p>
              Our goal is to deliver high‑performance, energy‑efficient and cost‑effective photonic integrated systems for science and industry, driven by four directions: integrated nonlinear photonics, integrated ultrafast photonics, photonic computing, and structured light.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Integrated nonlinear photonic */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integrated nonlinear photonic</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={nonlinearPhotonics} alt="Integrated nonlinear photonic" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={integratedOptics} alt="On-chip nonlinear devices" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              We investigate chip-scale nonlinear processes and devices enabling efficient frequency conversion, parametric gain, and advanced light control on silicon platforms.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Integrated ultrafast photonics */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integrated ultrafast photonics</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={integratedOptics} alt="Integrated ultrafast photonics" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={nonlinearPhotonics} alt="Ultrafast photonics devices" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Our work targets integrated sources and components for femtosecond-to-picosecond light generation and manipulation, supporting precision metrology and high-speed communications.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Photonic computing */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Photonic computing</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={photonicComputing} alt="Photonic computing" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={integratedOptics} alt="Integrated photonic circuits" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              We explore computing architectures using light for high throughput and energy efficiency, leveraging integrated photonics for matrix operations and signal processing.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Structured light */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Structured light</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={structuredLight} alt="Structured light beams" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src={nonlinearPhotonics} alt="On-chip beam shaping" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              We design and control structured light fields for sensing and manipulation, focusing on compact, integrated implementations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;