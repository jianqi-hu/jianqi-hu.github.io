import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Jianqi Hu',
      title: 'Research Group Leader',
      role: 'Assistant Professor',
      education: [
        'PhD in Photonics, École Polytechnique Fédérale de Lausanne (EPFL), 2021',
        'BSc in Electronic Engineering, University of Electronic Science and Technology of China, 2016'
      ],
      research: ['Integrated Optics', 'Nonlinear Photonics', 'Photonic Computing', 'Structured Light'],
      email: 'jqhu@hku.hk',
      publications: 15,
      avatar: '/professor-avatar.jpg'
    },
    {
      name: 'Dr. Wang',
      title: 'Senior Researcher',
      role: 'Postdoctoral Researcher',
      education: 'PhD in Cybersecurity, Chinese Academy of Sciences',
      research: ['Cybersecurity', 'Cryptography', 'Blockchain'],
      email: 'wang.dr@university.edu',
      publications: 28,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Engineer Liu',
      title: 'System Architect',
      role: 'Senior Engineer',
      education: 'Master in Software Engineering, Shanghai Jiao Tong University',
      research: ['Cloud Computing', 'Distributed Systems', 'Microservices'],
      email: 'liu.eng@university.edu',
      publications: 15,
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Ou Shaoyuan',
      title: '欧绍源',
      role: 'PhD Student',
      education: ['Bachelor in Optoelectronic Information Science and Engineering, Sun Yat-Sen University(SYSU)','Master in Electrical Engineering, University of Southern California(USC)'],
      research: ['Optical computing', 'Integrated photonics'],
      email: 'oushaoyu@usc.edu',
      publications: 8,
      avatar: '/Shaoyuan.jpg'
    },

    {
      name: 'Wang Yuzhong',
      title: '王禹忠',
      role: 'PhD Student',
      education: ['Bachelor in Electromagnetic Fields and Wireless Technologies, HIT'],
      research: ['Microwave Photonics', 'Optical Computing', 'Electromagnetic Sensing'],
      email: 'hitwyz@stu.hit.edu.cn',
      publications: 3,
      avatar: '/Yuzhong.jpg'
    },
    {
      name: 'Pan Xiaofu',
      title: '潘孝夫',
      role: 'PhD Student',
      education: ['Bachelor in Optoelectronic Information Science and Engineering, HUST','Master in Electronic Information, ZJU'],
      research: ['Integrated photonics', 'Optical comunication'],
      email: '22230092@zju.edu.cn',
      publications: 3,
      avatar: '/Xiaofu.jpg'
    }
  ];

  const categories = [
    { name: 'Professors', members: teamMembers.filter(m => m.role.includes('Professor')) },
    { name: 'Students', members: teamMembers.filter(m => m.role.includes('Student')) }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Team Members</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We have a diverse team composed of senior professors, excellent researchers, and promising students
          </p>
        </div>

        {/* Team Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {teamMembers.filter(m => m.role.includes('Professor')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Professors</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {teamMembers.filter(m => m.role.includes('Researcher') || m.role.includes('Engineer')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Researchers/Engineers</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {teamMembers.filter(m => m.role.includes('Student')).length}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Students</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {teamMembers.reduce((sum, member) => sum + member.publications, 0)}
            </div>
            <div className="text-gray-600 dark:text-gray-300">Total Publications</div>
          </div>
        </div>

        {/* Team Members by Category */}
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">{category.name}</h3>
            <div className={`${
              category.members.length === 1 
                ? 'flex justify-center' 
                : category.members.length === 2
                ? 'flex flex-wrap justify-center gap-8'
                : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
            }`}>
              {category.members.map((member, index) => (
                 <div key={index} className={`card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                   category.members.length <= 2 ? 'max-w-md' : ''
                 }`}>
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className={`w-full h-full object-cover ${
                          member.name === 'Pan Xiaofu' ? 'object-top' : 
                          member.name === 'Wang Yuzhong' ? 'object-[center_top]' : 'object-center'
                        }`}
                        style={member.name === 'Wang Yuzhong' ? { objectPosition: 'center 30%' } : {}}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1a4327&color=fff&size=150`;
                        }}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                    <p className="text-hku-green font-medium mb-2">{member.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{member.role}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Education</h5>
                      {Array.isArray(member.education) ? (
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          {member.education.map((edu, eduIndex) => (
                            <li key={eduIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-hku-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              {edu}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{member.education}</p>
                      )}
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">Research Areas</h5>
                      <div className="flex flex-wrap gap-1">
                        {member.research.map((area, areaIndex) => (
                          <span key={areaIndex} className="bg-green-100 dark:bg-green-900 text-hku-green dark:text-green-300 px-2 py-1 rounded text-xs">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Email section for students, publications for others */}
                    {category.name === 'Students' ? (
                      <div>
                        <h5 className="font-semibold text-gray-900 text-sm mb-2">Email</h5>
                        <p className="text-gray-600 text-sm">{member.email}</p>
                      </div>
                    ) : (
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900">{member.publications}</div>
                          <div className="text-xs text-gray-600">Publications</div>
                        </div>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-hku-green hover:text-hku-darkGreen transition-colors duration-200"
                          title="Send Email"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}


      </div>
    </section>
  );
};

export default Team;