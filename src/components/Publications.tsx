import React from 'react';
import { publications, preprints } from '../data/publications';
import type { Publication } from '../data/publications';

const Publications: React.FC = () => {
  // publications data imported from shared module

  // 当前年份与分组：将 2025 置于顶部，其余归为 “Prior to HKU”
  const currentYear = 2025;
  const currentPublications = publications.filter(p => p.year === currentYear);
  const priorPublications = publications.filter(p => p.year !== currentYear);
  const priorYears = Array.from(new Set(priorPublications.map(p => p.year))).sort((a, b) => b - a);

  // 仅保留期刊视图，不在页面内展示 Conference 菜单

  // 生成 Google Scholar 搜索链接（如果没有具体链接）
  const scholarLink = (title: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
  const journalText = (pub: Publication) => `${pub.journal}${pub.details ? ' ' + pub.details : ''} (${pub.year})`;

  return (
    <section className="pt-40 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Publications</h2>
          {/* 副标题移除：原有 Google Scholar 提示文字删除 */}
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Preprints（置于 2025 年之前） */}
          <div className="mb-12 -mt-4">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Preprints</h3>
            <div className="space-y-6">
              {preprints.map((pub, index) => (
                <div key={`preprint-${index}`}>
                  <div className="text-base text-gray-700 dark:text-gray-300">
                    {pub.authors.join(', ')}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    "{pub.title}"
                  </div>
                  <a
                    href={scholarLink(pub.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-800 dark:text-green-400 hover:text-green-900 underline"
                  >
                    {journalText(pub)}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* 2025 年文献（置顶） */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">2025</h3>
            <div className="space-y-6">
              {currentPublications.map((pub, index) => (
                <div key={`2025-${index}`}>
                  <div className="text-base text-gray-700 dark:text-gray-300">
                    {pub.authors.join(', ')}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    "{pub.title}"
                  </div>
                  <a
                    href={scholarLink(pub.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-800 dark:text-green-400 hover:text-green-900 underline"
                  >
                    {journalText(pub)}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Prior to HKU 大标题 */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Prior to HKU</h3>
          </div>

          {/* 其余年份分组（按年降序） */}
          {priorYears.map((year) => (
            <div key={year} className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{year}</h3>
              <div className="space-y-6">
                {priorPublications.filter(p => p.year === year).map((pub, index) => (
                  <div key={`${year}-${index}`}>
                    <div className="text-base text-gray-700 dark:text-gray-300">
                      {pub.authors.join(', ')}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      "{pub.title}"
                    </div>
                    <a
                      href={scholarLink(pub.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 dark:text-green-400 hover:text-green-900 underline"
                    >
                      {journalText(pub)}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;