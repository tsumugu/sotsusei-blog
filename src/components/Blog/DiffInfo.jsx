import React from "react";
import TamabiOnlyImage from "./TamabiOnlyImage";

const DiffInfo = ({ diffs }) => {
  return (
    <ol>
      {diffs.map((item) => {
        return (
          <>
            <li>{item.action}</li>
            <ul>
              <li>{item.reason}</li>
              {item.photo && (
                <li>
                  <TamabiOnlyImage src={item.photo} />
                </li>
              )}
            </ul>
          </>
        );
      })}
    </ol>
  );
};

export default DiffInfo;
