import { useEffect } from "react";

interface StructuredDataProps {
  type?: "website" | "organization" | "service";
}

const StructuredData = ({ type = "website" }: StructuredDataProps) => {
  useEffect(() => {
    // Remove any existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Orygo",
      "url": "https://orygo.app",
      "logo": "https://orygo.app/orygo.png",
      "description": "Plateforme d'orientation professionnelle avec plus de 1500 métiers, test RIASEC et accès à 5000+ formations",
      "foundingDate": "2024",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-6-99-06-05-57",
        "contactType": "Customer Service",
        "email": "support@orygo.app",
        "availableLanguage": ["French"]
      },
      "sameAs": [
        // Ajoutez ici vos réseaux sociaux quand vous les aurez
        // "https://www.facebook.com/orygo",
        // "https://twitter.com/orygo",
        // "https://www.linkedin.com/company/orygo"
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Orygo",
      "url": "https://orygo.app",
      "description": "Trouvez votre métier idéal parmi 1500+ professions. Test RIASEC gratuit, matching intelligent et accès à 5000+ formations.",
      "publisher": {
        "@type": "Organization",
        "name": "Orygo",
        "logo": {
          "@type": "ImageObject",
          "url": "https://orygo.app/orygo.png"
        }
      },
      "inLanguage": "fr-FR"
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Orientation Professionnelle",
      "provider": {
        "@type": "Organization",
        "name": "Orygo"
      },
      "areaServed": "FR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services d'orientation professionnelle",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Test RIASEC de personnalité professionnelle",
              "description": "Test de personnalité basé sur le modèle RIASEC pour identifier vos préférences professionnelles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Base de données de 1500+ métiers",
              "description": "Accès à une base complète de métiers avec codes ROME et descriptions détaillées"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Matching personnalisé métier-profil",
              "description": "Algorithme de matching intelligent entre votre profil et les métiers disponibles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Catalogue de 5000+ formations",
              "description": "Accès à un catalogue complet de formations avec certifications RNCP"
            }
          }
        ]
      }
    };

    // Breadcrumb Schema for navigation
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://orygo.app/"
        }
      ]
    };

    // Combine schemas based on type
    let schemas = [organizationSchema, websiteSchema];

    if (type === "service") {
      schemas.push(serviceSchema);
    }

    schemas.push(breadcrumbSchema);

    // Create and append script tags
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // Cleanup on unmount
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [type]);

  return null; // This component doesn't render anything
};

export default StructuredData;
