export const itunesOwner: Feature = {
  label: "iTunes Owner",
  slug: "itunes-owner",
  description:
    "Owner of the podcast - must contain itunes:name and itunes:email",
  type: "rss",
  rssTag: "<itunes:owner>",
}

export default itunesOwner
