export const convertHoursAndMinutesToMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return (hours % 12) * 60 + minutes;
};
