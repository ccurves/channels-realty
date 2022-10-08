export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str, n) => {
  return str.slice(0, 5) + "…" + str.slice(-10);
};

export const getPercent = (ref, goal) => {
  return (ref / goal) * 100;
};
