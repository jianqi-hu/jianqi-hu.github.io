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
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      author: 'Li Ming'
    }
  ];

  const categories = ['All', 'Academic Achievement', 'Project Funding', 'Student Honor', 'Collaboration', 'Academic Activity', 'Lab Construction'];
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

  return (
    <section id="news" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Latest News</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Stay updated with our latest research progress, academic achievements, and important activities
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
                    Author: {news.author}
                  </span>
                  <button className="text-hku-green hover:text-hku-gold font-medium text-sm transition-colors duration-200">
                    Read More →
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
                      Author: {selectedNews.author}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Published: {selectedNews.date}
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