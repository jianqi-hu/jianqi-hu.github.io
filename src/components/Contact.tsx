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
      content: 'Room 508, Building A\nComputer Science Department\nThe University of Hong Kong'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: '+852 2859-2180\n+852 2559-8447 (Fax)'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: 'contact@researchgroup.hku.hk\ninfo@researchgroup.hku.hk'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Office Hours',
      content: 'Monday - Friday: 9:00-17:00\nSaturday: 9:00-12:00\nSunday: Closed'
    }
  ];



  return (
    <section id="contact-us" className="pt-40 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Reach out to our research group for inquiries.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 -mt-4">
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
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>The University of Hong Kong</strong><br />
                Computer Science Department, Room 508, Building A<br />
                Pokfulam Road, Hong Kong
              </p>
            </div>
          </div>
        </div>
        {/* Join Our Team CTA (moved from Activities) */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-hku-green to-hku-darkGreen rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              We welcome scholars and students passionate about optical research to join our family, exploring the mysteries of science and creating wonderful memories together
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-hku-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;