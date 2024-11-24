import React, { useEffect } from "react";
import FormattedDate from "../../FormattedDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Clock from "./Clock/Clock";
import "./PostBasicInfo.css";
import TamabiMap from "./TamabiMap/TamabiMap";
import { Twemoji } from "react-emoji-render";
import { WEATHERS } from "../../../consts";

const PostBasicInfo = ({
  otherEventDates = {},
  date,
  weather,
  temp,
  place,
}) => {
  const todayDate = new Date(date);

  return (
    <div className="post-basic-info">
      {date && (
        <div className="calendar cell">
          <Calendar
            value={todayDate}
            calendarType="iso8601"
            locale="ja-JP"
            formatDay={(_, date) => date.getDate()}
            tileClassName={({ date }) => {
              const dateMonth = date.getMonth();
              const dateDate = date.getDate();
              const isEventDate =
                Object.keys(otherEventDates)
                  .filter(
                    (d) =>
                      new Date(d).toISOString() !== todayDate.toISOString(),
                  )
                  .filter(
                    (e) =>
                      dateMonth == new Date(e).getMonth() &&
                      dateDate == new Date(e).getDate(),
                  ).length > 0;
              if (isEventDate) {
                return "react-calendar__tile--othereventday";
              }
            }}
            prevLabel={null}
            prev2Label={null}
            nextLabel={null}
            next2Label={null}
          />
        </div>
      )}
      <div className="time cell">
        <Clock otherEventDates={otherEventDates} eventDate={date} />
      </div>
      {place && (
        <div className="place cell">
          <TamabiMap place={place} />
        </div>
      )}
      {weather && (
        <div className="weather cell">
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
