type AppType =
  | "podcast-player"
  | "publishing-tool"
  | "wordpress-plugin"
  | "other"

type AppPlatform =
  | "ios"
  | "android"
  | "web-app"
  | "macos"
  | "windows"
  | "linux"
  | "wordpress"

type AppSupportedFeature = {
  tagSlug: string
  url?: string
  parents?: string[]
  usageNotes?: string
  image?: string
  supportedSinceDate?: Date
  supportedSinceVersion?: string
  usedForSearch?: boolean
  required?: boolean
  hidden?: boolean
  deprecated?: boolean
}

type App = {
  name: string
  description: string
  cost?: string
  type: AppType[]
  url: string
  iconUrl: string
  platforms: AppPlatform[]
  supportedFeatures: AppSupportedFeature[]
}
