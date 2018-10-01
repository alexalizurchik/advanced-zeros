module.exports = function getZerosCount(num, base) {
  let primeFactorsOfBase = getPrimeFactors(base);
  let zerosByFactor = [];
  
  for (let key in primeFactorsOfBase) {
    let currentNum = num;
    let count = 0;
    
    while (currentNum >= key) {
      currentNum = parseInt(currentNum / key);
      count += currentNum;
    }
    
    zerosByFactor.push(parseInt(count / primeFactorsOfBase[key]));
  }

  return Math.min.apply(null, zerosByFactor);
};

function getPrimeFactors(num) {
  let primeFactors = {};
  
  for (let i = 2; i <= num; i++) {
    let count = 0;
    
    while (num % i === 0) {
      num = num / i;
      count++;
      primeFactors[i] = count;
    } 
  }
  
  return primeFactors;
}
