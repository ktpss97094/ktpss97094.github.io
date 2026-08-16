import { z } from "astro/zod";

export default z.object({
	name: z.string().describe("e.g. The World Wide Web"),
	description: z
		.string()
		.describe("Short summary of project. e.g. Collated works of 2017."),
	highlights: z
		.array(z.string().describe("e.g. Directs you close but not quite there"))
		.describe("Specify multiple features"),
	keywords: z
		.array(z.string().describe("e.g. AngularJS"))
		.describe("Specify special elements involved"),
	startDate: z.coerce.date(),
	endDate: z.coerce.date().optional(),
	url: z
		.url()
		.optional()
		.describe(
			"e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html",
		),
	roles: z
		.array(z.string().describe("e.g. Team Lead, Speaker, Writer"))
		.describe("Specify your role on this project or in company"),
	entity: z
		.string()
		.optional()
		.describe(
			"Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'",
		),
	type: z
		.string()
		.optional()
		.describe(
			"e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'",
		),
});
