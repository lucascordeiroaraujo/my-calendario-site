const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPlugins = require("next-compose-plugins");

const withImages = require("next-images");

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600, 1280, 1536],
    domains: ["localhost"],
  },
  i18n,
};

module.exports = withPlugins([[withImages], [withBundleAnalyzer]], nextConfig);
