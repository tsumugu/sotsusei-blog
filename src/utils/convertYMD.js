// dateStr: YYYY-MM-DD
export const convertYMD = (dateStr) => {
  const splitedDate = dateStr.split("-");
  return `${splitedDate[1]}/${splitedDate[2]}`;
};
