import React from "react";
import FormattedDate from "./FormattedDate";

const PostBasicInfo = ({ date, weather, place, startedAt, endedAt }) => {
  return (
    <>
      {date && (
        <>
          <h3>日時</h3>
          <p>
            <FormattedDate date={new Date(date)} />
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
          <p>
            {startedAt} - {endedAt}
          </p>
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
