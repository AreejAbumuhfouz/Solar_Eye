// SEOHead.jsx
import { Helmet } from "react-helmet-async";

export function SEOHead({
    title = "SolarEye - We Solve It Before You See It!",
  description = "We Solve It Before You See It! Pioneering AI-driven solar infrastructure monitoring for a brighter future.",
  keywords = "solar panel inspection, drone inspection, AI solar analysis, thermal imaging",
  canonicalUrl = "https://solareye.info"
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="SolarEye" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://solareye.info/og-image.jpg" />

    
      {/* Favicon */}
      <link rel="icon" href="/CircleLogo.png" />
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}


export function StructuredData({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
}
