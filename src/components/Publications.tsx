import React from 'react';

const Publications: React.FC = () => {
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

  // 按年份降序排序并分组
  const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);
  const byYear = (year: number) => publications.filter(p => p.year === year);

  // 生成 Google Scholar 搜索链接（如果没有具体链接）
  const scholarLink = (title: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;

  return (
    <section className="pt-40 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Publications</h2>
          {/* 副标题移除：原有 Google Scholar 提示文字删除 */}
        </div>

        {/* 年份分组列表 */}
        {years.map((year) => (
          <div key={year} className={`mb-12 ${year === 2025 ? '-mt-4' : ''}`}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{year}</h3>
            <div className="space-y-6">
              {byYear(year).map((pub, index) => (
                <div key={`${year}-${index}`}>
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {pub.title}
                  </div>
                  <div className="italic text-gray-600 dark:text-gray-400">
                    {pub.authors.join(', ')}
                  </div>
                  <a
                    href={scholarLink(pub.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-caltech-orange dark:text-caltech-orange hover:text-caltech-orange hover:underline"
                  >
                    {pub.journal} ({pub.year})
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;