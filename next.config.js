const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPreact = require("next-plugin-preact");

const nextConfig = { future: { webpack5: true } };

module.exports = withBundleAnalyzer(withPreact(nextConfig));
