import React from "react";

const EventsInfo = ({ eventsinfo }) => {
  return (
    <>
      {eventsinfo.map((item) => {
        return (
          <ul>
            {item.photo && <li>{item.photo}</li>}
            <li>
              {item.department} {item.grade}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default EventsInfo;
