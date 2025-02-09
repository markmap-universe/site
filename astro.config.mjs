// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://markmap.org',
	integrations: [
		starlight({
			title: 'Markmap Universe',
			social: {
				github: 'https://github.com/markmap-universe',
			},
			sidebar: [
				{ label: 'Overview', slug: 'overview' },
				{
					label: 'Repositories',
					items: [
						{ label: 'hexo-markmap', slug: 'hexo-markmap' },
						{ label: 'remark-markmap', slug: 'remark-markmap' },
					],
				},
			],
			favicon: '/favicon.png',
		}),
	],
});
