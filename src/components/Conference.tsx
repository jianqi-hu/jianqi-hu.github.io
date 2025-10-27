import React from 'react';
import { publications } from '../data/publications';
import type { Publication } from '../data/publications';

const Conference: React.FC = () => {
  const conferencePublications = publications.filter(p => p.type === 'conference');
  const years = Array.from(new Set(conferencePublications.map(p => p.year))).sort((a, b) => b - a);

  // Split details into main code and bracket tags like [postdeadline]
  const splitDetails = (details?: string) => {
    if (!details) return { main: '', tags: [] as string[] };
    const tags: string[] = [];
    const main = details.replace(/\s*\[([^\]]+)\]/g, (_m, tag) => {
      const clean = String(tag).trim();
      if (clean) tags.push(clean);
      return '';
    }).trim();
    return { main, tags };
  };

  // helper: render author name with superscript markers; group punctuation with markers
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

  // 计算会议编号：底部为 [C1]，向上递增
  const orderedConfs: Publication[] = [];
  years.forEach((year) => {
    conferencePublications.filter(p => p.year === year).forEach(p => orderedConfs.push(p));
  });
  const total = orderedConfs.length;
  const getCNumber = (pub: Publication) => {
    const idx = orderedConfs.indexOf(pub);
    return idx >= 0 ? `C${total - idx}` : undefined;
  };

  return (
    <section className="pt-40 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Conferences</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {years.map((year) => (
            <div key={year} className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{year}</h3>
              <div className="space-y-6">
                {conferencePublications.filter(p => p.year === year).map((pub, index) => (
                  <div key={`${year}-${index}`}>
                    <div className="text-lg font-normal text-gray-800 dark:text-gray-200">
                      <span className="mr-2">[{getCNumber(pub)}]</span>
                      "{pub.title}"
                    </div>
                    <div className="text-base text-gray-700 dark:text-gray-300">
                      {pub.authors.map((name, i) => (
                        <span key={i}>
                          {formatAuthor(name)}{i < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                    {(() => {
                      const { main, tags } = splitDetails(pub.details);
                      return (
                        <>
                          <span className="text-green-800 dark:text-green-400">
                            {pub.journal}{main ? ' ' + main : ''} ({pub.year})
                          </span>
                          {tags.length > 0 && (
                            <div className="text-green-800 dark:text-green-400">[{tags.join('] [')}]</div>
                          )}
                        </>
                      );
                    })()}
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

export default Conference;