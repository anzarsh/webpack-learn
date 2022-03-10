const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        main: {
            import: './src/index.js',
        },
        test: {
            import: './src/test.js',
        }
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};
