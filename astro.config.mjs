import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	output: "static",
	prefetch: true,
	integrations: [
		robotsTxt({
			sitemapBaseFileName: "sitemap",
			policy: [{ userAgent: "*", allow: "/" }],
		}),
		// https://docs.astro.build/en/guides/integrations-guide/react/
		react(),
		// https://docs.astro.build/en/guides/integrations-guide/tailwind/
		tailwind({ applyBaseStyles: false }),
	],
	// https://github.com/withastro/astro/issues/8224
	// https://vitejs.dev/config/server-options.html#server-watch
	// vite: { server: { watch: { ignored: ["**/.netlify/**"] } } },
});
