// https://youtu.be/74PCGPdet0Q?si=nqHN0ek5R9QFlkfU

import type { Template } from "tinacms";

const VideoContainerTemplate: Template = {
	label: "Video Container",
	name: "videoContainer",
	fields: [
		{
			type: "object",
			label: "Videos",
			name: "videos",
			list: true,
			fields: [
				{
					type: "string",
					label: "Video Title",
					name: "title",
					required: true,
				},
				{ type: "string", label: "URL", name: "url" },
			],
		},
	],
};

export default VideoContainerTemplate;
