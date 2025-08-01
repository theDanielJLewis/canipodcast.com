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
      usageNotes:
        "Will be used for episode titles if `<itunes:title>` is not present. Episode numbers permitted in this title if `<itunes:episode>` isn't used.",
      usedForSearch: true,
      required: true,
    },
    {
      tagSlug: "itunes-title",
      parents: ["channel", "item"],
      usageNotes:
        "Will be used for podcast or episode titles if respective `<title>` is not present. Season and episode numbers are not permitted in this title.",
      usedForSearch: true,
    },
    {
      tagSlug: "description",
      parents: ["channel", "item"],
      usageNotes:
        "Replaces `<itunes:summary>` for podcast and episode descriptions. Maximum 4,000 bytes in `<channel>` and 10,000 bytes in `<item>`. ",
      required: true,
    },

    {
      tagSlug: "link",
      parents: ["channel", "item"],
      usageNotes:
        "The URL of the podcast website or episode webpage. Both uses will be hyperlinked in Apple Podcasts.",
    },
    {
      tagSlug: "language",
      parents: ["channel"],
      usageNotes:
        'Apple Podcasts only supports values from the ISO 639 list (two-letter language codes, with some possible modifiers, such as "fr-ca"). Invalid language codes will cause your feed to fail Apple validation.',
      required: true,
    },
    {
      tagSlug: "copyright",
      parents: ["channel"],
    },

    // iTunes Tags (Channel Level)
    {
      tagSlug: "itunes-image",
      parents: ["channel"],
      usageNotes:
        "Images should be under RGB, JPEG or PNG, 1,400 &times; 1,400 &ndash; 3,000 &times; 3,000 pixels, and 512 KB or smaller. Images outside these specs may cause podcast update problems.",
      required: true,
    },
    {
      tagSlug: "itunes-image",
      parents: ["item"],
      usageNotes:
        "Episode images should be under RGB, JPEG or PNG, 1,400 &times; 1,400 &ndash; 3,000 &times; 3,000 pixels, and 512 KB or smaller. Images outside these specs may cause podcast update problems. This image shows in episode listings, search results, the episode details page, and the episode player.",
      required: false,
    },
    {
      tagSlug: "itunes-category",
      url: "https://podcasters.apple.com/support/1691-apple-podcasts-categories",
      parents: ["channel"],
      usageNotes:
        "You can choose up to two categories per show&mdash;primary and secondary&mdash;plus subcategories for each, if available.",
      required: true,
    },
    {
      tagSlug: "itunes-author",
      parents: ["channel"],
      usageNotes: "Episode-level authors are no longer supported.",
      usedForSearch: true,
    },
    {
      tagSlug: "itunes-owner",
      parents: ["channel"],
      deprecated: true,
      hidden: true,
    },
    {
      tagSlug: "itunes-type",
      parents: ["channel"],
      url: "https://podcasters.apple.com/support/1662-automatic-downloads-on-apple-podcasts",
      usageNotes:
        "`episodic` is the default value and triggers Apple Podcasts to display the newest episode first, and display the publish date (`<pubDate>`) of each episode. `serial` triggers Apple Podcasts to display oldest episodes first and display the episode numbers (`<itunes:episode>` required for serial podcasts) on each episode. Podcast type affects automatic downloads.",
    },
    {
      tagSlug: "itunes-explicit",
      parents: ["channel", "item"],
      usageNotes:
        'Podcasts marked as explicit or with episodes marked as explicit will cause the podcast to be hidden in some countries. Supposedly required, but the absence of this tag has been observed to display neither "explicit" nor "clean" tags.',
      required: true,
    },
    {
      tagSlug: "itunes-block",
      parents: ["channel"],
      usageNotes:
        "At the `<channel>` level, this will block the entire podcast from appearing in Apple Podcasts. ",
      hidden: true,
    },
    {
      tagSlug: "itunes-block",
      parents: ["item"],
      usageNotes:
        "At the `<item>` level, this will block only that episode from appearing in the Apple Podcasts app. This can be used on an explicit episode to keep the whole otherwise clean podcast from being hidden in some countries.",
      hidden: true,
    },
    {
      tagSlug: "itunes-new-feed-url",
      parents: ["channel"],
      usageNotes:
        "Use this to manually change your podcast feed URL if you cannot redirect the original feed URL. This can also be used in your _new_ feed to confirm the update when the old feed URL is redirecting to the new feed URL.",
      hidden: true,
    },

    {
      tagSlug: "itunes-complete",
      parents: ["channel"],
      usageNotes:
        "This may prevent Apple Podcasts from ever again checking for updates to your feed.",
      hidden: true,
    },
    {
      tagSlug: "generator",
      hidden: true,
    },
    {
      tagSlug: "itunes-subtitle",
      parents: ["channel", "item"],
      deprecated: true,
      hidden: true,
    },
    {
      tagSlug: "itunes-keywords",
      parents: ["channel", "item"],
      deprecated: true,
      hidden: true,
    },
    {
      tagSlug: "itunes-apple-podcasts-verify",
      parents: ["channel"],
      url: "https://podcasters.apple.com/support/5497-claim-your-show",
      usageNotes:
        'Use this or `<podcast:txt purpose="applepodcastsverify">` as directed when verifying or transferring ownership of your podcast in Apple Podcasts.',
      hidden: true,
    },
    {
      tagSlug: "podcast-txt",
      parents: ["channel"],
      url: "https://podcasters.apple.com/support/5497-claim-your-show",
      usageNotes:
        "Use this or `<itunes:applepodcastsverify>` as directed when verifying or transferring ownership of your podcast in Apple Podcasts.",
      hidden: true,
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
