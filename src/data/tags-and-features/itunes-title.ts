export const title: Feature = {
  label: "iTunes Title",
  slug: "itunes-title",
  description:
    "The Apple-specific podcast title in `<channel>`, or the episode title in `<item>`. Supported by some other apps.",
  type: "rss",
  rssTag: "<itunes:title>",
  rssParentSlugs: ["channel", "item"],
}

export default title
