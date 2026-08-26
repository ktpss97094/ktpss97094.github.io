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
			work: work.array().default([]),
			volunteer: volunteer.array().default([]),
			education: education.array().default([]),
			awards: award
				.array()
				.default([])
				.describe(
					"Specify any awards you have received throughout your professional career",
				),
			certificates: certificate
				.array()
				.default([])
				.describe(
					"Specify any certificates you have received throughout your professional career",
				),
			publications: publication
				.array()
				.default([])
				.describe("Specify your publications through your career"),
			skills: skill
				.array()
				.default([])
				.describe("List out your professional skill-set"),
			languages: language
				.array()
				.default([])
				.describe("List any other languages you speak"),
			interests: interest.array().default([]),
			references: reference
				.array()
				.default([])
				.describe("List references you have received"),
			projects: project.array().default([]).describe("Specify career projects"),
		}),
});

export const collections = {
	resume: resumeCollection,
};
