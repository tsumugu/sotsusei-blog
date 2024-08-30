import React, { useState, useEffect } from "react";
import "./EventsInfo.css";
import {
  STUDENT_DEFAULT_PROFILE_IMG_PATH,
  TSUMUGU_PROFILE_JSON,
} from "../consts";

const EventsInfo = ({ events, people }) => {
  const addTsumuguToPeople = (people) => {
    people.push(TSUMUGU_PROFILE_JSON);
    return people;
  };
  const newPeople = addTsumuguToPeople(people);

  const numberToWords = (num) => {
    const numberWords = ["zero", "one", "two", "three", "four", "five", "six"];
    return numberWords[num] || "";
  };

  const getPersonContainerClassName = (arr) => {
    const count = arr.filter((e) => e != TSUMUGU_PROFILE_JSON.name).length;
    if (count <= 0) {
      return "";
    } else if (count >= 7) {
      return "seven-people";
    } else {
      return `${numberToWords(count)}-people`;
    }
  };

  return (
    <div className="timeline">
      {events.map((eventData, index) => (
        <div
          key={index}
          className={`event-container ${
            eventData.type === "normarl"
              ? "normal-event"
              : eventData.type === "join"
              ? "join-event"
              : "leave-event"
          }`}
        >
          {(eventData.type === "join" || eventData.type === "left") && (
            <div className="trigger-feeling-container">
              <p className="trigger">
                {eventData.trigger
                  ? eventData.trigger
                  : eventData.type === "join"
                  ? "参加"
                  : "退出"}
              </p>
              {eventData.feeling && (
                <p className="feeling">{eventData.feeling}</p>
              )}
            </div>
          )}
          {(eventData.type === "join" || eventData.type === "left") && (
            <div
              className={`person-container ${getPersonContainerClassName(
                eventData.people.concat(eventData.stay)
              )}`}
            >
              {eventData.people.concat(eventData.stay).map((personId) => {
                const person = newPeople.find((p) => p.name === personId);
                return (
                  <div
                    key={personId}
                    className={`person ${
                      eventData.stay.includes(personId)
                        ? ""
                        : eventData.type === "join"
                        ? "join"
                        : "left"
                    }`}
                    style={{
                      gridArea:
                        personId === TSUMUGU_PROFILE_JSON.name
                          ? "person-tsumugu"
                          : `person-${eventData.people
                              .concat(eventData.stay)
                              .filter((e) => e != TSUMUGU_PROFILE_JSON.name)
                              .indexOf(personId)}`,
                    }}
                  >
                    <div className="person-label">
                      <p className="person-name">{person.name}</p>
                    </div>
                    {/* <div className="person-label-tooltip">
                      <p className="person-department">{person.department}</p>
                      <p className="person-grade">{person.grade}</p>
                    </div> */}
                    <div
                      className={`person-circle`}
                      style={{
                        background: person.photo
                          ? 'url("' + person.photo + '")'
                          : 'url("' + STUDENT_DEFAULT_PROFILE_IMG_PATH + '")',
                      }}
                    ></div>
                  </div>
                );
              })}
              <div
                className="table"
                style={{
                  gridArea: "table-circle",
                }}
              >
                <div className="table-circle"></div>
              </div>
            </div>
          )}
          {eventData.type === "normarl" && (
            <div className="event-bubble">
              <p className="event-text">{eventData.event}</p>
              <small className="event-feeling">{eventData.feeling}</small>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EventsInfo;
