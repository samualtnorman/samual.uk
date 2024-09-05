import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import htmlMinify from "@frontendista/astro-html-minify"
import relativeLinks from "astro-relative-links"
import rehypeTargetBlank from "rehype-target-blank"

/** @type {import("astro").AstroUserConfig} */ export default {
	site: `https://samual.uk/`,
	integrations: [
		mdx(),
		sitemap(),
		relativeLinks(),
		htmlMinify({
			html: {
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				decodeEntities: true,
				html5: true,
				minifyCSS: true,
				minifyJS: true,
				processConditionalComments: true,
				processScripts: [ "text/html" ],
				removeAttributeQuotes: true,
				removeComments: true,
				removeEmptyAttributes: true,
				removeOptionalTags: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				removeTagWhitespace: true,
				sortAttributes: true,
				sortClassName: true,
				trimCustomFragments: true,
				useShortDoctype: true,
				ignoreCustomComments: []
			}
		})
	],
	server: { port: 8080, host: true },
	trailingSlash: `always`,
	markdown: { rehypePlugins: [ rehypeTargetBlank ] }
}
