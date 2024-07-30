import { z } from 'zod'

export const schema = z.object({
    id: z.string().optional(),
    name: z.string().trim().min(1, {
        message: 'Title is required'
    }),
    position: z.string().optional(),
    message: z.string().min(1, {
        message: 'Content is required'
    }),
})