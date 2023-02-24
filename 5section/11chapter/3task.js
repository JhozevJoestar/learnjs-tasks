let date = new Date(2012, 0, 3);

function getWeekDay(date) {
    let num = date.getDay();

    if (day == 0) {
        num = 7;
    }

    return num
    
}

console.log(getWeekDay(date))