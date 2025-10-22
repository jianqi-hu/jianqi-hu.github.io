import React from 'react';

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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Laboratory of Ultrafast and Nonlinear Integrated Optics (UNIO)</h3>
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

        {/* Integrated nonlinear photonics */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integrated nonlinear photonics</h3>
          <div className="grid md:grid-cols-1 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src="/Integrated nonlinear photonics.png" alt="Integrated nonlinear photonics" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Integrated nonlinear photonics merges the principles of nonlinear optics with photonic integrated circuits. With highly nonlinear optical materials, tightly confined modes, and flexible dispersion engineering, integrated photonics provides an ideal platform for studying nonlinear optics phenomena. Our research focuses on the fundamentals and applications of various χ^((2)) and  χ^((3)) nonlinear effects in microresonators across different material platform. One of our interests is on photo-induced χ^((2)) nonlinear effects in silicon nitride photonics. 
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Integrated ultrafast photonics */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integrated ultrafast photonics</h3>
          <div className="grid md:grid-cols-1 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src="/Integrated ultrafast photonics.png" alt="Integrated ultrafast photonics" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Integrated ultrafast photonics enables the generation and processing of ultrafast optical waveforms in integrated photonics platforms. To date, the performance of chipscale mode-locked lasers still lag behind their bulk counterparts, limiting their wide range of applications. We aim to fill this gap by developing femtosecond lasers based on ion-doped integrated waveguides. In addition, we are also interested in leveraging photonic integrated circuits for ultrafast information processing. 
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Photonic computing */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Photonic computing</h3>
          <div className="grid md:grid-cols-1 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src="/Photonic computing.png" alt="Photonic computing" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Photonic computing harnesses photons to perform computation. Compared to conventional electronic processors, photonics offers potential advantages in speed, bandwidth and energy efficiency, making it a promising platform for neuromorphic computing. Our research focuses on developing next-generation photonic computing systems, preferably based on photonic integrated circuits. 
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        {/* Structured light */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Structured light</h3>
          <div className="grid md:grid-cols-1 gap-6 mb-6">
            <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img src="/Structured light.png" alt="Structured light" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Structured light refers to the shaping of light waves across one or more degrees of freedom. By controlling optical fields in space and/or time, structured light finds applications in optical imaging, classical and quantum information processing. Our approach leverages the famous space-time duality to develop new methods for generating, processing and measuring structured light fields. We are also keen in realizing these functions with integrated photonics. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;