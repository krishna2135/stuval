export const getDate = (timeStamp) => {
  const date = new Date(timeStamp).getDate();
  const m = new Date(timeStamp).getMonth();
  const year = new Date(timeStamp).getFullYear();
  let hour = new Date(timeStamp).getHours();
  let minute = new Date(timeStamp).getMinutes();
  let text = 'AM';
  if (hour > 12) {
    text = 'PM';
    hour -= 12;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let month = '';
  if (m === 0) {
    month = 'Jan';
  } else if (m === 1) {
    month = 'Feb';
  } else if (m === 2) {
    month = 'Mar';
  } else if (m === 3) {
    month = 'Apr';
  } else if (m === 4) {
    month = 'May';
  } else if (m === 5) {
    month = 'Jun';
  } else if (m === 6) {
    month = 'Jul';
  } else if (m === 7) {
    month = 'Aug';
  } else if (m === 8) {
    month = 'Sep';
  } else if (m === 9) {
    month = 'Oct';
  } else if (m === 10) {
    month = 'Nov';
  } else if (m === 11) {
    month = 'Dec';
  }
  return `${month} ${date} ${year} ${hour}:${minute} ${text}`;
};
