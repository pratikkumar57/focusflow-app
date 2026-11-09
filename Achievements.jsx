import Layout from "../components/Layout";

export default function Achievements() {
  const xp =
    Number(localStorage.getItem("focusflow_xp")) || 0;

  const achievements = [
    {
      title: "First 100 XP",
      icon: "🏆",
      requirement: 100,
      reward: 50,
    },
    {
      title: "Rising Star",
      icon: "⭐",
      requirement: 500,
      reward: 100,
    },
    {
      title: "Productivity Master",
      icon: "🚀",
      requirement: 1000,
      reward: 250,
    },
    {
      title: "Focus King",
      icon: "👑",
      requirement: 2000,
      reward: 500,
    },
  ];

  const unlockedCount = achievements.filter(
    (a) => xp >= a.requirement
  ).length;

  const completionPercentage =
    (unlockedCount / achievements.length) * 100;

  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-8">
        Achievements 🏆
      </h1>

      <div className="bg-slate-900 p-6 rounded-3xl mb-8">
        <h2 className="text-2xl font-bold">
          Current XP: {xp}
        </h2>

        <p className="mt-2 text-slate-400">
          {unlockedCount} / {achievements.length} unlocked
        </p>

        <div className="w-full h-3 bg-slate-800 rounded-full mt-4">
          <div
            className="h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
            style={{
              width: `${completionPercentage}%`,
            }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {achievements.map((achievement, index) => {
          const unlocked =
            xp >= achievement.requirement;

          return (
            <div
              key={index}
              className={`p-5 rounded-3xl border transition-all ${
                unlocked
                  ? "bg-slate-900 border-yellow-500"
                  : "bg-slate-950 border-slate-800 opacity-60"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">
                    {unlocked
                      ? achievement.icon
                      : "🔒"}{" "}
                    {achievement.title}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Unlock at {achievement.requirement} XP
                  </p>

                  <p className="text-yellow-400 mt-2">
                    Reward: +{achievement.reward} XP
                  </p>
                </div>

                <div className="text-3xl">
                  {unlocked ? "✅" : "🔒"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}