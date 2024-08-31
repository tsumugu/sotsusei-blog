import { COLORS } from "../consts";

const getColorFromIndex = (index) => {
  const adjustedIndex = index % COLORS.length;
  return COLORS[adjustedIndex];
};

export const convertPeopleWithColor = (people) => {
  return people.map((f, index) => {
    return {
      ...f,
      color: getColorFromIndex(index),
    };
  });
};
