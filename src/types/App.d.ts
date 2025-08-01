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
  description?: string
  image?: string
  supportedSinceDate?: Date
  supportedSinceVersion?: string
}

type App = {
  name: string
  type: AppType[]
  url: string
  iconUrl: string
  platforms: AppPlatform[]
  supportedFeatures: AppSupportedFeature[]
}
