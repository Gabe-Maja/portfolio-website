import { useEffect } from 'react';

const SEOHead = () => {
  useEffect(() => {
    // Set document title
    document.title = "Gabriel Maja | Data Analyst & Automation Specialist";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Gabriel Maja - Expert Data Analyst & Automation Specialist. Transforming complex data into actionable business insights through advanced analytics, AI-driven automation, and innovative workflow solutions.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Gabriel Maja - Expert Data Analyst & Automation Specialist. Transforming complex data into actionable business insights through advanced analytics, AI-driven automation, and innovative workflow solutions.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'data analyst, automation specialist, business intelligence, SQL, Power BI, Python, machine learning, AI automation, data science, analytics'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'data analyst, automation specialist, business intelligence, SQL, Power BI, Python, machine learning, AI automation, data science, analytics';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Set Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Gabriel Maja | Data Analyst & Automation Specialist');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'Gabriel Maja | Data Analyst & Automation Specialist';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 
        'Expert Data Analyst & Automation Specialist transforming complex data into actionable business insights.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Expert Data Analyst & Automation Specialist transforming complex data into actionable business insights.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Set viewport meta tag for mobile responsiveness
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Set lang attribute on html element
    document.documentElement.lang = 'en';

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Gabriel Kevin Maja",
      "jobTitle": "Data Analyst & Automation Specialist",
      "description": "Expert Data Analyst & Automation Specialist transforming complex data into actionable business insights through advanced analytics, AI-driven automation, and innovative workflow solutions.",
      "email": "gabemaja10@gmail.com",
      "url": window.location.origin,
      "sameAs": [
        "https://www.linkedin.com/in/gabriel-kevin-maja/"
      ],
      "knowsAbout": [
        "Data Analysis",
        "Business Intelligence", 
        "SQL",
        "Power BI",
        "Python",
        "Machine Learning",
        "AI Automation",
        "Process Automation"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default SEOHead;