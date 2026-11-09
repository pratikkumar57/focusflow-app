export const getXP = () => {
  return Number(localStorage.getItem("focusflow_xp")) || 0;
};

export const addXP = (amount) => {
  const currentXP = getXP();
  const newXP = currentXP + amount;

  localStorage.setItem("focusflow_xp", newXP);

  return newXP;
};

export const getLevel = () => {
  const xp = getXP();

  return Math.floor(Math.sqrt(xp / 100)) + 1;
};