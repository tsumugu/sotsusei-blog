import React from "react";
import "./Clock.css";
import { convertMinutesToHoursAndMinutes } from "../../../../utils/convertMinutesToHoursAndMinutes";

const Clock = ({ startedAt, endedAt }) => {
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return (hours % 12) * 60 + minutes;
  };

  const startMinutes = parseTime(startedAt);
  const endMinutes = parseTime(endedAt);

  const totalMinutesIn12Hours = 12 * 60;
  const circumference = 2 * Math.PI * 45; // 半径45の円の周長

  let progress = endMinutes - startMinutes;
  if (progress < 0) {
    progress += totalMinutesIn12Hours; // 12時間を超える場合の処理
  }

  const dashArrayValue = (progress / totalMinutesIn12Hours) * circumference;
  const offsetValue = (startMinutes / totalMinutesIn12Hours) * circumference;

  return (
    <div className="clock">
      <div className="time-text">
        <p>
          {startedAt}-{endedAt}
        </p>
        <p className="time-dur">
          {convertMinutesToHoursAndMinutes(endMinutes - startMinutes)}
        </p>
      </div>
      {numbers.map((number, index) => {
        const angle = (index + 1) * 30;
        const x = 50 + 36 * Math.cos((angle - 90) * (Math.PI / 180));
        const y = 50 + 36 * Math.sin((angle - 90) * (Math.PI / 180));

        return (
          <div
            key={number}
            className="number"
            style={{
              top: `${y}%`,
              left: `${x}%`,
            }}
          >
            {number}
          </div>
        );
      })}
      <svg viewBox="0 0 100 100" className="circle">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="lightgrey"
          strokeWidth="4"
          fill="none"
          className="bg"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="5"
          fill="none"
          strokeDasharray={`${dashArrayValue} ${
            circumference - dashArrayValue
          }`}
          strokeDashoffset={circumference - offsetValue}
          strokeLinecap="round"
          className="progress"
        />
      </svg>
    </div>
  );
};

export default Clock;
