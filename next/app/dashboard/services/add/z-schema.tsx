import { z } from 'zod'

export const schema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Service name is required"),
    description: z.string().min(1, "Description is required"),
    tagIds: z.array(z.string()),
    image: z.string(),
    isActive: z.boolean().default(true),
  });