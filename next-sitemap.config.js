/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://enterwiz.org",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
