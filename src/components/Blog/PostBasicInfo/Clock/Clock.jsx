import React from "react";
import "./Clock.css";
import { convertHoursAndMinutesToMinutes } from "../../../../utils/convertHoursAndMinutesToMinutes";
import { convertMinutesToHoursAndMinutes } from "../../../../utils/convertMinutesToHoursAndMinutes";
import { convertYMD } from "../../../../utils/convertYMD";

const Clock = ({ otherEventDates, eventDate }) => {
  const getSurroundingEvents = (events, targetDate) => {
    const dates = Object.keys(events).sort((a, b) => new Date(a) - new Date(b));
    const targetIndex = dates.indexOf(targetDate);

    if (targetIndex === -1) {
      return {}; // 対象の日付が存在しない場合、空のオブジェクトを返す
    }

    // 対象の日の前後2つ（合計5つ）を取得する範囲を計算
    const start = Math.max(0, targetIndex - 1);
    const end = Math.min(dates.length, targetIndex + 2); // targetIndexを含むため+3

    // 範囲内のイベントをオブジェクト形式で返す
    const result = {};
    dates.slice(start, end).forEach((date) => {
      result[date] = events[date];
    });

    return result;
  };

  const getMaxDurMinutes = (surroundingEvents) => {
    const maxDurMinutesArr = Object.keys(surroundingEvents)
      .map((k) => surroundingEvents[k]["durMinutes"])
      .sort()
      .reverse();
    if (maxDurMinutesArr.length > 0) {
      return maxDurMinutesArr[0];
    }
    return 0;
  };

  const surroundingEvents = getSurroundingEvents(otherEventDates, eventDate);
  const maxDirMinutes = getMaxDurMinutes(surroundingEvents);

  const beforeDateKey = Object.keys(surroundingEvents)[0];

  // 時間の処理
  const startedAt = otherEventDates[eventDate].startedAt;
  const endedAt = otherEventDates[eventDate].endedAt;

  const startMinutes = convertHoursAndMinutesToMinutes(startedAt);
  const endMinutes = convertHoursAndMinutesToMinutes(endedAt);

  const totalHoursAndMinutes = convertMinutesToHoursAndMinutes(
    endMinutes - startMinutes,
  );

  const diffBefore = () => {
    if (eventDate == beforeDateKey) {
      return undefined;
    }
    if (beforeDateKey) {
      return (
        endMinutes - startMinutes - surroundingEvents[beforeDateKey].durMinutes
      );
    }
    return undefined;
  };

  return (
    <div className="clock">
      <div className="today-info">
        <p>
          {startedAt} - {endedAt}
        </p>
        <p>{totalHoursAndMinutes}</p>
        <p className="timediff">
          前回との差 :{" "}
          {diffBefore()
            ? (diffBefore() < 0 ? "-" : "") +
              convertMinutesToHoursAndMinutes(Math.abs(diffBefore()))
            : "-"}
        </p>
      </div>
      {/* <div className="charts">
        {Object.keys(surroundingEvents).map((key) => {
          const heightPer =
            (surroundingEvents[key].durMinutes / maxDirMinutes) * 100;
          return (
            <div className="charts-inner">
              <p className="minutes">
                {convertMinutesToHoursAndMinutes(
                  surroundingEvents[key].durMinutes,
                  true,
                )}
              </p>
              <div className="chartbar-wrapper">
                <div
                  className={
                    key == eventDate ? "chartbar today" : "chartbar default"
                  }
                  style={{
                    height: heightPer + "%",
                  }}
                ></div>
              </div>
              <p className="date">{convertYMD(key)}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Clock;
