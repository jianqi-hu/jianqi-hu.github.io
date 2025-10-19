import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=LYfEMQYAAAAJ&hl=zh-CN' },
    { name: 'The University of Hong Kong', href: 'https://www.hku.hk/' },
    { name: 'Department of Electrical and Electronic Engineering', href: 'https://www.eee.hku.hk/' }
  ];



  const socialLinks = [
    {
      name: 'Google Scholar',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
      href: 'https://scholar.google.com/citations?user=LYfEMQYAAAAJ&hl=zh-CN'
    },
    {
      name: 'University of Hong Kong',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 36 24">
          <text x="18" y="15" textAnchor="middle" fontSize="15" fontWeight="bold" fill="currentColor">HKU</text>
        </svg>
      ),
      href: 'https://www.hku.hk/'
    },
    {
      name: 'Department of Electrical and Electronic Engineering',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 36 24">
          <text x="18" y="15" textAnchor="middle" fontSize="15" fontWeight="bold" fill="currentColor">EEE</text>
        </svg>
      ),
      href: 'https://www.eee.hku.hk/'
    }
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