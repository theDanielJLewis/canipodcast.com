type RSSTag = {
  label: string;
  tag: string;
  slug: string;
  namespace:
    | "rss"
    | "podcast"
    | "content"
    | "media"
    | "atom"
    | "sy"
    | "itunes"
    | "googleplay"
    | "rawvoice"
    | "dc"
    | "wfw";
  popular?: boolean;
  description: {
    short?: string;
    long: string;
  };
  required?: boolean;
  parents: string[];
  parentsDescription?: string;
  count: string;
  nodeValue?: string;
  attributes?: {
    name: string;
    required: boolean;
    recommended?: boolean;
    description: string;
  }[];
  children?: string[];
  attributesDescription?: string;
  documentationUrl?: string;
  examples: {
    label?: string;
    language: string;
    code: string;
    highlightLines?: (string | number)[];
  }[];
  exampleUrl?: string;
  exampleImageUrls?: string[];
  notes?: string;
};
