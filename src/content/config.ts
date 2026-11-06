import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    github: z.string().optional(),
    liveUrl: z.string().optional(),
    paperUrl: z.string().optional(),
    image: z.string().optional(),
    thumbnail: z.string().optional(),
    metric: z.string().optional(),
    metricLabel: z.string().optional(),
    category: z.enum(['research', 'community-safety', 'leadership']),
  }),
});

export const collections = { projects };
