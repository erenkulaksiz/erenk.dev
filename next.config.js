const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config
  },
  experimental: { optimizeCss: true },
}

module.exports = nextConfig
