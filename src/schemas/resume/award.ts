import { z } from "astro/zod";

export default z.object({
	title: z
		.string()
		.describe("e.g. One of the 100 greatest minds of the century"),
	date: z.coerce.date(),
	awarder: z.string().describe("e.g. Time Magazine"),
	summary: z
		.string()
		.describe("e.g. Received for my work with Quantum Physics"),
});
