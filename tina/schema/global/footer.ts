import type { TinaField } from "tinacms";

const footer: TinaField = {
	label: "Footer",
	name: "footer",
	type: "object",
	fields: [
		{
			label: "Social Links",
			name: "social_links",
			type: "object",
			list: true,
			ui: { itemProps: (item) => ({ label: item?.social ?? "Social Media" }) },
			fields: [
				{
					type: "reference",
					name: "social",
					label: "Social",
					collections: ["socials"],
				},
			],
		},
	],
};

export default footer;
