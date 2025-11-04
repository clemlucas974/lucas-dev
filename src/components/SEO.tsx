import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = 'https://lucas-dev.pro/lucas-dev-logo.jpg',
  url = 'https://lucas-dev.pro',
  type = 'website',
}) => {
  const { t, i18n } = useTranslation();

  // Use translations as defaults if no props provided
  const seoTitle = title || t('seo.title');
  const seoDescription = description || t('seo.description');
  const seoKeywords = keywords || t('seo.keywords');
  const currentLang = i18n.language;
  useEffect(() => {
    // Update document title
    document.title = seoTitle;

    // Update html lang attribute
    document.documentElement.lang = currentLang;

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
    updateMetaTag('description', seoDescription);
    updateMetaTag('keywords', seoKeywords);

    // Update Open Graph tags
    updatePropertyTag('og:title', seoTitle);
    updatePropertyTag('og:description', seoDescription);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:locale', currentLang === 'fr' ? 'fr_FR' : 'en_US');

    // Update Twitter Card tags
    updatePropertyTag('twitter:title', seoTitle);
    updatePropertyTag('twitter:description', seoDescription);
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

    // Update or create hreflang tags for multilingual SEO
    const updateHreflang = (lang: string, href: string) => {
      let link = document.querySelector(`link[hreflang="${lang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Add hreflang tags for both languages
    updateHreflang('en', url);
    updateHreflang('fr', url);
    updateHreflang('x-default', url); // Default language

    // Cleanup function
    return () => {
      // Reset to default values when component unmounts
      document.title = t('seo.title');
    };
  }, [seoTitle, seoDescription, seoKeywords, image, url, type, currentLang, t]);

  return null; // This component doesn't render anything
};

export default SEO;
