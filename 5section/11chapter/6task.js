function getSecondsToday() {
  let time = new Date();
  return time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds();
}
console.log(getSecondsToday());
