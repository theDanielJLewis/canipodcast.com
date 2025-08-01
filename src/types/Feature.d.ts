type Feature = {
  label: string
  slug: string
  description: string
  type: "formatting" | "metadata" | "interactivity" | "rss"
  rssTag?: string
  rssParentSlugs?: string[]
  featureParentSlugs?: string[]
}
