/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      cleanupIds: false,
                      inlineStyles: false,
                      minifyStyles: false,
                      mergeStyles: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
