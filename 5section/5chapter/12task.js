function unique(arr) {
  let res = [];

  for (let el of arr) {
    if (!res.includes(el)) {
      res.push(el);
    }
  }

  return res;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
