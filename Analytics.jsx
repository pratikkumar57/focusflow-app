import Layout from "../components/Layout";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function Analytics() {
  const weeklyData = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 4 },
    { day: "Wed", hours: 3 },
    { day: "Thu", hours: 6 },
    { day: "Fri", hours: 5 },
    { day: "Sat", hours: 7 },
    { day: "Sun", hours: 4 },
  ];

  const monthlyData = [
    { month: "Jan", xp: 100 },
    { month: "Feb", xp: 250 },
    { month: "Mar", xp: 400 },
    { month: "Apr", xp: 550 },
    { month: "May", xp: 750 },
    { month: "Jun", xp: 900 },
  ];

  const categoryData = [
    { name: "Study", value: 55 },
    { name: "Projects", value: 30 },
    { name: "Personal", value: 15 },
  ];

  const COLORS = [
    "#8b5cf6",
    "#3b82f6",
    "#f97316",
  ];

  return (
    <Layout>

      <h1 className="text-5xl font-bold mb-8">
        Analytics Dashboard 📈
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">

        <div className="bg-slate-900 p-6 rounded-3xl">
          <h3 className="text-slate-400">
            Total Focus Hours
          </h3>

          <p className="text-3xl font-bold mt-2">
            31h
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl">
          <h3 className="text-slate-400">
            Current XP
          </h3>

          <p className="text-3xl font-bold mt-2">
            {localStorage.getItem(
              "focusflow_xp"
            ) || 0}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl">
          <h3 className="text-slate-400">
            Sessions
          </h3>

          <p className="text-3xl font-bold mt-2">
            {localStorage.getItem(
              "focusflow_sessions"
            ) || 0}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl">
          <h3 className="text-slate-400">
            Productivity
          </h3>

          <p className="text-3xl font-bold mt-2">
            85%
          </p>
        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <div className="bg-slate-900 p-6 rounded-3xl">

          <h2 className="text-2xl mb-4">
            Weekly Focus Hours
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={weeklyData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="hours"
                fill="#8b5cf6"
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

        <div className="bg-slate-900 p-6 rounded-3xl">

          <h2 className="text-2xl mb-4">
            XP Growth
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="xp"
                stroke="#22c55e"
                strokeWidth={3}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>

      </div>

      <div className="bg-slate-900 p-6 rounded-3xl mt-6">

        <h2 className="text-2xl mb-4">
          Productivity Categories
        </h2>

        <ResponsiveContainer
          width="100%"
          height={350}
        >
          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={120}
              label
            >
              {categoryData.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                )
              )}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

    </Layout>
  );
}