// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const {
  composePlugins, withNx,
} = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      'react-use',
      'swr',
      '@myran/components',
      '@myran/api',
      '@myran/types',
      '@shared/components',
      '@shared/svg',
      '@shared/types',
    ],
    // webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'datocms-assets.com',
        pathname: '',
        port: '',
        protocol: 'https',
      },
    ],
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  sassOptions: {
    additionalData: `@use "variables" as *;@use "mixins" as *;`,
    includePaths: [
      path.join(__dirname, '../../node_modules'),
      path.join(__dirname, '../../libs/style/src/lib/'),
    ],
  },
  swcMinify: true,
  webpack: (config, {
    dev, isServer,
  }) => {
    // Preact
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react': 'preact/compat',
        'react-dom': 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
      });
    }

    // SVGR
    // Grab the existing rule that handles SVG imports
    // @ts-expect-error unnecessary type check
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        resourceQuery: /url/, // *.svg?url
        test: /\.svg$/i,
      },
      // Convert all other *.svg imports to React components
      {
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
  // @ts-expect-error - next/bundle-analyzer types are incorrect
  plugins.push(withBundleAnalyzer);
}

module.exports = composePlugins(...plugins)(nextConfig);
