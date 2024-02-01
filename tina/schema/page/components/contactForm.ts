import type { Template } from "tinacms";

const ContactFormTemplate: Template = {
	label: "Contact Form",
	name: "contactForm",
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
	],
};

export default ContactFormTemplate;
