import React from 'react';
import { publications, preprints } from '../data/publications';
import type { Publication } from '../data/publications';

const Publications: React.FC = () => {
  // 筛选所有非 submitted 状态的期刊论文
  const journalPublications = publications.filter(p => p.type === 'journal' && p.journal.toLowerCase() !== 'submitted');

  // 获取所有出现的年份并按倒序排列 (如 2026, 2025, 2024...)
  const years = Array.from(new Set(journalPublications.map(p => p.year))).sort((a, b) => b - a);

  // 直接获取指定年份的论文列表（完全保持 data 文件中的原始定义顺序，不加任何排序逻辑）
  const getYearList = (year: number) => {
    return journalPublications.filter(p => p.year === year);
  };

  // 生成 Google Scholar 搜索链接
  const scholarLink = (title: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;

  // helper: render author name with superscript markers
  const formatAuthor = (name: string) => {
    const nodes: React.ReactNode[] = [];
    const re = /(†|\*|∗)(?:[,\s]*(?:†|\*|∗))*/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(name)) !== null) {
      const start = m.index;
      if (start > last) {
        nodes.push(<span key={`text-${last}`}>{name.slice(last, start)}</span>);
      }
      const raw = m[0];
      const markers = raw.match(/(†|\*|∗)/g) || [];
      const hasComma = raw.includes(',');
      const daggers = markers.filter(ch => ch === '†');
      const stars = markers.filter(ch => ch === '*' || ch === '∗');
      const ordered = [...daggers, ...stars];
      const content = ordered.join(hasComma && ordered.length > 1 ? ',' : '');
      nodes.push(<sup key={`sup-${start}`}>{content || raw.replace(/\s+/g, '')}</sup>);
      last = re.lastIndex;
    }
    if (last < name.length) {
      nodes.push(<span key={`text-${last}`}>{name.slice(last)}</span>);
    }
    return <>{nodes}</>;
  };

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

  const isDescriptorTag = (tag: string) => {
    const t = tag.trim().toLowerCase();
    return t === "editor’s pick" || t === "editor's pick" || t === 'top downloads' || t === 'invited' || t === 'invited review';
  };

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

  const resolveTagLink = (t: string, pub: Publication) => {
    const key = t.trim();
    return (
      pub.links?.[key] ||
      pub.links?.[key.toLowerCase()] ||
      externalLinkForTag(t, pub)
    );
  };

  // 计算全局编号
  const orderedPublications: Publication[] = [];
  years.forEach((year) => {
    const list = getYearList(year);
    list.forEach(p => orderedPublications.push(p));
  });
  const totalCount = orderedPublications.length;
  const getNumber = (pub: Publication) => {
    const idx = orderedPublications.indexOf(pub);
    return idx >= 0 ? (totalCount - idx) : undefined;
  };

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
        <div className="text-center mb-8">
          <h2 className="section-title">Publications</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-left">
              <sup>†</sup> equal contribution, <sup>*</sup> correspondence
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Preprints */}
          <div className="mb-12 -mt-4">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Preprints</h3>
            <div className="space-y-6">
              {preprints.map((pub, index) => (
                <div key={`preprint-${index}`}>
                  <div className="text-lg font-normal text-gray-800 dark:text-gray-200">
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

          {/* 按年份渲染（自动包含 2026、2025、2024 等），无 Prior to HKU 标题，顺序与 data 文件一致 */}
          {years.map((year) => (
            <div key={year} className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{year}</h3>
              <div className="space-y-6">
                {getYearList(year).map((pub, index) => (
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
