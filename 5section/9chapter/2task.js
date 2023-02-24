let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
  
  function sumSalaries(salar) {
    let num = 0;
    for (let salary of Object.values(salar)) {
      num += 1;
    }
    return num;
  }
  
  console.log(sumSalaries(salaries));
  