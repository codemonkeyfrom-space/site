// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://pabrams.github.io/code-monkey-from-space',
	base: '/',
	integrations: [mdx(), sitemap()],
	  
});