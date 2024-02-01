import type { Collection } from "tinacms";

const socialsCollection: Collection = {
	path: "content/socials",
	name: "socials",
	label: "Socials",
	format: "json",
	ui: {
		filename: {
			slugify: ({ title }) => `${title?.replaceAll(" ", "-")?.toLowerCase()}`,
		},
	},
	fields: [
		{ type: "string", label: "Title", name: "title" },
		{ type: "string", label: "Social Link", name: "link" },
		{ type: "string", label: "Iconify Pack", name: "iconPack" },
		{ type: "string", label: "Iconify Name", name: "iconName" },
	],
};

export default socialsCollection;
