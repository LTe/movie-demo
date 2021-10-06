import {add, eachDayOfInterval} from "date-fns";

export const getRange = (days: number) => {
  const today = new Date();
  return eachDayOfInterval({
    start: new Date(),
    end: add(today, { days: days }),
  });
}
