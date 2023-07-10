import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import critters from "astro-critters"
import relativeLinks from "astro-relative-links"

export default /** @type {import("astro").AstroUserConfig} */ ({
	site: `https://samual.uk/`,
	integrations: [ mdx(), sitemap(), critters(), relativeLinks() ],
	server: { port: 8080, host: true },
	trailingSlash: `always`
})
