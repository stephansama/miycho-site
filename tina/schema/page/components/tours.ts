import type { Template } from "tinacms";

const ToursTemplate: Template = {
	label: "Tours",
	name: "tours",
	fields: [
		{
			label: "Tour Information",
			name: "tourInformation",
			type: "object",
			list: true,
			fields: [
				{ label: "Date", name: "date", type: "datetime" },
				{ label: "Location", name: "location", type: "string" },
				{ label: "Link", name: "link", type: "string" },
			],
		},
	],
};

export default ToursTemplate;
