export const powerpress: App = {
  name: "PowerPress",
  description: "Blubrry's free podcasting plugin for WordPress.",
  type: ["wordpress-plugin", "publishing-tool"],
  url: "https://podcasts.apple.com/",
  iconUrl: "https://podcasts.apple.com/favicon.ico",
  platforms: ["ios", "macos", "web-app", "windows"],
  supportedFeatures: [
    // --- Channel tags ---
    // Feed Settings
    {
      slug: "title",
      parents: ["channel"],
      defaultValue: "Website title",
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; Feed Title",
    },
    {
      slug: "description",
      parents: ["channel"],
      defaultValue: "Website description",
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; Feed Description",
    },
    {
      slug: "link",
      parents: ["channel"],
      defaultValue: "Website homepage",
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; Feed Landing Page URL",
    },
    {
      slug: "language",
      parents: ["channel"],
      defaultValue: "Website language",
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; Feed Language",
    },
    {
      slug: "copyright",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; Copyright Text.",
    },
    {
      slug: "itunes-owner",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; Author Email",
      usageNotes:
        "Deprecated by Apple, but still used by some podcasting services to verify ownership. Can be disabled.",
    },
    {
      slug: "podcast-podroll",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; Shows &amp; Content You Love.",
    },
    {
      slug: "podcast-txt",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; Txt Tag.",
      usageNotes:
        "Only one Txt tag is allowed per feed, and cannot edit attributes.",
    },
    {
      slug: "podcast-medium",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; Medium Tag.",
    },
    {
      slug: "podcast-guid",
      parents: ["channel"],
      defaultValue: "Automatically generated",
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Feed Settings &rarr; GUID.",
    },

    // Podcast Artwork
    {
      slug: "itunes-image",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Podcast Artwork.",
      required: true,
    },

    // Basic Show Information
    {
      slug: "podcast-location",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Basic Show Information &rarr; Show Location.",
      usageNotes:
        'Supports location string (e.g., "Cincinnati, OH"), latitude and longitude (e.g., "39.1000,-84.5000"), Open Street Map (e.g., "W43678282"), and relationship ("subject" or "Creator"). Multiple locations allowed.',
    },
    {
      slug: "rawvoice-location",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Basic Show Information &rarr; Show Location.",
      usageNotes:
        'Supports location string (e.g., "Cincinnati, OH"), latitude and longitude (e.g., "39.1000,-84.5000"), Open Street Map (e.g., "W43678282"), and relationship ("subject" or "Creator"). Multiple locations allowed.',
    },
    {
      slug: "podcast-update-frequency",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Basic Show Information &rarr; Update Frequency.",
    },
    {
      slug: "rawvoice-frequency",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Basic Show Information &rarr; Update Frequency.",
      usageNotes:
        'Supports daily, weekly (with multiple day selections), and monthly (with "monthly frequency" number).',
    },
    {
      slug: "podcast-person",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Basic Show Information &rarr; Credits.",
      usageNotes:
        "Supports multiple people. Supports name, role, image URL, and link URL.",
    },
    {
      slug: "podcast-funding",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Basic Show Information &rarr; Donate Link.",
      usageNotes: "Supports URL and label.",
    },
    {
      slug: "rawvoice-donate",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Basic Show Information &rarr; Donate Link.",
      usageNotes: "Supports URL and label.",
    },

    // Rating Settings
    {
      slug: "rawvoice-rating",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Rating Settings",
      defaultValue: "No rating specified",
      usageNotes: "Supports TV Parental Ratings.",
    },

    // Apple Settings

    {
      slug: "itunes-subtitle",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Program Subtitle",
      usageNotes: "Deprecated by Apple, but still used by some podcast apps.",
    },
    {
      slug: "itunes-summary",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Program Summary",
      usageNotes:
        'Deprecated by Apple, but still used by many podcast apps. Accepts hyperlinks (`<a>`) when "Wrap summary values with <![CDATA[ ... ]]> tags" is enabled.',
      required: true,
    },
    {
      slug: "itunes-keywords",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Program Keywords",
      usageNotes: "Deprecated by Apple, but still used by some podcast apps.",
    },
    {
      slug: "itunes-category",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Category",
      usageNotes:
        "You can choose up to three categories. The first category is required and is the primary category. Subcategories are optional.",
      required: true,
    },
    {
      slug: "itunes-author",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Author Name",
      usageNotes:
        "Episode-level authors are no longer supported by Apple Podcasts, but PowerPress lets you automatically override episode-level authors by the website WordPress post's author name.",
    },
    {
      slug: "itunes-explicit",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Explicit",
      required: true,
    },
    {
      slug: "podcast-type",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Feed Type",
      usageNotes:
        'Supports "Episodic" and "Serial." When no option is selected, podcast apps will assume "Episodic."',
    },
    {
      slug: "itunes-type",
      parents: ["channel"],
      url: "https://podcasters.apple.com/support/1662-automatic-downloads-on-apple-podcasts",
      usageNotes: "Defaults to `episodic`.",
    },
    {
      slug: "itunes-new-feed-url",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; New Feed URL",
      usageNotes:
        "The populates the RSS tag but does _not_ redirect the feed URL.",
    },
    {
      slug: "itunes-block",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Advanced Options &rarr; Block",
      usageNotes:
        "This will block the entire podcast from appearing in Apple Podcasts. PowerPress allows episode-level blocking separately.",
    },
    {
      slug: "itunes-complete",
      parents: ["channel"],
      settingLocation:
        "PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Advanced Options &rarr; Complete",
      usageNotes:
        "This may prevent Apple Podcasts from ever again checking for updates to your feed. This is not recommended.",
    },
    {
      slug: "generator",
      parents: ["channel"],
      defaultValue: "https://wordpress.org/?v=[version number]",
      usageNotes:
        "This is required for Apple Podcasts to verify your feed. It can be disabled.",
      hidden: true,
    },

    // --- Item tags ---
    {
      slug: "enclosure",
      parents: ["item"],
      settingLocation: "Podcast Episode panel &rarr; Media URL",
      required: true,
    },
    {
      slug: "itunes-duration",
      parents: ["item"],
      defaultValue: "Automatically calculated",
      settingLocation:
        "Podcast Episode panel &rarr; Media URL &rarr; View File Size and Duration",
      usageNotes: "Supports automatic detection or manual input.",
    },
    {
      slug: "podcast-transcript",
      parents: ["item"],
      settingLocation: "Podcast Episode panel &rarr; Transcription",
      usageNotes: "Supports URL and language. Limited to 1.",
    },

    {
      slug: "title",
      parents: ["item"],
      defaultValue: "WordPress post title",
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Episode Title*",
      usageNotes:
        'To override the default, first enable "Specify custom episode titles for podcast feeds" in PowerPress settings &rarr; Feeds &rarr; Podcast SEO &rarr; Episode Titles.',
      required: true,
    },
    {
      slug: "itunes-explicit",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Podcast Optimization &rarr; Explicit Setting",
    },
    {
      slug: "itunes-title",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Podcast Optimization &rarr; Title",
      usageNotes:
        "Will be used for episode title by Apple Podcasts and some other apps instead of the normal `<title>`. Season and episode numbers are not permitted in this title.",
    },
    {
      slug: "itunes-episode",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Podcast Optimization &rarr; Episode #",
      usageNotes:
        "If episode numbers are important to show in titles, use `<itunes:episode>` for the number, `<itunes:title>` for the title _without_ the number, and `<title>` for the episode title _with_ the number. This ensures optimization and highest compatibility.",
    },
    {
      slug: "itunes-season",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Podcast Optimization &rarr; Season #",
      usageNotes:
        "If season numbers are important to show in titles, use `<itunes:season>` for the number, `<itunes:title>` for the title _without_ the number, and `<title>` for the episode title _with_ the season number. This ensures optimization and highest compatibility.",
    },
    {
      slug: "itunes-summary",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Podcast Optimization &rarr; See More Settings &rarr; Summary",
    },
    {
      slug: "itunes-author",
      parents: ["item"],
      defaultValue:
        "WordPress post author or PowerPress settings &rarr; Feeds &rarr; Apple Settings &rarr; Author Name",
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Podcast Optimization &rarr; See More Settings &rarr; Author",
      usageNotes:
        "Deprecated by Apple, but still used by some podcast apps. If you want to override the default episode author, use this field. Otherwise, the WordPress post's author name will be used.",
    },
    {
      slug: "itunes-subtitle",
      parents: ["item"],
      defaultValue: "WordPress post excerpt",
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Podcast Optimization &rarr; See More Settings &rarr; Subtitle",
      usageNotes: "Deprecated by Apple, but still used by some podcast apps.",
    },
    {
      slug: "itunes-episode-type",
      parents: ["item"],
      defaultValue: "Full",
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Podcast Optimization &rarr; See More Settings &rarr; Type",
    },
    {
      slug: "itunes-block",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Episode Info &rarr; Podcast Optimization &rarr; See More Settings &rarr; Block",
      usageNotes:
        "At the `<item>` level, this will block only this episode from appearing in the Apple Podcasts app. This can be used on an explicit episode to keep the whole otherwise clean podcast from being hidden in some countries.",
    },

    {
      slug: "itunes-image",
      parents: ["item"],
      settingLocation: "Podcast Episode panel &rarr; Episode Artwork",
    },

    {
      slug: "podcast-location",
      parents: ["item"],
      settingLocation: "Podcast Episode panel &rarr; Advanced",
      usageNotes:
        'Supports location string (e.g., "Cincinnati, OH"), latitude and longitude (e.g., "39.1000,-84.5000"), Open Street Map (e.g., "W43678282"), and relationship ("subject" or "Creator"). Multiple locations allowed.',
    },
    {
      slug: "rawvoice-location",
      parents: ["item"],
      settingLocation: "Podcast Episode panel &rarr; Advanced &rarr; Location",
      usageNotes:
        'Supports location string (e.g., "Cincinnati, OH"), latitude and longitude (e.g., "39.1000,-84.5000"), Open Street Map (e.g., "W43678282"), and relationship ("subject" or "Creator"). Multiple locations allowed.',
    },
    {
      slug: "podcast-license",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Advanced &rarr; Copyright/License",
    },
    {
      slug: "podcast-person",
      parents: ["item"],
      settingLocation: "Podcast Episode panel &rarr; Advanced &rarr; Credits",

      usageNotes:
        "Supports name, role, image URL, and link URL. Multiple credits allowed.",
    },
    {
      slug: "podcast-value",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Advanced &rarr; Value4Value",
      usageNotes:
        "Includes each person as `<podcast:valueRecipient>` inside `<podcast:value>`. Supports Lightning address, custom key, custom value, pubkey, and split. Multiple recipients allowed.",
    },
    {
      slug: "podcast-value-recipient",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Advanced &rarr; Value4Value",
      usageNotes:
        "Includes each person as `<podcast:valueRecipient>` inside `<podcast:value>`. Supports Lightning address, custom key, custom value, pubkey, and split. Multiple recipients allowed.",
    },
    {
      slug: "podcast-soundbite",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Advanced &rarr; Soundbites",
      usageNotes: "Supports start time, duration, and title. Maximum 10.",
    },
    {
      slug: "podcast-social-interact",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Advanced &rarr; Social Interact",
      usageNotes: "Supports URI, protocol, and account ID.",
    },
    {
      slug: "podcast-funding",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Advanced &rarr; Donate Link",
      usageNotes: "Set an episode-level funding link. Supports URL and label.",
    },
    {
      slug: "rawvoice-donate",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Advanced &rarr; Donate Link",
      usageNotes: "Set an episode-level funding link. Supports URL and label.",
    },
    {
      slug: "podcast-alternate-enclosure",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Advanced &rarr; Alternate Enclosure",
      usageNotes: "Supports media URL. Multiple allowed.",
    },
    {
      slug: "podcast-content-link",
      parents: ["item"],
      settingLocation:
        "Podcast Episode panel &rarr; Advanced &rarr; Content Link",
      usageNotes: "Supports URL and Label. Multiple allowed.",
    },

    {
      slug: "description",
      parents: ["item"],
      settingLocation: 'WordPress "Post" sidebar &rarr; "Add an excerpt"',
    },
    {
      slug: "link",
      parents: ["item"],
      defaultValue: "WordPress post permalink",
      settingLocation: 'WordPress "Post" sidebar &rarr; Slug',
      usageNotes:
        "Changing the slug will change only that portion of the URL but inherit the rest of the URL from your WordPress Settings &rarr; Permalinks.",
    },
    {
      slug: "guid",
      parents: ["item"],
      defaultValue: "WordPress post permalink",
      usageNotes:
        "Post GUIDs are set automatically by WordPress and cannot be changed.",
      hidden: true,
    },
    {
      slug: "pub-date",
      parents: ["item"],
      settingLocation: 'WordPress "Post" sidebar &rarr; Publish',
    },
    {
      slug: "content-encoded",
      parents: ["item"],
      defaultValue: "WordPress post content",
    },

    // --- Other tags (not strictly channel/item, e.g. formatting, generator, etc.) ---
    {
      slug: "item",
      required: true,
    },
    {
      slug: "formatting-bold",
      parents: ["<content:encoded>"],
    },
    {
      slug: "formatting-italic",
      parents: ["<content:encoded>"],
    },
    {
      slug: "formatting-hyperlink",
      parents: ["<content:encoded>"],
    },
    {
      slug: "formatting-line-break",
      parents: ["<content:encoded>"],
    },
    {
      slug: "formatting-paragraph",
      parents: ["<content:encoded>"],
    },
    {
      slug: "formatting-headings",
      parents: ["<content:encoded>"],
    },
    {
      slug: "formatting-ordered-list",
      parents: ["<content:encoded>"],
    },
    {
      slug: "formatting-unordered-list",
      parents: ["<content:encoded>"],
    },
    {
      slug: "formatting-blockquote",
      parents: ["<content:encoded>"],
    },
    {
      slug: "podcast-podping",
      parents: ["<channel>"],
      hidden: true,
      usageNotes:
        "PowerPress will automatically use Podping when you publish new episodes or update anything else about your podcast feed.",
    },
  ],
}
