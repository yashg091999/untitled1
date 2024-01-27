import path from 'path';

const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add support for loading PDF files
        config.module.rules.push({
            test: /\.(pdf)$/,
            type: 'asset/resource',
        });

        return config;
    },
};

export default nextConfig;