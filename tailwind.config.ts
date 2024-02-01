import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { addDynamicIconSelectors } from "@iconify/tailwind";
import scrollbar from "tailwind-scrollbar";

export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Rubik Mono One", ...fontFamily.sans],
			},
			colors: {
				primary: "#fff",
				secondary: "#fff",
				tertiary: "#fff",
			},
		},
		debugScreens: {
			position: ["bottom", "right"],
			style: {
				color: "whitesmoke",
				padding: "10px",
				backdropFilter: "blur(8px)",
				backgroundColor: "rgba(0,0,0,.4)",
			},
		},
	},
	plugins: [
		// https://www.npmjs.com/package/@iconify/tailwind
		addDynamicIconSelectors(),
		// https://github.com/tailwindlabs/tailwindcss-forms
		require("@tailwindcss/forms"),
		// https://tailwindcss.com/docs/typography-plugin
		require("@tailwindcss/typography"),
		// https://github.com/jorenvanhee/tailwindcss-debug-screens
		require("tailwindcss-debug-screens"),
		// https://github.com/adoxography/tailwind-scrollbar
		scrollbar({ nocompatible: true }),
	],
} satisfies Config;
