/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_APP_URL || 'https://mycalendario.com.br',
	generateRobotsTxt: true, // (optional)
	// ...other options
};
