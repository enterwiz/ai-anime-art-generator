/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://enterwiz.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
