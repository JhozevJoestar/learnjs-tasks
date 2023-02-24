function formatDate(date) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let ms = new Date() - date;
  let sec = Math.round(ms / 1000);
  let min = sec / 60;
  let hour1 = min / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (sec < 1) {
    return "прямо сейчас";
  } else if (min < 1) {
    return `${sec} сек. назад`;
  } else if (hour1 < 1) {
    return `${min} мин. назад`;
  } else {
    return `${day}.${month}.${year} ${hour}:${minutes}`;
  }
}
