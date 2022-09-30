import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	site: "https://samual.uk/",
	integrations: [ mdx(), sitemap() ],
	server: { port: 8080 }
})
