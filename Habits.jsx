import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { addXP } from "../utils/xp";

export default function Habits() {
  const [habit, setHabit] = useState("");

  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("focusflow_habits");

    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "DSA Practice",
            streak: 12,
            completed: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "focusflow_habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  const addHabit = () => {
    if (!habit.trim()) return;

    const newHabit = {
      id: Date.now(),
      name: habit,
      streak: 0,
      completed: false,
    };

    setHabits([...habits, newHabit]);

    setHabit("");
  };

  const deleteHabit = (id) => {
    setHabits(
      habits.filter((h) => h.id !== id)
    );
  };

  const completeHabit = (id) => {
    setHabits(
      habits.map((h) => {
        if (h.id === id) {

          if (!h.completed) {
            addXP(10);
          }

          return {
            ...h,
            completed: true,
            streak: h.streak + 1,
          };
        }

        return h;
      })
    );
  };

  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-8">
        Habit Tracker 🔥
      </h1>

      <div className="bg-slate-900 p-6 rounded-3xl mb-6">

        <div className="flex gap-4">

          <input
            value={habit}
            onChange={(e) =>
              setHabit(e.target.value)
            }
            placeholder="Habit Name"
            className="flex-1 p-3 bg-slate-800 rounded-xl"
          />

          <button
            onClick={addHabit}
            className="bg-purple-600 px-6 rounded-xl"
          >
            Add Habit
          </button>

        </div>

      </div>

      <div className="space-y-4">

        {habits.map((habit) => (
          <div
            key={habit.id}
            className="bg-slate-900 p-5 rounded-3xl flex justify-between"
          >
            <div>

              <h2 className="font-bold text-xl">
                {habit.name}
              </h2>

              <p className="text-orange-400">
                🔥 {habit.streak} Day Streak
              </p>

            </div>

            <div className="flex gap-3">

              <button
                onClick={() =>
                  completeHabit(habit.id)
                }
                disabled={habit.completed}
                className={`px-4 rounded ${
                  habit.completed
                    ? "bg-gray-600"
                    : "bg-green-600"
                }`}
              >
                {habit.completed
                  ? "Done ✅"
                  : "Complete"}
              </button>

              <button
                onClick={() =>
                  deleteHabit(habit.id)
                }
                className="bg-red-600 px-4 rounded"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>
    </Layout>
  );
}