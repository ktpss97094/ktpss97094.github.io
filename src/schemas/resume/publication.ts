import { z } from "astro/zod";

export default z.object({
	name: z.string().describe("e.g. The World Wide Web"),
	publisher: z.string().describe("e.g. IEEE, Computer Magazine"),
	releaseDate: z.coerce.date(),
	url: z
		.url()
		.describe(
			"e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html",
		),
	summary: z
		.string()
		.describe(
			"Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.",
		),
});
