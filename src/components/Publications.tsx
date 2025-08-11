import React, { useState } from 'react';

const Publications: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const publications = [
    {
      title: 'Optical next generation reservoir computing',
      authors: ['Hao Wang', 'Jianqi Hu', 'YoonSeok Baek', 'Sylvain Gigan'],
      journal: 'Light Science & Applications',
      year: 2025,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Arrayed waveguide gratings in lithium tantalate integrated photonics',
      authors: ['Shivaprasad Umesh Hulyal', 'Jianqi Hu', 'Chengli Wang', 'Tobias J. Kippenberg'],
      journal: 'Optica',
      year: 2025,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Self-organized spatiotemporal quasi-phase-matching in microresonators',
      authors: ['Ji Zhou', 'Jianqi Hu', 'Marco Clementi', 'Camille-Sophie Brès'],
      journal: 'Nature Communications',
      year: 2025,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Generalized angle–orbital angular momentum Talbot effect and modulo mode sorting',
      authors: ['Jianqi Hu', 'Matias Eriksson', 'Sylvain Gigan', 'Robert Fickler'],
      journal: 'Nature Photonics',
      year: 2025,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Accelerating Brillouin fiber sensing via destructive-interference-enabled precise raw data acquisition and nonredundant image denoising',
      authors: ['Zonglei Li', 'Yin Zhou', 'Jianqi Hu', 'Lianshan Yan'],
      journal: 'Optica',
      year: 2025,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Ultrabroadband integrated electro-optic frequency comb in lithium tantalate',
      authors: ['Junyin Zhang', 'Chengli Wang', 'Connor Denney', 'Tobias J. Kippenberg'],
      journal: 'Nature',
      year: 2025,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Photonics Breakthroughs 2024: Nonlinear Photonic Computing at Scale',
      authors: ['Hao Wang', 'Jianqi Hu', 'Andrea Morandi', 'Sylvain Gigan'],
      journal: 'IEEE Photonics Journal',
      year: 2025,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Large-scale photonic computing with nonlinear disordered media',
      authors: ['Hao Wang', 'Jianqi Hu', 'Andrea Morandi', 'Sylvain Gigan'],
      journal: 'Nature Computational Science',
      year: 2024,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Reconfigurable radiofrequency filters based on versatile soliton microcombs',
      authors: ['J. Hu†', 'J. He†', 'J. Liu', 'A. S. Raja', 'M. Karpov', 'A. Lukashchuk', 'T. J. Kippenberg', 'C.-S. Brès'],
      journal: 'Nature Communications',
      year: 2020,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Investigation of temporal Talbot effect in a conventional optical tapped delay line structure',
      authors: ['J. Hu', 'S. J. Fabbri', 'C.-B. Huang', 'C.-S. Brès'],
      journal: 'Optics Express',
      year: 2019,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Talbot effect on orbital angular momentum beams: azimuthal intensity repetition-rate multiplication',
      authors: ['J. Hu', 'C.-S. Brès', 'C.-B. Huang'],
      journal: 'Optics Letters',
      year: 2018,
      category: 'Photonics',
      type: 'journal',
      note: 'Top downloads of August 2018'
    },
    {
      title: 'Linearly chirped mid-infrared supercontinuum in all-normal-dispersion chalcogenide photonic crystal fibers',
      authors: ['S. Xing', 'S. Kharitonov', 'J. Hu', 'C.-S. Brès'],
      journal: 'Optics Express',
      year: 2018,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Fiber fuse in Chalcogenide photonic crystal fiber',
      authors: ['S. Xing', 'S. Kharitonov', 'J. Hu', 'C.-S. Brès'],
      journal: 'Optics Letters',
      year: 2018,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'A photonic circuit for complementary frequency shifting, in-phase quadrature/single sideband modulation and frequency multiplication: analysis and integration feasibility',
      authors: ['M. Hasan', 'J. Hu', 'H. Nikkhah', 'T. Hall'],
      journal: 'Journal of Modern Optics',
      year: 2017,
      category: 'Photonics',
      type: 'journal'
    },
    {
      title: 'Soliton Microcombs for RF photonic filters',
      authors: ['J. Hu', 'C.-S. Brès'],
      journal: 'ACP',
      year: 2020,
      category: 'Photonics',
      type: 'conference',
      note: 'Invited'
    },
    {
      title: 'Two-soliton Microcombs Enabled Reconfigurable Microwave Photonic Filters',
      authors: ['J. Hu', 'J. He', 'J. Liu', 'A. S. Raja', 'M. Karpov', 'A. Lukashchuk', 'T. J. Kippenberg', 'C.-S. Brès'],
      journal: 'CLEO',
      year: 2020,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Reconfigurable radiofrequency Photonic filters based on soliton microcombs',
      authors: ['J. Hu', 'J. He', 'A. S. Raja', 'J. Liu', 'T. J. Kippenberg', 'C.-S. Brès'],
      journal: 'OFC',
      year: 2020,
      category: 'Photonics',
      type: 'conference',
      note: 'Top-scored'
    },
    {
      title: 'Optical next generation reservoir computing with complex media',
      authors: ['Hao Wang', 'Jianqi Hu', 'YoonSeok Baek', 'Sylvain Gigan'],
      journal: 'AI and Optical Data Sciences VI',
      year: 2025,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Spatiotemporal Quasi-Phase-Matching in Microresonators',
      authors: ['Marco Clementi', 'Ji Zhou', 'Jianqi Hu', 'Camille-Sophie Brès'],
      journal: 'CLEO',
      year: 2024,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Broadband and turnkey Pockels micro-comb with Monolithic Microwave Resonator',
      authors: ['Junyin Zhang', 'Chengli Wang', 'Connor Denney', 'Tobias Kippenberg'],
      journal: 'IEEE Photonics Conference (IPC)',
      year: 2024,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Ultrabroadband Integrated Triply Resonant Electro-Optic Frequency Comb in Lithium Tantalate',
      authors: ['Junyin Zhang', 'Chengli Wang', 'Connor Denney', 'Tobias J. Kippenberg'],
      journal: 'Asia Communications and Photonics Conference (ACP)',
      year: 2024,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Large-scale photonic computing with nonlinear disordered media',
      authors: ['Hao Wang', 'Jianqi Hu', 'Andrea Morandi', 'Sylvain Gigan'],
      journal: 'AI and Optical Data Sciences V',
      year: 2024,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Add-drop multiplexing architecture for Nyquist OTDM signals based on a single Mach-Zehnder modulator',
      authors: ['J. Hu', 'S. Kharitonov', 'S. J. Fabbri', 'C.-S. Brès'],
      journal: 'ACP',
      year: 2019,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Versatile Amplitude and Phase Filtering in an Optical Tapped Delay Line Structure',
      authors: ['J. Hu', 'S. J. Fabbri', 'C.-B. Huang', 'C.-S. Brès'],
      journal: 'CLEO/EU',
      year: 2019,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Study of fiber fuse induced damage in chalcogenide photonic crystal fibers',
      authors: ['S. Xing', 'S. Kharitonov', 'J. Hu', 'C.-S. Brès'],
      journal: 'ASSL',
      year: 2018,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Self-imaging of Azimuthal Intensity Petal Based on Orbital Angular Momentum Beams',
      authors: ['J. Hu', 'C.-S. Brès', 'C.-B. Huang'],
      journal: 'FIO',
      year: 2018,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Reconfigurable Filter-free Sinc-shaped RF Photonic Filters Based on Rectangular Optical Frequency Comb',
      authors: ['J. Hu', 'S. J. Fabbri', 'C.-S. Brès'],
      journal: 'CLEO',
      year: 2018,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Flexible Width Nyquist Pulse Based on a Single Mach-Zehnder Modulator',
      authors: ['J. Hu', 'S. J. Fabbri', 'C.-S. Brès'],
      journal: 'CLEO',
      year: 2018,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Fiber fuse in GeAsSe photonic crystal fiber and its impact on undamaged segment',
      authors: ['S. Xing', 'S. Kharitonov', 'J. Hu', 'C.-S. Brès'],
      journal: 'CLEO',
      year: 2018,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'MIR supercontinuum in all-normal dispersion Chalcogenide photonic crystal fibers pumped with 2 μm femtosecond laser',
      authors: ['S. Xing', 'S. Kharitonov', 'J. Hu', 'D. Grassani', 'C.-S. Brès'],
      journal: 'ASSL',
      year: 2017,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Stable 2.1 μm near 100% polarized Ho-doped all-fiber laser based on a polarizer-free cavity scheme',
      authors: ['S. Xing', 'S. Kharitonov', 'J. Hu', 'D. Grassani', 'C.-S. Brès'],
      journal: 'ECOC',
      year: 2017,
      category: 'Photonics',
      type: 'conference'
    },
    {
      title: 'Optical Sinc-shaped Nyquist pulse source based on a single Mach-Zehnder modulator',
      authors: ['J. Hu', 'S. J. Fabbri', 'C.-S. Brès'],
      journal: 'ICTON',
      year: 2017,
      category: 'Photonics',
      type: 'conference'
    }
  ];

  const years = ['all', ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)];
  const types = ['all', 'journal', 'conference'];

  const filteredPublications = publications
    .filter(pub => {
      const yearMatch = selectedYear === 'all' || pub.year.toString() === selectedYear;
      const typeMatch = selectedType === 'all' || pub.type === selectedType;
      return yearMatch && typeMatch;
    })
    .sort((a, b) => b.year - a.year);

  const stats = {
    total: publications.length,
    journal: publications.filter(p => p.type === 'journal').length,
    conference: publications.filter(p => p.type === 'conference').length,
    recent: publications.filter(p => p.year >= 2024).length
  };

  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Our research results are published in top international journals and conferences, driving academic development
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-hku-green to-hku-darkGreen text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{stats.total}</div>
            <div className="text-hku-gold">Total Publications</div>
          </div>
          <div className="bg-gradient-to-r from-hku-lightGreen to-hku-green text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{stats.journal}</div>
            <div className="text-green-100">Journal Papers</div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-hku-green text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{stats.conference}</div>
            <div className="text-green-100">Conference Papers</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-hku-lightGreen text-white rounded-xl p-6 text-center">
            <div className="text-3xl font-bold mb-2">{stats.recent}</div>
            <div className="text-green-100">Since 2024</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filter by Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type === 'journal' ? 'Journal' : 'Conference'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex-1">{pub.title}</h3>
                    <div className="flex flex-col items-end ml-4">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {pub.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-gray-600 dark:text-gray-400">Authors: </span>
                    <span className="text-gray-900 dark:text-gray-200">{pub.authors.join(', ')}</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-gray-600 dark:text-gray-400">Journal: </span>
                    <span className="text-gray-900 dark:text-gray-200 font-medium">{pub.journal}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                  {pub.category}
                </span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm capitalize">
                  {pub.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">No publications found matching the criteria</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Publications;