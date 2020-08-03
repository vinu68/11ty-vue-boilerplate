module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'assets',
	lintOnSave: true,
	runtimeCompiler: false,
	transpileDependencies: [
		/* string or regex */
	],
	productionSourceMap: false,
	chainWebpack: () => {},
	configureWebpack: () => {},
	css: {
		// extract CSS in components into a single CSS file (only in production)
		// can also be an object of options to pass to extract-text-webpack-plugin
		extract: true,

		// Enable CSS modules for all css / pre-processor files.
		// This option does not affect *.vue files.
		// modules: false,

		// enable CSS source maps?
		sourceMap: false,

		// pass custom options to pre-processor loaders. e.g. to pass options to
		// sass-loader, use { sass: { ... } }
		loaderOptions: {},
	},

	// use thread-loader for babel & TS in production build
	// enabled by default if the machine has more than 1 cores
	parallel: require('os').cpus().length > 1,

	// options for the PWA plugin.
	// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa

	// configure webpack-dev-server behavior
	devServer: {
		open: process.platform === 'darwin',
		host: '0.0.0.0',
		port: 8088,
		https: false,
		hotOnly: false,
		compress: true,
		// See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
	},

	// options for 3rd party plugins
	pluginOptions: {
		// ...
	},
};
