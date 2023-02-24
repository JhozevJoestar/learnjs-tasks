let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let array = [ vasya, petya, masha ];

function getAverageAge(arr) {
    let averAge = 0;
    for (let el of arr) {
        averAge += el.age
    }
    return averAge / arr.length;
}

console.log(getAverageAge(array))