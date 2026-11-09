export default function HabitCard({ habit, streak }) {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl">
      <h2 className="text-xl font-semibold">
        {habit}
      </h2>

      <p className="mt-3 text-orange-400">
        🔥 {streak} Day Streak
      </p>

      <button className="mt-4 bg-green-600 px-4 py-2 rounded-lg">
        Complete Today
      </button>
    </div>
  );
}