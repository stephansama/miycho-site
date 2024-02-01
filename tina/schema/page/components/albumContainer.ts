import type { Template } from "tinacms";

const AlbumContainerTemplate: Template = {
	label: "Album Container",
	name: "albumContainer",
	fields: [
		{
			type: "object",
			label: "Album",
			name: "album",
			list: true,
			fields: [
				{
					type: "reference",
					label: "Album Reference",
					name: "albumReference",
					collections: ["album"],
				},
			],
		},
	],
};

export default AlbumContainerTemplate;
