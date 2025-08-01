import appsAndTools from "./apps-and-tools"

// Export the organized apps object
export const apps = appsAndTools

// Export as an array for backward compatibility
export const appsArray: App[] = Object.values(appsAndTools)

export default apps
