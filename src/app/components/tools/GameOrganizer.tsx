import { Result } from "../../../../gamestypes";
import { orderedGames } from "../../../../gamestypes";

export default function Organizer(games: Result[]) {
  let OrderedGames = [];

  for (let i = 0; i < games.length; i++) {
    OrderedGames.push({
      game: games[i].name,
      image: games[i].background_image,
      date: games[i].released,
      id: games[i].id,
    });
  }

  return OrderedGames;
}
