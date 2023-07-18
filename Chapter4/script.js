// add optional step value to RANGE function
let range = function(start, end){
    let counter = end - start;
    let outputArray = [];
    for(i = 0; i < counter + 1; i++ ){
        let currentNumber = start + i;
        outputArray.push(currentNumber);
    }
    return outputArray;
}

console.log(range(1, 10));

let sum = function(array){
    let numberStorage = 0;
    for(let element of array){
        numberStorage = numberStorage + element;
    }
    return(numberStorage);
}

console.log(sum(range(1,10)));