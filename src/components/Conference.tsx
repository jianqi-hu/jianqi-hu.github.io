import React from 'react';
import { publications } from '../data/publications';
import type { Publication } from '../data/publications';

const Conference: React.FC = () => {
  const conferencePublications = publications.filter(p => p.type === 'conference');
  const years = Array.from(new Set(conferencePublications.map(p => p.year))).sort((a, b) => b - a);

  const scholarLink = (title: string) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`;
  const journalText = (pub: Publication) => `${pub.journal}${pub.details ? ' ' + pub.details : ''} (${pub.year})`;

  return (
    <section className="pt-40 pb-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Conference</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {years.map((year) => (
            <div key={year} className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{year}</h3>
              <div className="space-y-6">
                {conferencePublications.filter(p => p.year === year).map((pub, index) => (
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

export default Conference;