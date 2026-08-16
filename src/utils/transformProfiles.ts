import type { CollectionEntry } from "astro:content";

type Link = CollectionEntry<"resume">["data"]["basics"]["profiles"][number] & {
	icon: string;
};

function transformProfiles(
	basics: CollectionEntry<"resume">["data"]["basics"],
): Array<Link> {
	const links: Array<Link> = [];

	if (basics.url)
		links.push({
			icon: "mdi:web",
			network: "",
			url: basics.url,
			username: basics.url,
		});
	if (basics.email)
		links.push({
			icon: "mdi:email",
			network: "",
			url: `mailto:${basics.email}`,
			username: basics.email,
		});
	if (basics.phone)
		links.push({
			icon: "mdi:phone",
			network: "",
			url: `tel:${basics.phone}`,
			username: basics.phone,
		});

	return [
		...links,
		...basics.profiles.map((p) => {
			const hostname = new URL(p.url).hostname;
			const icon = `mdi:${hostname.split(".").at(-2)}`;
			return { icon, ...p };
		}),
	];
}
export default transformProfiles;
