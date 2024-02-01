import type { Collection } from "tinacms";

const albumCollection: Collection = {
	path: "content/album",
	name: "album",
	label: "Album",
	format: "json",
	ui: {
		filename: {
			slugify: ({ title }) => `${title?.replaceAll(" ", "-")?.toLowerCase()}`,
		},
	},
	fields: [
		{
			label: "Title",
			name: "title",
			type: "string",
			isTitle: true,
			required: true,
		},
		{ label: "Description", name: "description", type: "string" },
		{ label: "Album Art", name: "albumArt", type: "image" },
	],
};

export default albumCollection;
