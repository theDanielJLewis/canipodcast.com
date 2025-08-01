export const apps: App[] = [
  {
    name: "Apple Podcasts",
    type: ["app", "podcast player"],
    url: "https://www.apple.com/apple-podcasts/",
    iconUrl: "https://podcastindex.org/static/apple-podcasts.png",
    platforms: ["iOS", "macOS"],
    supportedTags: [
      {
        tag: "<itunes:author>",
        parents: ["<item>"],
      },
      {
        tag: "<itunes:category>",
        parents: ["<item>"],
      },
      {
        tag: "<itunes:explicit>",
        parents: ["<item>"],
      },
      {
        tag: "<itunes:image>",
        parents: ["<channel>"],
      },
      {
        tag: "<itunes:owner>",
        parents: ["<channel>"],
      },
      {
        tag: "<itunes:summary>",
        parents: ["<channel>"],
      },
      {
        tag: "<itunes:type>",
        parents: ["<channel>"],
      },
      {
        tag: "<itunes:email>",
        parents: ["<itunes:owner>"],
      },
      {
        tag: "<itunes:name>",
        parents: ["<itunes:owner>"],
      },
    ],
  },
  {
    name: "PowerPress",
    type: ["WordPress plugin", "podcast", "publishing"],
    url: "https://wordpress.org/plugins/powerpress/",
    iconUrl: "https://podcastindex.org/static/powerpress.png",
    platforms: ["WordPress"],
    supportedTags: [
      {
        tag: "<itunes:author>",
        parents: ["<item>"],
      },
      {
        tag: "<itunes:category>",
        parents: ["<item>"],
      },
      {
        tag: "<itunes:explicit>",
        parents: ["<item>"],
      },
      {
        tag: "<itunes:image>",
        parents: ["<channel>"],
      },
      {
        tag: "<itunes:owner>",
        parents: ["<channel>"],
      },
      {
        tag: "<itunes:summary>",
        parents: ["<channel>"],
      },
      {
        tag: "<itunes:type>",
        parents: ["<channel>"],
      },
      {
        tag: "<itunes:email>",
        parents: ["<itunes:owner>"],
      },
      {
        tag: "<itunes:name>",
        parents: ["<itunes:owner>"],
      },
    ],
  },
];

export default apps;
