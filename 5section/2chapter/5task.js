function randomInteger(min, max){
    return Math.random() * (max - min) + min
}

console.log(randomInteger(1, 5))