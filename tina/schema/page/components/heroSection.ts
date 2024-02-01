import type { Template } from "tinacms";

const HeroSectionTemplate: Template = {
	label: "Hero Section",
	name: "heroSection",
	ui: {
		defaultItem: { imageOnRight: true },
	},
	fields: [
		{
			label: "Title",
			name: "title",
			type: "string",
			isTitle: true,
			required: true,
		},
		{ label: "Subtitle", name: "subtitle", type: "string" },
		{ label: "Body", name: "body", type: "rich-text" },
		{ name: "background", label: "Section Background", type: "image" },
		{
			label: "Social Links",
			name: "social_links",
			type: "object",
			list: true,
			ui: { itemProps: ({ social: label }) => ({ label }) },
			fields: [
				{
					type: "reference",
					label: "Social",
					name: "social",
					collections: ["socials"],
				},
			],
		},
		{
			label: "Actions",
			name: "actions",
			type: "object",
			list: true,
			ui: {
				defaultItem: {
					label: "Action Label",
					type: "button",
					icon: true,
					link: "/",
				},
				itemProps: ({ label }) => ({ label }),
			},
			fields: [
				{ label: "Label", name: "label", type: "string" },
				{
					label: "Type",
					name: "type",
					type: "string",
					options: [
						{ label: "Button", value: "button" },
						{ label: "Link", value: "link" },
					],
				},
				{
					label: "Variant",
					name: "variant",
					type: "string",
					options: [
						{ label: "Primary", value: "primary" },
						{ label: "Secondary", value: "secondary" },
					],
				},
				{ label: "Icon", name: "icon", type: "boolean" },
				{ label: "Link", name: "link", type: "string" },
			],
		},
		{
			label: "Image",
			name: "image",
			type: "object",
			fields: [
				{ name: "src", label: "Image Source", type: "image" },
				{ name: "alt", label: "Alt Text", type: "string" },
				{ name: "rounded", label: "Rounded", type: "boolean" },
				{ label: "On Right", name: "onRight", type: "boolean" },
			],
		},
	],
};

export default HeroSectionTemplate;
