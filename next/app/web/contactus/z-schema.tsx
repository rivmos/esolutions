import { z } from 'zod'

export const schema = z.object({
    id: z.string().optional(),
    first: z.string().trim().min(1, {
        message: 'First name is required'
    }),
    last: z.string().trim().min(1, {
        message: 'Last name is required'
    }),
    email: z.string().email(),
    mobile: z.string({
        message:'Mobile number is required'
    }).min(10, {
        message:'Mobile number must be 10 digits'
    }).max(10, {
        message: 'Mobile number must be 10 digits'
    }),
    message: z.string().min(1, {
        message:'Please provide your query for better understanding'
    })
})