import Layout from "../components/Layout";
import { useXP } from "../context/XpContext";

import {
  Clock,
  CheckCircle,
  Flame,
  Trophy,
} from "lucide-react";

export default function Dashboard() {
  const { xp, level } = useXP();

  const user =
    JSON.parse(
      localStorage.getItem(
        "focusflow_settings"
      )
    ) || {};

  return (
    <Layout>
      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Welcome Back, {user.name || "Pratik"} 👋
        </h1>

        <p className="text-slate-400 mt-2">
          Stay focused and keep growing.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <Card
          icon={<Clock />}
          title="Focus Time"
          value="4h 20m"
        />

        <Card
          icon={<CheckCircle />}
          title="Tasks Done"
          value="8 / 10"
        />

        <Card
          icon={<Flame />}
          title="Current Streak"
          value="12 Days"
        />

        <Card
          icon={<Trophy />}
          title="XP Earned"
          value={`${xp} XP`}
        />

        <Card
          icon={<Trophy />}
          title="Current Level"
          value={`Level ${level}`}
        />

      </div>

      <div className="mt-8 bg-slate-900 p-6 rounded-3xl">

        <h2 className="text-2xl font-bold mb-4">
          Weekly Goal
        </h2>

        <div className="w-full bg-slate-700 rounded-full h-4">

          <div
            className="bg-purple-500 h-4 rounded-full"
            style={{
              width: "75%",
            }}
          />

        </div>

        <p className="text-slate-400 mt-3">
          75% Completed
        </p>

      </div>

    </Layout>
  );
}

function Card({
  icon,
  title,
  value,
}) {
  return (
    <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">

      <div className="text-purple-400 mb-3">
        {icon}
      </div>

      <h3 className="text-slate-400">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}