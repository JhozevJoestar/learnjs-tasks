function sumInput() {
    let arr = [1, -2, 3, 4, -9, 6];
    while (true) {
      let num = prompt("Введите число");
      if (num === null || num === "" || !isFinite(num)) break;
      arr.push(+num);
    }
    // if(){}
    let sum = 0;
    arr.forEach((el) => sum += el)
    return sum;
}

console.log(sumInput())