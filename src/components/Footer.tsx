import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=LYfEMQYAAAAJ&hl=zh-CN' },
    { name: 'The University of Hong Kong', href: 'https://www.hku.hk/' },
    { name: 'Department of Electrical and Electronic Engineering', href: 'https://www.eee.hku.hk/' }
  ];


  return (
    <footer className="mt-8 md:mt-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-[max-content_max-content] justify-center gap-y-6 gap-x-[17.5rem]">
          {/* About Section */}
          <div>
            <div className="mb-1">
              <h3 className="text-xl font-bold text-hku-gold mb-1">Prof. Hu's Research Group, HKU</h3>

            </div>
            
            {/* Contact Info */}
            <div className="space-y-1.5 text-gray-700 dark:text-gray-400">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Pokfulam Road, Hong Kong</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@researchgroup.edu</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+86 010-12345678</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-hku-gold mb-1">Quick Links</h4>
            <ul className="space-y-1.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-700 hover:text-hku-gold transition-colors duration-200 dark:text-gray-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

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
        <a
          href="#home"
          className="bg-hku-green hover:bg-hku-darkGreen text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          title="Back to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;