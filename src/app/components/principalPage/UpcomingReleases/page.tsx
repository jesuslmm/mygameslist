import { Games } from "../../../../../gamestypes";
import Image from "next/image";
import Organizer from "../../tools/GameOrganizer";
import { orderedGames } from "../../../../../gamestypes";

export default async function UpcomingReleases() {
  const data: Games = await getReleases();

  const { results } = data;

  let games: orderedGames[] = Organizer(results);

  return <div>hi</div>;
}

async function getReleases() {
  const data = await fetch(process.env.POPULAR_RELEASES_LINK as string);

  if (!data.ok) {
    throw new Error("Failed to fetch next releases");
  }

  return data.json();
}
