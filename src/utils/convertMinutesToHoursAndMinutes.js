export const convertMinutesToHoursAndMinutes = (
  totalMinutes,
  isEnglish = false,
) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return isEnglish
    ? `${hours > 0 ? `${hours}h` : ""}${minutes > 0 ? ` ${minutes}m` : ""}`
    : `${hours > 0 ? `${hours}時間` : ""}${minutes > 0 ? `${minutes}分間` : ""}`;
};
