import React from "react";
import FormattedDate from "../../FormattedDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Clock from "./Clock/Clock";
import "./PostBasicInfo.css";

const PostBasicInfo = ({ date, weather, place, startedAt, endedAt }) => {
  return (
    <>
      {date && (
        <>
          <h3>日時</h3>
          <p>
            <Calendar
              value={new Date(date)}
              calendarType="iso8601"
              locale="ja-JP"
              formatDay={(_, date) => date.getDate()}
              prevLabel={null}
              prev2Label={null}
              nextLabel={null}
              next2Label={null}
            />
          </p>
        </>
      )}
      {weather && (
        <>
          <h3>天気</h3>
          <p>{weather}</p>
        </>
      )}
      {startedAt && endedAt && (
        <>
          <h3>時間</h3>
          <Clock startedAt={startedAt} endedAt={endedAt} />
        </>
      )}
      {place && (
        <>
          <h3>場所</h3>
          <p>{place}</p>
        </>
      )}
    </>
  );
};

export default PostBasicInfo;
