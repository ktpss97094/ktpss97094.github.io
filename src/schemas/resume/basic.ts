import type { ImageFunction } from "astro:content";
import { z } from "astro/zod";
import profile from "./profile";

export default (image: ImageFunction) =>
	z.object({
		name: z.string(),
		label: z.string().describe("e.g. Web Develope"),
		image: image().optional().describe("Photo of you or an icon"),
		email: z.email().optional(),
		phone: z.string().optional(),
		url: z.string().optional(),
		summary: z
			.string()
			.describe("Write a short 2-3 sentence biography about yourself"),
		location: z
			.object({
				address: z
					.string()
					.describe(
						"To add multiple address lines, use \n. For example, 1234 Glücklichkeit Straße\nHinterhaus 5. Etage li.",
					),
				postalCode: z.string(),
				city: z.string(),
				countryCode: z.string(),
				region: z
					.string()
					.describe(
						"The general region where you live. Can be a US state, or a province, for instance.",
					),
			})
			.optional(),
		profiles: profile
			.array()
			.describe(
				"Specify any number of social networks that you participate in",
			),
	});
