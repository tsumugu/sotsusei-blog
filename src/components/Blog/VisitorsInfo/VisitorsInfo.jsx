import React from "react";
import { TSUMUGU_PROFILE_JSON } from "../../../consts";
import "./VisitorsInfo.css";

const VisitorsInfo = ({ visitors }) => {
  const visitorsWithoutTsumugu = visitors.filter(
    (e) => e.name != TSUMUGU_PROFILE_JSON.name
  );
  return (
    <>
      <h3>来てくれた人</h3>

      {visitorsWithoutTsumugu.map((item) => {
        return (
          <div className="visitor-card">
            <img
              src={item.photo ? item.photo : item.department.icon}
              width="128px"
              style={{ background: item.color }}
            />
            <p className="name">{item.name}</p>
            <p className="dept">
              {item.department.name} {item.grade}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default VisitorsInfo;