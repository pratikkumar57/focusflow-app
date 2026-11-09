import { createContext, useContext, useState } from "react";

const XpContext = createContext();

export function XpProvider({ children }) {
  const [xp, setXp] = useState(() => {
    return (
      Number(
        localStorage.getItem("focusflow_xp")
      ) || 0
    );
  });

  const addXP = (amount) => {
    const newXP = xp + amount;

    setXp(newXP);

    localStorage.setItem(
      "focusflow_xp",
      newXP
    );
  };

  const level =
    Math.floor(
      Math.sqrt(xp / 100)
    ) + 1;

  const levelTitle =
    level >= 10
      ? "Legend"
      : level >= 7
      ? "Master"
      : level >= 5
      ? "Expert"
      : level >= 3
      ? "Focused"
      : level >= 2
      ? "Learner"
      : "Beginner";

  return (
    <XpContext.Provider
      value={{
        xp,
        level,
        levelTitle,
        addXP,
      }}
    >
      {children}
    </XpContext.Provider>
  );
}

export const useXP = () =>
  useContext(XpContext);