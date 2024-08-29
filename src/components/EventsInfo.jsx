import React, { useState, useEffect } from "react";
import "./EventsInfo.css";

const EventsInfo = ({ events, people }) => {
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
            <div className="person-container">
              {eventData.people.map((personId) => {
                const person = people.find((p) => p.name === personId);
                return (
                  <div
                    key={personId}
                    className={`person ${
                      eventData.type === "join" ? "join" : "left"
                    }`}
                  >
                    <div
                      className={`person-circle ${person.department}`}
                      style={{ background: person.color }}
                    ></div>
                    <div className="person-label">
                      <p className="person-department">{person.department}</p>
                      <p className="person-grade">{person.grade}</p>
                    </div>
                  </div>
                );
              })}
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
