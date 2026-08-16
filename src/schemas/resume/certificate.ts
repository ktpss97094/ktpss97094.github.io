import { z } from "astro/zod";

export default z.object({
	name: z.string().describe("e.g. Certified Kubernetes Administrator"),
	date: z.coerce.date(),
	url: z.url().optional().describe("e.g. https://example.com"),
	issuer: z.string().describe("e.g. CNCF"),
});
