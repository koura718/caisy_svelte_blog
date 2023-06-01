import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	runtime: 'edge',
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

export default config;
