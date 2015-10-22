function isPrimeNumber(number){
  if(number < 2){
    return false;
  }
  var i = 2;
  while(i <= number / 2){
    if(number % i == 0){
       return false;
    }
    i = i + 1;
  }
  return true;
}

function getPrimeNumbersUnder(N){
  var count = 1;
  while (count <= N){
    if(isPrimeNumber(count)){
      console.log(count);
    }
    count++;
  }
}
