import { Template } from "tinacms";

const RichTextTemplate: Template = {
	label: "Rich Text",
	name: "richText",
	ui: {
		// previewSrc: '/blocks/content.png',
		// defaultItem: {
		// 	body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
		// }, itemProps: (item) => ({ label: item.label }),
	},
	fields: [
		{
			label: "Title",
			name: "title",
			type: "string",
			isTitle: true,
			required: true,
		},
		{ label: "Show Title", name: "showTitle", type: "boolean" },
		{ label: "Body", name: "body", type: "rich-text", isBody: true },
		{
			label: "Color",
			name: "color",
			type: "string",
			options: [
				{ label: "Default", value: "default" },
				{ label: "Tint", value: "tint" },
				{ label: "Primary", value: "primary" },
			],
		},
	],
};

export default RichTextTemplate;
