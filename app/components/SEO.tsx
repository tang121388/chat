'use client';

import { FC } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  children: React.ReactNode;
}

const SEO: FC<SEOProps> = ({ title, description, keywords, children }) => {
  return (
    <article>
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900" id="main-heading">
            {title}
          </h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="inline-block bg-white text-blue-600 rounded-full px-4 py-2 text-sm font-medium border border-blue-100 hover:bg-blue-50 transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="content" role="main">
        {children}
      </div>
    </article>
  );
};

export default SEO; 