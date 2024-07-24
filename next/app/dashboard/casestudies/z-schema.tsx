import { z } from 'zod'

export const schema = z.object({
    title: z.string().trim().min(1, {
        message: 'Title is required'
    }),
    description: z.string().trim().min(1, {
        message: 'Description is required'
    }),
    content: z.string().min(1, {
        message: 'Content is required'
    }),
    // image: z.string()
})