import { Link } from "react-router-dom";
import {
  Home,
  CheckSquare,
  Timer,
  BarChart3,
  Flame,
  Target,
  Settings,
  User,
  Award,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-5">
      <h1 className="text-3xl font-bold text-purple-400 mb-10">
        FocusFlow
      </h1>

      <div className="space-y-3">

        <Menu
          icon={<Home size={20} />}
          text="Dashboard"
          to="/"
        />

        <Menu
          icon={<CheckSquare size={20} />}
          text="Tasks"
          to="/tasks"
        />

        <Menu
          icon={<Timer size={20} />}
          text="Pomodoro"
          to="/pomodoro"
        />

        <Menu
          icon={<BarChart3 size={20} />}
          text="Analytics"
          to="/analytics"
        />

        <Menu
          icon={<Flame size={20} />}
          text="Habits"
          to="/habits"
        />

        <Menu
          icon={<Target size={20} />}
          text="Skills"
          to="/skills"
        />

        <Menu
          icon={<Award size={20} />}
          text="Achievements"
          to="/achievements"
        />

        <Menu
          icon={<User size={20} />}
          text="About Developer"
          to="/about"
        />

        <Menu
          icon={<Settings size={20} />}
          text="Settings"
          to="/settings"
        />

      </div>
    </aside>
  );
}

function Menu({ icon, text, to }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}