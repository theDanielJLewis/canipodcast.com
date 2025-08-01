export const applePodcasts: App = {
  name: "Apple Podcasts",
  type: ["podcast-player"],
  url: "https://podcasts.apple.com/",
  iconUrl: "https://podcasts.apple.com/favicon.ico",
  platforms: ["ios", "macos", "web-app", "windows"],
  supportedFeatures: [
    // Core RSS 2.0 Tags (Channel Level)
    {
      tagSlug: "title",
      description: "The title of the podcast",
    },
    {
      tagSlug: "description",
      description: "A description of the podcast",
    },
    {
      tagSlug: "link",
      description: "Link to the podcast's website",
    },
    {
      tagSlug: "language",
      description: "The language of the podcast",
    },
    {
      tagSlug: "copyright",
      description: "The license of the podcast",
    },
    {
      tagSlug: "lastBuildDate",
      description: "The date when the feed was last updated",
    },
    {
      tagSlug: "generator",
      description: "The software used to generate the feed",
    },

    // iTunes Tags (Channel Level)
    {
      tagSlug: "itunes:image",
      description: "Link to the podcast's cover art",
    },
    {
      tagSlug: "itunes:category",
      description:
        "Category of the podcast - must be one of the Apple Podcasts categories",
      url: "https://podcasters.apple.com/support/1691-apple-podcasts-categories",
    },
    {
      tagSlug: "itunes:author",
      description: "Author of the podcast",
    },
    {
      tagSlug: "itunes:owner",
      description:
        "Owner of the podcast - must contain itunes:name and itunes:email",
    },
    {
      tagSlug: "itunes:type",
      description:
        "Can be 'episodic' or 'serial' - determines episode ordering",
    },
    {
      tagSlug: "itunes:explicit",
      description: "Indicates whether the podcast contains explicit content",
    },
    {
      tagSlug: "itunes:block",
      description: "Used to remove the show from Apple Podcasts",
    },
    {
      tagSlug: "itunes:new-feed-url",
      description: "Used when moving feeds to indicate the new location",
    },

    // Episode Level Tags
    {
      tagSlug: "item",
      description: "Defines a podcast episode",
    },
    {
      tagSlug: "enclosure",
      description:
        "Link to the episode audio file with url, length and type attributes",
    },
    {
      tagSlug: "guid",
      description: "Unique identifier for the episode",
    },
    {
      tagSlug: "pubDate",
      description: "Publication date of the episode in RFC 2822 format",
    },
    {
      tagSlug: "itunes:duration",
      description: "Duration of the episode in seconds or hh:mm:ss format",
    },
    {
      tagSlug: "itunes:episodeType",
      description: "Type of episode - can be 'full', 'trailer', or 'bonus'",
    },
    {
      tagSlug: "itunes:season",
      description: "Season number of the episode",
    },
    {
      tagSlug: "itunes:episode",
      description: "Episode number within the season",
    },

    // Content and Formatting Tags
    {
      tagSlug: "content:encoded",
      description: "Detailed description with HTML markup for show notes",
    },

    // Podcast 2.0 Namespace Tags (Supported)
    {
      tagSlug: "podcast:transcript",
      description: "Link to episode transcripts in VTT or SRT format",
      url: "https://podcasters.apple.com/support/5316-transcripts-on-apple-podcasts",
      supportedSinceDate: new Date("2024-03-01"),
    },
    {
      tagSlug: "podcast:chapters",
      description: "Chapter information for episodes",
      url: "https://podcasters.apple.com/support/chapters",
    },

    // HTML Formatting in Descriptions (Limited Support)
    {
      tagSlug: "bold-text",
      description: "Bold text formatting in descriptions using <strong> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      tagSlug: "italic-text",
      description: "Italic text formatting in descriptions using <em> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      tagSlug: "hyperlink",
      description: "Hyperlinks in descriptions using <a> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      tagSlug: "line-break",
      description: "Line breaks in descriptions using <br> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      tagSlug: "paragraph",
      description: "Paragraph formatting in descriptions using <p> tags",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
  ],
}

export default applePodcasts
