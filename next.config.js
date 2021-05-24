const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
	future: { webpack5: true },
	images: { domains: ["bebemamae.com", "i0.wp.com"] },
};

module.exports = withBundleAnalyzer(nextConfig);
