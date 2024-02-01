import type { Collection } from "tinacms";
import * as components from "./components";

const pageCollection: Collection = {
	path: "content/pages",
	name: "page",
	label: "Pages",
	format: "json",
	ui: {
		// router: ({ document }) => "/" + document._sys.filename,
		filename: {
			slugify: ({ title }) => `${title?.replaceAll(" ", "-")?.toLowerCase()}`,
		},
	},
	fields: [
		{
			type: "string",
			name: "title",
			label: "Title",
			isTitle: true,
			required: true,
			description: "Title for page (will appear in website title)",
		},
		{
			label: "SEO",
			name: "seo",
			type: "object",
			fields: [
				{ label: "No Index", name: "noIndex", type: "boolean" },
				{ label: "No Follow", name: "noFollow", type: "boolean" },
				{ label: "Opengraph Image", name: "ogImage", type: "image" },
				{
					label: "Description",
					name: "description",
					type: "string",
					ui: { component: "textarea" },
				},
			],
		},
		{
			label: "Sections",
			name: "sections",
			type: "object",
			list: true,
			ui: { visualSelector: true },
			templates: Object.values(components),
		},
	],
};

export default pageCollection;
