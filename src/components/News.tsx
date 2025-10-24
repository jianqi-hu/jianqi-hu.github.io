import React, { useState, useEffect } from 'react';

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

// 辅助：固定为 MM/YYYY 显示格式
const formatDate = (iso: string) => {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const mm = m < 10 ? `0${m}` : String(m);
  return `${mm}/${y}`;
};

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
      title: 'UNN Lab starts in HKU !',
      summary: '',
      content: 'UNN Lab starts in HKU !',
      date: '2025-08-01',
      category: 'Announcement',
      image: '',
      author: 'UNN Lab'
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
    <section className={`${embedded ? 'py-8 bg-transparent' : 'py-20 pt-40 scroll-mt-40 bg-white dark:bg-gray-800'} transition-colors duration-300`}>
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
              {/* Image (hidden in embedded mode) */}
              {!embedded && (
                <div className={`${imageHeightClass} w-full overflow-hidden`}>
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className={paddingClass}>
                <div className="mb-3">
                  <span className="text-gray-500 dark:text-gray-300 text-sm">
                    {formatDate(news.date)}
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
                   <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">{formatDate(selectedNews.date)}</p>
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