import React from 'react';
import { publications, preprints } from '../data/publications';
import type { Publication } from '../data/publications';

const Publications: React.FC = () => {
  // publications data imported from shared module

  // 当前年份与分组：将 2025 置于顶部，其余归为 “Prior to HKU”
  const currentYear = 2025;
  const journalPublications = publications.filter(p => p.type === 'journal' && p.journal.toLowerCase() !== 'submitted');
  // Keep top 2025 section empty per request
  const currentPublications: Publication[] = [];
  const priorPublications = journalPublications.filter(p => p.year !== currentYear);
  const priorYears = Array.from(new Set(priorPublications.map(p => p.year))).sort((a, b) => b - a);
  // Insert a 2025 section under "Prior to HKU"
  const priorYearsWith2025 = [currentYear, ...priorYears];

  // 仅保留期刊视图，不在页面内展示 Conference 菜单

  // 生成 Google Scholar 搜索链接（如果没有具体链接）
  const scholarLink = (title: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
  const journalText = (pub: Publication) => `${pub.journal}${pub.details ? ' ' + pub.details : ''} (${pub.year})`;
  // helper: render author name with superscript markers
  const formatAuthor = (name: string) => {
    const parts = name.split(/(†|∗|\*)/);
    return (
      <>
        {parts.map((p, idx) =>
          p === '†' || p === '∗' || p === '*' ? (
            <sup key={idx}>{p === '*' ? '*' : p}</sup>
          ) : (
            <span key={idx}>{p}</span>
          )
        )}
      </>
    );
  };

  // Split details into main (volume/pages) and bracket tags like [EPFL News]
  const splitDetails = (details?: string) => {
    if (!details) return { main: '', tags: [] as string[] };
    const tags: string[] = [];
    const main = details.replace(/\s*\(([0-9]{4})\)$/, '').replace(/\s*\[([^\]]+)\]/g, (_m, tag) => {
      const clean = String(tag).trim();
      if (clean) tags.push(clean);
      return '';
    }).trim();
    return { main, tags };
  };

  // descriptor tags shown as plain text (no link)
  const isDescriptorTag = (tag: string) => {
    const t = tag.trim().toLowerCase();
    return t === "editor’s pick" || t === "editor's pick" || t === 'top downloads' || t === 'invited';
  };

  // Build external link for known tags; fallback to Google search
  const externalLinkForTag = (tag: string, pub: Publication) => {
    const t = tag.trim().toLowerCase();
    const q = encodeURIComponent(`${pub.title} ${pub.journal} ${pub.year}`);
    const map: Record<string, string> = {
      'epfl news': `https://search.epfl.ch/?q=${encodeURIComponent(pub.title)}`,
      'phys.org': `https://phys.org/search/?search=${encodeURIComponent(pub.title)}`,
      'eurekalert': `https://www.eurekalert.org/search?search%5Bvalue%5D=${encodeURIComponent(pub.title)}`,
      'tampere university': `https://www.tuni.fi/en/search?keys=${encodeURIComponent(pub.title)}`,
      'eth news': `https://www.ethz.ch/en/search.html?query=${encodeURIComponent(pub.title)}`,
      'news & views': `https://www.nature.com/search?q=${encodeURIComponent(pub.title + ' "News & Views"')}`,
      'issue cover': `https://www.google.com/search?q=${encodeURIComponent(pub.journal + ' cover ' + pub.year + ' ' + pub.title)}`,
      'highlighted': `https://www.google.com/search?q=${q}+Highlighted`,
    };
    return map[t] || `https://www.google.com/search?q=${encodeURIComponent(tag + ' ' + pub.title)}`;
  };

  // Resolve per-paper tag link with tolerant matching
  const resolveTagLink = (t: string, pub: Publication) => {
    const key = t.trim();
    return (
      pub.links?.[key] ||
      pub.links?.[key.toLowerCase()] ||
      externalLinkForTag(t, pub)
    );
  };

  // 计算“Publications”列表的全局编号（底部为 [1]，向上编号递增）
  const orderedPublications: Publication[] = [];
  priorYearsWith2025.forEach((year) => {
    const list = (year === currentYear
      ? journalPublications.filter(p => p.year === year)
      : priorPublications.filter(p => p.year === year));
    list.forEach(p => orderedPublications.push(p));
  });
  const totalCount = orderedPublications.length;
  const getNumber = (pub: Publication) => {
    const idx = orderedPublications.indexOf(pub);
    return idx >= 0 ? (totalCount - idx) : undefined;
  };
  
  // Render journal line and optional tag links under it
  const renderJournal = (pub: Publication) => {
    const { main, tags } = splitDetails(pub.details);
    return (
      <div>
        <a
          href={pub.url || scholarLink(pub.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-800 dark:text-green-400 hover:text-green-900 underline"
        >
          {pub.journal}{main ? ' ' + main : ''} ({pub.year})
        </a>
        {tags.length > 0 && (
          <div className="mt-1 space-x-3">
            {tags.map((t, i) => (
              isDescriptorTag(t) ? (
                <span key={i} className="text-green-800 dark:text-green-400">[{t}]</span>
              ) : (
                <a
                  key={i}
                  href={resolveTagLink(t, pub)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-800 dark:text-green-400 hover:text-green-900 underline"
                >
                  [{t}]
                </a>
              )
            ))}
          </div>
        )}
      </div>
    );
  };

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
                    {pub.authors.map((name, i) => (
                      <span key={i}>
                        {formatAuthor(name)}{i < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                  <div className="text-lg font-normal text-gray-800 dark:text-gray-200">
                    "{pub.title}"
                  </div>
                  {renderJournal(pub)}
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
                  <div className="text-lg font-normal text-gray-800 dark:text-gray-200">
                    {getNumber(pub) !== undefined && (
                      <span className="mr-2">[{getNumber(pub)}]</span>
                    )}
                    "{pub.title}"
                  </div>
                  <div className="text-base text-gray-700 dark:text-gray-300">
                    {pub.authors.map((name, i) => (
                      <span key={i}>
                        {formatAuthor(name)}{i < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                  {renderJournal(pub)}
                </div>
              ))}
            </div>
          </div>

          {/* Prior to HKU 大标题 */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Prior to HKU</h3>
          </div>

          {/* 年份分组（包含插入的 2025） */}
          {priorYearsWith2025.map((year) => (
            <div key={year} className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{year}</h3>
              <div className="space-y-6">
                {(year === currentYear ? journalPublications.filter(p => p.year === year) : priorPublications.filter(p => p.year === year)).map((pub, index) => (
                  <div key={`${year}-${index}`}>
                    <div className="text-lg font-normal text-gray-800 dark:text-gray-200">
                      <span className="mr-2">[{getNumber(pub)}]</span>
                      "{pub.title}"
                    </div>
                    <div className="text-base text-gray-700 dark:text-gray-300">
                      {pub.authors.map((name, i) => (
                        <span key={i}>
                          {formatAuthor(name)}{i < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                    {renderJournal(pub)}
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