import { differenceInMinutes } from 'date-fns';

export const timeDiffInMins = (start, end) => {
  console.log('start:', start);
  const [startHour, startMin] = start.split(':');
  const [endHour, endMin] = end.split(':');

  return differenceInMinutes(
    new Date(2000, 1, 1, +endHour, +endMin, 0),
    new Date(2000, 1, 1, +startHour, +startMin, 0)
  );
};
