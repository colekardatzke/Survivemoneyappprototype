import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { DailyChallenge } from "./components/DailyChallenge";
import { Leaderboard } from "./components/Leaderboard";
import { SurvivalScore } from "./components/SurvivalScore";
import { ScenarioResult } from "./components/ScenarioResult";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "challenge", Component: DailyChallenge },
      { path: "friends", Component: Leaderboard },
      { path: "score", Component: SurvivalScore },
      { path: "result/:scenarioId", Component: ScenarioResult },
    ],
  },
]);
