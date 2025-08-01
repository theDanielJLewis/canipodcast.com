type Feature = {
  label: string
  slug: string
  description: string
  type: "formatting" | "metadata" | "interactivity" | "rss"
  rssTag?: string
  rssParentSlugs?: (
    | "channel"
    | "item"
    | "podcast-live-item"
    | "description"
    | "summary"
    | "content-encoded"
    | "title"
  )[]
  featureParentSlugs?: string[]
}
