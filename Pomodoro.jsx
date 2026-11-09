import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { addXP } from "../utils/xp";

export default function Pomodoro() {
  const [customMinutes, setCustomMinutes] = useState(25);

  const [secondsLeft, setSecondsLeft] =
    useState(25 * 60);

  const [isRunning, setIsRunning] =
    useState(false);

  const [sessions, setSessions] = useState(() => {
    return (
      Number(
        localStorage.getItem(
          "focusflow_sessions"
        )
      ) || 0
    );
  });

  const [focusTime, setFocusTime] =
    useState(() => {
      return (
        Number(
          localStorage.getItem(
            "focusflow_focusTime"
          )
        ) || 0
      );
    });

  useEffect(() => {
    let timer;

    if (
      isRunning &&
      secondsLeft > 0
    ) {
      timer = setInterval(() => {
        setSecondsLeft(
          (prev) => prev - 1
        );
      }, 1000);
    }

    if (
      secondsLeft === 0 &&
      isRunning
    ) {
      setIsRunning(false);

      const newSessions =
        sessions + 1;

      const newFocusTime =
        focusTime + customMinutes;

      setSessions(newSessions);

      setFocusTime(
        newFocusTime
      );

      localStorage.setItem(
        "focusflow_sessions",
        newSessions
      );

      localStorage.setItem(
        "focusflow_focusTime",
        newFocusTime
      );

      addXP(50);

      alert(
        "🎉 Session Complete! +50 XP"
      );
    }

    return () =>
      clearInterval(timer);
  }, [
    isRunning,
    secondsLeft,
    sessions,
    focusTime,
    customMinutes,
  ]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);

    setSecondsLeft(
      customMinutes * 60
    );
  };

  const setFocusMode = () => {
    setCustomMinutes(25);
    setSecondsLeft(25 * 60);
    setIsRunning(false);
  };

  const setShortBreak = () => {
    setCustomMinutes(5);
    setSecondsLeft(5 * 60);
    setIsRunning(false);
  };

  const setLongBreak = () => {
    setCustomMinutes(15);
    setSecondsLeft(15 * 60);
    setIsRunning(false);
  };

  const applyCustomTime = () => {
    setSecondsLeft(
      customMinutes * 60
    );

    setIsRunning(false);
  };

  const minutes = String(
    Math.floor(
      secondsLeft / 60
    )
  ).padStart(2, "0");

  const seconds = String(
    secondsLeft % 60
  ).padStart(2, "0");

  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-8">
        🍅 Pomodoro Pro
      </h1>

      <div className="bg-slate-900 p-6 rounded-3xl mb-6">
        <h2 className="text-2xl mb-4">
          Modes
        </h2>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={
              setFocusMode
            }
            className="bg-purple-600 px-5 py-2 rounded-xl"
          >
            Focus 25m
          </button>

          <button
            onClick={
              setShortBreak
            }
            className="bg-green-600 px-5 py-2 rounded-xl"
          >
            Short Break
          </button>

          <button
            onClick={
              setLongBreak
            }
            className="bg-blue-600 px-5 py-2 rounded-xl"
          >
            Long Break
          </button>
        </div>
      </div>

      <div className="bg-slate-900 p-6 rounded-3xl mb-6">
        <h2 className="text-2xl mb-4">
          Custom Time
        </h2>

        <div className="flex gap-4">
          <input
            type="number"
            min="1"
            value={
              customMinutes
            }
            onChange={(e) =>
              setCustomMinutes(
                Number(
                  e.target.value
                )
              )
            }
            className="p-3 bg-slate-800 rounded-xl w-40"
          />

          <button
            onClick={
              applyCustomTime
            }
            className="bg-yellow-600 px-5 rounded-xl"
          >
            Set Time
          </button>
        </div>
      </div>

      <div className="bg-slate-900 p-8 rounded-3xl text-center">
        <div className="text-7xl font-bold mb-8">
          {minutes}:{seconds}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={
              startTimer
            }
            className="bg-green-600 px-6 py-3 rounded-xl"
          >
            Start
          </button>

          <button
            onClick={
              pauseTimer
            }
            className="bg-orange-600 px-6 py-3 rounded-xl"
          >
            Pause
          </button>

          <button
            onClick={
              resetTimer
            }
            className="bg-red-600 px-6 py-3 rounded-xl"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-slate-900 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Sessions Completed
          </h2>

          <p className="text-4xl mt-4">
            {sessions}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl">
          <h2 className="text-2xl font-bold">
            Total Focus Time
          </h2>

          <p className="text-4xl mt-4">
            {focusTime} min
          </p>
        </div>
      </div>
    </Layout>
  );
}