type SupportedTag = {
  name?: string;
  tag: string;
  url?: string;
  parents?: string[];
  description?: string;
  image?: string;
};

type App = {
  name: string;
  type: string[];
  url: string;
  iconUrl: string;
  platforms: string[];
  supportedTags: SupportedTag[];
};
