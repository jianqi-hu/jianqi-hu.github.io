import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=LYfEMQYAAAAJ&hl=zh-CN' },
    { name: "Prof. Jianqi Hu's Homepage", href: 'https://www.eee.hku.hk/people/jianqi/' },
    { name: 'The University of Hong Kong', href: 'https://www.hku.hk/' },
    { name: 'Department of Electrical and Electronic Engineering', href: 'https://www.eee.hku.hk/' },
    { name: 'Hong Kong PhD Fellowship', href: 'https://www.ugc.edu.hk/eng/rgc/funding_opport/hkpfs/index.html' },
    { name: 'HKU Presidential PhD Scholar Programme', href: 'https://gradsch.hku.hk/prospective_students/fees_scholarships_and_financial_support/hku_presidential_phd_scholar_programme' },
    { name: 'Postgraduate Scholarship (PGS)', href: 'https://gradsch.hku.hk/prospective_students/fees_scholarships_and_financial_support/postgraduate_scholarships' },
    { name: 'RGC Postdoctoral Fellowship', href: 'https://www.ugc.edu.hk/eng/rgc/funding_opport/pdfs/' }
  ];


  return (
    <footer className="mt-8 md:mt-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Only keep divider and copyright below */}

        {/* Social Links and Copyright */}
        <div className="border-t border-hku-green dark:border-gray-700 mt-8 pt-8 transition-colors duration-300">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-700 dark:text-gray-400 text-center">
              © {currentYear} Prof. Hu's Research Group, HKU. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-hku-green hover:bg-hku-darkGreen text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          title="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;