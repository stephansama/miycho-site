import type { Collection } from "tinacms";

import header from "./header";
import footer from "./footer";
import theme from "./theme";

const globalCollection: Collection = {
	label: "Global",
	name: "global",
	path: "content/global",
	format: "json",
	ui: {
		global: true,
		allowedActions: { create: false, delete: false },
	},
	fields: [header, footer, theme],
};

export default globalCollection;
