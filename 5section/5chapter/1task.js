function camelize(str) {
    str.split('-') 
    str.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    return  str.join(''); 
}