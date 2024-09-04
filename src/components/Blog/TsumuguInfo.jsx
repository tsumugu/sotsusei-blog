import React from "react";
import TamabiOnlyImage from "./TamabiOnlyImage";

const TsumuguInfo = ({ condition, comment, photo }) => {
  return (
    <>
      <h3>山口の様子</h3>
      <ul>
        {photo && (
          <li>
            <TamabiOnlyImage src={photo} />
          </li>
        )}
        {condition && <li>{condition}</li>}
        {comment && <li>{comment}</li>}
      </ul>
    </>
  );
};

export default TsumuguInfo;
