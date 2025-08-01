export const title: Feature = {
  label: "Title",
  slug: "title",
  description:
    "The podcast title in `<channel>`, or the episode title in `<item>` and `<podcast:liveItem>`.",
  type: "rss",
  rssTag: "<title>",
  rssParentSlugs: ["channel", "item", "podcast-live-item"],
}

export default title
