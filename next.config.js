const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/docs-webflux-spring-security" : "";

// const assetPrefix = "/docs-webflux-spring-security";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix,
  basePath: assetPrefix,
  // distDir: 'dist',
}

module.exports = {
  ...withNextra(),
  ...nextConfig,
}