import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Splash } from "./components/screens/Splash";
import { OnboardingStart } from "./components/screens/OnboardingStart";
import { IdentityQuestions } from "./components/screens/IdentityQuestions";
import { GoalSelection } from "./components/screens/GoalSelection";
import { ArchetypeReveal } from "./components/screens/ArchetypeReveal";
import { Home } from "./components/screens/Home";
import { LockIn } from "./components/screens/LockIn";
import { Progress } from "./components/screens/Progress";
import { Coach } from "./components/screens/Coach";
import { Community } from "./components/screens/Community";
import { Opportunities } from "./components/screens/Opportunities";
import { MomentumMode } from "./components/screens/MomentumMode";
import { Insights } from "./components/screens/Insights";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/onboarding",
    Component: OnboardingStart,
  },
  {
    path: "/onboarding/identity",
    Component: IdentityQuestions,
  },
  {
    path: "/onboarding/goals",
    Component: GoalSelection,
  },
  {
    path: "/onboarding/reveal",
    Component: ArchetypeReveal,
  },
  {
    path: "/app",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "lockin", Component: LockIn },
      { path: "progress", Component: Progress },
      { path: "coach", Component: Coach },
      { path: "community", Component: Community },
      { path: "opportunities", Component: Opportunities },
      { path: "momentum", Component: MomentumMode },
      { path: "insights", Component: Insights },
    ],
  },
]);
