let arr = [5, 3, 8, 1];


function filterRangeInPlace(array, a, b) {
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num < a || num > b) {
        array.splice(i, 1);
    }
  }
}

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); 