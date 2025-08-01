export const applepodcasts: App = {
  name: "Apple Podcasts",
  description: "Apple's official podcast app.",
  type: ["podcast-player"],
  url: "https://podcasts.apple.com/",
  iconUrl: "https://podcasts.apple.com/favicon.ico",
  platforms: ["ios", "macos", "web-app", "windows"],
  supportedFeatures: [
    // --- Channel tags ---
    {
      slug: "title",
      parents: ["channel"],
      usageNotes:
        "Will be used for podcast title if `<channel>`-level `<itunes:title>` is not present.",
      usedForSearch: true,
      required: true,
    },
    {
      slug: "itunes-title",
      parents: ["channel"],
      usageNotes: "Will be used for the podcast title instead of `<title>`.",
      usedForSearch: true,
    },
    {
      slug: "description",
      parents: ["channel"],
      usageNotes:
        "Replaces `<itunes:summary>` for podcast descriptions. Maximum 4,000 bytes. ",
      required: true,
    },
    {
      slug: "link",
      parents: ["channel"],
      usageNotes:
        "The URL of the podcast website. Will be hyperlinked in Apple Podcasts from the podcast page.",
    },
    {
      slug: "language",
      parents: ["channel"],
      usageNotes:
        'Apple Podcasts only supports values from the ISO 639 list (two-letter language codes, with some possible modifiers, such as "fr-ca"). Invalid language codes will cause your feed to fail Apple validation.',
      required: true,
    },
    {
      slug: "copyright",
      parents: ["channel"],
    },
    {
      slug: "itunes-image",
      parents: ["channel"],
      usageNotes:
        "Images should be under RGB, JPEG or PNG, 1,400 &times; 1,400 &ndash; 3,000 &times; 3,000 pixels, and 512 KB or smaller. Images outside these specs may cause podcast update problems.",
      required: true,
    },
    {
      slug: "itunes-category",
      url: "https://podcasters.apple.com/support/1691-apple-podcasts-categories",
      parents: ["channel"],
      usageNotes:
        "You can choose up to two categories per show&mdash;primary and secondary&mdash;plus subcategories for each, if available.",
      required: true,
    },
    {
      slug: "itunes-author",
      parents: ["channel"],
      usageNotes: "Episode-level authors are no longer supported.",
      usedForSearch: true,
    },
    {
      slug: "itunes-owner",
      parents: ["channel"],
      deprecated: true,
      hidden: true,
    },
    {
      slug: "itunes-type",
      parents: ["channel"],
      url: "https://podcasters.apple.com/support/1662-automatic-downloads-on-apple-podcasts",
      usageNotes:
        "`episodic` is the default value and triggers Apple Podcasts to display the newest episode first, and display the publish date (`<pubDate>`) of each episode. `serial` triggers Apple Podcasts to display oldest episodes first and display the episode numbers (`<itunes:episode>` required for serial podcasts) on each episode. Podcast type affects automatic downloads.",
    },
    {
      slug: "itunes-block",
      parents: ["channel"],
      usageNotes:
        "At the `<channel>` level, this will block the entire podcast from appearing in Apple Podcasts. ",
      hidden: true,
    },
    {
      slug: "itunes-new-feed-url",
      parents: ["channel"],
      usageNotes:
        "Use this to manually change your podcast feed URL if you cannot redirect the original feed URL. This can also be used in your _new_ feed to confirm the update when the old feed URL is redirecting to the new feed URL.",
      hidden: true,
    },
    {
      slug: "itunes-complete",
      parents: ["channel"],
      usageNotes:
        "This may prevent Apple Podcasts from ever again checking for updates to your feed.",
      hidden: true,
    },
    {
      slug: "itunes-apple-podcasts-verify",
      parents: ["channel"],
      url: "https://podcasters.apple.com/support/5497-claim-your-show",
      usageNotes:
        'Use this or `<podcast:txt purpose="applepodcastsverify">` as directed when verifying or transferring ownership of your podcast in Apple Podcasts.',
      hidden: true,
    },
    {
      slug: "podcast-txt",
      parents: ["channel"],
      url: "https://podcasters.apple.com/support/5497-claim-your-show",
      usageNotes:
        "Use this or `<itunes:applepodcastsverify>` as directed when verifying or transferring ownership of your podcast in Apple Podcasts.",
      hidden: true,
    },
    {
      slug: "generator",
      parents: ["channel"],
      hidden: true,
    },

    // --- Item tags ---
    {
      slug: "title",
      parents: ["item"],
      usageNotes:
        "Will be used for episode title if `<item>`-level `<itunes:title>` is not present. Season and episode numbers permitted in this title if `<itunes:episode>` isn't used.",
      usedForSearch: true,
      required: true,
    },
    {
      slug: "itunes-title",
      parents: ["item"],
      usageNotes:
        "Will be used for episode titles instead of `<title>`. Season and episode numbers are not permitted in this title.",
      usedForSearch: true,
    },
    {
      slug: "description",
      parents: ["item"],
      usageNotes:
        "Replaces `<itunes:summary>` and `<content:encoded>` for episode notes/descriptions. 10,000 bytes in `<item>`.",
      required: true,
    },
    {
      slug: "link",
      parents: ["item"],
      usageNotes:
        "The URL of the episode webpage. Will be hyperlinked in Apple Podcasts from the episode page.",
    },
    {
      slug: "itunes-image",
      parents: ["item"],
      usageNotes:
        "Episode images should be under RGB, JPEG or PNG, 1,400 &times; 1,400 &ndash; 3,000 &times; 3,000 pixels, and 512 KB or smaller. Images outside these specs may cause podcast update problems. This image shows in episode listings, search results, the episode details page, and the episode player.",
      required: false,
    },
    {
      slug: "itunes-block",
      parents: ["item"],
      usageNotes:
        "At the `<item>` level, this will block only that episode from appearing in the Apple Podcasts app. This can be used on an explicit episode to keep the whole otherwise clean podcast from being hidden in some countries.",
      hidden: true,
    },
    {
      slug: "item",
      required: true,
    },
    {
      slug: "enclosure",
      parents: ["item"],
      required: true,
    },
    {
      slug: "guid",
      parents: ["item"],
      usageNotes:
        "If a GUID is not provided, an episode's enclosure URL will be used instead.",
      required: true,
    },
    {
      slug: "pub-date",
      parents: ["item"],
    },
    {
      slug: "itunes-duration",
      parents: ["item"],
      usageNotes:
        "Accepts multiple formats, but recommended to be length in seconds.",
    },
    {
      slug: "itunes-episode",
      parents: ["item"],
      usageNotes:
        "Apple Podcasts will display the episode number differently depending on the podcast type (`episodic` or `serial`) and the episode context.",
    },
    {
      slug: "itunes-season",
      parents: ["item"],
      usageNotes:
        "If only one season exists in the RSS feed, Apple Podcasts will not display a season number until another season is added.",
    },
    {
      slug: "itunes-episode-type",
      parents: ["item"],
    },
    {
      slug: "podcast-transcript",
      parents: ["item"],
      url: "https://podcasters.apple.com/support/5316-transcripts-on-apple-podcasts",
      supportedSinceDate: new Date("2024-03-01"),
      usageNotes: "Apple Podcasts prefers VTT over SRT. ",
    },
    {
      slug: "content-encoded",
      parents: ["item"],
      deprecated: true,
      usageNotes:
        "Will be used for episode notes/descriptions if `<description>` is not present. Maximum 10,000 bytes.",
    },

    // --- Both channel and item tags ---
    {
      slug: "itunes-explicit",
      parents: ["channel", "item"],
      usageNotes:
        'Podcasts marked as explicit or with episodes marked as explicit will cause the podcast to be hidden in some countries. Supposedly required, but the absence of this tag has been observed to display neither "explicit" nor "clean" tags.',
      required: true,
    },
    {
      slug: "itunes-subtitle",
      parents: ["channel", "item"],
      deprecated: true,
      hidden: true,
    },
    {
      slug: "itunes-keywords",
      parents: ["channel", "item"],
      deprecated: true,
      hidden: true,
    },

    // --- Other tags (not strictly channel/item, e.g. formatting, generator) ---
    {
      slug: "formatting-bold",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      slug: "formatting-italic",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      slug: "formatting-hyperlink",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      slug: "formatting-line-break",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
    {
      slug: "formatting-paragraph",
      parents: ["<description>", "<itunes:summary>", "<content:encoded>"],
    },
  ],
}
