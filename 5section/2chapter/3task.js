function readNumber() {
    let num;
    do {
      num = prompt("число");
    } while (!isFinite(num));
    if (num === null || num === '') return null;
    return +num;
}