import React from "react";

const VisitorsInfo = ({ visitors }) => {
  return (
    <>
      <h3>来てくれた人</h3>

      {visitors.map((item) => {
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

export default VisitorsInfo;
