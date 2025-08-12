import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://solareye.info' });
  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  const pages = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/our-story', changefreq: 'weekly', priority: 0.8 },
    { url: '/pricing', changefreq: 'weekly', priority: 0.8 },
    { url: '/services', changefreq: 'weekly', priority: 0.8 },
    { url: '/contactus', changefreq: 'monthly', priority: 0.7 }
  ];

  pages.forEach(page => sitemap.write(page));

  sitemap.end();

  // IMPORTANT: pass the sitemap stream here, NOT writeStream
  await streamToPromise(sitemap);

  console.log('Sitemap generated!');
}

generateSitemap();
