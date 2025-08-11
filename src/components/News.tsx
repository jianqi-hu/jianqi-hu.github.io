import React, { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  image: string;
  author: string;
}

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: '课题组在顶级期刊发表重要研究成果',
      summary: '我们的最新研究在人工智能领域取得重大突破，相关论文已被Nature期刊接收。',
      content: `我们很高兴地宣布，课题组在人工智能领域的最新研究成果已被Nature期刊正式接收并发表。这项研究聚焦于深度学习在复杂系统建模中的应用，提出了一种全新的神经网络架构。

该研究的主要贡献包括：
1. 提出了创新的多层次特征融合机制
2. 在多个基准数据集上实现了最先进的性能
3. 为相关领域的后续研究提供了重要的理论基础

这一成果是课题组全体成员共同努力的结果，特别感谢参与研究的博士生和硕士生们的辛勤工作。我们将继续在这一方向上深入探索，为学术界和工业界贡献更多有价值的研究成果。`,
      date: '2024-01-15',
      category: '学术成果',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      author: 'Prof. Hu Jianqi'
    },
    {
      id: 2,
      title: '课题组获得国家自然科学基金重点项目资助',
      summary: '我们成功获得了国家自然科学基金重点项目资助，将在未来四年内开展前沿技术研究。',
      content: `经过激烈的竞争和严格的评审，我们的课题组成功获得了国家自然科学基金重点项目的资助。该项目总资助金额为300万元，研究周期为4年。

项目主要研究内容：
• 智能系统的理论基础研究
• 新型算法的设计与优化
• 实际应用场景的验证与推广

这一资助将为我们的研究提供强有力的支持，使我们能够购买先进的实验设备，招聘优秀的研究人员，并与国际顶尖研究机构开展合作。我们将充分利用这一机会，力争在相关领域取得更多突破性进展。`,
      date: '2024-01-10',
      category: '项目资助',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      author: 'Prof. Hu Jianqi'
    },
    {
      id: 3,
      title: '博士生李明在国际会议上获得最佳论文奖',
      summary: '课题组博士生李明在ICML 2024会议上凭借出色的研究工作获得了最佳论文奖。',
      content: `我们非常自豪地宣布，课题组博士生李明在国际机器学习大会（ICML 2024）上获得了最佳论文奖。这是对他在机器学习理论研究方面杰出贡献的认可。

获奖论文详情：
• 论文题目："Novel Approaches to Deep Learning Optimization"
• 主要创新：提出了一种新的优化算法，显著提升了深度学习模型的训练效率
• 实验结果：在多个标准数据集上验证了算法的有效性

李明同学自加入课题组以来，一直专注于机器学习理论的研究，这次获奖是他努力的回报，也是课题组培养优秀人才的体现。我们期待他在未来的研究中取得更多成就。`,
      date: '2024-01-05',
      category: '学生荣誉',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      author: 'Li Ming'
    },
    {
      id: 4,
      title: '课题组与知名企业签署产学研合作协议',
      summary: '我们与多家知名科技企业建立了深度合作关系，共同推进技术创新和产业化应用。',
      content: `近日，我们的课题组与几家知名科技企业正式签署了产学研合作协议，这标志着我们在产业化应用方面迈出了重要一步。

合作内容包括：
1. 联合技术研发项目
2. 人才培养与交流计划
3. 实验室共建与资源共享
4. 知识产权共同开发

通过这些合作，我们将能够：
• 将理论研究成果转化为实际应用
• 为学生提供更多实习和就业机会
• 获得产业界的实际需求反馈
• 推动科技成果的产业化进程

我们相信，这种产学研深度融合的模式将为双方带来互利共赢的结果，也将为社会创造更大的价值。`,
      date: '2023-12-28',
      category: '合作交流',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      author: 'Prof. Hu Jianqi'
    },
    {
      id: 5,
      title: '课题组举办首届国际学术研讨会',
      summary: '我们成功举办了首届国际学术研讨会，来自世界各地的专家学者齐聚一堂，共同探讨前沿技术。',
      content: `2023年12月15-17日，我们的课题组成功举办了首届国际学术研讨会。本次会议吸引了来自美国、欧洲、亚洲等地区的50多位知名专家学者参与。

会议亮点：
• 20场主题演讲，涵盖人工智能、机器学习、数据科学等多个领域
• 30余篇高质量学术论文展示
• 深入的学术讨论和思想碰撞
• 建立了广泛的国际合作网络

与会专家对我们课题组的研究工作给予了高度评价，并表达了进一步合作的意愿。会议期间，我们还与多个国际研究机构签署了合作备忘录，为未来的国际合作奠定了基础。

这次会议的成功举办，不仅提升了课题组的国际影响力，也为香港大学在相关领域的学术声誉做出了贡献。`,
      date: '2023-12-20',
      category: '学术活动',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
      author: 'Prof. Hu Jianqi'
    },
    {
      id: 6,
      title: '新实验室正式启用，研究条件大幅提升',
      summary: '经过半年的筹备和建设，我们的新实验室正式启用，为研究工作提供了更好的硬件支持。',
      content: `经过半年的精心筹备和建设，我们的新实验室于2023年12月1日正式启用。新实验室占地面积500平方米，配备了最先进的研究设备和计算资源。

新实验室特色：
• 高性能计算集群，包含100个GPU节点
• 专业的数据存储和处理系统
• 现代化的办公和讨论空间
• 完善的安全和环境控制系统

设备清单：
1. NVIDIA A100 GPU服务器 × 10台
2. 高速网络交换设备
3. 专业级工作站 × 20台
4. 大容量存储阵列
5. 各类专业测试仪器

新实验室的启用将大大提升我们的研究能力，特别是在大规模数据处理和复杂模型训练方面。我们期待在这个新的研究环境中取得更多突破性成果。`,
      date: '2023-12-01',
      category: '实验室建设',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      author: 'Prof. Hu Jianqi'
    }
  ];

  const categories = ['全部', '学术成果', '项目资助', '学生荣誉', '合作交流', '学术活动', '实验室建设'];
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredNews = selectedCategory === '全部' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const openNewsDetail = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const closeNewsDetail = () => {
    setSelectedNews(null);
  };

  return (
    <section id="news" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">最新动态</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            了解课题组的最新研究进展、学术成果和重要活动
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-hku-green text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => openNewsDetail(news)}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop';
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-hku-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    {news.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {news.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {news.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {news.summary}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    作者: {news.author}
                  </span>
                  <button className="text-hku-green hover:text-hku-gold font-medium text-sm transition-colors duration-200">
                    阅读更多 →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* News Detail Modal */}
        {selectedNews && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="bg-hku-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedNews.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {selectedNews.date}
                    </span>
                  </div>
                  <button
                    onClick={closeNewsDetail}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedNews.title}
                </h2>

                <div className="mb-6">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  {selectedNews.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      作者: {selectedNews.author}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      发布时间: {selectedNews.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;