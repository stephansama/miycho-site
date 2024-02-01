import type { TinaField } from "tinacms";

const theme: TinaField = {
	label: "Theme",
	name: "theme",
	type: "object",
	fields: [
		{
			label: "Font Family",
			name: "fontFamily",
			type: "string",
			options: [
				{ label: "Fira Sans", value: "var(--font-fira-sans)" },
				{ label: "Ubuntu", value: "var(--font-ubuntu)" },
				{ label: "Crimson Text", value: "var(--font-crimson-text)" },
			],
		},
		{
			type: "string",
			name: "mode",
			label: "Theme Mode",
			options: [
				{ label: "System", value: "system" },
				{ label: "Light", value: "light" },
				{ label: "Dark", value: "dark" },
			],
		},
	],
};

export default theme;
