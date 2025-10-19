import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Jianqi Hu',
      chineseName: '胡剑琦',
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

  const isChinese = (txt?: string) => !!txt && /[\u4e00-\u9fff]/.test(txt);

  const formatEdu = (raw: string) => {
    const s = raw.replace(/\s+/g, ' ').trim();
    let degree = '';
    if (/\b(Doctor of Philosophy|Ph\.?D\.?)\b/i.test(s)) degree = 'PhD';
    else if (/\b(Master|M\.?Sc\.?|M\.?S\.?|Master of Science)\b/i.test(s)) degree = 'MS';
    else if (/\b(Bachelor|B\.?Sc\.?|B\.?S\.?|Bachelor of Science)\b/i.test(s)) degree = 'BS';
    else if (/\b(M\.?Eng\.?|Master of Engineering|MEng)\b/i.test(s)) degree = 'MEng';

    const yearMatch = s.match(/\b(19|20)\d{2}\b/);
    const year = yearMatch ? yearMatch[0] : '';

    let noParens = s.replace(/\([^)]*\)/g, '').trim();
    noParens = noParens.replace(/,?\s*\b(19|20)\d{2}\b/, '').trim();

    const parts = noParens.split(',');
    const university = parts.length > 1 ? parts[parts.length - 1].trim() : noParens;

    return `${degree ? degree + ', ' : ''}${university}${year ? ` (${year})` : ''}`;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 pt-40 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Team Members</h2>
          {/* 副标题移除 */}
        </div>

        {/* Team Statistics removed per request */}

        {/* Team Members by Category */}
        {categories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`mb-16 ${categoryIndex === 0 ? '-mt-4' : ''}`}
          >
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">{category.name}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.members.map((member, memberIndex) => (
                <div key={memberIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-4">
                    <div className="w-80 aspect-square max-w-full mx-auto mb-3 rounded-lg overflow-hidden bg-gray-200">
                      <img
                        src={member.avatar || "/professor-avatar.jpg"}
                        alt={`${member.name} Avatar`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
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
                    {member.education && (
                      <div>
                        <p className="text-sm font-medium">Education</p>
                        {Array.isArray(member.education) ? (
                          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            {member.education.map((edu: string, i: number) => (
                              <p key={i}>{formatEdu(edu)}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {formatEdu(String(member.education))}
                          </p>
                        )}
                      </div>
                    )}

                    {category.name !== 'Students' && member.email && (
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{member.email}</p>
                      </div>
                    )}

                    {category.name === 'Students' && member.email && (
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{member.email}</p>
                      </div>
                    )}
                  </div>

                  {/* Email icon for non-students */}
                  {category.name !== 'Students' && member.email && (
                    <div className="mt-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                        aria-label={`Email ${member.name}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.06 1.916l-7.5 4.5a2.25 2.25 0 01-2.28 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75"
                          />
                        </svg>
                        <span className="ml-2 text-sm">Send email</span>
                      </a>
                    </div>
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