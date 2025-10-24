export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  category: string;
  type: string;
  note?: string;
  details?: string; // volume/pages/article number, e.g. "volume 4, Article number: 18"
  url?: string; // optional direct link to the paper
  links?: Record<string, string>; // optional per-tag links like { 'EPFL News': '...' }
}

export const preprints: Publication[] = [];


export const publications: Publication[] = [


  {
    title: 'High-pulse-energy integrated mode-locked lasers based on a Mamyshev oscillator',
    authors: ['Z. Qiu†', 'J. Hu†', 'X. Yang†', 'Z. Liu', 'Y. Zhang', 'X. Ji', 'J. Sun', 'G. Lihachev', 'X. Li', 'Z. Li', 'U. Kentsch', 'T. J. Kippenberg∗'],
    journal: 'submitted',
    year: 2025,
    category: 'Photonics',
    type: 'journal'
  },
  {
    title: 'Optical next generation reservoir computing',
    authors: ['H. Wang†', 'J. Hu†,∗', 'Y. Baek', 'K. Tsuchiyama', 'M. Joly', 'Q. Liu∗', 'S. Gigan∗'],
    journal: 'Light: Science & Applications',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '14, 245',
    url: 'https://www.nature.com/articles/s41377-025-01927-6'
  },
  {
    title: 'Self-organized spatiotemporal quasi-phase-matching in microresonators',
    authors: ['J. Zhou†', 'J. Hu†,∗', 'M. Clementi†', 'O. Yakar', 'E. Nitiss', 'C.-S. Brès∗'],
    journal: 'Nature Communications',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '16, 4083',
    url: 'https://www.nature.com/articles/s41467-025-59215-1'
  },
  {
    title: 'Photonics Breakthroughs 2024: Nonlinear Photonic Computing at Scale',
    authors: ['H. Wang†', 'J. Hu†,∗', 'A. Morandi', 'A. Nardi', 'F. Xia', 'X. Li', 'R. Savo', 'Q. Liu', 'R. Grange', 'S. Gigan∗'],
    journal: 'IEEE Photonics Journal',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '17 [Invited]',
    url: 'https://ieeexplore.ieee.org/document/10909496/'
  },
  {
    title: 'Generalized angle-orbital-angular-momentum Talbot effect and modulo mode sorting',
    authors: ['J. Hu†,∗', 'M. Eriksson†', 'S. Gigan', 'R. Fickler'],
    journal: 'Nature Photonics',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '19, 392–399 [News & Views] [Phys.org] [EurekAlert] [Tampere University]',
    url: 'https://www.nature.com/articles/s41566-025-01622-3',
    links:{
      'News & Views':'https://www.nature.com/articles/s41566-025-01652-x',
      'Phys.org':'https://phys.org/news/2025-02-imaging-cylindrical-unveils-space-duality.html',
      'EurekAlert':'https://www.eurekalert.org/news-releases/1074557',
      'Tampere University':'https://www.tuni.fi/en/news/self-imaging-structured-light-new-dimensions'
    }
  },
  {
    title: 'Large-scale photonic computing with nonlinear disordered media',
    authors: ['H. Wang†', 'J. Hu†,∗', 'A. Morandi', 'A. Nardi', 'F. Xia', 'X. Li', 'R. Savo', 'Q. Liu', 'R. Grange', 'S. Gigan∗'],
    journal: 'Nature Computational Science',
    year: 2024,
    category: 'Photonics',
    type: 'journal',
    details: '4, 429–439 [News & Views] [Issue Cover] [ETH News] [CREF News]',
    url: 'https://www.nature.com/articles/s43588-024-00644-1',
    links:{
      'News & Views':'https://www.nature.com/articles/s43588-024-00648-x',
      'Issue Cover':'https://www.nature.com/natcomputsci/volumes/4/issues/6',
      'ETH News':'https://www.phys.ethz.ch/news-and-events/d-phys-news/2024/07/nonlinearity-makes-photonic-neural-networks-smarter.html',
      'CREF News':'https://www.cref.it/en/news-en/new-materials-for-photonic-computers/'
    }
  },
  {
    title: 'Single-shot Kramers-Kronig complex orbital angular momentum spectrum retrieval',
    authors: ['Z. Lin†', 'J. Hu†,∗', 'Y. Chen', 'C.-S. Brès', 'S. Yu∗'],
    journal: 'Advanced Photonics',
    year: 2023,
    category: 'Photonics',
    type: 'journal',
    details: '5, 036006 [SPIE News] [Phys.org] [EurekAlert]',
    url: 'https://www.spiedigitallibrary.org/journals/advanced-photonics/volume-5/issue-3/036006/Single-shot-KramersKronig-complex-orbital-angular-momentum-spectrum-retrieval/10.1117/1.AP.5.3.036006.full',
    links:{
      'SPIE News':'https://spie.org/news/new-technique-measures-structured-light-in-a-single-shot',
      'Phys.org':'https://phys.org/news/2023-08-technique-shot.html',
      'EurekAlert':'https://www.eurekalert.org/news-releases/998043'
    }
  },
  {
    title: 'Photo-induced cascaded harmonic and comb generation in silicon nitride microresonators',
    authors: ['J. Hu†', 'E. Nitiss†', 'J. He', 'J. Liu', 'O. Yakar', 'T. J. Kippenberg', 'C.-S. Brès∗'],
    journal: 'Science Advances',
    year: 2022,
    category: 'Photonics',
    type: 'journal',
    details: '8, eadd8252',
    url: 'https://www.science.org/doi/10.1126/sciadv.add8252'
  },
  {
    title: 'Temporal Talbot effect of optical dark pulse trains',
    authors: ['J. Wu', 'J. Hu∗', 'C.-S. Brès'],
    journal: 'Optics Letters',
    year: 2022,
    category: 'Photonics',
    type: 'journal',
    details: '47, 953-956 [Editor’s Pick] [Top Downloads]',
    url:'https://opg.optica.org/ol/abstract.cfm?uri=OL-47-4-953'
  },
  {
    title: 'Optically reconfigurable quasi-phase-matching in silicon nitride microresonators',
    authors: ['E. Nitiss†', 'J. Hu†', 'A Stroganov', 'C.-S. Brès∗'],
    journal: 'Nature Photonics',
    year: 2022,
    category: 'Photonics',
    type: 'journal',
    details: '16, 134-141 [EPFL News] [Phys.org]',
    url:'https://www.nature.com/articles/s41566-021-00925-5',
    links:{
      'EPFL News':'https://actu.epfl.ch/news/an-optical-chip-improved-by-light/',
      'Phys.org':'https://phys.org/news/2022-01-optical-chip.html'
    }
  },
  {
    title: 'Spectral self-imaging of optical orbital angular momentum modes',
    authors: ['Z. Lin†', 'J. Hu†,∗', 'Y. Chen', 'S. Yu', 'C.-S. Brès'],
    journal: 'APL Photonics',
    year: 2021,
    category: 'Photonics',
    type: 'journal',
    details: '6, 111302',
    url:'https://pubs.aip.org/aip/app/article/6/11/111302/123462'
  },
  {
    title: 'Reconfigurable radiofrequency filters based on versatile soliton microcombs',
    authors: ['J. Hu†,∗', 'J. He†', 'J. Liu', 'A. S. Raja', 'M. Karpov', 'A. Lukashchuk', 'T. J. Kippenberg∗', 'C.-S. Brès∗'],
    journal: 'Nature Communications',
    year: 2020,
    category: 'Photonics',
    type: 'journal',
    details: '11, 4377 [EPFL News] [Phys.org]',
    url:'https://www.nature.com/articles/s41467-020-18215-z',
    links:{
      'EPFL News':'https://actu.epfl.ch/news/reconfiguring-microwave-photonic-filters-without-a/',
      'Phys.org':'https://phys.org/news/2020-09-reconfiguring-microwave-photonic-filters-external.html'
    }
  },
  {
    title: 'Investigation of temporal Talbot effect in a conventional optical tapped delay line structure',
    authors: ['J. Hu†', 'S. J. Fabbri', 'C.-B. Huang', 'C.-S. Brès'],
    journal: 'Optics Express',
    year: 2019,
    category: 'Photonics',
    type: 'journal',
    details: '27, 7922-7934',
    url:'https://opg.optica.org/oe/fulltext.cfm?uri=oe-27-6-7922'
  },
  {
    title: 'Talbot effect on orbital angular momentum beams: azimuthal intensity repetition-rate multiplication',
    authors: ['J. Hu', 'C.-S. Brès∗', 'C.-B. Huang∗'],
    journal: 'Optics Letters',
    year: 2018,
    category: 'Photonics',
    type: 'journal',
    details: '43, 4033-4036 [Top downloads]',
    url:'https://opg.optica.org/ol/abstract.cfm?uri=ol-43-16-4033'
  },
  {
    title: 'A photonic integrated dispersion-managed mode-locked laser',
    authors: ['X. Li', 'Z. Qiu', 'X. Yang', 'X. Ji', 'J. Sun', 'J. Hu', 'U. Kentsch', 'Tobias J. Kippenberg∗'],
    journal: 'submitted',
    year: 2025,
    category: 'Photonics',
    type: 'journal'
  },
  {
    title: 'Large-scale integrated optoelectronic chaos for machine learning acceleration',
    authors: ['Z. Pan†', 'Z. Zheng†', 'P. Li', 'H. Wang', 'J. Guo', 'D. Cui', 'Z. Li', 'J. Shen', 'L. Wang', 'M. Zong', 'S. Li', 'Z. Kang', 'Y. Yuan', 'J. Hu', 'J. He∗', 'Y. Liang∗', 'D. Zhu∗', 'S. Pan∗'],
    journal: 'submitted',
    year: 2025,
    category: 'Photonics',
    type: 'journal'
  },
  {
    title: 'Roadmap on Neuromorphic Photonics',
    authors: ['D. Brunner∗', 'B. J. Shastri∗', '... J. Hu', '... W. Zhang'],
    journal: 'submitted',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '[Invited review]'
  },
  {
    title: 'Integrated tunable green light source on silicon nitride',
    authors: ['G. Wang', 'O. Yakar', 'X. Ji', 'M. Clementi', 'J. Zhou', 'C. Lafforgue', 'J. Wu', 'J. Hu', 'T. J. Kippenberg', 'C.-S. Brès'],
    journal: 'Light: Science & Applications',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: 'in revision',
    url: ' https://arxiv.org/abs/2504.13662'
    
  },
  {
    title: 'Dispersion-Engineered Compact Twisted Metasurfaces Enabling 3D Frequency-Reconfigurable Holography',
    authors: ['C. Pang∗', 'Y. Wang∗,†', 'P. Wang', 'A. Yu', 'Y. Liu', 'Z. Yue', 'M. Hu', 'J. Hu', 'Y. Dong', 'J. Qi†'],
    journal: 'PhotoniX',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '6, 33',
    url:'https://link.springer.com/article/10.1186/s43074-025-00192-5'
  },
  {
    title: 'Computational field-resolved coherent chemical imaging',
    authors: ['S. Zhao∗', 'L. Chibani', 'E. Chandler', 'F. Liu', 'J. Hu', 'L. Valzania', 'U. S. Kamilov', 'H. B. de Aguiar∗'],
    journal: 'Nature Communications',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '16, 7406',
    url: 'https://www.nature.com/articles/s41467-025-62716-8'
  },

  {
    title: 'Arrayed waveguide gratings in lithium tantalate integrated photonics',
    authors: ['S. U. Hulyal', 'J. Hu', 'C. Wang', 'J. Cai', 'G. Lihachev', 'T. J. Kippenberg'],
    journal: 'Optica',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '12, 978-984',
    url: 'https://doi.org/10.1364/OPTICA.565570'
  },
  {
    title: 'Boosting Brillouin fiber sensing via precise raw data acquisition and image denoising',
    authors: ['Z. Li', 'Y. Zhou', 'J. Hu', 'J. Yao', 'L. Yan∗'],
    journal: 'Optica',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '12, 216-227',
    url: 'https://doi.org/10.1364/OPTICA.540409'
  },
  {
    title: 'Ultrabroadband integrated electro-optic frequency comb in lithium tantalate',
    authors: ['J. Zhang†', 'C. Wang†', 'C. Denney†', 'J. Riemensberger†', 'G. Lihachev', 'J. Hu', 'W. Kao', 'T. Blésin', 'N. Kuznetsov', 'Z. Li', 'M. Churaev', 'X. Ou', 'G. Santamaria-Botello∗', 'T. J. Kippenberg∗'],
    journal: 'Nature',
    year: 2025,
    category: 'Photonics',
    type: 'journal',
    details: '637, 1096–1103 [EPFL News] [Phys.org]',
    url: 'https://www.nature.com/articles/s41586-024-08354-4',
    links:{
      'EPFL News':'https://news.epfl.ch/news/compact-comb-lights-the-way-for-next-gen-photonics/',
      'Phys.org':'https://phys.org/news/2025-01-compact-gen-photonics.html'
    }
  },
  {
    title: 'Azimuthal beam shaping in orbital angular momentum basis',
    authors: ['Z. Lin†', 'W. Zhong†', 'L. Wu', 'L. He', 'H. Chen', 'J. Hu', 'Y. Chen∗', 'S. Yu∗'],
    journal: 'Advanced Photonics Nexus',
    year: 2024,
    category: 'Photonics',
    type: 'journal',
    details: '3, 026001',
    url: 'https://infoscience.epfl.ch/server/api/core/bitstreams/9eae6970-714a-4d3a-9f22-df560aa1f8d6/content'
  },
  {
    title: 'Integrated backward second-harmonic generation through optically induced quasi-phase matching',
    authors: ['O. Yakar', 'E. Nitiss', 'J. Hu', 'C.-S. Brès∗'],
    journal: 'Physical Review Letters',
    year: 2023,
    category: 'Photonics',
    type: 'journal',
    details: '131, 143802',
    url:'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.131.143802'
  },
  {
    title: 'Bright and dark Talbot pulse trains on a chip',
    authors: ['J. Wu', 'M. Clementi', 'E. Nitiss', 'J. Hu', 'C. Lafforgue', 'C.-S. Brès∗'],
    journal: 'Communication Physics',
    year: 2023,
    category: 'Photonics',
    type: 'journal',
    details: '6, 249',
    url:'https://www.nature.com/articles/s42005-023-01375-x'
  },
  {
    title: 'Cost-effective equalization of electro-optic frequency combs in a Sagnac interferometer',
    authors: ['I. Cardea', 'J. Hu', 'C.-S. Brès∗'],
    journal: 'Optics Express',
    year: 2023,
    category: 'Photonics',
    type: 'journal',
    details: '31, 18356-18364',
    url:'https://opg.optica.org/oe/fulltext.cfm?uri=oe-31-11-18356'
  },
  {
    title: 'Tunable photo-induced second-harmonic generation in a mode-engineered silicon nitride microresonator',
    authors: ['E. Nitiss', 'B. Zabelich', 'J. Hu', 'A Stroganov', 'C.-S. Brès∗'],
    journal: 'Optics Express',
    year: 2023,
    category: 'Photonics',
    type: 'journal',
    details: '31, 14442-14453',
    url:'https://opg.optica.org/oe/fulltext.cfm?uri=oe-31-9-14442'
  },
  {
    title: 'Generalized coherent photogalvanic effect in coherently seeded waveguides',
    authors: ['O. Yakar', 'E. Nitiss', 'J. Hu', 'C.-S. Brès∗'],
    journal: 'Laser & Photonics Reviews',
    year: 2022,
    category: 'Photonics',
    type: 'journal',
    details: '2200294',
    url:'https://onlinelibrary.wiley.com/doi/full/10.1002/lpor.202200294'
  },
  {
    title: 'Deep-learning-assisted communication capacity enhancement by non-orthogonal state recognition of structured light',
    authors: ['H. Wang', 'Z. Zhan', 'Y. Shen', 'J. Hu', 'X. Fu∗', 'Q. Liu∗'],
    journal: 'Optics Express',
    year: 2022,
    category: 'Photonics',
    type: 'journal',
    details: '30, 29781-29795',
    url:'https://opg.optica.org/oe/fulltext.cfm?uri=oe-30-16-29781'
  },
  {
    title: 'Linearly chirped mid-infrared supercontinuum in all-normal-dispersion chalcogenide photonic crystal fibers',
    authors: ['S. Xing∗', 'S. Kharitonov', 'J. Hu', 'C.-S. Brès'],
    journal: 'Optics Express',
    year: 2018,
    category: 'Photonics',
    type: 'journal',
    details: '26, 19627-19636',
    url:'https://opg.optica.org/oe/fulltext.cfm?uri=oe-26-15-19627'
  },
  {
    title: 'Fiber fuse in Chalcogenide photonic crystal fiber',
    authors: ['S. Xing∗', 'S. Kharitonov', 'J. Hu', 'C.-S. Brès'],
    journal: 'Optics Letters',
    year: 2018,
    category: 'Photonics',
    type: 'journal',
    details: '43, 1443-1446',
    url:'https://opg.optica.org/ol/abstract.cfm?uri=ol-43-7-1443'
  },
  {
    title: 'A photonic circuit for complementary frequency shifting, in-phase quadrature/single sideband modulation and frequency multiplication: analysis and integration feasibility',
    authors: ['M. Hasan∗', 'J. Hu', 'H. Nikkhah', 'T. Hall'],
    journal: 'Journal of Modern Optics',
    year: 2017,
    category: 'Photonics',
    type: 'journal',
    details: '64, 1386-1397',
    url:'https://www.tandfonline.com/doi/abs/10.1080/09500340.2017.1288837'
  },




  //下面是会议

  {
    title: 'Kerr-comb-driven Widely-tunable Integrated Green Light Source',
    authors: ['G. Wang', 'O. Yakar', 'X. Ji', 'M. Clementi', 'J. Zhou', 'C. Lafforgue', 'J. Wu', 'J. Hu', 'T. J. Kippenberg', 'C.-S. Brès'],
    journal: 'PIERS',
    year: 2025,
    category: 'Photonics',
    type: 'conference'
  },
  {
    title: 'High-Energy Mode-Locked Pulses from a Photonic Integrated Mamyshev Oscillator',
    authors: ['Z. Qiu', 'Z. Liu', 'X. Yang', 'J. Hu', 'Y. Zhang', 'J. Sun', 'X. Ji', 'G. Lihachev', 'X. Li', 'Z. Li', 'U. Kentsch', 'T. Kippenberg'],
    journal: 'CLEO/EU',
    year: 2025,
    category: 'Photonics',
    type: 'conference',
    details: 'PD-1.5 [postdeadline]'
  },
  {
    title: 'Ultrabroadband Integrated Triply Resonant Electro-Optic Frequency Comb in Lithium Tantalate',
    authors: ['J. Zhang', 'C. Wang', 'C. Denny', 'J. Riemensberger', 'G. Likhachev', 'J. Hu', 'W. Kao', 'T. Blésin', 'N. Kuznetsov', 'Z. Li', 'M. Churaev', 'G. Santamaria-Botello', 'T. Kippenberg'],
    journal: 'CLEO/EU',
    year: 2025,
    category: 'Photonics',
    type: 'conference',
    details: 'CK-10.4'
  },
  {
    title: 'Milliwatt-level on-chip green light source via second-harmonic generation in silicon nitride microresonators',
    authors: ['G. Wang', 'O. Yakar', 'X. Ji', 'M. Clementi', 'J. Zhou', 'C. Laorgue', 'J. Wu', 'J. Hu', 'T. J. Kippenberg', 'C.-S. Brès'],
    journal: 'CLEO/EU',
    year: 2025,
    category: 'Photonics',
    type: 'conference',
    details: 'CD-9.1'
  },
  {
    title: 'Arrayed Waveguide Gratings on Integrated Thin-Film Lithium Tantalate',
    authors: ['S. U. Hulyal', 'J. Hu', 'C. Wang', 'J. Cai', 'G. Lihachev', 'T. J. Kippenberg'],
    journal: 'CLEO/EU',
    year: 2025,
    category: 'Photonics',
    type: 'conference',
    details: 'CK-P.6'
  },
  {
    title: 'Twisted Talbot effect: Self-Imaging in Angle and Orbital Angular Momentum',
    authors: ['M. Eriksson', 'J. Hu', 'B. A. Stickler', 'S. Gigan', 'R. Fickler'],
    journal: 'CLEO/EU',
    year: 2025,
    category: 'Photonics',
    type: 'conference',
    details: 'CI-2.4'
  },
  {
    title: 'High-Energy Mode-Locked Pulses from a Photonic Integrated Mamyshev Oscillator',
    authors: ['Z. Qiu', 'Z. Liu', 'X. Yang', 'J. Hu', 'Y. Zhang', 'J. Sun', 'X. Ji', 'G. Lihachev', 'X. Li', 'Z. Li', 'U. Kentsch', 'T. Kippenberg'],
    journal: 'CLEO',
    year: 2025,
    category: 'Photonics',
    type: 'conference',
    details: '[postdeadline]'
  },
  {
    title: 'Ultrabroadband Integrated Triply Resonant Electro-Optic Frequency Comb in Lithium Tantalate',
    authors: ['J. Zhang', 'C. Wang', 'C. Denny', 'J. Riemensberger', 'G. Likhachev', 'J. Hu', 'W. Kao', 'T. Blésin', 'N. Kuznetsov', 'Z. Li', 'M. Churaev', 'G. Santamaria-Botello', 'T. Kippenberg'],
    journal: 'CLEO',
    year: 2025,
    category: 'Photonics',
    type: 'conference'
  },
  {
    title: 'Demonstration of Arrayed Waveguide Gratings on Integrated Thin-Film Lithium Tantalate',
    authors: ['S. U. Hulyal', 'J. Hu', 'C. Wang', 'G. Lihachev', 'T. J. Kippenberg'],
    journal: 'CLEO',
    year: 2025,
    category: 'Photonics',
    type: 'conference'
  },
  {
    title: 'Twisted Talbot effect: Self-Imaging in Angle and Orbital Angular Momentum',
    authors: ['M. Eriksson', 'J. Hu', 'B. A. Stickler', 'S. Gigan', 'R. Fickler'],
    journal: 'CLEO',
    year: 2025,
    category: 'Photonics',
    type: 'conference'
  },
  {
    title: 'Scalable-manufactured erbium-doped silicon nitride amplifiers with high output power',
    authors: ['Z. Qiu', 'X. Yang', 'X. Ji', 'Y. Liu', 'G. Lihachev', 'J. Hu', 'T. Kippenberg'],
    journal: 'CLEO',
    year: 2025,
    category: 'Photonics',
    type: 'conference'
  },
  {
    title: 'Single-pixel field-resolved coherent anti-Stokes Raman scattering with three-color excitation',
    authors: ['S. Zhao', 'L. Chibani', 'E. Chandler', 'J. Hu', 'L. Valzania', 'U. S. Kamilov', 'Hilton B. de Aguiar'],
    journal: 'Photonics West',
    year: 2025,
    category: 'Photonics',
    type: 'conference',
    details: '13332-62'
  },
  {
    title: 'Optical next-generation reseroir computing with complex media',
    authors: ['H. Wang', 'J. Hu', 'Y. Baek', 'K. Tsuchiyama', 'M. Joly', 'Q. Liu', 'S. Gigan'],
    journal: 'Photonics West',
    year: 2025,
    category: 'Photonics',
    type: 'conference',
    details: '13375-13 [Invited]'
  },
  {
    title: 'Ultrabroadband Integrated Triply Resonant Electro-Optic Frequency Comb in Lithium Tantalate',
    authors: ['J. Zhang', 'C. Wang', 'C. Denny', 'J. Riemensberger', 'G. Likhachev', 'J. Hu', 'W. Kao', 'T. Blésin', 'N. Kuznetsov', 'Z. Li', 'M. Churaev', 'G. Santamaria-Botello', 'T. Kippenberg'],
    journal: 'ACP',
    year: 2024,
    category: 'Photonics',
    type: 'conference'
  },
  {
    title: 'Broadband and turnkey Pockels micro-comb with monolithic microwave resonator',
    authors: ['J. Zhang', 'C. Wang', 'C. Denny', 'G. Likhachev', 'J. Hu', 'M. Churaev', 'G. Santamaria-Botello', 'J. Riemensberger', 'T. Kippenberg'],
    journal: 'IEEE IPC',
    year: 2024,
    category: 'Photonics',
    type: 'conference',
    details: 'ThF2.5'
  },
  {
    title: 'Singlepixel field-resolved coherent anti-Stokes Raman scattering with three-color excitation',
    authors: ['S. Zhao', 'L. Chibani', 'E. Chandler', 'J. Hu', 'L. Valzania', 'U. S. Kamilovb', 'H. B. Aguiar'],
    journal: 'ICORS',
    year: 2024,
    category: 'Photonics',
    type: 'conference'
  },
  {
    title: 'Spatiotemporal quasi-phasematching from coherent photogalvanic effect in microresonators',
    authors: ['M. Clementi†', 'J. Zhou†', 'J. Hu†', 'O. Yakar', 'E. Nitiss', 'C.-S. Brès'],
    journal: 'CLEO',
    year: 2024,
    category: 'Photonics',
    type: 'conference',
    details: '[postdeadline]'
  },
  {
    title: 'Large-scale photonic computing with nonlinear disordered media',
    authors: ['H. Wang', 'J. Hu', 'A. Morandi', 'A. Nardi', 'F. Xia', 'X. Li', 'R. Savo', 'Q. Liu', 'R. Grange', 'S. Gigan'],
    journal: 'Photonics West',
    year: 2024,
    category: 'Photonics',
    type: 'conference',
    details: '12903-3'
  },
  {
    title: 'Hardwareefficient, large-scale reconfigurable optical neural network (ONN) with backpropagation',
    authors: ['F. Xia', 'Z. Wang', 'L. Wright', 'T. Onodera', 'M. Stein', 'J. Hu', 'P. McMahon', 'S. Gigan'],
    journal: 'ETAI',
    year: 2023,
    category: 'Photonics',
    type: 'conference',
    details: 'PC1265513 [Invited]'
  },
  {
    title: 'Generalized angle-OAM Talbot effect in ring-core fibers',
    authors: ['M. Eriksson', 'J. Hu', 'S. Gigan', 'R. Fickler'],
    journal: 'CLEO/EU',
    year: 2023,
    category: 'Photonics',
    type: 'conference',
    details: 'CI-1.2'
  },
  {
    title: 'Visualizing and understanding optoelectronic neural networks via orbital angular momentum of light',
    authors: ['H. Wang', 'J. Hu', 'Z. Zhan', 'X. Fu', 'Q. Liu'],
    journal: 'CLEO/EU',
    year: 2023,
    category: 'Photonics',
    type: 'conference',
    details: 'JSIII-P.4'
  },
  {
    title: 'Hardware-efficient, large-scale reconfigurable optical neural network (ONN) with backpropagation',
    authors: ['F. Xia', 'Z. Wang', 'L. Wright', 'T. Onodera', 'M. Stein', 'J. Hu', 'P. McMahon', 'S. Gigan'],
    journal: 'Photonics West',
    year: 2023,
    category: 'Photonics',
    type: 'conference',
    details: '12438-8'
  },
  {
    title: 'Sum-frequency generation in silicon nitride through coherent photogalvanic effect',
    authors: ['O. Yakar', 'E. Nitiss', 'J. Hu', 'C.-S. Brès'],
    journal: 'Photonics West',
    year: 2023,
    category: 'Photonics',
    type: 'conference',
    details: '12405-29'
  },
  {
    title: 'Backward second-harmonic generation in optically poled silicon nitride waveguides',
    authors: ['O. Yakar', 'J. Hu', 'E. Nitiss', 'C.-S. Brès'],
    journal: 'CLEO',
    year: 2022,
    category: 'Photonics',
    type: 'conference',
    details: 'SM4K.4 [Highlighted]'
  },
  {
    title: 'Demonstration of Temporal Talbot Effect of Dark Pulse Trains',
    authors: ['J. Wu', 'J. Hu', 'C.-S. Brès'],
    journal: 'CLEO',
    year: 2022,
    category: 'Photonics',
    type: 'conference',
    details: 'STh5E.6'
  },
  {
    title: 'Two-soliton microcombs enabled reconfigurable microwave photonic filters',
    authors: ['J. Hu', 'J. He', 'J. Liu', 'A. S. Raja', 'M. Karpov', 'A. Lukashchuk', 'T. J. Kippenberg', 'C.-S. Brès'],
    journal: 'CLEO',
    year: 2020,
    category: 'Photonics',
    type: 'conference',
    details: 'JTh2B.18'
  },
  {
    title: 'Reconfigurable radiofrequency Photonic filters based on soliton microcombs',
    authors: ['J. Hu', 'J. He', 'A. S. Raja', 'J. Liu', 'T. J. Kippenberg', 'C.-S. Brès'],
    journal: 'OFC',
    year: 2020,
    category: 'Photonics',
    type: 'conference',
    details: 'M3H.2 [Top-scored]'
  },
  {
    title: 'Add-drop multiplexing architecture for Nyquist OTDM signals based on a single Mach-Zehnder modulator',
    authors: ['J. Hu', 'S. Kharitonov', 'S. J. Fabbri', 'C.-S. Brès'],
    journal: 'ACP',
    year: 2019,
    category: 'Photonics',
    type: 'conference',
    details: 'M4A.38'
  },
  {
    title: 'Versatile amplitude and phase filtering in an optical tapped delay line structure',
    authors: ['J. Hu', 'S. J. Fabbri', 'C.-B. Huang', 'C.-S. Brès'],
    journal: 'CLEO/EU',
    year: 2019,
    category: 'Photonics',
    type: 'conference',
    details: 'ci_5_3'
  },
  {
    title: 'Study of fiber fuse induced damage in chalcogenide photonic crystal fibers',
    authors: ['S. Xing', 'S. Kharitonov', 'J. Hu', 'C.-S. Brès'],
    journal: 'ASSL',
    year: 2018,
    category: 'Photonics',
    type: 'conference',
    details: 'ATh1A.4'
  },
  {
    title: 'Self-imaging of azimuthal intensity petal based on orbital angular momentum beams',
    authors: ['J. Hu', 'C.-S. Brès', 'C.-B. Huang'],
    journal: 'FIO',
    year: 2018,
    category: 'Photonics',
    type: 'conference',
    details: 'FM3C.2'
  },
  {
    title: 'Reconfigurable filter-free sinc-shaped RF photonic filters based on rectangular optical frequency comb',
    authors: ['J. Hu', 'S. J. Fabbri', 'C.-S. Brès'],
    journal: 'CLEO',
    year: 2018,
    category: 'Photonics',
    type: 'conference',
    details: 'SM1C.1'
  },
  {
    title: 'Flexible width Nyquist pulse based on a single Mach-Zehnder modulator',
    authors: ['J. Hu', 'S. J. Fabbri', 'C.-S. Brès'],
    journal: 'CLEO',
    year: 2018,
    category: 'Photonics',
    type: 'conference',
    details: 'SF3N.6'
  },
  {
    title: 'Fiber fuse in GeAsSe photonic crystal fiber and its impact on undamaged segment',
    authors: ['S. Xing', 'S. Kharitonov', 'J. Hu', 'C.-S. Brès'],
    journal: 'CLEO',
    year: 2018,
    category: 'Photonics',
    type: 'conference',
    details: 'JTh2A.93'
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
    type: 'conference',
    details: 'M.2.B.3'
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