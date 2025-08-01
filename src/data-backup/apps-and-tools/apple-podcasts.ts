export const applePodcasts: App = {
  name: "Apple Podcasts",
  type: ["podcast-player"],
  url: "https://podcasts.apple.com/",
  iconUrl: "https://podcasts.apple.com/favicon.ico",
  platforms: ["ios", "macos", "web-app", "windows"],
  supportedFeatures: [
    // Core RSS 2.0 Tags (Channel Level)
    {
      slug: "title",
      description: "The title of the podcast",
    },
    {
      slug: "description",
      description: "A description of the podcast",
    },
    {
      slug: "link",
      description: "Link to the podcast's website",
    },
    {
      slug: "language",
      description: "The language of the podcast",
    },
    {
      slug: "copyright",
      description: "The license of the podcast",
    },
    {
      slug: "lastBuildDate",
      description: "The date when the feed was last updated",
    },
    {
      slug: "generator",
      description: "The software used to generate the feed",
    },

    // iTunes Tags (Channel Level)
    {
      slug: "itunes:image",
      description: "Link to the podcast's cover art",
    },
    {
      slug: "itunes:category",
      description:
        "Category of the podcast - must be one of the Apple Podcasts categories",
      url: "https://podcasters.apple.com/support/1691-apple-podcasts-categories",
    },
    {
      slug: "itunes:author",
      description: "Author of the podcast",
    },
    {
      slug: "itunes:owner",
      description:
        "Owner of the podcast - must contain itunes:name and itunes:email",
    },
    {
      slug: "itunes:type",
      description:
        "Can be 'episodic' or 'serial' - determines episode ordering",
    },
    {
      slug: "itunes:explicit",
      description: "Indicates whether the podcast contains explicit content",
    },
    {
      slug: "itunes:block",
      description: "Used to remove the show from Apple Podcasts",
    },
    {
      slug: "itunes:new-feed-url",
      description: "Used when moving feeds to indicate the new location",
    },

    // Episode Level Tags
    {
      slug: "item",
      description: "Defines a podcast episode",
    },
    {
      slug: "enclosure",
      description:
        "Link to the episode audio file with url, length and type attributes",
    },
    {
      slug: "guid",
      description: "Unique identifier for the episode",
    },
    {
      slug: "pubDate",
      description: "Publication date of the episode in RFC 2822 format",
    },
    {
      slug: "itunes:duration",
      description: "Duration of the episode in seconds or hh:mm:ss format",
    },
    {
      slug: "itunes:episodeType",
      description: "Type of episode - can be 'full', 'trailer', or 'bonus'",
    },
    {
      slug: "itunes:season",
      description: "Season number of the episode",
    },
    {
      slug: "itunes:episode",
      description: "Episode number within the season",
    },

    // Content and Formatting Tags
    {
      slug: "content:encoded",
      description: "Detailed description with HTML markup for show notes",
    },

    // Podcast 2.0 Namespace Tags (Supported)
    {
      slug: "podcast:transcript",
      description: "Link to episode transcripts in VTT or SRT format",
      url: "https://podcasters.apple.com/support/5316-transcripts-on-apple-podcasts",
      supportedSinceDate: new Date("2024-03-01"),
    },
    {
      slug: "podcast:chapters",
      description: "Chapter information for episodes",
      url: "https://podcasters.apple.com/support/chapters",
    },

    // HTML Formatting in Descriptions (Limited Support)
    {
      slug: "bold-text",
      description: "Bold text formatting in descriptions using <strong> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      slug: "italic-text",
      description: "Italic text formatting in descriptions using <em> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      slug: "hyperlink",
      description: "Hyperlinks in descriptions using <a> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      slug: "line-break",
      description: "Line breaks in descriptions using <br> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      slug: "paragraph",
      description: "Paragraph formatting in descriptions using <p> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
  ],
}

export default applePodcasts
