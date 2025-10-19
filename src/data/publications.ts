export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  category: string;
  type: string;
  note?: string;
  details?: string; // volume/pages/article number, e.g. "volume 4, Article number: 18"
}

export const preprints: Publication[] = [
  {
    title: 'Optical next generation reservoir computing',
    authors: ['Hao Wang', 'Jianqi Hu', 'YoonSeok Baek', 'Sylvain Gigan'],
    journal: 'arXiv',
    year: 2025,
    category: 'Photonics',
    type: 'preprint',
    details: 'preprint'
  },
  {
    title: 'Spatiotemporal Quasi-Phase-Matching in Microresonators',
    authors: ['Marco Clementi', 'Ji Zhou', 'Jianqi Hu', 'Camille-Sophie Brès'],
    journal: 'arXiv',
    year: 2024,
    category: 'Photonics',
    type: 'preprint',
    details: 'preprint'
  },
  {
    title: 'Ultrabroadband integrated electro-optic frequency comb in lithium tantalate',
    authors: ['Junyin Zhang', 'Chengli Wang', 'Connor Denney', 'Tobias J. Kippenberg'],
    journal: 'arXiv',
    year: 2024,
    category: 'Photonics',
    type: 'preprint',
    details: 'preprint'
  }
];

export const publications: Publication[] = [
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