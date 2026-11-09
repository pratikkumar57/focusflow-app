import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Pomodoro from "./pages/Pomodoro";
import Analytics from "./pages/Analytics";
import Habits from "./pages/Habits";
import Skills from "./pages/Skills";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Achievements from "./pages/Achievements";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/pomodoro"
          element={<Pomodoro />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/habits"
          element={<Habits />}
        />

        <Route
          path="/skills"
          element={<Skills />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/achievements"
          element={<Achievements />}
        />

      </Routes>
    </BrowserRouter>
  );
}