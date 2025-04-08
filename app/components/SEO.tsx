import { FC } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  children: React.ReactNode;
}

const SEO: FC<SEOProps> = ({ title, description, keywords, children }) => {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6" id="main-heading">
        {title}
      </h1>
      <div className="mb-8">
        <p className="text-xl text-gray-700">
          {description}
        </p>
        <div className="mt-4">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="content" role="main">
        {children}
      </div>
    </article>
  );
};

export default SEO; 