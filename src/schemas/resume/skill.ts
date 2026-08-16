import { z } from "astro/zod";

export default z.object({
	name: z.string().describe("e.g. Web Development"),
	level: z.string().describe("e.g. Master"),
	keywords: z
		.array(z.string().describe("e.g. HTML"))
		.describe("List some keywords pertaining to this skill"),
});
