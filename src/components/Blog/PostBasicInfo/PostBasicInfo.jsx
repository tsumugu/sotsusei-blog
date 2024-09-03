import React, { useEffect } from "react";
import FormattedDate from "../../FormattedDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Clock from "./Clock/Clock";
import "./PostBasicInfo.css";
import TamabiMap from "./TamabiMap/TamabiMap";

const PostBasicInfo = ({ date, weather, place, startedAt, endedAt }) => {
  return (
    <div className="post-basic-info">
      {date && (
        <div className="calendar">
          <h5>日時</h5>
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
        </div>
      )}
      {place && (
        <div className="place">
          <h5>場所</h5>
          <TamabiMap place={place} />
        </div>
      )}
      {startedAt && endedAt && (
        <div className="time">
          <h5>時間</h5>
          <Clock startedAt={startedAt} endedAt={endedAt} />
        </div>
      )}
      {weather && (
        <div className="weather small-item">
          <h5>天気</h5>
          <p>{weather}</p>
        </div>
      )}
    </div>
  );
};

export default PostBasicInfo;
