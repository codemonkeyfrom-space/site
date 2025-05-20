
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://codemonkeyfromspace.com',
	base: '/',
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'github-dark-default', // Or any supported Shiki theme
		},
	},
	integrations: [
		mdx(),
		sitemap(),
	]
});