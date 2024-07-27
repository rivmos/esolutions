import { z } from 'zod'

export const schema = z.object({
    id: z.string().optional(),
    name: z.string().trim().min(1, {
        message: 'Tag name is required'
    }),
})