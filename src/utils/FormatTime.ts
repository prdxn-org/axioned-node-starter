export const convertToMinutes = (time: string) => {
  const [hours, minutes] = getHoursAndMinutes(time.trim());

  if ((hours > 24 || minutes > 60) || (hours == 0 && minutes == 0)) {
    return 'Invalid time';
  }

  return hours * 60 + minutes;
}

const getHoursAndMinutes = (time: string) => {
  if (time.includes(':')) {
    return time.split(':').map(Number);
  }
  else if (time.includes('.')) {
    let [hour, mins] = time.split('.').map(Number);
    mins = Math.ceil((+`.${mins}`) * 60);
    return [hour, mins];
  }
  else if (!(/^[:.]$/).test(time)) {
    return [0, 0];
  }

  return [Number(time), 0];
}

export const getTimeFromMinutes = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const HH = hours < 10 ? `0${hours}` : hours;
  const MM = mins < 10 ? `0${mins}` : mins;
  return `${HH}:${MM}`;
}