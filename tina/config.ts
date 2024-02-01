// https://app.tina.io/projects
// https://tina.io/docs/
import { defineConfig } from "tinacms";
import schema from "./schema";

const branch =
	process.env.GITHUB_BRANCH ||
	process.env.VERCEL_GIT_COMMIT_REF ||
	process.env.HEAD ||
	"main";

const publicFolder = "public";

// https://tina.io/docs/reference/config/
export default defineConfig({
	branch,
	token: process.env.TINA_TOKEN,
	clientId: process.env.PUBLIC_TINA_CLIENT_ID,
	build: { outputFolder: "admin", publicFolder },
	media: { tina: { mediaRoot: "media", publicFolder } },
	schema,
	search: {
		indexBatchSize: 100,
		maxSearchIndexFieldLength: 100,
		tina: {
			indexerToken: process.env.TINA_SEARCH_TOKEN,
			stopwordLanguages: ["eng"],
		},
	},
});
