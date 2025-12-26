import { defineContentConfig, defineCollection } from '@nuxt/content';
import z from 'zod';

export default defineContentConfig({
	collections: {
		postagens: defineCollection({
			type: 'page',
			source: 'postagens/*.md',
			schema: z.object({
				title: z.string(),
				description: z.string(),
				author: z.string(),
				tags: z.array(z.string()),
				preview: z.string(),
				createdAt: z.string(),
			}),
		}),
	},
});
