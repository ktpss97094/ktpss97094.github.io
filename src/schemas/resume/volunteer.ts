import { z } from "astro/zod";
import experience from "./experience";

export default experience.extend({
	organization: z.string().describe("e.g. Facebook"),
});
