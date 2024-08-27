import React from "react";

const DiffInfo = ({ diffs }) => {
  return (
    <ol>
      {diffs.map((item) => {
        return (
          <>
            <li>{item.action}</li>
            <ul>
              <li>{item.reason}</li>
            </ul>
          </>
        );
      })}
    </ol>
  );
};

export default DiffInfo;
