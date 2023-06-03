import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master';

export default defineConfig({
	branch,
	clientId: process.env.TINA_CMS_CLIENT_ID || null,
	token: process.env.TINA_CMS_TOKEN || null,
	build: {
		outputFolder: 'admin',
		publicFolder: 'static'
	},
	media: {
		tina: {
			mediaRoot: 'images',
			publicFolder: 'static'
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Posts',
				path: 'content/posts',
				ui: {
					global: true,
					allowedActions: { create: false, delete: false }
				},
				format: 'json',
				fields: [
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						name: 'body',
						label: 'Body',
						isBody: true
					}
				]
			}
		]
	}
});
