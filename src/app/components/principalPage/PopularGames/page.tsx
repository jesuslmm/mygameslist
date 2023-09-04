import { redirect } from "next/navigation";
import Link from "next/link";
import { Games } from "../../../../../gamestypes";
import Image from "next/image";
import Organizer from "../../tools/GameOrganizer";
import { orderedGames } from "../../../../../gamestypes";

export default async function PopularGames() {
  const data: Games = await getGames();

  const { results } = data;

  let games: orderedGames[] = Organizer(results);
}

async function getGames() {
  const data = await fetch(process.env.POPULAR_GAMES_LINK as string);

  if (!data.ok) {
    throw new Error("Failed to fetch the popular games");
  }

  return data.json();
}
