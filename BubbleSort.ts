//In this code I have pass array to function and then apply a bubble sort

var arr:number[] = [];
var i = 0, j = 0, temp = 0;

var bubbleSort: (newData:Array<number>) => Array<number>  = function (newData:Array<number>) {
    arr = newData;
    for(i = 0; i < arr.length; ++i) {
    for(j = i+1; j < arr.length; j++) {
        if(arr[i] < arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

return arr;
}

console.log(bubbleSort([1,2,3,4,5,6,7,8,9]));
