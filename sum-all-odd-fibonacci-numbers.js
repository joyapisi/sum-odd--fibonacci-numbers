module.exports = function (num) {
  // write your code here
  let sum = 0;
  const fibbonacciNos=[0,1];

  for (let i=2; i<=num; i++) {
    const prevNo1= fibbonacciNos[i-1];
    const prevNo2= fibbonacciNos[i-2];
    fibbonacciNos.push(prevNo1+prevNo2);
  }

  for (let j=0; j<=num; j++){
    if (fibbonacciNos[j]%2 !=0 && fibbonacciNos[j]<=num) {
      sum = fibbonacciNos[j]+sum;
    }
  }
  return sum;
}