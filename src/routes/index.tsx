import { createBrowserRouter } from "react-router-dom";
import { Game } from "../components/game/game";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
  },
]);
