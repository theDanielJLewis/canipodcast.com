export const guidUrl: Feature = {
  label: "GUID",
  slug: "guid",
  description: "Unique identifier for the episode",
  type: "rss",
  rssTag: "<guid>",
  rssParentSlugs: ["item"],
}

export default guidUrl
