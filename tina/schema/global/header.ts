import type { TinaField } from "tinacms";

const header: TinaField = {
	label: "Header",
	name: "header",
	type: "object",
	fields: [
		{ type: "string", label: "Name", name: "name" },
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
				{ type: "string", label: "Link", name: "href" },
				{ type: "string", label: "Label", name: "label" },
			],
		},
	],
};

export default header;
