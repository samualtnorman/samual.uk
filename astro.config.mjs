import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import htmlMinify from "@frontendista/astro-html-minify"
import relativeLinks from "astro-relative-links"

/** @type {import("astro").AstroUserConfig} */ export default {
	site: `https://samual.uk/`,
	integrations: [
		mdx(),
		sitemap(),
		relativeLinks(),
		htmlMinify({
			html: {
				processConditionalComments: true,
				removeAttributeQuotes: true,
				removeComments: true,
				removeEmptyAttributes: true,
				removeOptionalTags: true,
				removeTagWhitespace: true,
				sortClassName: true,
				useShortDoctype: true,
				preserveLineBreaks: false,
				conservativeCollapse: false,
				collapseInlineTagWhitespace: false
			}
		})
	],
	server: { port: 8080, host: true },
	trailingSlash: `always`
}
