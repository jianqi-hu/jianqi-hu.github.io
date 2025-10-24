import React from 'react';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      content: 'Room 719, Building Chow Yei Ching ，\nThe University of Hong Kong'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '3917 2707'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'jianqi@hku.hk'
    },

  ];



  return (
    <section id="contact-us" className="pt-40 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Us</h1>
        </div>



        <div className="grid lg:grid-cols-2 gap-x-8 gap-y-12 -mt-4 max-w-5xl w-[78%] mx-auto">
          {/* Contact info card and map card */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-hku-green dark:text-green-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Location Map</h3>
            <div className="rounded-lg h-96 overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8534442094447!2d114.13707731495394!3d22.283194485336087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f04884d5b7%3A0x5c3a8b8b8b8b8b8b!2sThe%20University%20of%20Hong%20Kong%2C%20Computer%20Science%20Department!5e0!3m2!1sen!2shk!4v1640000000000!5m2!1sen!2shk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The University of Hong Kong Location"
              ></iframe>
            </div>
            {/* Remove address text under the map as requested */}
            {/* <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Room 719, Building Chow Yei Ching ，<br />
                The University of Hong Kong
              </p>
            </div> */}
          </div>
        </div>

        {/* Useful links */}
        <div className="max-w-5xl w-[78%] mx-auto mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Useful links</h3>
          <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              <a className="text-hku-green hover:underline" href="https://www.eee.hku.hk/" target="_blank" rel="noopener noreferrer">
                Department of Electrical and Electronic Engineering
              </a>
            </li>
            <li>
              <a className="text-hku-green hover:underline" href="https://www.ugc.edu.hk/eng/rgc/funding_opport/hkpfs/index.html" target="_blank" rel="noopener noreferrer">
                Hong Kong PhD Fellowship
              </a>
            </li>
            <li>
              <a className="text-hku-green hover:underline" href="https://gradsch.hku.hk/prospective_students/fees_scholarships_and_financial_support/hku_presidential_phd_scholar_programme" target="_blank" rel="noopener noreferrer">
                HKU Presidential PhD Scholar Programme
              </a>
            </li>
            <li>
              <a className="text-hku-green hover:underline" href="https://gradsch.hku.hk/prospective_students/fees_scholarships_and_financial_support/postgraduate_scholarships" target="_blank" rel="noopener noreferrer">
                Postgraduate Scholarship (PGS)
              </a>
            </li>
            <li>
              <a className="text-hku-green hover:underline" href="https://www.ugc.edu.hk/eng/rgc/funding_opport/pdfs/" target="_blank" rel="noopener noreferrer">
                RGC Postdoctoral Fellowship
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Contact;