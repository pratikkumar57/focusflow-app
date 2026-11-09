import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { addXP } from "../utils/xp";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("focusflow_tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "focusflow_tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      name: task,
      priority,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === id) {

          // XP sirf first time completion par milega
          if (!t.completed) {
            addXP(20);
          }

          return {
            ...t,
            completed: !t.completed,
          };
        }

        return t;
      })
    );
  };

  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-8">
        Task Manager ✅
      </h1>

      <div className="bg-slate-900 p-6 rounded-3xl mb-6">
        <div className="flex gap-4">

          <input
            type="text"
            placeholder="Task Name"
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
            className="flex-1 p-3 bg-slate-800 rounded-xl"
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="p-3 bg-slate-800 rounded-xl"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <button
            onClick={addTask}
            className="bg-purple-600 px-6 rounded-xl"
          >
            Add
          </button>

        </div>
      </div>

      <div className="space-y-4">

        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-slate-900 p-5 rounded-2xl flex justify-between"
          >
            <div>

              <h2
                className={
                  task.completed
                    ? "line-through text-gray-500"
                    : "font-bold"
                }
              >
                {task.name}
              </h2>

              <p className="text-slate-400">
                Priority: {task.priority}
              </p>

            </div>

            <div className="flex gap-3">

              <button
                onClick={() =>
                  toggleTask(task.id)
                }
                className="bg-green-600 px-4 rounded"
              >
                Done
              </button>

              <button
                onClick={() =>
                  deleteTask(task.id)
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