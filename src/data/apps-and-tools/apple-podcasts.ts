export const applePodcasts: App = {
  name: "Apple Podcasts",
  description: "Apple's official podcast app.",
  type: ["podcast-player"],
  url: "https://podcasts.apple.com/",
  iconUrl: "https://podcasts.apple.com/favicon.ico",
  platforms: ["ios", "macos", "web-app", "windows"],
  supportedFeatures: [
    // Core RSS 2.0 Tags (Channel Level)
    {
      tagSlug: "title",
      parents: ["channel", "item"],
    },
    {
      tagSlug: "description",
      parents: ["channel", "item"],
    },
    {
      tagSlug: "link",
      parents: ["channel", "item"],
    },
    {
      tagSlug: "language",
      parents: ["channel"],
    },
    {
      tagSlug: "copyright",
      parents: ["channel"],
    },

    // iTunes Tags (Channel Level)
    {
      tagSlug: "itunes-image",
      parents: ["channel", "item"],
    },
    {
      tagSlug: "itunes-category",
      url: "https://podcasters.apple.com/support/1691-apple-podcasts-categories",
      parents: ["channel"],
    },
    {
      tagSlug: "itunes-author",
      parents: ["channel"],
    },
    {
      tagSlug: "itunes-owner",
      parents: ["channel"],
    },
    {
      tagSlug: "itunes-type",
      parents: ["channel"],
    },
    {
      tagSlug: "itunes-explicit",
      parents: ["channel", "item"],
    },
    {
      tagSlug: "itunes-block",
      parents: ["channel", "item"],
    },
    {
      tagSlug: "itunes-new-feed-url",
      parents: ["channel"],
    },

    // Episode Level Tags
    {
      tagSlug: "item",
    },
    {
      tagSlug: "enclosure",
    },
    {
      tagSlug: "guid",
    },
    {
      tagSlug: "pub-date",
    },
    {
      tagSlug: "itunes-duration",
    },
    {
      tagSlug: "itunes-episode-type",
    },
    {
      tagSlug: "itunes-season",
    },
    {
      tagSlug: "itunes-episode",
    },
    { tagSlug: "itunes-title" },

    // Content and Formatting Tags
    {
      tagSlug: "content-encoded",
    },

    // Podcast 2.0 Namespace Tags (Supported)
    {
      tagSlug: "podcast-transcript",
      url: "https://podcasters.apple.com/support/5316-transcripts-on-apple-podcasts",
      supportedSinceDate: new Date("2024-03-01"),
    },

    // HTML Formatting in Descriptions (Limited Support)
    {
      tagSlug: "formatting-bold",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      tagSlug: "formatting-italic",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      tagSlug: "formatting-hyperlink",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      tagSlug: "formatting-line-break",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      tagSlug: "formatting-paragraph",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
  ],
}

export default applePodcasts
