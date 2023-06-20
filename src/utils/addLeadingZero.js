export const addLeadingZero = (str) => {
  return str.toString().length < 2 ? "0" + str : str;
};
