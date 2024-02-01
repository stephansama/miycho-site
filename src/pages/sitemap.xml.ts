import xml from "xml";
import client from "@tina-generated/client";
import { homepage as loc } from "@pkg";

const createURLEntry = (loc: string) => ({
	url: [
		{ loc },
		{ lastmod: new Date().toISOString().split("T")[0] },
		{ changefreq: "daily" },
		{ priority: "1.0" },
	],
});

export async function GET() {
	const pageListData = await client.queries.pageConnection();
	const sitemapPages = pageListData?.data?.pageConnection?.edges || [];
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>${xml({
			urlset: [
				{ _attr: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" } },
				// index url entry
				createURLEntry(loc),
				// tina generated entries
				...sitemapPages
					.map((page) => page?.node?._sys?.filename)
					.filter((p) => p !== "index")
					.map((page) => createURLEntry(`${loc}/${page}`)),
			],
		})}`,
		{
			status: 200,
			statusText: "OK",
			headers: { "Content-Type": "application/xml" },
		}
	);
}
