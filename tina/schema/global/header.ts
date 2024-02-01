import type { TinaField } from "tinacms";

const header: TinaField = {
	label: "Header",
	name: "header",
	type: "object",
	fields: [
		{ type: "string", label: "Name", name: "name" },
		{ type: "image", label: "Image", name: "image" },
		{
			type: "object",
			label: "Nav Links",
			name: "nav",
			list: true,
			ui: {
				itemProps: (item) => ({ label: item?.label }),
				defaultItem: { href: "home", label: "Home" },
			},
			fields: [
				{
					type: "reference",
					label: "Page",
					name: "page",
					collections: ["page"],
				},
				{ type: "string", label: "Label", name: "label" },
			],
		},
	],
};

export default header;
