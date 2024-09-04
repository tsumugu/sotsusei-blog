import React, { useEffect } from "react";
import FormattedDate from "../../FormattedDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Clock from "./Clock/Clock";
import "./PostBasicInfo.css";
import TamabiMap from "./TamabiMap/TamabiMap";
import { Twemoji } from "react-emoji-render";
import { WEATHERS } from "../../../consts";

const PostBasicInfo = ({ date, weather, temp, place, startedAt, endedAt }) => {
  return (
    <div className="post-basic-info">
      {date && (
        <div className="calendar cell">
          {/* <h5>日時</h5> */}
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
      {startedAt && endedAt && (
        <div className="time cell">
          {/* <h5>時間</h5> */}
          <Clock startedAt={startedAt} endedAt={endedAt} />
        </div>
      )}
      {place && (
        <div className="place cell">
          {/* <h5>場所</h5> */}
          <TamabiMap place={place} />
        </div>
      )}
      {weather && (
        <div className="weather cell">
          {/* <h5>天気</h5> */}
          <div className="weather-inner">
            <div className="emoji-text-wrapper">
              <Twemoji className="emoji" text={WEATHERS[weather]} />
              <p class="text">{weather}</p>
            </div>
            <p className="temp">{temp}℃</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostBasicInfo;
