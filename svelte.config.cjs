const preprocess = require("svelte-preprocess");
const vercel = require('@sveltejs/adapter-vercel');
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
	}
};
