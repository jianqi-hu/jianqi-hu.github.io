import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Jianqi Hu',
      chineseName: '胡劍琦',
      title: '',
      role: 'Assistant Professor',
      employment: [
        '08/2025 Assistant Professor, Department of Electrical and Electronic Engineering, The University of Hong Kong',
        'Postdoc, École Polytechnique Fédérale de Lausanne',
        'Postdoc, Ecole Normale Supérieure'
      ],
      education: [
        'Ph.D., École Polytechnique Fédérale de Lausanne',
        'B.E., University of Electronic Science and Technology of China'
      ],
      research: ['Integrated Optics', 'Nonlinear Photonics', 'Photonic Computing', 'Structured Light'],
      email: 'jianqi@hku.hk',
      publications: 15,
      avatar: '/professor-avatar.jpg?v=6502cb1'
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
      name: 'Shaoyuan Ou',
      title: '歐紹源',
      role: 'PhD Student',
      education: ['B.E., Sun Yat-Sen University','M.S., University of Southern California'],
      research: ['Optical computing', 'Integrated photonics'],
      email: 'oushaoyu@usc.edu',
      publications: 8,
      avatar: '/Shaoyuan.jpg'
    },

    {
      name: 'Yuzhong Wang',
      title: '王禹忠',
      role: 'Visiting PhD Student',
      education: ['B.E., Harbin Institute of Technology'],
      research: ['Microwave Photonics', 'Optical Computing', 'Electromagnetic Sensing'],
      email: 'hitwyz@stu.hit.edu.cn',
      publications: 3,
      avatar: '/Yuzhong.jpg'
    },
    {
      name: 'Xiaofu Pan',
      title: '潘孝夫',
      role: 'PhD Student',
      education: ['B.E., Huazhong University of Science and Technology','M.E., Zhejiang University'],
      research: ['Integrated photonics', 'Optical comunication'],
      email: 'xiaofupan@connect.hku.hk',
      publications: 3,
      avatar: '/Xiaofu.jpg'
    }
  ];

  const categories = [
    { name: 'Principal Investigator', members: teamMembers.filter(m => m.role.includes('Professor')) },
    { name: 'PhD Students', members: teamMembers.filter(m => m.role.includes('Student') && !m.role.includes('Visiting')) },
    { name: 'Postdoctoral Researchers', members: teamMembers.filter(m => m.role.includes('Postdoctoral')) },
    { name: 'Visiting PhD Students', members: teamMembers.filter(m => m.role.includes('Visiting')) },
    { name: 'Senior Engineers', members: teamMembers.filter(m => m.role.includes('Engineer')) },
  ];

  return (
    <section className="pt-40 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Team</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category.name} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category.name}</h3>

              {/* 使用网格布局，随屏幕大小自适应，每行最多 3 个卡片 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.members.map((member) => (
                  <div
                    key={member.name}
                    className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden flex flex-col"
                  >
                    {/* 顶部头像图片 */}
                    <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                      <img
                        src={member.avatar}
                        alt={`${member.name}'s avatar`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* 下方内容区域 */}
                    <div className="flex-1 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {member.name}
                          {member.title && (
                            <span className="ml-2 text-base text-gray-600 dark:text-gray-300">{member.title}</span>
                          )}
                        </h4>
                        {/* 邮件图标仅在成员有邮箱时显示 */}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="text-hku-green hover:text-hku-darkGreen"
                            aria-label={`Email ${member.name}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.03 1.916l-6.9 4.312a2.25 2.25 0 01-2.44 0L4.78 8.909a2.25 2.25 0 01-1.03-1.916V6.75" />
                            </svg>
                          </a>
                        )}
                      </div>

                      {/* 职位信息和研究方向 */}
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">{member.role}</span>
                      </p>

                      {/* 教育背景：支持字符串或数组显示，不显示未提供的信息 */}
                      {member.education && (
                        Array.isArray(member.education) ? (
                          <p className="text-gray-700 dark:text-gray-300 mt-2">
                            {member.education.join(', ')}
                          </p>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300 mt-2">{member.education}</p>
                        )
                      )}

                      {/* 研究方向：数组展示为逗号分隔 */}
                      {member.research && (
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                          {Array.isArray(member.research) ? member.research.join(', ') : member.research}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 页脚分割线 */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />
      </div>
    </section>
  );
};

export default Team;