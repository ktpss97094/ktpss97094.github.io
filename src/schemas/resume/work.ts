import { z } from "astro/zod";
import experience from "./experience";

export default experience.extend({
	name: z.string().describe("e.g. Facebook"),
	location: z.string().optional().describe("e.g. Menlo Park, CA"),
	description: z.string().optional().describe("e.g. Social Media Company"),
});
