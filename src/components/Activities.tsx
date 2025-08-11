import React from 'react';


const Activities: React.FC = () => {
  const activities = [
    {
      title: 'Laboratory Establishment Ceremony',
      description: 'Our laboratory was officially established, marking a new beginning for photonics research',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      date: 'August 2025',
      location: 'University of Hong Kong Hu-photonics Lab'
    },
    // {
    //   title: 'Laboratory Team Building',
    //   description: 'Outdoor team building activity for all research group members to enhance team cohesion and friendship',
    //   image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    //   date: 'February 2024',
    //   location: 'HKU Campus'
    // },
    // {
    //   title: 'New Year Dinner',
    //   description: 'Research group New Year dinner celebrating past year achievements and planning for the new year',
    //   image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop',
    //   date: 'January 2024',
    //   location: 'Central Hong Kong Restaurant'
    // },
    // {
    //   title: 'Laboratory Open Day',
    //   description: 'Showcasing laboratory equipment and research projects to visiting scholars and students',
    //   image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
    //   date: 'December 2023',
    //   location: 'Optics Laboratory'
    // },
    // {
    //   title: 'PhD Defense Celebration',
    //   description: 'Celebrating successful PhD defense of our research group graduate student',
    //   image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
    //   date: 'November 2023',
    //   location: 'University of Hong Kong'
    // },
    // {
    //   title: 'Mid-Autumn Festival Gathering',
    //   description: 'Research group Mid-Autumn Festival gathering, enjoying mooncakes and sharing festive joy',
    //   image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    //   date: 'September 2023',
    //   location: 'Laboratory Lounge'
    // }
  ];

  return (
    <section id="activities" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Group Activities</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Capturing the wonderful moments of our research group, from academic exchanges to team building, every moment witnesses our growth and friendship
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop';
                  }}
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{activity.date}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{activity.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{activity.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{activity.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
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

export default Activities;