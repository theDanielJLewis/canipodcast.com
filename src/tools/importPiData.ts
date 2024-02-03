import { PodcastIndexApps } from "@/types/PodcastIndexApps";
import fs from "fs/promises";

export async function importPiData() {
  const response = await fetch("https://podcastindex.org/api/apps", {
    method: "GET",
  });
  const piAppsData: PodcastIndexApps[] = await response.json();
  await fs.writeFile("src/data/piAppsData.json", JSON.stringify(piAppsData));
}

importPiData();
