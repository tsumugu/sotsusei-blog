import React from "react";
import {
  STUDENT_DEFAULT_PROFILE_IMG_PATH,
  TSUMUGU_PROFILE_JSON,
} from "../consts";

const VisitorsInfo = ({ visitors }) => {
  const visitorsWithoutTsumugu = visitors.filter(
    (e) => e.name != TSUMUGU_PROFILE_JSON.name
  );
  return (
    <>
      <h3>来てくれた人</h3>

      {visitorsWithoutTsumugu.map((item) => {
        return (
          <ul>
            <li>
              <img
                src={item.photo ? item.photo : item.department.icon}
                width="128px"
                style={{ background: item.color }}
              />
              {item.name} {item.department.name} {item.grade}
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default VisitorsInfo;
