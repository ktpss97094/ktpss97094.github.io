import { getCollection, getEntry, type InferEntrySchema } from "astro:content";
import type { APIRoute } from "astro";

export async function getStaticPaths() {
	const collection = await getCollection("resume");
	return collection.map((entry) => ({
		params: { locale: entry.id.split("/")[0] },
	}));
}

function transformEntry(data: InferEntrySchema<"resume">, site: URL) {
	if (!data.basics.image) return data;
	return {
		...data,
		basics: {
			...data.basics,
			image: `${site.toString()}${data.basics.image.src.replace("/", "")}`,
		},
	};
}

export const GET: APIRoute = async ({ params, site }) => {
	const entry = await getEntry("resume", `${params.locale}/resume`);

	if (!entry) throw new Error("Entry not found");

	const data = site ? transformEntry(entry.data, site) : entry.data;

	return new Response(JSON.stringify(data), {
		headers: { "Content-Type": "application/json" },
	});
};
