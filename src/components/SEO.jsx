import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Rising Edge Community', 
  description = 'Empowering underserved youth in New York through comprehensive educational, athletic, and mentorship programs that cultivate leadership and create pathways to success.',
  keywords = 'nonprofit, education, youth programs, mentorship, athletics, New York, community, empowerment',
  image = '/hero-students.jpg',
  url = 'https://risingedge.org',
  type = 'website'
}) => {
  const fullTitle = title === 'Rising Edge Community' ? title : `${title} | Rising Edge Community`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Rising Edge Community" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Rising Edge Community" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "NonProfitOrganization",
            "name": "Rising Edge Community",
            "description": "Empowering underserved youth through education, athletics, and mentorship",
            "url": "https://risingedge.org",
            "logo": "https://risingedge.org/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "(212) 555-0100",
              "contactType": "Customer Service",
              "email": "info@risingedge.org"
            },
            "sameAs": [
              "https://facebook.com/risingedgecommunity",
              "https://twitter.com/risingedgecommunity",
              "https://instagram.com/risingedgecommunity"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO; 