function getSecondsToday() {
    let time = new Date();
    return 86400 - (time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds());
  }
  console.log(getSecondsToday());
  