let salaries1 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


function topSalary(salaries) {
    let num = 0;
    let nameNum = null;
    for(const [name, salary] of Object.entries(salaries)) {
      if (num < salary) {
        num = salary;
        nameNum = name;
      }
    }
    return nameNum;
}

console.log(topSalary(salaries1))