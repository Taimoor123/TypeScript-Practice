//In this case I enter 12345 it will do 1+2+3+4+5=15

var sum:number = 0;
var currentNum:number = 0;
var i:number = 0;


var addDigit: (newData: number) => number = function (newData:number):number {
    i = newData;
    while(i != 0) {
        currentNum = i % 10;  
        sum = sum + currentNum;
        i = i / 10;
        i = Math.floor(i);
    }
  return sum;
}

console.log(addDigit(12345));
