import React, { useState, useEffect } from 'react';
import integratedOptics from '../assets/integrated-optics.jpg';
import photonicComputing from '../assets/photonic-computing.png';
import nonlinearPhotonics from '../assets/nonlinear-photonics.jpg';

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

const News: React.FC<{ embedded?: boolean }> = ({ embedded = false }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // 锁定背景滚动，避免滚动穿透到 News 页面
  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedNews]);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Research Group Publishes Breakthrough Results in Top-tier Journal',
      summary: 'Our latest research achieves major breakthrough in artificial intelligence, with the paper accepted by Nature journal.',
      content: `We are delighted to announce that our research group's latest findings in artificial intelligence have been officially accepted and published by Nature journal. This research focuses on the application of deep learning in complex system modeling, proposing a novel neural network architecture.

The main contributions of this research include:
1. Proposed an innovative multi-level feature fusion mechanism
2. Achieved state-of-the-art performance on multiple benchmark datasets
3. Provided important theoretical foundations for future research in related fields

This achievement is the result of collective efforts from all members of our research group, with special thanks to the hard work of participating PhD and Master's students. We will continue to explore deeply in this direction, contributing more valuable research outcomes to both academia and industry.`,
      date: '2024-01-15',
      category: 'Academic Achievement',
      image: integratedOptics,
      author: 'Prof. Hu Jianqi'
    },
    {
      id: 2,
      title: 'Research Group Receives Major National Science Foundation Grant',
      summary: 'We successfully secured a key project grant from the National Natural Science Foundation for cutting-edge technology research over the next four years.',
      content: `After intense competition and rigorous review, our research group has successfully obtained funding from the National Natural Science Foundation key project. The total funding amount is 3 million RMB with a research period of 4 years.

Main research areas of the project:
• Theoretical foundation research of intelligent systems
• Design and optimization of novel algorithms
• Validation and promotion in practical application scenarios

This funding will provide strong support for our research, enabling us to purchase advanced experimental equipment, recruit excellent researchers, and collaborate with top international research institutions. We will make full use of this opportunity to strive for more breakthrough progress in related fields.`,
      date: '2024-01-10',
      category: 'Project Funding',
      image: photonicComputing,
      author: 'Prof. Hu Jianqi'
    },
    {
      id: 3,
      title: 'PhD Student Li Ming Wins Best Paper Award at International Conference',
      summary: 'Our PhD student Li Ming received the Best Paper Award at ICML 2024 conference for his outstanding research work.',
      content: `We are extremely proud to announce that our PhD student Li Ming has won the Best Paper Award at the International Conference on Machine Learning (ICML 2024). This recognition acknowledges his outstanding contributions to machine learning theory research.

Award-winning paper details:
• Paper title: "Novel Approaches to Deep Learning Optimization"
• Main innovation: Proposed a new optimization algorithm that significantly improves the training efficiency of deep learning models
• Experimental results: Validated the algorithm's effectiveness on multiple standard datasets

Since joining our research group, Li Ming has been dedicated to machine learning theory research. This award is a reward for his hard work and demonstrates our group's commitment to cultivating excellent talent. We look forward to his future achievements in research.`,
      date: '2024-01-05',
      category: 'Student Honor',
      image: nonlinearPhotonics,
      author: 'Li Ming'
    }
  ];

  const categories: string[] = [];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const openNewsDetail = (news: NewsItem) => {
    setSelectedNews(news);
  };

  const closeNewsDetail = () => {
    setSelectedNews(null);
  };

  // Embedded 模式下卡片尺寸与网格密度调整
  const gridClasses = embedded
    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
  const imageHeightClass = embedded ? 'h-40' : 'h-56';
  const paddingClass = embedded ? 'p-4' : 'p-6';
  const titleSizeClass = embedded ? 'text-lg' : 'text-xl';
  const summarySizeClass = embedded
    ? 'text-sm text-gray-600 dark:text-gray-300'
    : 'text-gray-600 dark:text-gray-300';
  const showSummary = !embedded;

  return (
    <section className={`${embedded ? 'py-8' : 'py-20 pt-40 scroll-mt-40'} bg-white dark:bg-gray-800 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!embedded && (
          <div className="text-center mb-8">
            <h2 className="section-title">Latest News</h2>
            <p className="section-subtitle max-w-3xl mx-auto"></p>
          </div>
        )}

        {!embedded && (
          <div className={`flex flex-wrap justify-center gap-4 ${categories.length ? 'mb-8' : 'mb-0'}`}>
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
        )}

        {/* News Grid */}
        <div className={gridClasses}>
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${embedded ? '' : 'cursor-pointer'}`}
              onClick={embedded ? undefined : () => openNewsDetail(news)}
            >
              {/* Image */}
              <div className={`${imageHeightClass} w-full overflow-hidden`}>
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className={paddingClass}>
                <div className="mb-3">
                  <span className="text-gray-500 dark:text-gray-300 text-sm">
                    {new Date(news.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className={`${titleSizeClass} font-semibold text-gray-900 dark:text-white mb-2`}>{news.title}</h3>
                {showSummary && <p className={`${summarySizeClass} mb-4`}>{news.summary}</p>}
                {!embedded && (
                  <button className="text-hku-green dark:text-hku-gold hover:underline transition-colors duration-200 font-medium">Read More</button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedNews && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto p-4"
            onClick={closeNewsDetail}
          >
            <div
              className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full mx-4 max-h-[85vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                 <div>
                   <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{selectedNews.title}</h3>
                   <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">{new Date(selectedNews.date).toLocaleDateString()}</p>
                 </div>
                 <button onClick={closeNewsDetail} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
                   ✕
                 </button>
               </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="h-64 w-full overflow-hidden rounded-lg mb-6">
                  <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
                </div>
                <div className="prose dark:prose-invert max-w-none">
                  {selectedNews.content.split('\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <button onClick={closeNewsDetail} className="btn-secondary">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;