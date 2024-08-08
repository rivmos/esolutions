import { z } from 'zod'

// Custom refinement for Next.js paths and URLs
const hrefSchema = z.string().refine((val) => {
    // Allow URLs starting with http:// or https://
    if (val.startsWith('http://') || val.startsWith('https://')) {
      try {
        new URL(val);
        return true;
      } catch {
        return false;
      }
    }
    // Allow relative paths (e.g., /about, /contact)
    return val.startsWith('/');
  }, {
    message: 'Invalid URL or path',
  });

export const schema = z.object({
    id: z.string().optional(), // Assuming `id` might be generated server-side
    heading: z.string().min(1, "Heading is required"),
    subheading: z.string().min(1, "Sub Heading is required"),
    ctaText: z.string().min(1, "Button title is required"),
    ctaHref: hrefSchema,
    image: z.string()
  });