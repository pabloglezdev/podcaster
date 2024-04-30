export const convertMillisecondsToHours = (milliseconds: string) => {
  const seconds = Math.floor((Number(milliseconds) / 1000) % 60);
  const minutes = Math.floor((Number(milliseconds) / (1000 * 60)) % 60);
  const hours = Math.floor((Number(milliseconds) / (1000 * 60 * 60)) % 24);

  const finalHours = hours < 10 ? '0' + hours : hours;
  const finalMinutes = minutes < 10 ? '0' + minutes : minutes;
  const finalSeconds = seconds < 10 ? '0' + seconds : seconds;

  return Number(finalHours) > 1 ? `${finalHours}:${finalMinutes}:${finalSeconds}` : `${finalMinutes}:${finalSeconds}`;
};

export const getDateOnly = (date: string) => new Date(date).toLocaleDateString();
