import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

const SEO: React.FC<SEOProps> = ({
  title = 'LUCAS.DEV - Senior Fullstack Engineer | React, TypeScript, Node.js Expert',
  description = 'Senior Fullstack Engineer with 10+ years experience specializing in React, TypeScript, Node.js, GraphQL, PostgreSQL, and AWS. Building exceptional digital experiences for innovative companies.',
  keywords = 'fullstack engineer, react developer, typescript, node.js, graphql, postgresql, aws, senior developer, software engineer, web development',
  image = 'https://lucas.dev/og-image.jpg',
  url = 'https://lucas.dev',
  type = 'website',
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:type', type);

    // Update Twitter Card tags
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', image);
    updatePropertyTag('twitter:url', url);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Cleanup function
    return () => {
      // Reset to default values when component unmounts
      document.title = 'LUCAS.DEV - Senior Fullstack Engineer | React, TypeScript, Node.js Expert';
    };
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEO;
