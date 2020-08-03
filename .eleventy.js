const eleventyVue = require('@11ty/eleventy-plugin-vue');
const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ public: './' });
	eleventyConfig.addPlugin(eleventyVue);

	eleventyConfig.setBrowserSyncConfig({
		files: ['dist/**/*'],
		open: true,
	});

	eleventyConfig.setDataDeepMerge(true);
	return {
		dir: {
			input: 'src/views',
			output: 'dist',
		},
		templateFormats: ['.html', '.js', '.vue'],
		// htmlTemplateEngine: 'html',
		// passthroughFileCopy: true,
	};
};
