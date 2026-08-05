import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Jianqi Hu',
      chineseName: '胡劍琦',
      title: '',
      role: 'Assistant Professor',
      employment: [
        '08/2025 Assistant Professor, Department of Electrical and Computer Engineering, The University of Hong Kong',
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
      name: 'Xiaofu Pan',
      title: '潘孝夫',
      role: 'PhD Student',
      education: ['M.E., Zhejiang University','B.E., Huazhong University of Science and Technology'],
      research: ['Integrated photonics', 'Optical comunication'],
      email: 'xiaofupan@connect.hku.hk',
      publications: 3,
      avatar: '/Xiaofu.jpg'
    },
    {
      name: 'Shaoyuan Ou',
      title: '歐紹源',
      role: 'PhD Student',
      education: ['M.S., University of Southern California','B.E., Sun Yat-Sen University'],
      research: ['Optical computing', 'Integrated photonics'],
      email: 'oushaoyuan@connect.hku.hk',
      publications: 8,
      avatar: '/Shaoyuan.jpg'
    },
    // ================= 1. 在这里填入新增的 PhD 学生信息 =================
    {
      name: 'Zhengyuan Bao',
      title: '鮑正源',
      role: 'PhD Student',
      education: ['M.E., Zhejiang University','B.E., Zhejiang University'],
      research: ['Research Area 1', 'Research Area 2'],
      email: '1417817315@qq.com',
      avatar: '/zhengyuan.jpg' // 图片记得提前传到 public 文件夹
    },
    // ================= 2. 在这里填入新增的 Master 学生信息 =================
    {
      name: 'Jijia Luo',
      title: '駱季佳',
      role: 'Master Student',
      education: ['B.E., Wuhan University'],
      research: ['Research Area 1'],
      email: 'logic271828@gmail.com',
      avatar: '/Jijia.jpg' // 图片记得提前传到 public 文件夹
    },
    {
      name: 'Yuzhong Wang',
      title: '王禹忠',
      role: 'Visiting PhD Student',
      education: [
        'Ph.D., Harbin Institute of Technology',
        'B.E., Harbin Institute of Technology'
      ],
      research: ['Microwave Photonics', 'Optical Computing', 'Electromagnetic Sensing'],
      email: 'hitwyz@stu.hit.edu.cn',
      publications: 3,
      avatar: '/Yuzhong.jpg'
    }
  ];

  // 严格保持原有的过滤方式，仅把名字换成 'Others' 和新增 'Master Students'
  const categories = [
    { name: 'Principal Investigator', members: teamMembers.filter(m => m.role.includes('Professor')) },
    { name: 'PhD Students', members: teamMembers.filter(m => m.role.includes('Student') && !m.role.includes('Visiting') && !m.role.includes('Master')) },
    { name: 'Master Students', members: teamMembers.filter(m => m.role.includes('Master')) },
    { name: 'Others', members: teamMembers.filter(m => m.role.includes('Visiting')) }
  ];

  const isChinese = (txt?: string) => !!txt && /[\u4e00-\u9fff]/.test(txt);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 pt-40 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Team Members</h2>
          {/* 副标题移除 */}
        </div>

        {/* Team Members by Category */}
        {categories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`mb-16 ${categoryIndex === 0 ? '-mt-4' : ''}`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b pb-2">{category.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.members.map((member, memberIndex) => (
                <div key={memberIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-4">
                    <div className="w-80 aspect-square max-w-full mx-auto mb-3 rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={member.avatar || "/professor-avatar.jpg?v=6502cb1"}
                        alt={`${member.name} Avatar`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{member.name}</h3>
                    {member.chineseName && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-hei">{member.chineseName}</span>
                      </p>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {isChinese(member.title) ? (
                        <span className="font-hei">{member.title}</span>
                      ) : (
                        member.title
                      )}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {member.employment && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Employment</p>
                        {Array.isArray(member.employment) ? (
                          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            {member.employment.map((job: string, i: number) => (
                              <p key={i}>{job}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {String(member.employment)}
                          </p>
                        )}
                      </div>
                    )}

                    {member.education && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Education</p>
                        {Array.isArray(member.education) ? (
                          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            {member.education.map((edu: string, i: number) => (
                              <p key={i}>{edu}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {String(member.education)}
                          </p>
                        )}
                      </div>
                    )}

                    {category.name === 'Principal Investigator' && member.email && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{member.email}</p>
                      </div>
                    )}

                    {category.name === 'PhD Students' && member.email && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{member.email}</p>
                      </div>
                    )}

                    {category.name === 'Master Students' && member.email && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{member.email}</p>
                      </div>
                    )}

                    {category.name === 'Others' && member.email && (
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{member.email}</p>
                      </div>
                    )}
                  </div>

                  {/* Email icon for non-students */}
                  {category.name !== 'PhD Students' && category.name !== 'Master Students' && category.name !== 'Others' && member.email && (
                    null
                  )}
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
