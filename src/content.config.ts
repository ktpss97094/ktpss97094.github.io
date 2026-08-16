import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import award from "./schemas/resume/award";
import basic from "./schemas/resume/basic";
import certificate from "./schemas/resume/certificate";
import education from "./schemas/resume/education";
import interest from "./schemas/resume/interest";
import language from "./schemas/resume/language";
import project from "./schemas/resume/project";
import publication from "./schemas/resume/publication";
import reference from "./schemas/resume/reference";
import skill from "./schemas/resume/skill";
import volunteer from "./schemas/resume/volunteer";
import work from "./schemas/resume/work";

const resumeCollection = defineCollection({
	loader: glob({ pattern: "**/resume.json", base: "./src/content/resume" }),
	schema: ({ image }) =>
		z.object({
			basics: basic(image),
			work: work.array(),
			volunteer: volunteer.array(),
			education: education.array(),
			awards: award
				.array()
				.describe(
					"Specify any awards you have received throughout your professional career",
				),
			certificates: certificate
				.array()
				.describe(
					"Specify any certificates you have received throughout your professional career",
				),
			publications: publication
				.array()
				.describe("Specify your publications through your career"),
			skills: skill.array().describe("List out your professional skill-set"),
			languages: language
				.array()
				.describe("List any other languages you speak"),
			interests: interest.array(),
			references: reference
				.array()
				.describe("List references you have received"),
			projects: project.array().describe("Specify career projects"),
		}),
});

export const collections = {
	resume: resumeCollection,
};
